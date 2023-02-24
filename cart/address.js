let cartTotal=document.getElementById('cartTotal')
let cartData=JSON.parse(localStorage.getItem("cart"))||[];
let container=document.getElementById('product')
 display(cartData)

function display(data){
    container.innerHTML=null
   let total=data.length;
   let sum=0;
   data.forEach(function(el){
      sum+=el.price
   });
   
    
    data.forEach((element,i) => {
        // console.log(e)
        let imgdiv=document.createElement("div");
    let card=document.createElement("div")
    card.setAttribute("class","card")
    let image=document.createElement("img")
    image.setAttribute("src",element.image)
    // let name=document.createElement("h2")
    // name.innerText=element.name;
    let price=document.createElement("h3")
    price.textContent= "₹"+element.price;
    cartTotal.textContent="₹"+sum;
    let offer=document.createElement("p")
    offer.innerText = "30-60% OFF";
    let brandname=document.createElement("h4")
    brandname.innerText=element.brandName
    let desc=document.createElement("p")
    desc.innerText=element.desc;
    let del=document.createElement("td")
    del.textContent="REMOVE"
    let wishlist=document.createElement('td');
    wishlist.textContent="MOVE TO WISHLIST"
    del.setAttribute('id',"delbtn")
//     del.setAttribute('type','button')
    del.addEventListener('click',function(){
        
         
           data.splice(i,1);
           localStorage.setItem("cart",JSON.stringify(data));
           display(data);
         alert('are you sure you want to remove product from the cart')   
         
    })
              
    imgdiv.append(image)
    imgdiv.setAttribute("id","imgdiv")
    card.append(price,offer,brandname,desc,del,wishlist)
    container.append(imgdiv,card)
    
    })
}

