
const productos = [
  { id: 1, nombre: "Mouse", precio: 399.00, imagen: "Statics/images/sugMouse.webp" },
  { id: 2, nombre: "Teclado", precio: 211.00, imagen: "Statics/images/mousepad.jpg" },
  { id: 3, nombre: "Audífonos", precio: 289.00, imagen: "Statics/images/sugAudifonos.webp" },
  { id: 4, nombre: "Sillgamer", precio: 1500.00, imagen: "Statics/images/sugSilla.webp"},
  { id: 5, nombre: "Monitor", precio: 2670.00, imagen: "Statics/images/sugLaptopNormal.webp"},
  { id: 6, nombre: "mauspad", precio: 150.00, imagen: "Statics/images/mousepad.jpg" },
  { id: 7, nombre: "Cargador", precio: 80.00, imagen: "Statics/images/producto1.jpg" },
  { id: 8, nombre: "", precio: 500.00, imagen: "Statics/images/producto1.jpg" },
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
    const producto= productos.find(p=> p.id00)
    const item = document.createElement("li");
    item.textContent = `${producto.nombre} - ${producto.precio.toFixed(2)}`;
    listaCarrito.appendChild(item);
    total += producto.precio;
    totalElemento.textContent=total.toFixed(2);
}
