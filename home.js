let loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

if (!loggedInUser) {
  window.location.href = "login.html";
}

document.getElementById('userName').innerText = loggedInUser.fullName;

document.getElementById('logoutBtn').addEventListener('click', function () {
  localStorage.removeItem('loggedInUser');
  window.location.href = "login.html";
});