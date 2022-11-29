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
        img: "./assets/prod2.11s.png",
    },
    {
        id: 3,
        nombre: "gomitas",
        precio: 50.00,
        img: "./assets/prod3.1.png",
    },
    {
        id: 4,
        nombre: "gomitas",
        precio: 100.00,
        img: "./assets/prod4.1.png",
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
    const{id,nombre,precio,img}=prod
    contenedor.innerHTML +=`
    <div class="shop-item">
    <div class="shop-item-content-img">
        <img src="${img}" class="shop-item-img">
    </div>
    <span class="shop-item-title">${nombre}</span>
    <span class="shop-item-price">s/ ${precio}.00</span>
    <div class="shop-item-details">
        <button class="shop-item-button">ADD CART</button>
        <button class="shop-item-button info">INFO</button>
    </div>
</div>
    `
})



togle.onclick=function(){
    container.classList.toggle('active');
}

let button= document.querySelector('.info') 
button.addEventListener('click',()=>{
    location.href="infoproduct.html"
}) 