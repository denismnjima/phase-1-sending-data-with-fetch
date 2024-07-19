// Add your code here
function submitData(name, email) {
    const userData = {
      name: name,
      email: email
    };
  
    return fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const body = document.body;
      const p = document.createElement('p');
      p.textContent = data.id;
      body.appendChild(p);
    })
    .catch(error => {
      const body = document.body;
      const p = document.createElement('p');
      p.textContent = error.message;
      body.appendChild(p);
    });
  }
  
  module.exports = submitData;
  