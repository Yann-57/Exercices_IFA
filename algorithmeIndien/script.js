"use strict";

let input = document.querySelector(".nombreUtilisateur");
let button = document.querySelector(".btn");
let result = document.querySelector(".result");

button.addEventListener("click", function () {
  if (input.value) {
    let nombreUtilisateur = input.value;
    algorithmeIndien(nombreUtilisateur);
    function triCroissant(x, y) {
      return x - y;
    }

    function triDecroissant(x, y) {
      return y - x;
    }

    function algorithmeIndien(number, i = 0, oldNumber = 0) {
      if (number !== 0 && number !== oldNumber) {
        i++;
        let plusPetitNombre = number.split("").sort(triCroissant).join("");
        let plusGrandNombre = number.split("").sort(triDecroissant).join("");
        oldNumber = number;
        algorithmeIndien(
          String(plusGrandNombre - plusPetitNombre),
          i,
          oldNumber
        );
      } else {
        if (result.classList.contains("d-none"))
          result.classList.remove("d-none");

        result.innerHTML = `Votre nombre ${nombreUtilisateur} a subit ${i} Iterations, le nombre final obtenue selon l'algorithme Indien est ${number}`;
      }
    }
  }
});

// let iteration = 0;
// let ancienNombre;
// let nombre = nombreUtilisateur;

// while (nombre !== 0 && nombre !== ancienNombre) {
//     iteration++;
//     let plusPetitNombre = nombre.split("").sort(triCroissant).join("");
//     let plusGrandNombre = nombre.split("").sort(triDecroissant).join("");
//     ancienNombre = nombre;
//     nombre = String((plusGrandNombre - plusPetitNombre));

// }

// alert(`${nombreUtilisateur}, devient, ${nombre} a partir de ${iteration} i`);
