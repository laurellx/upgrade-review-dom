/*1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises.*/
const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

let list = document.createElement("ul");
document.body.append(list);
console.log(list);

for (let country of countries) {
  let listItem = document.createElement("li");
  console.log(listItem);
  listItem.innerText = country;
  list.append(listItem);
}
console.log(list);

// ****1.2 Elimina el elemento que tenga la clase .fn-remove-me.

let findElement = document.querySelector(".fn-remove-me");
findElement.remove();

/* 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
// en el div de html con el atributo data-function="printHere".*/
const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];

let newList = document.createElement("ul");
let findDiv = document.querySelector('[data-function="printHere"]');
console.log(findDiv);

for (let car of cars) {
  let newListItem = document.createElement("li");
  newListItem.innerText = car;
  newList.append(newListItem);
}
findDiv.appendChild(newList);

// 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento
// h4 para el titulo y otro elemento img para la imagen.
const countries1 = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

let aNewList = document.createElement("ul");

for (let country1 of countries1) {
  let newDivListItem = document.createElement("div");
  let listItems = document.createElement("li");
  let titles = document.createElement("h4");
  let images = document.createElement("img");
  images.src = country1.imgUrl;
  titles.innerText = country1.title;
  aNewList.appendChild(listItems);
  listItems.appendChild(newDivListItem);
  newDivListItem.append(titles, images);
  document.body.append(aNewList);
}
console.log(aNewList);

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
// elemento de la lista.

let buttonDelete = document.createElement("button");
document.body.append(buttonDelete);
buttonDelete.innerText = "Delete last";
aNewList.classList.add(".to-be-removed");

function handleClick() {
  let lastListItem = aNewList.lastChild;
  lastListItem.remove();
}
buttonDelete.addEventListener("click", handleClick);

// // 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
// // elementos de las listas que elimine ese mismo elemento del html.

let listItems = aNewList.querySelectorAll("li");

for (let item of listItems) {
  let eachButton = document.createElement("button");
  eachButton.innerText = "Delete Me";
  item.append(eachButton);

  function handleClick() {
    item.remove();
  }
  eachButton.addEventListener("click", handleClick);
  //----- or -----
  // eachButton.addEventListener("click", () => {
  //   item.remove();
  // });
}
