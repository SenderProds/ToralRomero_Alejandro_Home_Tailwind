let botonesCarrito = document.querySelectorAll("#btnAdd");
let productosCarrito = 0;

let poppupCarrito = document.getElementById('carrito');
let cantidadProductos = document.getElementById('productos');
poppupCarrito.style.cursor = "pointer";



poppupCarrito.addEventListener("click", (e) => {
    console.log("Carrito");
    location.href = "../html/carrito.html";
    
});

botonesCarrito.forEach((boton) => {
    boton.addEventListener('click', (e) => {
        let unidades = 1;
        if(localStorage.getItem("carrito")){
            unidades = localStorage.getItem("carrito");
            unidades++;
            localStorage.setItem("carrito", unidades);
        }else{

            localStorage.setItem("carrito", unidades)
        }
        
        productosCarrito++;

        if(poppupCarrito.classList.contains('ocultar')){
            poppupCarrito.classList.remove('ocultar');
            poppupCarrito.classList.add('mostrarCarrito');

            cantidadProductos.textContent = productosCarrito;
        }else{
            cantidadProductos.textContent = productosCarrito;

        }

    });


});