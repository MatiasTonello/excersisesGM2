import { addition, rest } from "./ejercicio1.js";
import { parity } from "./ejercicio2.js";
import { esPalindromo } from "./ejercicio3.js";
import { convertirARomano } from "./ejercicio4.js";

const resultadoContainer = document.getElementById("resultado");
const form = document.getElementById("ejer-form");
const input = document.getElementById("miinput");
const inputAdd = document.getElementById("add");
const listEjerc = document.getElementById("ejercicios");
const infoToUser = document.getElementById("div__info");
const labelAdd = document.getElementById("label__addition");

const opcionCambiada = () => {
  const opcionSeleccionada = listEjerc.selectedIndex;
  labelAdd.style.display = "none";
  resultadoContainer.style.display = "none";
  if (opcionSeleccionada === 0) {
    infoToUser.innerHTML = "<p>  </p>";
  }
  if (opcionSeleccionada === 1) {
    infoToUser.innerHTML = "<p> A continuación ingrese el array </p>";
    input.type = "textarea";
    labelAdd.style.display = "block";
  }
  if (opcionSeleccionada === 2) {
    infoToUser.innerHTML =
      "<p> A continuación ingrese el array del cual desea saber si hay número par y sus paridades </p>";
    input.type = "textarea";
  }
  if (opcionSeleccionada === 3) {
    infoToUser.innerHTML =
      "<p> A continuación ingrese la palabra la cual desea saber si es o podría ser palonima </p>";
    input.type = "textarea";
  }
  if (opcionSeleccionada === 4) {
    infoToUser.innerHTML =
      "<p> A continuación ingrese el número que desea convertir a romano </p>";
    input.type = "number";
  }
};

const formLogic = (event) => {
  event.preventDefault();
  let valorDelInput = input.value;
  let valorDelInputAdd = add.value;
  imprimirResultadoDelInput(valorDelInput);
  imprimirResultadoDelInput(valorDelInput, valorDelInputAdd);
  form.reset();
  infoToUser.innerHTML = "<p>  </p>";
  labelAdd.style.display = "none";
};

function imprimirResultadoDelInput(valor, number) {
  const opcionSeleccionada = listEjerc.selectedIndex;
  resultadoContainer.style.display = "block";
  if (opcionSeleccionada === 1) {
    let arrayToAdd = valor.split(",").map(Number);
    let numberToNumber = Number(number);
    if (document.getElementById("addcbox").checked) {
      resultadoContainer.innerHTML =
        "<p> EL resultado de la adición es " +
        addition(arrayToAdd, numberToNumber) +
        "</p>";
    }
    if (document.getElementById("restcbox").checked) {
      resultadoContainer.innerHTML =
        "<p> EL resultado de la resta es " + rest(arrayToAdd, number) + "</p>";
    }
  }
  if (opcionSeleccionada === 2) {
    let arrayParity = valor.split(",").map(Number);
    resultadoContainer.innerHTML = "<p> " + parity(arrayParity) + "</p>";
  }
  if (opcionSeleccionada === 3) {
    resultadoContainer.innerHTML = "<p> " + (esPalindromo(valor) + "</p>");
  }

  if (opcionSeleccionada === 4) {
    resultadoContainer.innerHTML =
      "<p> El número convertido es : " + (convertirARomano(valor) + "</p>");
  }
}

form.addEventListener("submit", formLogic);
listEjerc.addEventListener("change", opcionCambiada);
