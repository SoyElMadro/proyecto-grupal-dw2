const precioTotalCarrito = document.getElementById('precio-total')
const btnVaciarCarrito = document.getElementById('vaciar-carrito')
const carrito = document.querySelector('#carrito .contenedor')
const btnComprar = document.getElementById('comprar')

function agregarClaseBtn(boton) {
  boton.classList.add("en-carrito");
  boton.textContent = "En carrito";
}

function eliminarClaseBtn(boton) {
  boton.classList.remove("en-carrito");
  boton.textContent = "Agregar al carrito";
}

function actualizarClaseBoton(boton) {
  if (boton.classList.contains("en-carrito")) eliminarClaseBtn(boton);
  else agregarClaseBtn(boton);
}

function actualizarCarrito(producto, precio) {
  if (productosEnCarrito.includes(producto)) {
    let indice = productosEnCarrito.indexOf(producto);
    productosEnCarrito.splice(indice, 1);
    precioTotalCarrito.innerHTML =
      parseInt(precioTotalCarrito.innerHTML) - parseInt(precio);
    carrito.removeChild(carrito.children[indice]);
  } else {
    productosEnCarrito.push(producto);
    precioTotalCarrito.innerHTML =
      parseInt(precioTotalCarrito.innerHTML) + parseInt(precio);
    const li = document.createElement("li");
    li.innerHTML = `<span>${producto}</span> $<span>${precio}</span>`;
    carrito.appendChild(li);
  }
}

let productosEnCarrito = [];

window.addEventListener('DOMContentLoaded', () => {
  const botonesCards = document.querySelectorAll('.card button')

  function vaciarCarrito(e) {
    let cantidadProductos = e.target.parentElement.children[1].children.length;
    for (let i = cantidadProductos - 1; i >= 0; i--) {
      let producto = e.target.parentElement.children[1].children[i].children[0].textContent;
      let precio = e.target.parentElement.children[1].children[i].children[1].textContent;
      actualizarCarrito(producto, precio);
      botonesCards.forEach((boton) =>
        boton.classList.contains("en-carrito") ? eliminarClaseBtn(boton) : null
      );
    }
  }
  
  botonesCards.forEach(boton => {
    boton.addEventListener('click', e => {
      let producto = e.target.parentElement.children[0].textContent;
      let precio = e.target.parentElement.children[1].children[0].textContent;
      actualizarCarrito(producto, precio);
      actualizarClaseBoton(boton)
    })
  })

  btnVaciarCarrito.addEventListener("click", (e) => {
    if (e.target.parentElement.children[1].children.length === 0) return;
    vaciarCarrito(e)
    alert('Se ha vaciado el carrito!')
  });

  btnComprar.addEventListener('click', e => {
    if (e.target.parentElement.children[1].children.length === 0) return;
    vaciarCarrito(e)
    alert('Gracias por su compra!')
  })
})

