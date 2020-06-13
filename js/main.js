//Toogle button for Shop page //

$('#open-close-toggle').on("click", function () {
    var $arrows = $(this).find("img");
    $('#toggle-section').slideToggle(function () {
        $arrows.toggle();
    });
});

//Burger Menu
const burgerBtn = document.querySelector("#burger-btn");
const nav = document.querySelector("nav");
const burger = document.querySelector(".burger");
const newsletter = document.querySelector(".newsletter-btn");
const search = document.querySelector(".search-icon");

function openMenu() {

    nav.classList.toggle("nav-mobile");
    nav.classList.toggle("nav");
    burger.classList.toggle("active-burger");
    newsletter.classList.toggle("newsletter-btn-mobile");
    search.classList.toggle("search-icon-mobile");

}

burgerBtn.addEventListener('click', openMenu);

//Login Pop Up
const loginBtn = document.querySelector(".login-btn");
const loginContainer = document.querySelector(".login-popup");
const close = document.querySelector(".x");

function showPopup() {
    loginContainer.style.display = "flex";
}

loginBtn.addEventListener('click', showPopup);

function closePopup() {
    loginContainer.style.display = "none";
}

close.addEventListener('click', closePopup);
