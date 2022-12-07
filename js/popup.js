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
