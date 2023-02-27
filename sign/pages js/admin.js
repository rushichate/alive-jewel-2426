let email = document.getElementById("email");
let password = document.getElementById("password")
let Login_Btn = document.getElementById("login-btn")
let loginSucessfully = document.getElementById("login-sucessfully");
let clickHereMassageBtn = document.getElementById("show-here");
let card = document.getElementById("card");
let admin = document.getElementById("Username");

Login_Btn.addEventListener("click", ()=>{
    let Email = email.value;
    let Password = password.value;
    let Admin = admin.value;

    let obj = {
        email: Email,
        password: Password,
        admin: Admin
    }

    if(obj.email == "" && obj.password == "" && obj.admin == ""){
        alert("wrong credentials");
    }else if(obj.admin == ""){
        alert("Invalid Username");
    }
    else if(obj.email==""){
        alert("Invalid Email");
    }
    else if(obj.password==""){
        alert("Invalid Password");
    }
    else{
        login(obj);
    }
})

function login(obj){
    console.log(obj);
    fetch(`https://test1-h9kd.onrender.com/admins`)
    .then((res)=> res.json())
    .then((data)=>{
        data.forEach((e) => {
            if(e.email == obj.email && e.password == obj.password && e.username == obj.admin){
                alert("login Sucessfully");
                Window.open(location.href = "/admin/admin.html");
            }else{
                count++;
            }
        });
        if(count==data.length){
            alert("wrong credentials")
        }
    })
    .catch((error)=>{
        console.log(error);
    })
}
