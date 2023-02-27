let cartTotal=document.getElementById('cartTotal')
let cartData=JSON.parse(localStorage.getItem("cart"))||[];
let container=document.getElementById('product')
let gst=document.getElementById("gst");
let sCharge=document.getElementById("sCharge")
 let totalamount=document.getElementById("totalAmount")
 let save=document.getElementById("save100")
 let grandTotal;
//    save100.addEventListener('click',function(){
//        grandTotal-100;
//     })
// gst.addEventListener("click",function(){
//     alert('hello')
// })
 display(cartData)

function display(data){
    container.innerHTML=null
//   console.log(data)
   let sum=0;
   data.forEach(function(el){
      sum+=el.price;

   });
   let gstText=18*(sum)/100;
   gst.innerText=`₹${gstText}`
   sCharge.textContent=`₹${100}`
    
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
    // let addBtn = document.createElement('button');
    // let minBtn = document.createElement('button');
    // let quant=document.createElement("p")
    // quant.textContent=`quantity =`
    // addBtn.textContent = '+';
    // minBtn.textContent = '-'
    let wishlist=document.createElement('td');
    wishlist.textContent="MOVE TO WISHLIST"
    wishlist.style.color="orange"
    // save.addEventListener('click',function(){
    //     alert("hello"
    //     )
    // })
    del.setAttribute('id',"delbtn")
//     del.setAttribute('type','button')

    del.addEventListener('click',function(){
        
         
           data.splice(i,1);
           localStorage.setItem("cart",JSON.stringify(data));
           display(data);
         alert('are you sure you want to remove product from the cart')   
         
    })
    let grandTotal=sum+gstText+100
   //total saved in key total
    localStorage.setItem('total',grandTotal)
    totalamount.textContent=`₹${grandTotal}`
    imgdiv.append(image)
    imgdiv.setAttribute("id","imgdiv")
    card.append(price,offer,brandname,desc,del,wishlist)
    container.append(imgdiv,card)
    
    })
}

//payment page
//bottom placeholder btn
let placeOrder=document.getElementById("placeOrder")
placeOrder.addEventListener('click',function(e){
    e.preventDefault();
     Send(cartData);
    //  placeOrder.addEventListener('click',function(e){
    //     e.preventDefault();
    setTimeout(() => {
        window.location.href = "/payment/PaymentOption.html";
    }, 2000);
     
    //  })
})
 function Send(data){
    data.forEach((element) =>{
        fetch("https://test1-h9kd.onrender.com/adminData",{
            method:"POST",
            body:JSON.stringify(element),
            headers:{"Content-type":"application/json"}
         })
     })
 }

// let placeOrder2=document.querySelector(".placeOrder")
// placeOrder2.addEventListener('click',function(e){
//     e.preventDefault()
//      cartData.forEach((element) =>{
//         fetch("http://localhost:3000/adminData",{
//             method:"POST",
//             body:JSON.stringify(element),
//             headers:{"Content-type":"application/json"}
//          })
//      })
//     //  window.location.assign("http://127.0.0.1:5501/payment/payment.html")
// })






