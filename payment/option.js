
let card = document.getElementById("optionCard");
let upi = document.getElementById("optionUPI");
let Container = document.getElementById("container");

card.addEventListener("click", ()=>{
    window.location.href = "/payment/payment.html";
})

upi.addEventListener("click", ()=>{
    window.location.href = "/payment/upi.html";
})