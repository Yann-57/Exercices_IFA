"use strict";

const Liste1 = document.querySelector(".first-ul");
const Liste2 = document.querySelector("#list");
const Liste3 = document.querySelector(".list-unstyled");

function liste3Action(collection, action) {
  [...collection.children].forEach(function (li, i) {
    if (li.classList.contains("selected")) {
      switch (action) {
        case "supprimer":
          Liste1.append(li);
          li.classList.toggle("selected");
          break;
        case "premier":
          Liste2.prepend(li);
          li.classList.toggle("selected");
          break;
        case "dernier":
          Liste2.append(li);
          li.classList.toggle("selected");
          break;
        case "haut":
          if ([...collection.children][i - 1]) {
            li.after([...collection.children][i - 1]);
            console.log([...collection.children][i - 1]);
            li.classList.toggle("selected");
          }
          break;
        case "bas":
          if ([...collection.children][i + 1]) {
            li.before([...collection.children][i + 1]);
            console.log([...collection.children][i - 1]);
            li.classList.toggle("selected");
          }
          break;
      }
    }
  });
}

Liste1.addEventListener("click", function (e) {
  if (e.target.classList.contains("list-item")) {
    e.target.classList.add("new-item");
    Liste2.append(e.target);
  }
});

Liste2.addEventListener("click", function (e) {
  if (e.target.classList.contains("list-item")) {
    // Pour n'avoir qu'un seul élèment à la fois
    // [...Liste2.children].forEach((li) => {
    //   if (li !== e.target) li.classList.remove("selected");
    // });
    e.target.classList.toggle("selected");
  }
});

Liste3.addEventListener("click", function (e) {
  if (e.target.classList.contains("supprimer")) {
    liste3Action(Liste2, "supprimer");
  }
  if (e.target.classList.contains("haut")) {
    liste3Action(Liste2, "haut");
  }
  if (e.target.classList.contains("bas")) {
    liste3Action(Liste2, "bas");
  }
  if (e.target.classList.contains("premier")) {
    liste3Action(Liste2, "premier");
  }
  if (e.target.classList.contains("dernier")) {
    liste3Action(Liste2, "dernier");
  }
});
