import "./styles.css";
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const arrayNombres = [
  "Andrea",
  "José",
  "Emiliano",
  "David",
  "Baldomero",
  "Balduino",
  "Baldwin",
  "Baltasar",
  "Barry",
  "Bartolo",
  "Bartolomé",
  "Baruc",
  "Baruj",
  "Candelaria",
  "Cándida",
  "Canela",
  "Caridad",
  "Carina",
  "Carisa",
  "Caritina",
  "Carlota",
  "Baltazar",
  "Jorge",
  "Juan",
  "Pedro",
  "Fabiola",
  "Jonatan",
  "Leónidas",
  "Jade"
];

let cant = document.getElementById("cantidad");

function AzarNumeros(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function cargarVectorEdades(max: number): number[] {
  let numeros: number[] = [];
  for (let i = 0; i < max; i++) {
    numeros[i] = AzarNumeros(30, 0);
  }
  console.log(numeros);
  return numeros;
}

function cargarVectorAltura(max: number): number[] {
  let numeros: number[] = [];
  for (let i = 0; i < max; i++) {
    numeros[i] = AzarNumeros(180, 100);
  }
  console.log(numeros);
  return numeros;
}

// Programa para generar strings random
/*
function azarStrings() {
  let stringResultado = "";
  const cantidad = characters.length;
  for (let i = 0; i < cantidad; i++) {
    stringResultado += characters.charAt(Math.floor(Math.random() * cantidad));
  }
  return stringResultado;
}
*/

function nombresAzar() {
  let nombreResultado = "";
  const cantidad = characters.length;
  for (let i = 0; i < cantidad; i++) {
    nombreResultado =
      arrayNombres[
        Math.floor(Math.random() * (arrayNombres.length - 1 - 0 + 1) + 0)
      ];
  }
  return nombreResultado;
}

function cargarVectorNombres(max: number): string[] {
  let nombres: string[] = [];
  for (let i = 0; i < max; i++) {
    nombres[i] = nombresAzar();
  }
  console.log(nombres);
  return nombres;
}

function burbuja(vectorNumeros: number[]) {
  var n, i, k, aux;
  n = vectorNumeros.length;
  console.log("Vector desordenado " + vectorNumeros);
  // Algoritmo de burbuja
  for (k = 1; k < n; k++) {
    for (i = 0; i < n - k; i++) {
      if (vectorNumeros[i] > vectorNumeros[i + 1]) {
        aux = vectorNumeros[i];
        vectorNumeros[i] = vectorNumeros[i + 1];
        vectorNumeros[i + 1] = aux;
      }
    }
  }
  console.log("Vector ordenado método burbuja " + vectorNumeros); // Mostramos, por consola, la lista ya ordenada
}

function seleccion(vectorNumeros: number[]) {
  var n, i, k, aux;
  n = vectorNumeros.length;
  // console.log("Vector desordenado " + vectorNumeros);
  // Algoritmo de seleccion
  for (k = 1; k < n; k++) {
    for (i = 0; i < n - k; i++) {
      if (vectorNumeros[i] > vectorNumeros[i + 1]) {
        aux = vectorNumeros[i];
        vectorNumeros[i] = vectorNumeros[i + 1];
        vectorNumeros[i + 1] = aux;
      }
    }
  }
  console.log("Vector ordenado método selección " + vectorNumeros); // Mostramos, por consola, la lista ya ordenada
}

btnDatos1.addEventListener("click", () => {
  let cantidad: number = cant.value;
  let vectorEdades: number[];
  let vectorAlturas: number[];
  let vectorNombres: string[];
  vectorEdades = cargarVectorEdades(cantidad);
  vectorAlturas = cargarVectorAltura(cantidad);
  vectorNombres = cargarVectorNombres(cantidad);
  console.log("Resultados");
  burbuja(vectorEdades);
  burbuja(vectorAlturas);
  burbuja(vectorNombres);
  seleccion(vectorEdades);
});
