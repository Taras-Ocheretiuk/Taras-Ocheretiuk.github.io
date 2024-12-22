const burgerIcons = document.getElementById('burgerIcons')
const openIcon = document.getElementById('openIcon')
const closeIcon = document.getElementById('closeIcon')
const menuList = document.getElementById('menuList')

burgerIcons.addEventListener('click',() => {
    menuList.classList.toggle('show-menu')
    openIcon.classList.toggle('hide')
    closeIcon.classList.toggle('hide')
})


const destinationsSwiper = new Swiper('.swiper-destinations', {
    loop: true,
    navigation: {
        nextEl: '.swiper-destinations .btn-swiper-right',
        prevEl: '.swiper-destinations .btn-swiper-left',
    },
    autoplay: {
        delay: 3000,
    },
});