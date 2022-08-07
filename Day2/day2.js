document.addEventListener("DOMContentLoaded", function(event) { 
    let isMenuOpen = false;  
    const menu = document.querySelector(".menu")

    menu.addEventListener("click", ()=> {
        isMenuOpen = !isMenuOpen;

        if (isMenuOpen) {
            menu.classList.add("open");
        } else {
            menu.classList.remove("open");
        }
    })
})