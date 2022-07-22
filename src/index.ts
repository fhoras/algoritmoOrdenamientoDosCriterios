import "./styles.css";

let cant = document.getElementById("cantidad");

function AzarNumeros(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function cargarVectorEdades(vector: number[], max: number) {
  for (let i = 0; i < max; i++) {
    vector[i] = AzarNumeros(30, 0);
  }
}

function cargarVectorAltura(vector: number[], max: number) {
  for (let i = 0; i < max; i++) {
    vector[i] = AzarNumeros(180, 100);
  }
}

function cargarVectorNombres(vector: string[], max: number) {
  for (let i = 0; i < max; i++) {
    vector[i] = String(prompt("Nombre " + i));
  }
}

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

function imprimirValoresDesordenados(
  edades: number[],
  alturas: number[],
  nombres: string[],
  max: number
) {
  for (let i = 0; i < max; i++) {
    console.log(
      "Nombre: " +
        nombres[i] +
        ", Altura: " +
        alturas[i] +
        ", Edad: " +
        edades[i]
    );
  }
}

function burbujaTresVectores(
  edades: number[],
  alturas: number[],
  nombres: string[],
  max: number
) {
  // Algoritmo de burbuja
  for (let k = 0; k < max - 1; k++) {
    for (let i = 0; i < max - 1 - k; i++) {
      if (edades[i] > edades[i + 1]) {
        intercambiar(edades, i, i + 1);
        intercambiar(alturas, i, i + 1);
        intercambiarNombre(nombres, i, i + 1);
      } else if (edades[i] === edades[i + 1] && alturas[i] > alturas[i + 1]) {
        intercambiar(edades, i, i + 1);
        intercambiar(alturas, i, i + 1);
        intercambiarNombre(nombres, i, i + 1);
      }
    }
  }
}

function seleccionTresVectores(
  edades: number[],
  alturas: number[],
  nombres: string[],
  max: number
) {
  let min;
  // Algoritmo de seleccion
  for (let i = 0; i < max - 2; i++) {
    min = i;
    for (let j = i + 1; j < max; j++) {
      if (edades[min] > edades[j]) {
        min = j;
      } else if (edades[min] === edades[j] && alturas[min] > alturas[j]) {
        min = j;
      }
    }

    if (min !== i) {
      intercambiar(edades, i, min);
      intercambiar(alturas, i, min);
      intercambiarNombre(nombres, i, min);
    }
  }
}

btnDatos1.addEventListener("click", () => {
  let cantidad: number = cant.value;
  let vectorEdades: number[] = new Array(cantidad);
  let vectorAlturas: number[] = new Array(cantidad);
  let vectorNombres: string[] = new Array(cantidad);
  cargarVectorEdades(vectorEdades, cantidad);
  cargarVectorAltura(vectorAlturas, cantidad);
  cargarVectorNombres(vectorNombres, cantidad);
  console.log("Vectores desordenados");
  imprimirValoresDesordenados(
    vectorEdades,
    vectorAlturas,
    vectorNombres,
    cantidad
  );
  burbujaTresVectores(vectorEdades, vectorAlturas, vectorNombres, cantidad);
  seleccionTresVectores(vectorEdades, vectorAlturas, vectorNombres, cantidad);
  console.log("Vectores ordenados");
  imprimirValoresDesordenados(
    vectorEdades,
    vectorAlturas,
    vectorNombres,
    cantidad
  );
});
