const mobile_view = document.querySelector(".menu");
const nav_header = document.querySelector(".header");
const toggleNavbar = () => {
    nav_header.classList.toggle("active")
}

mobile_view.addEventListener("click", () => toggleNavbar())