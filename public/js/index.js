const submitBtn = document.querySelector('input[type=submit]');
const clearBtn = document.querySelector('input[type=button]');
let log = document.querySelector('input[type=text]');
let pas = document.querySelector('input[type=password]');

submitBtn.addEventListener('click', handleSubmit);
function handleSubmit() {
  console.log('log', log.value);
  console.log('pas', pas.value);
  console.log('send')
}

// function actionForm() {
//   const xhr = new XMLHttpRequest();

//   xhr.open('POST', '/form-login');
//   const userData = {
//     username: log.value,
//     password: log.value
//   };

//   xhr.setRequestHeader('Content-Type', 'application/json');
//   xhr.send(JSON.stringify(userData));
//   xhr.onerror = function() {console.log('server error')};

// }

clearBtn.addEventListener('click', handleClearValue);
function handleClearValue() {
  log.value = '';
  pas.value = '';
}