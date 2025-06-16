let dineroTotal = 0;

const productos = [
  { id: 1, nombre: "Mouse", precio: 399.00, imagen: "Statics/images/sugMouse.webp" },
  { id: 2, nombre: "Teclado", precio: 211.00, imagen: "Statics/images/mousepad.jpg" },
  { id: 3, nombre: "Audífonos", precio: 836.00, imagen: "Statics/images/sugAudifonos.webp" },
  { id: 4, nombre: "Sillgamer", precio: 3269.00, imagen: "Statics/images/sugSilla.webp"},
  { id: 5, nombre: "Monitor", precio: 4299.00, imagen: "Statics/images/sugLaptopNormal.webp"},
  { id: 6, nombre: "MousePad", precio: 211.00, imagen: "Statics/images/mousepad.jpg" },
  { id: 7, nombre: "Cargador", precio: 80.00, imagen: "Statics/images/producto1.jpg" },
  { id: 8, nombre: "Luces", precio: 230.00, imagen: "Statics/images/producto1.jpg" },
  { id: 9, nombre: "bosinas", precio: 500.00, imagen: "Statics/images/producto1.jpg" },
  
];

const estante = document.getElementById("estante");
const listaCarrito = document.getElementById("lista-carrito");
const totalElemento = document.getElementById("total");

let total = 0;

productos.forEach(producto=> {
    const div = document.createElement("div");
    div.className="producto";
    div.setAttribute("id", producto.id);
    estante.appendChild(div);
})


function agregarAlCarrito(id){
    const producto= productos.find(p=> p.id ===id);
    const item = document.createElement("li");
    item.textContent = `${producto.nombre} - ${producto.precio.toFixed(2)}`;
    listaCarrito.appendChild(item);
    total += producto.precio;
    totalElemento.textContent=total.toFixed(2);
}

let btn1 = document.getElementById("boton1");
let btn2 = document.getElementById("boton2");
let btn3 = document.getElementById("boton3");
let btn4 = document.getElementById("boton4");
let btn5 = document.getElementById("boton5");
let btn6 = document.getElementById("boton6");
let btn7 = document.getElementById("boton7");

btn1.addEventListener("click",()=>{
    let precioTotal = document.getElementById("total");
    let productoAct = document.createElement("div");
    productoAct.textContent = "- " + productos[1].nombre;
    dineroTotal += productos[1].precio;
    precioTotal.textContent = dineroTotal;
    listaCarrito.appendChild(productoAct);
});

btn2.addEventListener("click",()=>{
    let precioTotal = document.getElementById("total");
    let productoAct = document.createElement("div");
    productoAct.textContent = "- " + productos[2].nombre;
    dineroTotal += productos[2].precio;
    precioTotal.textContent = dineroTotal;
    listaCarrito.appendChild(productoAct);
});

btn3.addEventListener("click",()=>{
    let precioTotal = document.getElementById("total");
    let productoAct = document.createElement("div");
    productoAct.textContent = "- " + productos[7].nombre;
    dineroTotal += productos[7].precio;
    precioTotal.textContent = dineroTotal;
    listaCarrito.appendChild(productoAct);
});

btn4.addEventListener("click",()=>{
    let precioTotal = document.getElementById("total");
    let productoAct = document.createElement("div");
    productoAct.textContent = "- " + productos[0].nombre;
    dineroTotal += productos[0].precio;
    precioTotal.textContent = dineroTotal;
    listaCarrito.appendChild(productoAct);
});

btn5.addEventListener("click",()=>{
    let precioTotal = document.getElementById("total");
    let productoAct = document.createElement("div");
    productoAct.textContent = "- " + productos[5].nombre;
    dineroTotal += productos[5].precio;
    precioTotal.textContent = dineroTotal;
    listaCarrito.appendChild(productoAct);
});

btn6.addEventListener("click",()=>{
    let precioTotal = document.getElementById("total");
    let productoAct = document.createElement("div");
    productoAct.textContent = "- " + productos[5].nombre;
    dineroTotal += productos[5].precio;
    precioTotal.textContent = dineroTotal;
    listaCarrito.appendChild(productoAct);
});

btn7.addEventListener("click",()=>{
    let precioTotal = document.getElementById("total");
    let productoAct = document.createElement("div");
    productoAct.textContent = "- " + productos[5].nombre;
    dineroTotal += productos[5].precio;
    precioTotal.textContent = dineroTotal;
    listaCarrito.appendChild(productoAct);
});