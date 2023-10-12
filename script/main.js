// document.addEventListener("DOMContentLoaded", function () {
//     // hamburger function
//     // const openHamburger = document.querySelector(".menu-icon");
//     // openHamburger.addEventListener("click", (event) => {
//     //     const menu = document.querySelector("div.menu");
//     //     menu.style.height = "100%";
//     // })
//     // const closeHamburger = document.querySelector(".close-icon");
//     // closeHamburger.addEventListener("click", (event) => {
//     //     const menu = document.querySelector("div.menu");
//     //     menu.style.height = "0%";
//     // })

// });


document.addEventListener("DOMContentLoaded", function(){
    function showMenu(){
        const openHamburger = document.querySelector("div.menu");
        openHamburger.style.height = "100%";
    }

    function closeMenu(){
        const closeHamburger = document.querySelector("div.menu");
        closeHamburger.style.height = "0%";
        addClickToMenuItems()
    }

    function addClickToMenuItems(){
        const menuItems = document.querySelectorAll("div.menu nav ul>li a");
        menuItems.forEach((menuItem) => menuItem.addEventListener("click", closeMenu))

    }
    
    document.querySelector(".menu-icon").addEventListener("click", showMenu);
    document.querySelector(".close-icon").addEventListener("click", closeMenu);
    addClickToMenuItems()
})
