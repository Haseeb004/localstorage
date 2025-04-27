document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    let email = document.getElementById('loginEmail').value.trim();
    let password = document.getElementById('loginPassword').value.trim();
    
    let users = JSON.parse(localStorage.getItem('users')) || [];
  
    let foundUser = users.find(user => user.email === email && user.password === password);
  
    if (foundUser) {
      localStorage.setItem('loggedInUser', JSON.stringify(foundUser));
      window.location.href = "home.html";
    } else {
      alert("Invalid email or password!");
    }
  });