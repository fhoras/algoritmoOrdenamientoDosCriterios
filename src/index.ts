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
  console.log("Vector edades " + numeros);
  return numeros;
}

function cargarVectorAltura(max: number): number[] {
  let numeros: number[] = [];
  for (let i = 0; i < max; i++) {
    numeros[i] = AzarNumeros(180, 100);
  }
  console.log("Vector Alturas " + numeros);
  return numeros;
}

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
  console.log("Vector nombres " + nombres);
  return nombres;
}
/*
function intercambiar(arreglo: number[], i: number, j: number) {
  let aux: number;
  aux = arreglo[i];
  arreglo[i] = arreglo[j];
  arreglo[j] = aux;
}
function intercambiarNombre(arreglo: string[], i: number, j: number) {
  let aux: string;
  aux = arreglo[i];
  arreglo[i] = arreglo[j];
  arreglo[j] = aux;
}
*/
function burbujaTresVectores(
  vectorEdades: number[],
  vectorAlturas: number[],
  vectorNombres: string[]
) {
  var n, i, k, aux, auxNom;
  n = vectorEdades.length;

  // Algoritmo de burbuja
  for (k = 1; k < n; k++) {
    for (i = 0; i < n - k; i++) {
      if (vectorEdades[i] > vectorEdades[i + 1]) {
        // Intercambio los tres vectores en la misma posición
        // Intercambio de vector de edades
        aux = vectorEdades[i];
        vectorEdades[i] = vectorEdades[i + 1];
        vectorEdades[i + 1] = aux;

        // Intercambio de vector de alturas
        aux = vectorAlturas[i];
        vectorAlturas[i] = vectorAlturas[i + 1];
        vectorAlturas[i + 1] = aux;

        // Intercambio de vector de nombres
        auxNom = vectorNombres[i];
        vectorNombres[i] = vectorNombres[i + 1];
        vectorNombres[i + 1] = auxNom;
      } else {
        if (vectorEdades[i] === vectorEdades[i + 1]) {
          if (vectorAlturas[i] > vectorAlturas[i + 1]) {
            // Intercambio de vector de edades
            aux = vectorEdades[i];
            vectorEdades[i] = vectorEdades[i + 1];
            vectorEdades[i + 1] = aux;

            // Intercambio de vector de alturas
            aux = vectorAlturas[i];
            vectorAlturas[i] = vectorAlturas[i + 1];
            vectorAlturas[i + 1] = aux;

            // Intercambio de vector de nombres
            auxNom = vectorNombres[i];
            vectorNombres[i] = vectorNombres[i + 1];
            vectorNombres[i + 1] = auxNom;
          }
        }
      }
    }
  }
  console.log("Vectores ordenados método burbuja ");
  console.log("Vector edades " + vectorEdades);
  console.log("Vector alturas " + vectorAlturas);
  console.log("Vector nombres " + vectorNombres);
}

function seleccionTresVectores(
  vectorEdades: number[],
  vectorAlturas: number[],
  vectorNombres: string[]
) {
  let tamañoVector, i, j, min, aux, auxNom;
  tamañoVector = vectorEdades.length;
  // Algoritmo de seleccion
  for (i = 0; i < tamañoVector - 2; i++) {
    min = i;
    for (j = i + 1; j < tamañoVector; j++) {
      if (vectorEdades[min] > vectorEdades[j]) {
        min = j;
      } else {
        if (vectorEdades[min] === vectorEdades[j]) {
          if (vectorAlturas[min] > vectorAlturas[j]) {
            min = j;
          }
        }
      }
    }

    if (min !== i) {
      // Se encontró un numero minimo
      // Intercambio de vector de edades
      aux = vectorEdades[i];
      vectorEdades[i] = vectorEdades[min];
      vectorEdades[min] = aux;

      // Intercambio de vector de alturas
      aux = vectorAlturas[i];
      vectorAlturas[i] = vectorAlturas[min];
      vectorAlturas[min] = aux;

      // Intercambio de vector de nombres
      auxNom = vectorNombres[i];
      vectorNombres[i] = vectorNombres[min];
      vectorNombres[min] = auxNom;
    }
  }
  console.log("Vectores ordenados método selección ");
  console.log("Vector edades " + vectorEdades);
  console.log("Vector alturas " + vectorAlturas);
  console.log("Vector nombres " + vectorNombres);
}

btnDatos1.addEventListener("click", () => {
  let cantidad: number = cant.value;
  let vectorEdades: number[];
  let vectorAlturas: number[];
  let vectorNombres: string[];
  console.log("Vectores desordenados ");
  vectorEdades = cargarVectorEdades(cantidad);
  vectorAlturas = cargarVectorAltura(cantidad);
  vectorNombres = cargarVectorNombres(cantidad);
  console.log("Resultados");
  burbujaTresVectores(vectorEdades, vectorAlturas, vectorNombres);
  seleccionTresVectores(vectorEdades, vectorAlturas, vectorNombres);
});
