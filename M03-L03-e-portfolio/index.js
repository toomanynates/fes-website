function openMenu() {
  document.body.classList += " menu--open"
}

function closeMenu() {
  document.body.classList.remove('menu--open')
}

// open a new page according to the URL specified in the argument
function openPage(url) {
  window.open(url, "_blank");
}