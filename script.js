let  manuBtn = document.getElementById("menu-btn");
let  navbar = document.querySelector(".header .navbar");
let  searchBtn = document.querySelector("#search-btn");
let  searchForm = document.querySelector(".search-form");


manuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
    searchForm.classList.remove("active");   
});


searchBtn.addEventListener("click", () => {
    searchForm.classList.toggle("active");
    navbar.classList.remove("active");
    
});

window.onscroll =()=> {
    navbar.classList.remove("active");
    searchForm.classList.remove("active");
}

