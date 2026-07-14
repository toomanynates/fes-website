console.log("JS loaded");

function openMenu() {
    console.log("openMenu() called");
    document.body.classList.add("menu--open");
}

function closeMenu() {
    console.log("closeMenu() called");
    document.body.classList.remove("menu--open");
}