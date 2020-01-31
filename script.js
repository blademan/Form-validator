const form = document.querySelector('#form');
const userName = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');

//Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}
//Show success
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success'
}

//Check email is valid
function checkEmail(input) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
}

//Check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }


  });
}
//Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} must be at least ${min} characters`);
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} must be les than ${max}`);
  } else {
    showSuccess(input);
  }
}
// Check Password match
function checkPaswordMatch(input1, input2) {
  if(input1.value !== input2.value){
    showError(input2, 'Password do not match')
  }
}
//Get fieldname
function getFieldName(input) {
  return input.id.toUpperCase().slice(0, 1) + input.id.slice(1)
}

//Event Listeners
form.addEventListener('submit', function (e) {
  e.preventDefault();

  checkRequired([userName, email, password, password2]);
  checkLength(userName, 3, 15);
  checkLength(password, 6, 20);
  checkEmail(email);
  checkPaswordMatch(password, password2);

})