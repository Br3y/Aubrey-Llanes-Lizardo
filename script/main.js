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
