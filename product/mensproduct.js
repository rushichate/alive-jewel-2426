


let container=document.getElementById("product-container")
let calvinbtn=document.getElementById("calvin")
let dieselbtn=document.getElementById("diesel")
let turtlebtn=document.getElementById("turtle")
let raymondbtn=document.getElementById("raymond")
let adidasbtn=document.getElementById("adidas")

calvinbtn.addEventListener("click",()=>{
    let filtered=fetcheddata.filter((element)=>{
      if(element.brandName==="Calvin Klein"){
        return true
      }else{
        return false;
      }
    })
    displayproducts(filtered)
   })
   dieselbtn.addEventListener("click",()=>{
      let dieselfilter=fetcheddata.filter((element)=>{
        if(element.brandName==="Diesel"){
          return true
        }else{
          return false;
        }
      })
      displayproducts(dieselfilter)
     })
     turtlebtn.addEventListener("click",()=>{
      let turtlefilter=fetcheddata.filter((element)=>{
        if(element.brandName==="Turtle"){
          return true
        }else{
          return false;
        }
      })
      displayproducts(turtlefilter)
     })
     raymondbtn.addEventListener("click",()=>{
      let raymondfilter=fetcheddata.filter((element)=>{
        if(element.brandName==="Raymond"){
          return true
        }else{
          return false;
        }
      })
      displayproducts(raymondfilter)
     })
     adidasbtn.addEventListener("click",()=>{
      let adidasfilter=fetcheddata.filter((element)=>{
        if(element.brandName==="Adidas"){
          return true
        }else{
          return false;
        }
      })
      displayproducts(adidasfilter)
     })



fetch(`http://localhost:3000/men`)
.then((responseobj)=>{
    return responseobj.json();
})
.then((actualdata)=>{
    console.log(actualdata)
    fetcheddata=actualdata
    displayproducts(actualdata)
})
.catch((error)=>{
    console.log(error)
})
function displayproducts(data){
    container.innerHTML=null
    data.forEach(element => {
        let card=document.createElement("div")
    let image=document.createElement("img")
    image.setAttribute("src",element.image)
    // let name=document.createElement("h2")
    // name.innerText=element.name;
    let price=document.createElement("h3")
    price.innerText= "₹"+element.price;
    let offer=document.createElement("p")
    offer.innerText = "30-60% OFF";
    let brandname=document.createElement("h4")
    brandname.innerText=element.brandName
    let desc=document.createElement("p")
    desc.innerText=element.desc;
    let cartbtn=document.createElement("button")
    cartbtn.innerText="Add To Cart"
    cartbtn.addEventListener("click",()=>{

        let cartdata=JSON.parse(localStorage.getItem("cart")) || [];
        let temp=[]
 
        let alreadypresent=false;

        for(let i=0;i<cartdata.length;i++){
          if(cartdata[i][0].id===element.id){
            alreadypresent=true;
          }
        }
        if(alreadypresent===true){
          alert("Item already in cart ")
        }else{
          temp.push(element);
          temp.push(1)
          
          cartdata.push(temp)
        localStorage.setItem("cart",JSON.stringify(cartdata));
        alert("item successfully added")
        }
        
        })

        card.append(image,brandname,desc,price,offer,cartbtn)
        container.append(card);
    });
}

