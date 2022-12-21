const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navBarLinks = document.getElementsByClassName("navbar")[0];
const search = document.getElementById("search");
const searchInput = document.getElementById("search-input");
const line = document.getElementById("line");
const heart_icon = document.getElementById("heart_icon");
const logo = document.getElementById("logo");
const navbar = document.getElementById("navbar");
const call = document.getElementById("call");
const search_active = document.getElementById("search-active");
const header = document.getElementById("header");
const search_icon_active=document.getElementById("search_icon-active");



toggleButton.addEventListener("click", () => {
  navBarLinks.classList.toggle("active");
});

function toggleNav(x) {
  x.classList.toggle("change");
}

search.addEventListener("click", () => {
  searchInput.classList.toggle("active1");
  line.style.display = "none";
  heart_icon.style.display = "none";
  logo.style.display = "none";
  navbar.style.display = "none";
  navbar.style.display = "none";
  call.style.display = "none";
  search_active.style.display="block";
  header.style.backgroundColor="white";
  search.style.display="none";
  search_icon_active.style.display="block";

});
