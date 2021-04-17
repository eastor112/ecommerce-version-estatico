const botonCategorias = document.getElementById("boton-nav-categorias")
const botonCategoriasMovil = document.getElementById("boton-nav-categorias-movil")
const botonCerrarCategoriaMovil = document.querySelector(".boton-categorias-cerrar-movil")
const grid = document.getElementById("grid")
const categorias = document.querySelectorAll("#grid .contenedor-categorias a")
const contenedorSubcategoriasMovil = document.querySelector("#grid .contenedor-subcategorias")
const fondoCategoriasMovil = document.getElementById("fondo-categorias-movil")
const subcategoria = document.querySelectorAll("#grid .subcategorias")


const esDispositivoMovil = function() {
    if(window.innerWidth <= 768) {
        return true
    } else {
        return false
    }
}

botonCategorias.onmouseover = function() {
    if (esDispositivoMovil() === false) {
        grid.classList.add("activo")
    }
}

botonCategoriasMovil.onclick = function() {
    if (esDispositivoMovil() === true) {
        grid.classList.add("activo")
        fondoCategoriasMovil.classList.add("activo")
        botonCerrarCategoriaMovil.classList.add("activo")
        document.querySelector("body").style.overflow="hidden"
    }
}

botonCerrarCategoriaMovil.onclick = function() {
    grid.classList.remove("activo")
    fondoCategoriasMovil.classList.remove("activo")
    botonCerrarCategoriaMovil.classList.remove("activo")
    document.querySelector("body").style.overflow="visible"
}


grid.onmouseleave = function() {
    if (esDispositivoMovil() === false) {
        grid.classList.remove("activo")
    }
}

categorias.forEach(function(enlaceCategoria) {
    enlaceCategoria.onmouseenter = function(e) {
        if(esDispositivoMovil() === false) {
            //console.log(e.target.dataset.categoria)
            subcategoria.forEach(function(objSubcategoria) {
            //console.log(enlaceSubcategoria.dataset.categoria)
                objSubcategoria.classList.remove("activo")
                if (objSubcategoria.dataset.categoria === e.target.dataset.categoria) {
                    objSubcategoria.classList.add("activo")
                }
            })
        }
        
    }
})

if(esDispositivoMovil() === true) {
    categorias.forEach(function(enlaceCategoria) {
        enlaceCategoria.onclick = function(e) {
            if(esDispositivoMovil() === true) {
                contenedorSubcategoriasMovil.classList.add("activo")
                subcategoria.forEach(function(objSubcategoria) {
                    objSubcategoria.classList.remove("activo")
                    if(objSubcategoria.dataset.categoria === e.target.dataset.categoria) {
                        objSubcategoria.classList.add("activo")
                    }
                })
            }
        }
    })
}
















const iniciarFlickityVisto = function() {
    const elem = document.querySelector(".main-carousel-visto")
    const flick = new Flickity(elem, {
        cellAlign: "center",
        contain: true,
        pageDots: false
    })
}
iniciarFlickityVisto()

const iniciarFlickityVendido = function() {
    const elem = document.querySelector(".main-carousel-vendido")
    const flick = new Flickity(elem, {
        cellAlign: "center",
        contain: true,
        pageDots: false
    })
}
iniciarFlickityVendido()

const iniciarFlickityOfertas = function() {
    const elem = document.querySelector(".main-carousel-ofertas")
    const flick = new Flickity(elem, {
        cellAlign: "center",
        contain: true,
        pageDots: false
    })
}
iniciarFlickityOfertas()


const iniciarFlickityAnuncio = function() {
    const elem = document.querySelector(".main-carousel-anuncio")
    const flick = new Flickity(elem, {
        cellAlign: "center",
        contain: true,
        pageDots: false
    })
}
iniciarFlickityAnuncio()


const iniciarFlickityTienda = function() {
    const elem = document.querySelector(".main-carousel-tienda")
    const flick = new Flickity(elem, {
        cellAlign: "center",
        contain: true,
        pageDots: false
    })
}
iniciarFlickityTienda()