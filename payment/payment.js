let cardNo  = document.getElementById("cardNo");
let expMonth = document.getElementById("expMonth");
let expYear = document.getElementById("expYear");
let cvv = document.getElementById("CVV");
let submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", ()=>{
    let CardNo = cardNo.value;
    let ExpMonth = expMonth.value;
    let ExpYear = expYear.value;
    let CVV = cvv.value;

    if(CardNo == "" && ExpMonth == "" && ExpYear == "" && CVV == ""){
        alert("Please fill the form");
    }else if(CardNo.length > 16 || CardNo.length < 16){
        alert("Invalid Card Number");
    }else if(ExpMonth == ""){
        alert("Invalid Month");
    }else if(ExpYear == ""){
        alert("Invalid Year");
    }else if(CVV == ""){
        alert("Invalid CVV");
    }else{
        alert("Payment Sucessfull");
        window.location.href = "/index.html";
    }
})   


