'use strict'
const gallery = document.querySelector('.gallery');
for (let i = 1; i <= 12; i++) {
    const html = ` <figure class="gallery-item">
<img src="./img/gallery/gallery-${i}.jpg" alt="Photo of beautifully arranged food">
</figure>`
    gallery.insertAdjacentHTML('beforeend', html);
}

const navList = document.querySelector('.main-nav-list');
navList.addEventListener('click', (e)=>{
    e.preventDefault();
    if(e.target.classList.contains('main-nav-link')){
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({behavior:'smooth'});
    }
})