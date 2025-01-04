const burgerIcons = document.getElementById('burgerIcons')
const openIcon = document.getElementById('openIcon')
const closeIcon = document.getElementById('closeIcon')
const menuList = document.getElementById('menuList')

burgerIcons.addEventListener('click',() => {
    menuList.classList.toggle('show-menu')
    openIcon.classList.toggle('hide')
    closeIcon.classList.toggle('hide')
})


// const destinationsSwiper = new Swiper('.swiper-destinations', {
//     loop: true,
//     navigation: {
//         nextEl: '.swiper-destinations .btn-swiper-right',
//         prevEl: '.swiper-destinations .btn-swiper-left',
//     },
//     autoplay: {
//         delay: 3000,
//     },
// });

// Slider

const destinations = document.querySelector(".destinations__content")
const destinationsFirstImg = destinations.querySelectorAll("img")[0];
const destinationsBtn = document.querySelectorAll(".destinations .section__shev")

console.log(destinationsFirstImg)


destinationsBtn.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = destinationsFirstImg.clientWidth + 35
        if(icon.id  === "destinations__left" ){// тут було ==
            destinations.scrollLeft -= firstImgWidth
        }else{
            destinations.scrollLeft += firstImgWidth
        }

    })
});