const productos = [
  {
    nombre: 'Gorra Trucker',
    precio: 3349,
    imagen: 'https://http2.mlstatic.com/D_Q_NP_706387-MLA53786813727_022023-AC.webp'
  },
  {
    nombre: 'Gorra Trucker Argentina 3 Estrellas',
    precio: 3349,
    imagen: 'https://http2.mlstatic.com/D_NQ_NP_704035-MLA54573755063_032023-W.webp'
  },
  {
    nombre: 'Remera All White',
    precio: 4399,
    imagen: 'https://http2.mlstatic.com/D_Q_NP_932069-MLA50510306783_062022-AC.webp'
  },
  {
    nombre: 'Remera Personalizada Con Tu Logo Gris',
    precio: 4499,
    imagen: 'https://http2.mlstatic.com/D_Q_NP_828705-MLA50425170243_062022-AC.webp'
  },
  {
    nombre: 'Remera Gris con Mangas Negras',
    precio: 4999,
    imagen: 'https://http2.mlstatic.com/D_Q_NP_988564-MLA53083798644_122022-AC.webp'
  },
  {
    nombre: 'Remera Gris con Mangas Negras',
    precio: 4999,
    imagen: 'https://http2.mlstatic.com/D_Q_NP_988564-MLA53083798644_122022-AC.webp'
  },
  {
    nombre: 'Buzo Canguro Gris Liso',
    precio: 7999,
    imagen: 'https://http2.mlstatic.com/D_NQ_NP_988610-MLA70214013754_062023-W.webp'
  },
  {
    nombre: 'Campera Con Capucha Roja',
    precio: 8499,
    imagen: 'https://http2.mlstatic.com/D_NQ_NP_722296-MLA70675200299_072023-W.webp'
  },
  {
    nombre: 'Campera Con Capucha Roja',
    precio: 8499,
    imagen: 'https://http2.mlstatic.com/D_NQ_NP_722296-MLA70675200299_072023-W.webp'
  },
  {
    nombre: 'Combo Remera Gris con Mangas Negras + Gorro Personalizada',
    precio: 7999,
    imagen: 'https://http2.mlstatic.com/D_NQ_NP_664409-MLA71874313109_092023-W.webp',
  },
  {
    nombre: 'Combo Remera All White + Gorro Personalizada',
    precio: 7599,
    imagen: 'https://http2.mlstatic.com/D_NQ_NP_898207-MLA71874133315_092023-W.webp',
  },
  {
    nombre: 'Combo Remera Gris + Gorro Personalizada',
    precio: 7699,
    imagen: 'https://http2.mlstatic.com/D_NQ_NP_614727-MLA71820726648_092023-W.webp'
  }
]

const productosDestacados = [
  {
    nombre: 'Buzo Canguro Gris Liso',
    precio: 7999,
    imagen: 'https://http2.mlstatic.com/D_NQ_NP_988610-MLA70214013754_062023-W.webp'
  },
  {
    nombre: 'Combo Remera All White + Gorro Personalizada',
    precio: 7599,
    imagen: 'https://http2.mlstatic.com/D_NQ_NP_898207-MLA71874133315_092023-W.webp',
  },
  {
    nombre: 'Remera Personalizada Con Tu Logo Gris',
    precio: 4499,
    imagen: 'https://http2.mlstatic.com/D_Q_NP_828705-MLA50425170243_062022-AC.webp'
  }
]

window.addEventListener('DOMContentLoaded', () => {
  const contenedorProductos = document.getElementById('contenedor-productos')
  const contenedorProductosDestacados = document.getElementById('contenedor-productos-destacados')

  productos.forEach(producto => {
    contenedorProductos.innerHTML += `
      <div class="card">
        <h3>${producto.nombre}</h3>
        <p>$<span>${producto.precio}</span></p>
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <button>Agregar al carrito</button>
      </div>
    `
  })

  productosDestacados.forEach(producto => {
    contenedorProductosDestacados.innerHTML += `
      <div id="card-producto-destacado" class="card">
        <h3>${producto.nombre}</h3>
        <p>$<span>${producto.precio}</span></p>
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <button>Agregar al carrito</button>
      </div>
    `
  })
});