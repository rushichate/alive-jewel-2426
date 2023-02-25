let email = document.getElementById("email");
let password = document.getElementById("password")
let Login_Btn = document.getElementById("login-btn")
let loginSucessfully = document.getElementById("login-sucessfully");
let clickHereMassageBtn = document.getElementById("show-here");
let card = document.getElementById("card");


Login_Btn.addEventListener("click", ()=>{
    let Email = email.value;
    let Password = password.value;

    let obj = {
        email: Email,
        password: Password
    }

    if(obj.email == "" && obj.password == ""){
        alert("wrong credentials");
    }else if(obj.email==""){
        alert("Invalid Email");
    }else if(obj.password == ""){
        alert("Invalid password");
    }else{
        login(obj);
    }
    
})

function login(obj){
    fetch(`http://localhost:3000/users`)
    .then((res)=> res.json())
    .then((data)=>{
        let count = 0;
        data.forEach((e) => {
            if(e.email == obj.email && e.password == obj.password){
                alert("login SucessfSully");
                display();
            }else{
                count++;
            }
        });
        if(count == data.length){
            alert("wrong credentials");
        }
    })
    .catch((error)=>{
        console.log(error);
    })
}

function display(){
    window.location.href = "/index.html";
}

