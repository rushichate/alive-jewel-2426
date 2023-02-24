let cardNo  = document.getElementById("cardNo");
let expMonth = document.getElementById("expMonth");
let expYear = document.getElementById("expYear");
let cvv = document.getElementById("CVV");
let submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    let CardNo = cardNo.value;
    let ExpMonth = expMonth.value;
    let ExpYear = expYear.value;
    let CVV = cvv.value;

    if(CardNo.length > 16 || CardNo.length < 16){
        alert("Invalid Card Number");
    }else if(ExpMonth == ""){
        alert("Wrong Credentials");
    }else if(ExpYear == ""){
        alert("Wrong Credentials");
    }else if(CVV == ""){
        alert("Wrong Credentials");
    }else{
        alert("Payment Sucessfull");
    }
})   
