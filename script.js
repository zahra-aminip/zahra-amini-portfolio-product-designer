const header = document.querySelector('.site-header');
const btn = document.querySelector('.menu-btn');

if (btn) {
    btn.addEventListener('click', () => {
        header.classList.toggle('open');
    });
}


const bar = document.querySelector('.progress');

window.addEventListener('scroll', () => {

    if (bar) {
        const h = document.documentElement.scrollHeight - innerHeight;
        bar.style.width = (h ? scrollY / h * 100 : 0) + '%';
    }

});


document.querySelectorAll('nav a').forEach(a => {

    a.addEventListener('click', () => {

        if (header) {
            header.classList.remove('open');
        }

    });

});



/* Image Preview */

const sampleImages = document.querySelectorAll(".sample-image");
const imagePreview = document.querySelector("#imagePreview");
const previewImage = document.querySelector("#previewImage");
const closeButton = document.querySelector("#imagePreviewClose");

sampleImages.forEach((image) => {

    image.addEventListener("click", () => {

        previewImage.src = image.src;
        previewImage.alt = image.alt;

        imagePreview.classList.add("is-visible");

    });

});

closeButton.addEventListener("click", () => {
    imagePreview.classList.remove("is-visible");
});

imagePreview.addEventListener("click", (event) => {

    if (event.target === imagePreview) {
        imagePreview.classList.remove("is-visible");
    }

});