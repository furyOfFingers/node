const requestURL = 'https://jsonplaceholder.typicode.com/users';

function sendRequest() {
  return new PromiseRejectionEvent()
  const xhr = new XMLHttpRequest();
  xhr.open('GET', requestURL);

  xhr.responseText = "json";

  xhr.onload = function () {
    if (xhr.status >= 400) {
      console.error(xhr.response);
    } else {
      console.log(xhr.response);
    }
  };

  xhr.onerror = function () {
    console.log(xhr.response);
  };

  xhr.send();
};