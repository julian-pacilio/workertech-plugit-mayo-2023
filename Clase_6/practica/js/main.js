"use strict";

// Declaramos los selectores de etiquetas

let ul = document.getElementById('lista__productos')

const productos = [
    {
        "id": 1,
        "nombre": "Adidas Superstar",
        "descripcion": "Su historia hizo que dejen de ser un calzado para ser un ícono de la moda.",
        "precio": 13000,
        "imagen": "img/01_Adidas_Superstar.jpg",
        "categoria": "Urbano"
    },
    {
        "id": 2,
        "nombre": "Adidas Gazelle",
        "descripcion": "Sofisticada dentro del universo urbanita. Un distintivo de sencillez y personalidad.",
        "precio": 27000,
        "imagen": "img/02_Adidas_Gazelle.jpg",
        "categoria": "Casual"
    },
    {
        "id": 3,
        "nombre": "3MC VULC",
        "descripcion": "El estilo 3MC rinde homenaje al ADN del skateboarding. Simple pero versátil.",
        "precio": 11000,
        "imagen": "img/03_Adidas_3_3MC VULK.jpg",
        "categoria": "Urbano"
    },
    {
        "id": 4,
        "nombre": "Reebok Lite Plus",
        "descripcion": "Movete con confianza a lo largo del día, ofreciéndote amortiguación y ligereza.",
        "precio": 11900,
        "imagen": "img/04_Reebok_Lite_Plus.jpg",
        "categoria": "Deporte"
    },
    {
        "id": 5,
        "nombre": "Reebok Royal Techque",
        "descripcion": "El Royal Techque es un modelo clásico por su confección en cuero y su look deportivo, las usas para todo.",
        "precio": 18500,
        "imagen": "img/05_Reebok_Royal_Techque.jpg",
        "categoria": "Casual"
    },
    {
        "id": 6,
        "nombre": "Adidas EQ19",
        "descripcion": "Independientemente del terreno que cubras, estas adidas amortiguan cada despegue y aterrizaje.",
        "precio": 10500,
        "imagen": "img/06_Adidas_EQ19.jpg",
        "categoria": "Deporte"
    },
    {
        "id": 7,
        "nombre": "Adidas X PLR",
        "descripcion": "Inspiradas en el running, las zapatillas XPLR están hechas para el explorador urbano con ganas de superarse.",
        "precio": 18000,
        "imagen": "img/07_Adidas_X_PLR.jpg",
        "categoria": "Urbano"
    },
    {
        "id": 8,
        "nombre": "Rebook Legacy",
        "descripcion": "Combina lo último en la tecnología más puntera para presentar una construcción y estilo de calidad.",
        "precio": 17000,
        "imagen": "img/08_Reebok_Legacy.jpg",
        "categoria": "Urbano"
    },
    {
        "id": 9,
        "nombre": "Reebok Energen Plus",
        "descripcion": "La duradera suela exterior de caucho te brinda tracción sin importar por dónde vayas, camina con tranquilidad.",
        "precio": 13000,
        "imagen": "img/09_Reebok_Energen_Plus.jpg",
        "categoria": "Deporte"
    },
    {
        "id": 10,
        "nombre": "Reebok Energen Run",
        "descripcion": "Una zapatilla para correr con amortiguación reactiva. Energen Run es un nuevo producto para todos los hombres.",
        "precio": 14500,
        "imagen": "img/10_Reebok_Energen_Run.jpg",
        "categoria": "Deporte"
    },
    {
        "id": 11,
        "nombre": "Reebook Liquifect 90",
        "descripcion": "La nueva zapatillas Liquifect viene con amortiguación reactiva. Cargate de energía para tu próxima carrera.",
        "precio": 18000,
        "imagen": "img/11_Reebok_Liquifect_90.jpg",
        "categoria": "Urbano"
    },
    {
        "id": 12,
        "nombre": "Reebook Heritance",
        "descripcion": "Son como una playlist con todas tus canciones favoritas. Sentite mejor que nunca con estas zapatillas.",
        "precio": 16500,
        "imagen": "img/12_Reebok_Heritance.jpg",
        "categoria": "Urbano"
    }
]
// Funciones

/**
 * Función encargada de generar el catálogo de productos
 */
const Productos = (productos) => {

    let newId = 1;
    productos.forEach(producto => {
        // console.log(producto)

        // let producto = {
        //         id : 1,
        //         nombre : "Adidas Superstar",
        //         descripcion : "Su historia hizo que dejen de ser un calzado para ser un ícono de la moda.",
        //         precio : 13000,
        //         imagen :  "img/01_Adidas_Superstar.jpg",
        //         categoria : "Urbano"
        // }

        let li = document.createElement('li')
            li.id = newId++;
            li.setAttribute('class', 'container__productos__item');

        let figure = document.createElement('figure');
            figure.setAttribute('class', 'container__productos__item__img');
            li.append(figure)
        
        let img = document.createElement('img');
            img.src = producto.imagen;
            img.alt = producto.nombre;
            figure.append(img)

        let div_1 = document.createElement('div');
            div_1.classList = 'container__productos__item__info';
            li.append(div_1)

        let h3 = document.createElement('h3');
            h3.innerHTML = producto.nombre
            div_1.append(h3)

        let p_1 = document.createElement('p');
            p_1.innerHTML = producto.descripcion;
            div_1.append(p_1)
        
        let precio = document.createElement('p');
            precio.innerHTML = '$' + producto.precio + ' ARS';
            div_1.append(precio)

        let categoria = document.createElement('p');
            categoria.innerHTML = producto.categoria;
            div_1.append(categoria)

        let div_2 = document.createElement('div');
            div_2.classList = 'container__productos__item__botones';
            li.append(div_2)
        
        let button = document.createElement('button')
            button.classList = 'btn';
            button.innerHTML = 'Agregar al carrito'
            div_2.append(button)

        let button_2 = document.createElement('a')
            button_2.classList = 'btn';
            button_2.href = '#';
            button_2.innerHTML = 'Ver Detalle'
            div_2.append(button_2)

        ul.append(li)
    });

    /*
        <li id="1" class="container__productos__item">
            <figure class="container__productos__item__img">
                <img src="./img/01_Adidas_Superstar.jpg" alt="Adidas Superstar">
            </figure>
            <div class="container__productos__item__info">
                <h3>Adidas Superstar</h3>
                <p>Su historia hizo que dejen de ser un calzado para ser un ícono de la moda.</p>
                <p>$<span>13000</span></p>
                <p>Urbano</p>
            </div>
            <div class="container__productos__item__botones">
                <button class="btn">Agregar al carrito</button>
                <a class="btn" href="#">Ver Detalle</a>
            </div>
        </li>
    */
}

Productos(productos)