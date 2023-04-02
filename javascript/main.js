function openCurtain() {
    document.getElementById("curtain").style.width = "25%";
  }
  
function closeCurtain() {
    document.getElementById("curtain").style.width = "0%";
  }

var nameError = document.getElementById("name-error");
var emailError = document.getElementById("email-error");
var messError = document.getElementById("mess-error");

function validateName() {
  var name = document.getElementById('name').value;

  if (name.length == 0){
    nameError.innerHTML = "Name is required";
    return false;
  }
  nameError.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
  return true;
}
function validateEmail() {
  var email = document.getElementById('email').value;

  if (email.length == 0){
    emailError.innerHTML = "Email is required";
    return false;
  }
  if (!email.match(/\S+@\S+\.\S+/)) {
    emailError.innerHTML = "Email is Invalid";
    return false;
  }
  emailError.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
  return true;
}
function validateMess() {
  var mess = document.getElementById('mess').value;
  var required = 20;
  var left = required - mess.length;

  if (left > 0){
    messError.innerHTML = left + ' more characters required';
    return false;
  }
  messError.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
  return true;
}

  function sendMess () {

  let nameBox = document.getElementById("name").value;
  let emailBox = document.getElementById("email").value;
  let msgBox = document.getElementById("mess").value;

  let MessInfo = {
    Name: nameBox,
    Email: emailBox,
    Message: msgBox
};
  if(!validateName() || !validateEmail() || !validateMess()) {
    alert('Please Enter the required information')
  }
  else {
    alert('You have successfully Submit your message')
    localStorage.setItem(nameBox, JSON.stringify(MessInfo))

  }




}



window.onload = function ()
{
    document.getElementById(`msg`).onsubmit = sendMess; //trigger the onsubmit event
}
