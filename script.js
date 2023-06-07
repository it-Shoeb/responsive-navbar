const menuBtn = document.getElementById('menu-icon');

menuBtn.addEventListener('click', ToggleNabbar);

function ToggleNabbar() {
    const navabar = document.querySelector('.navbar');
    menuBtn.classList.toggle('bx-x')
    navabar.classList.toggle('open')
    console.log("first")
}
