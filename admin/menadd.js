
let url = "https://test1-h9kd.onrender.com";
// {
//     "image": "https://rukminim1.flixcart.com/image/612/612/xif0q/shirt/k/3/x/xl-printed-shirt-for-men-foxter-original-imagktzmkg4wqwrv.jpeg?q=70",
//     "name": "Foxter",
//     "brandName": "Adidas",
//     "desc": "Men Regular Fit Printed Casual Shirt",
//     "price": 329,
//     "id": "1"
//   },

 let addButton = document.getElementById("add");

  addButton.addEventListener("click", () =>{
    let pName = document.getElementById("name");
let pBrand= document.getElementById("brand");
let pURL = document.getElementById("urlLink");
let pPrice = document.getElementById("price");
let pDesc = document.getElementById("desc");
// let pId = document.getElementById("ides");

let userObj = {
       image: pURL.value,
       name: pName.value,
       brandName: pBrand.value,
       desc: pDesc.value,
       price: pPrice.value
    //    id: pId.value
}

fetch(`${url}/men`, {
    method: 'POST',
    body:JSON.stringify(userObj),
    headers: {
    'Content-type' : 'application/json'
    }
})
  })


