const requestUrl = 'https://jsonplaceholder.typicode.com/users';

function sendRequest( method, url, body = null) {
  const headers = {
    'Content-Type': 'application/json'
  }

  return fetch(url, {
    method: method,
    headers: headers,
    body: JSON.stringify(body)
  }).then(response => {
    if (response.ok) {
      return response.json();
    }

    return response.json().then(err => {
      const e = new Error('somethink goes wrong');
      e.data = error;
      throw e;
    })
  })
};

// sendRequest('GET', requestURL)
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

const body = {
  name: 'boy',
  age: 22
}

sendRequest('POST', requestURL, body)
  .then(data => console.log(data))
  .catch(err => console.log(err))

