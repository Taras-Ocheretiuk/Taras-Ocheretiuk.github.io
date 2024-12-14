const burgerIcons = document.getElementById('burgerIcon');
const openIcon = document.getElementById('openIcon');
const closeIcon = document.getElementById('closeIcon');
const menuList = document.getElementById('menuList');

burgerIcons.addEventListener('click',() => {
    menuList.style.left = '32px'
})