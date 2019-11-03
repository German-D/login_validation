function testInputs(e){

  e.preventDefault();

  var login = document.getElementById('login');

  var message = document.getElementById('message');

  var loginClasses = login.classList;

  loginValue = login.value;

  console.log(/^[a-zA-Z]+$/.test(loginValue))

  if (loginValue.length < 6 || loginValue.length > 12){
    loginClasses.add("red");
    message.innerHTML = 'Ошибка длины логина';
  } else if (!(/^[a-zA-Z]+$/.test(loginValue))) {
    loginClasses.add("red");
    message.innerHTML = 'Логин не удовлетворяет требованиям. Логин - от 6 до 12 символов, только английские, с заглавной буквы.';
  } else {
    loginClasses.remove("red");
    message.innerHTML = '';
  }


  var password = document.getElementById('password');

  var passwordClasses = password.classList;

  passwordValue = password.value;

  if (passwordValue.length < 8 || passwordValue.length > 15){
    console.log("Ошибка длины пароля")
  }

  if (password.value === ''){
    passwordClasses.add("red");
  } else {
    passwordClasses.remove("red");
  }

}


function firstLetterToUpper(){
  var login = document.getElementById('login');
  var str = login.value;
  var firstLetter = str.charAt(0);
  firstLetter = firstLetter.toUpperCase();
  var strPart = str.substr(1);
  var newString = firstLetter.concat(strPart);

  login.value = newString;
}

var button = document.getElementById('button');

button.addEventListener("click", testInputs, false);

var login = document.getElementById('login');
login.addEventListener("keyup", firstLetterToUpper, false);

