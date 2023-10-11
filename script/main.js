// hamburger function
const openHamburger = document.querySelector(".menu-icon");
openHamburger.addEventListener("click", (event) => {
    const menu = document.querySelector("div.menu");
    menu.style.height = "100%";
})
const closeHamburger = document.querySelector(".close-icon");
closeHamburger.addEventListener("click", (event) => {
    const menu = document.querySelector("div.menu");
    menu.style.height = "0%";
})

// function addClickToMenuItems() {
const menuItems = document.querySelectorAll("div.menu nav ul>li");
menuItems.forEach((menuItem) => menuItem.addEventListener("click", ()=>{
    const menu = document.querySelector("div.menu");
    menu.style.height = "0%";
}));

