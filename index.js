const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const email = document.getElementById("email");

form.addEventListener("submit", (e)=>{
    e.preventDefault()

    checkInputs();
})

function checkInputs(){
    //get values from inputs
    const usernameValue =username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue ===''){
        //add error class
        setErrorFor(username , "Username cannot be blank");
    }else{
        //add success class
        setSuccessFor(username);
    }
    if(emailValue ===''){
        //add error class
        setErrorFor(email , "Username cannot be blank");
    }else{
        //add success class
        setSuccessFor(email);
    }
    if(passwordValue ===''){
        //add error class
        setErrorFor(password , "Password cannot be blank");
    }else{
        //add success class
        setSuccessFor(password);
    }
    if(password2Value ===''){
        //add error class
        setErrorFor(password2 , "Password cannot be blank");
    }else{
        //add success class
        setSuccessFor(password2);
    }
    if(password2 !== password){
        setErrorFor(password2 , "Passwords do not match")
    }
    if(!isEmail(emailValue)){
        setErrorFor(email,"Invalid Email");
    }
}
function setErrorFor(input, message){
    // add an 'error' class to the specified input element
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    //add error message in small
    small.innerText = message;
    formControl.className = "form-control error";
}

function setSuccessFor(input){
    const formControl = input.parentElement;

    formControl.className = "form-control success";
}

function isEmail(email){
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        console.log(yes);
    }

}
