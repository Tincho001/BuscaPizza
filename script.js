let pizzas = [
    {
      id: 1,
      nombre: 'Napolitana',
      precio: 500,
      ingredientes: ['Salsa', 'Queso', 'Tomate'],
      img: '/imagen/napo.jpg',
    },
    {
      id: 2,
      nombre: 'Vegana',
      precio: 700,
      ingredientes: ['Trigo', 'Rucula'],
      img: '/imagen/vegana.jpg',
    },
    {
      id: 3,
      nombre: 'Queso Champinion',
      precio: 800,
      ingredientes: ['Tomate', 'Queso', 'Champiniones'],
      img: '/imagen/champi.jpg',
    },
    {
      id: 4,
      nombre: 'Tropical',
      precio: 950,
      ingredientes: ['Queso', 'Anana', 'tomate' ],
      img: '/imagen/tropi.jpg',
    },
    {
      id: 5,
      nombre: 'Roquefort',
      precio: 750,
      ingredientes: ['Queso Azul', 'Tomate'],
      img: '/imagen/roquefort.jpg',
    },
    {
      id: 6,
      nombre: 'Verde',
      precio: 300,
      ingredientes: ['Lechuga', 'Zapallito', 'Acelga'],
      img: '/imagen/verde.jpg',
    },
  ];
  



//* Ejercicio a)Crear una iteración del array que imprima en consola:

//*a) Las pizzas que tengan un id impar.

// const soloImpar = pizzas.filter ((elemento) => elemento.id % 2);

// const imprimeImpar =() =>
// soloImpar.forEach((elemento) =>
// console.log (` la pizza 🍕${elemento. nombre} es impar`))

// imprimeImpar();



//* b)¿Hay alguna pizza que valga menos de $600?

// const menosDeSeis = pizzas.filter ((elemento) => elemento.precio <600);

// const imprimeMenosSeis =() =>
// menosDeSeis.forEach((elemento) =>
// console.log (`la pizza ${elemento.nombre} 🍕vale menos de  $600 y vale $${elemento.precio}`))

// imprimeMenosSeis();

//*c) Los nombres de todos las pizzas.

// const nombreDePizzas = pizzas.filter((elemento) => elemento.nombre);
// //console.log(nombreDePizzas);

// const imprimeNombres =() =>
// nombreDePizzas.forEach((elemento) =>
// console.log(`${elemento.id} ${elemento.nombre}🍕 `))

// imprimeNombres();

//*d) Los precios de las pizzas.

// const precioPizzas = pizzas.filter ((elemento) => elemento.precio);

// const imprimePrecios =() =>
// precioPizzas.forEach((elemento) =>
// console.log(`El precio de la pizza🍕 ${elemento.nombre} es de $${elemento.precio}`));

// imprimePrecios();



//*e) El nombre de cada pizza con su respectivo precio.

// const pizzaCompleta = pizzas.filter ((elemento) => elemento.id);

// const imprimeCompleta = () =>
// pizzaCompleta.forEach((elemento)=>
// console.log(`La pizza ${elemento.nombre} 🍕 tiene como ingredientes : ${elemento.ingredientes.join("-")} y tiene un costo de $${elemento.precio}`))

// imprimeCompleta();


//LOS EJERCICIOS DE PIZZAS LOS HIZE YO AL 100% Y PUDE RESOLVER DISTINTOS PROBLEMAS QUE SE FUERON PRESENTANDO



  function mostrarPizza() {
    const numero = document.getElementById("elemento").value;
  
    if(numero < 1 || numero > pizzas.length) {
      alert("Elige un número entre 1 y " + pizzas.length);
    } else {
      const pizzaSeleccion = pizzas[numero -1];
      document.getElementById("nombre").innerText =  pizzaSeleccion.nombre; 
      document.getElementById("precio").innerText =  `Precio: $${pizzaSeleccion.precio}`;
      document.getElementById("ingredientes").innerText = `Ingredientes:  ${pizzaSeleccion.ingredientes}`;
  
      if (pizzaSeleccion.img) {
        document.getElementById("imagen").innerHTML = `<img src="${pizzaSeleccion.img}" alt="${pizzaSeleccion.nombre}" class="card-img-top">`;
      } else {
        document.getElementById("imagen").innerHTML = "";
      }
    }
  }
  
  