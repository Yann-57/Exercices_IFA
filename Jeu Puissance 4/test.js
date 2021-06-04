"use strict";

const inputJoueur1 = document.querySelector(".input1");
const inputJoueur2 = document.querySelector(".input2");
const button1 = document.querySelector(".check1");
const button2 = document.querySelector(".check2");
const messageVictoire = document.querySelector(".messageSuccess");
const replayButton = document.querySelector(".replay");

const ligne = 6;
const colonne = 7;
let puissance4 = [];

function initialiserMatrice(images, ligne, colonne, car = "-") {
  for (let i = 0; i < ligne; i++) {
    images[i] = [];
    for (let j = 0; j < colonne; j++) {
      images[i][j] = car;
    }
  }
  return images;
}

puissance4 = initialiserMatrice(puissance4, ligne, colonne);

function afficherMatrice(tableau) {
  // document.write

  let tableauHTML = "<table border=1 class='bg-warning text-white'>";
  for (let i = 0; i < ligne; i++) {
    tableauHTML += "<tr>";
    for (let j = 0; j < colonne; j++) {
      // aficher les elements d'un ligne
      // comment changer le background  de la cellule TD
      if (tableau[i][j] === "X") {
        tableauHTML += "<td ><div class='bleu'></div</td>";
      } else if (tableau[i][j] === "O") {
        tableauHTML += "<td ><div class='rouge'></div</td>";
      } else tableauHTML += "<td>" + tableau[i][j] + "</td>";
    }
    tableauHTML += "</tr>";
  }
  tableauHTML += "</table>";
  let monjeux = document.getElementById("jeux");
  monjeux.innerHTML = tableauHTML;
  return true;
}

function remplirColonne(numColonne, puissance4) {
  for (let i = ligne - 1; i >= 0; i--) {
    if (puissance4[i][numColonne] === "-") return i;
  }
  return -1;
}

function checkWin(numLigne, numColonne, char, puissance4) {
  let nbpiece = 0;

  // tester horizontalement ( droite et gauche )
  for (let i = 0; i < colonne; i++)
    if (puissance4[numLigne][i] === char) {
      nbpiece++;
      if (nbpiece === 4) return true;
    } else {
      nbpiece = 0;
    }

  // tester verticalemenrt (bas)
  // si num ligne est < 3
  nbpiece = 0;
  if (numLigne < 3) {
    for (let i = numLigne; i < numLigne + 4; i++) {
      if (puissance4[i][numColonne] === char) nbpiece += 1;
    }
    if (nbpiece === 4) {
      return true;
    }
    nbpiece = 0;
    for (let i = 0; i < ligne; i++) {
      if (puissance4[numLigne][i] === char) nbpiece += 1;
      else nbpiece = 0;
    }
  }

  // Tri diagonale de gauche a droite

  let premiereColonne = 0;
  let premiereLigne = 0;
  nbpiece = 0;

  if (numLigne + numColonne >= ligne - 1) {
    premiereLigne = ligne - 1;
    premiereColonne = numColonne - (ligne - 1 - numLigne);
  } else {
    premiereLigne = 0 + (numLigne + numColonne);
  }
  for (let i = 0; i < premiereLigne; i++) {
    if (puissance4[premiereLigne - i][premiereColonne + i] === char) {
      nbpiece++;
      if (nbpiece === 4) return true;
    } else nbpiece = 0;
  }

  //Tri diagonale de droite a gauche
  if (numLigne + (colonne - numColonne - 1) >= ligne - 1) {
    premiereLigne = ligne - 1;
    premiereColonne = numColonne + (ligne - 1 - numLigne);
  } else {
    premiereColonne = colonne - 1;
    premiereLigne = 0 + (numLigne + (colonne - numColonne - 1));
  }

  for (let i = 0; i <= premiereLigne; i++) {
    if (puissance4[premiereLigne - i][premiereColonne - i] === char) {
      nbpiece++;
      if (nbpiece === 4) return true;
    } else nbpiece = 0;
  }

  return false;
}

afficherMatrice(puissance4);

button1.addEventListener("click", function () {
  if (inputJoueur1.value) {
    let numColonne = Number(inputJoueur1.value - 1);
    let numLigne = remplirColonne(numColonne, puissance4);
    if (numLigne != -1) {
      puissance4[numLigne][numColonne] = "X";
      if (checkWin(numLigne, numColonne, "X", puissance4)) {
        messageVictoire.textContent = "Le joueur 1 à gagner la partie 🎉";
        messageVictoire.classList.remove("hidden");
      }
      inputJoueur1.value = "";
      button2.classList.remove("hidden");
      button1.classList.add("hidden");
    }
  }
  afficherMatrice(puissance4);
});

button2.addEventListener("click", function () {
  if (inputJoueur2.value) {
    let numColonne = Number(inputJoueur2.value - 1);
    let numLigne = remplirColonne(numColonne, puissance4);
    if (numLigne != -1) {
      puissance4[numLigne][numColonne] = "O";
      if (checkWin(numLigne, numColonne, "O", puissance4)) {
        messageVictoire.textContent = "Le joueur 2 à gagner la partie 🎉";
        messageVictoire.classList.remove("hidden");
      }
      inputJoueur2.value = "";
      button1.classList.remove("hidden");
      button2.classList.add("hidden");
    }
  }
  afficherMatrice(puissance4);
});

replayButton.addEventListener("click", function () {
  puissance4 = initialiserMatrice(puissance4, ligne, colonne);
  afficherMatrice(puissance4);
  button1.classList.remove("hidden");
  button2.classList.add("hidden");
  if (messageVictoire.classList.contains("hidden") === false)
    messageVictoire.classList.add("hidden");
});
