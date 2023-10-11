document.addEventListener("DOMContentLoaded", function () {
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
    function closeMenu() {
        const menu = document.querySelector("div.menu");
        menu.style.height = "0%";
    }

    // function to add click event to menu items
    function addClickToMenuItems() {
        const menuItems = document.querySelectorAll("header div.menu nav ul > li a");
        menuItems.forEach((menuItem) => menuItem.addEventListener("click", closeMenu));
    }

    addClickToMenuItems();
});