'use strict'
const gallery = document.querySelector('.gallery');
for (let i = 1; i <= 12; i++) {
    const html = ` <figure class="gallery-item">
<img src="./img/gallery/gallery-${i}.jpg" alt="Photo of beautifully arranged food">
</figure>`
    gallery.insertAdjacentHTML('afterbegin', html);
}
