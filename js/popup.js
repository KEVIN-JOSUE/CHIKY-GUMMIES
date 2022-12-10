var bntAbrirPopup = document.getElementById('btn-abrir-popup'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    bntCerrarPopup = document.getElementById('btn-cerrar-popup');


bntAbrirPopup.addEventListener('click',function(){
    overlay.classList.add('active');
} );

bntCerrarPopup.addEventListener('click',function(){
    overlay.classList.remove('active');
} ) ;




var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        600: {
            slidesPerView: 3,
        }
    }
});




// var modalAbrir= document.querySelector('#verProductoModal'),
// overlay1 = document.querySelector('.overlay1'),
// popup = document.querySelector('.popup1'),
// bntCerrarPopup1 = document.querySelector('.btn-cerrar-popup1');


// modalAbrir.addEventListener('click',function(){
//     overlay1.classList.add('active');
// } );

// bntCerrarPopup1.addEventListener('click',function(){
//     overlay1.classList.remove('active');
// } ) ;