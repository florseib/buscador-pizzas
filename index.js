const searchForm = document.querySelector("#search-form");
const input = document.querySelector("#search-input");
const pizzaContainer = document.querySelector("#pizza-container");

class Pizza {
  constructor(id, nombre, ingredientes, precio) {
    this.id = id;
    this.nombre = nombre;
    this.ingredientes = ingredientes;
    this.precio = precio;
  }
}

var pizzaArray = [];

function crearPizzaArray() {
  let pizza1 = new Pizza(
    1,
    "Muzzarella",
    ["Queso", "Orégano", "Salsa de tomate"],
    500
  );

  let pizza2 = new Pizza(
    2,
    "Morrón y panceta",
    ["Queso", "Salsa de tomate", "Morrón", "Panceta"],
    750
  );

  let pizza3 = new Pizza(
    3,
    "Jamón",
    ["Queso", "Salsa de tomate", "Jamón"],
    600
  );

  let pizza4 = new Pizza(
    4,
    "Anchoas",
    ["Queso", "Anchoas", "Salsa de tomate"],
    750
  );

  let pizza5 = new Pizza(
    5,
    "Cheddar",
    ["Queso muzzarella", "Queso cheddar", "Salsa de tomate", "Jamón"],
    550
  );

  let pizza6 = new Pizza(6, "Fugazzetta", ["Queso", "Cebollas"], 800);

  pizzaArray = [pizza1, pizza2, pizza3, pizza4, pizza5, pizza6];
}

const searchPizza = (e) => {
  e.preventDefault();
  pizzaContainer.innerHTML = "";
  let searchValue = input.value.trim();
  console.log(searchValue);
  if (!searchValue) {
    pizzaContainer.innerHTML = `<span class="warning">Por favor ingrese un valor válido</span>`;
    return;
  }
  let selectedPizza = pizzaArray.find((x) => x.id == searchValue);

  if (selectedPizza) {
    pizzaContainer.innerHTML = `<h2>${selectedPizza.nombre}</h2>
    <h3>$${selectedPizza.precio}</h3>`;
  } else {
    console.log(searchValue);
    pizzaContainer.innerHTML = `<span class="warning">No hay una pizza con ese ID</span>`;
  }
};

function init() {
  crearPizzaArray();
  searchForm.addEventListener("submit", searchPizza);
}

init();
