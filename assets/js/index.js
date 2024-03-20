var menuIcon = document.getElementById("menu-icon");
var toggleMenu = document.getElementById("toggle-menu");

menuIcon.addEventListener('click', function() {
    toggleMenu.classList.toggle('toggle-hide');
    if (toggleMenu.classList.contains('toggle-hide')) {
        menuIcon.innerHTML = `<i class="bx bx-x"></i>` }
        else {
            menuIcon.innerHTML = `<i class="bx bx-menu"></i>`
        }
});