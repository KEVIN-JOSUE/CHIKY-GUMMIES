const stockProductos = [
    {
        id: 1,
        nombre: "gomitas",
        precio: 58.00,
        img: "./assets/productos.png",
    },
    {
        id: 2,
        nombre: "gomitas",
        precio: 60.00,
        img: "./assets/productos.png",
    },
    {
        id: 3,
        nombre: "gomitas",
        precio: 50.00,
        img: "./assets/productos.png",
    },
    {
        id: 4,
        nombre: "gomitas",
        precio: 100.00,
        img: "./assets/productos.png",
    },
    {
        id: 5,
        nombre: "gomitas",
        precio: 120.00,
        img: "./assets/productos.png",
    },
    {
        id: 6,
        nombre: "gomitas",
        precio: 70.00,
        img: "./assets/productos.png",
    },
]
let container=document.querySelector('.container-1');
let togle=document.querySelector('#togle');
let contenedor=document.querySelector('.shop-items');





stockProductos.forEach((prod)=>{
    const{nombre,precio,img}=prod
    contenedor.innerHTML +=`
    <div class="shop-item">
    <div class="shop-item-content-img">
        <img src="${img}" class="shop-item-img">
    </div>
    <span class="shop-item-title">${nombre}</span>
    <span class="shop-item-price">s/ ${precio}.00</span>
    <div class="shop-item-details">
        <button class="shop-item-button HOLA">ADD CART</button>
        <button class="shop-item-button">INFO</button>
    </div>
</div>
    `
})



let button = document.querySelector('.HOLA')

button.addEventListener('click', () =>{
    location.href="quienessomos.html"
})

togle.onclick=function(){
    container.classList.toggle('active');
}