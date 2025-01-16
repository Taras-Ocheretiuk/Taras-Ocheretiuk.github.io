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
    slidesPerView: 1,
    spaceBetween: 32,
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    // },
    breakpoints: {
        768: {
            slidesPerView: 2.4,
        },
        1152: {
            slidesPerView: 2.8,
        },
        1440: {
            slidesPerView: 3.2,
        },
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
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
        el.className = 'experiences-content-box';

        const img = document.createElement('img');
        img.src = data.reviews[i].avatar_url;
        img.className = 'experiences-content-box-avatar';

        const divT = document.createElement('div');
        divT.textContent = data.reviews[i].review;
        divT.className = 'experiences-content-box-text';

        const divRating = document.createElement('div');
        divRating.textContent = '';
        divRating.className = 'rating-star d-flex';

        for (var j = 0; j < data.reviews[i].rating; j++){
            const img = document.createElement('img');
            img.src = 'img/star.svg';
            img.alt = 'star';
            divRating.appendChild(img);
        }

        const divN = document.createElement('div');
        divN.textContent = data.reviews[i].user_name;
        divN.className = 'experiences-content-box-user_name';

        const divP = document.createElement('div');
        divP.textContent = data.reviews[i].profession;
        divP.className = 'experiences-content-box-profession';

        el.append(img)
        el.append(divT)
        el.append(divRating)
        el.append(divN)
        el.append(divP)

        experiences_content.append(el)
    }
}
