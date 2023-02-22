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
    login(obj);
})

function login(obj){
    fetch(`http://localhost:3000/users`)
    .then((res)=> res.json())
    .then((data)=>{
        data.forEach((e) => {
            if(e.email == obj.email && e.password == obj.password){
                alert("login Sucessfully");
                display();
            }
        });
    })
    .catch((error)=>{
        console.log(error);
    })
}

function display(){
    loginSucessfully.style.border = "none";
    loginSucessfully.innerHTML = `<div class="child-1" style="background-color: black; color:white; margin: auto; border-radius: 10px;">
                                    <p>Login Sucessfully</p>
                                  </div>`;
    clickHereMassageBtn.style.border = "none";                              
    clickHereMassageBtn.innerHTML = `<button style="background-color: #ee5456; color:white;"><a href="./register.html" style="text-decoration: none;color: white;">Click here to go Home page</a></button>`  
    card.style="background-color: #e6e7e8"                        
}
