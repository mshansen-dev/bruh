function toggleDropdown() {
    const menu = document.getElementById("dropdownMenu");
    const nav = document.getElementById("mainNav");

    if (window.innerWidth > 600) return;

    menu.classList.toggle("show");

    if (menu.classList.contains("show")) {
        const navHeight = nav.getBoundingClientRect().height;
        menu.style.top = navHeight + "px";
    } else {
        menu.style.top = "";
    }
}

document.addEventListener("click", e => {
    const menu = document.getElementById("dropdownMenu");
    const btn = document.querySelector(".dropdown-toggle");
    if (menu.classList.contains("show") &&
        !menu.contains(e.target) && !btn.contains(e.target)) {
        menu.classList.remove("show");
        menu.style.top = "";
    }
});