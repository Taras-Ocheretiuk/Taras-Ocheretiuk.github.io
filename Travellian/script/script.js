const burgerIcons = document.getElementById('burgerIcons')
const openIcon = document.getElementById('openIcon')
const closeIcon = document.getElementById('closeIcon')
const menuList = document.getElementById('menuList')

burgerIcons.addEventListener('click',() => {
    menuList.classList.toggle('show-menu')
    openIcon.classList.toggle('hide')
    closeIcon.classList.toggle('hide')
})


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

const url = 'https://raw.githubusercontent.com/Taras-Ocheretiuk/Taras-Ocheretiuk.github.io/main/Travellian/api.json';

axios.get(url)
    .then(response => {
            populate(response.data);
        })

function populate(data){
    const experiences_content = document.getElementById('experiences_content')


    for (var i = 0; i < data.reviews.length; i++) {
        const el = document.createElement('div')
        el.className = 'experiences-content-box'

        const img = document.createElement('img');
        img.src = data.reviews[i].avatar_url;
        const divT = document.createElement('div');
        divT.textContent =url.reviews[i].review;

        // rating

        const divN = document.createElement('div');
        divN.textContent = data.reviews[i].user_name;
        const divP = document.createElement('div');
        divP.textContent = data.reviews[i].profession;

        el.append(img)
        el.append(divT)
        el.append(divN)
        el.append(divP)

        experiences_content.append(el)

    }

}

// populate(response);