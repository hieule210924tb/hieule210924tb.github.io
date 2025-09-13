var welcome = document.getElementById("welcome");
var btn = document.querySelector(".button");
let getUser = JSON.parse(localStorage.getItem("user"));

welcome.innerHTML = `Xin chào ${getUser.first_name} ${getUser.last_name}`;
const handleLogOut = () => {
  localStorage.removeItem("user");
  window.location.href = "login.html";
};
btn.addEventListener("click", function (e) {
  e.preventDefault();
  handleLogOut();
});
