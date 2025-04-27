document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    let fullName = document.getElementById('registerName').value.trim();
    let email = document.getElementById('registerEmail').value.trim();
    let password = document.getElementById('registerPassword').value.trim();
  
    let users = JSON.parse(localStorage.getItem('users')) || [];
  
    let emailExists = users.some(user => user.email === email);
  
    if (emailExists) {
      alert("Email already exists!");
    } else {
      users.push({ fullName, email, password });
      localStorage.setItem('users', JSON.stringify(users));
      alert("Registration Successful!");
      window.location.href = "login.html";
    }
  });