const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
      container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
      container.classList.remove('active');
});


function validate(){
      var password = document.getElementById("pass");
      var length = document.getElementById("length");

      if(password.value.length >= 8){
            alert("Login Succesfull");
            window.location.replace("home.html")
            return false;
      }
      else{
            alert("Login Failed")
      }
}