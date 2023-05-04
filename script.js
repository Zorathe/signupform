const form = document.querySelector("form");
const email = document.getElementById("user_email");
const password = document.getElementById("user_password");
const confirm_password = document.getElementById("confirm_user_password");
const error = email.nextElementSibling;
const info = password.nextElementSibling;
const mismatch = confirm_password.nextElementSibling;



const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

window.addEventListener("load", () => {
  const isValid = email.value.length === 0 || emailRegExp.test(email.value);
  email.className = isValid ? "valid" : "invalid";
});

email.addEventListener("input", () => {
  const isValid = email.value.length === 0 || emailRegExp.test(email.value);
  
  if (isValid) {
    email.className = "valid";
    error.textContent = "";
    error.className = "error";
   
  } else {
    email.className = "invalid";
  }

});

password.addEventListener("input", () =>{
    const isBig = password.value.length >= 8;
    if(isBig){
        info.textContent = "";
        info.className = "valid";
    }else{
        info.textContent = "*Password must be at least 8 characters long";
        info.className = "info";
        password.className = "invalid";
    }
});

form.addEventListener("submit", (event) => {
   
  event.preventDefault();
  
  const matches = password.value === confirm_password.value;
  const isValid = email.value.length === 0 || emailRegExp.test(email.value);

  if (!isValid) {
    email.className = "invalid";
    error.textContent = "Enter a valid email";
    error.className = "error active";
  } else {
    email.className = "valid";
    error.textContent = "";
    error.className = "error";
  }
  if(!matches){
    mismatch.className = "invalid";
    confirm_password.className = "invalid";
    password.className = "invalid";
    mismatch.textContent = "*Passwords do not match";
    mismatch.className = "mismatch active";
  }else{
    confirm_password.className = "valid";
    password.className = "valid";
    mismatch.textContent = "";
  }
});