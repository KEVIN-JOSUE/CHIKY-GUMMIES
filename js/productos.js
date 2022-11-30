const stockProductos = [
    {
        id: 1,
        nombre: "gomitas",
        precio: 58.00,
        img: "./assets/productos.png",
        cantidad:1
    },
    {
        id: 2,
        nombre: "rgewrgerwh",
        precio: 60.00,
        img: "./assets/prod2.11s.png",
        cantidad:1
    },
    {
        id: 3,
        nombre: "gomiwegew",
        precio: 50.00,
        img: "./assets/prod3.1.png",
        cantidad:1
    },
    {
        id: 4,
        nombre: "wegwegweg",
        precio: 100.00,
        img: "./assets/prod4.1.png",
        cantidad:1
    },
    {
        id: 5,
        nombre: "ewwetwe",
        precio: 120.00,
        img: "./assets/productos.png",
        cantidad:1
    },
    {
        id: 6,
        nombre: "qwrqsadsx",
        precio: 70.00,
        img: "./assets/productos.png",
        cantidad:1
    },
]


let carrito= [];

let totalElement=document.querySelector('.cart-total-price');
let container=document.querySelector('.container-1');
let togle=document.querySelector('#togle');
let contenedor=document.querySelector('.shop-items');





let mostrarCarrito =()=>{
    let modalBody=document.querySelector('.cart-items')
    modalBody.innerHTML=''
    carrito.forEach((prod)=>{
        let{id,nombre,precio,img,cantidad}=prod
        modalBody.innerHTML +=`
        <div class="cart-row">
                    <div class="cart-item cart-column">
                        <img class="cart-item-image" src="${img}" width="100" height="100">
                        <span class="cart-item-title">${nombre}</span>
                    </div>
                    <span class="cart-price cart-column">s./ ${precio}.00</span>
                    <div class="cart-quantity cart-column">
                        <input class="cart-quantity-input" min="1" type="number" value="${cantidad}">
                        <button class="btn btn-danger" type="button" onclick="eliminarProducto(${id})">REMOVE</button>
                    </div>
                </div>
         
        
        `
        updateNumberOfItems()
        getTotal()
        

    })
}

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
        <button class="shop-item-button" onclick="agregarProducto(${id})">ADD CART</button>
        <button class="shop-item-button info">INFO</button>
    </div>
</div>
    `
})








function agregarProducto(id){
    let item=stockProductos.find((prod)=>prod.id === id)
 
    let actualProduct=item
 
    if (carrito.includes(actualProduct)) {
     actualProduct.cantidad++;
     
    } else {
     carrito.push(actualProduct)
    }
    updateNumberOfItems()
    mostrarCarrito()
    
        
    
 }
 function getTotal(){
    let sumaTotal
    let total= carrito.reduce((sum,item)=>{
        sumaTotal=sum +item.cantidad*item.precio
        return sumaTotal
    },0);
    totalElement.innerText=`s/.${total}.00`
   
}

 function updateNumberOfItems(){
    let inputNumber=document.querySelectorAll('.cart-quantity-input');
    inputNumber=[...inputNumber]
   inputNumber.forEach(item=>{
    item.addEventListener('click',event=>{
        let actual=event.target.parentElement.parentElement.childNodes[1].innerText
        let actualCantidad=parseInt(event.target.value);
        console.log(actualCantidad)
        let actual2=carrito.find(item=>item.nombre === actual)
        console.log(actual2)

        actual2.cantidad=actualCantidad

        getTotal()
    })
   })

       

}




function eliminarProducto(id){
    const juegoId=id
    carrito=carrito.filter((juego)=>juego.id !== juegoId)
    mostrarCarrito()
    getTotal();
    
    }





let button= document.querySelector('.info') 
button.addEventListener('click',()=>{
    location.href="infoproduct.html"
}) 


togle.onclick=function(){
    container.classList.toggle('active');
}


