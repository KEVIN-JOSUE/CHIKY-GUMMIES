window.addEventListener('load' , function () { 
  console.log('el contenido ha cargado');
  
  var imagenes =[]
  
  imagenes[0]='assets/slider3.jpg'
  imagenes[1]='assets/slider2.jpg'
  imagenes[2]='assets/slider1.jpg'
  
  var indiceImagenes=0;
  
  function cambiarImagenes(){
  
      document.PAGINACERTUSGROUP.src=imagenes[indiceImagenes];
  
  if (indiceImagenes < 2) {
      indiceImagenes++; 
      
  }else{
  indiceImagenes = 0;
  }
  
  }
  
  setInterval(cambiarImagenes,1500);
  
  });