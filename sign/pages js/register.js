let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let registerBtn = document.getElementById("register");

//Genders
let male = document.getElementById("Male");
let female = document.getElementById("Female");
let other = document.getElementById("other");
//Genders

let register = document.getElementById("register-sucessfully");


registerBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    let FirstName = firstName.value;
    let LastName = lastName.value;
    let Email = email.value;
    let Password = password.value;
    let Gender;
    if(male.checked){
        Gender = male.value;
    }else if(female.checked){
        Gender = female.value;
    }else{
        Gender = other.value;
    }

    let obj = {
        firstName: FirstName,
        lastName: LastName,
        email: Email,
        password: Password,
        gender: Gender
    }
    if(registerUser(obj)){
        Send(obj);
        registerSucessfully();
    }
})

function registerSucessfully(){
    register.innerHTML = "<h3>Registered Sucessfully</h3>"
}

function Send(obj){
    fetch(`http://localhost:3000/users`,{
        method : "POST",
        body : JSON.stringify(obj),
        headers : {
            'Content-type' : 'Application/json'
        }
    })
}

function registerUser(obj){
    if(obj.firstName == ""){
        alert("Invalid FirstName")
        return false;
    }else if(obj.lastName == ""){
        alert("Invalid LastName")
        return false;
    }
    else if(obj.email == ""){
        alert("Invalid Email")
        return false;
    }
    else if(obj.password == ""){
        alert("Invalid PasswordName")
        return false;
    }
    else if(obj.gender == ""){
        alert("Invalid Gender")
        return false;
    }
    else{
        return true;
    }
}

