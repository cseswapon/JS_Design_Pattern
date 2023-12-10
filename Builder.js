// Here's the PizzaBuilder (you can also call it the chef)
function PizzaBuilder() {
  let base;
  let sauce;
  let cheese;
  let toppings = [];

  // The definition of pizza is hidden from the customers
  function Pizza(base, sauce, cheese, toppings) {
    this.base = base;
    this.sauce = sauce;
    this.cheese = cheese;
    this.toppings = toppings;

    this.printInfo = function () {
      console.log(
        "This pizza has " +
          this.base +
          " base with " +
          this.sauce +
          " sauce " +
          (this.cheese !== undefined ? "with cheese. " : "without cheese. ") +
          (this.toppings.length !== 0
            ? "It has the following toppings: " + toppings.toString()
            : "")
      );
    };
  }

  // You can request the PizzaBuilder (/chef) to perform any of the following actions on your pizza
  return {
    addFlatbreadBase: function () {
      base = "flatbread";
      return this;
    },
    addTomatoSauce: function () {
      sauce = "tomato";
      return this;
    },
    addAlfredoSauce: function () {
      sauce = "alfredo";
      return this;
    },
    addCheese: function () {
      cheese = "parmesan";
      return this;
    },
    addOlives: function () {
      toppings.push("olives");
      return this;
    },
    addJalapeno: function () {
      toppings.push("jalapeno");
      return this;
    },
    cook: function () {
      if (base === null) {
        console.log("Can't make a pizza without a base");
        return;
      }
      return new Pizza(base, sauce, cheese, toppings);
    },
  };
}

// This is the Director for the PizzaBuilder, aka the PizzaShop.
// It contains a list of preset steps that can be used to prepare common pizzas (aka recipes!)
function PizzaShop() {
  return {
    makePizzaMargherita: function () {
      pizzaBuilder = new PizzaBuilder();
      pizzaMargherita = pizzaBuilder
        .addFlatbreadBase()
        .addTomatoSauce()
        .addCheese()
        .addOlives()
        .cook();
      return pizzaMargherita;
    },
    makePizzaAlfredo: function () {
      pizzaBuilder = new PizzaBuilder();
      pizzaAlfredo = pizzaBuilder
        .addFlatbreadBase()
        .addAlfredoSauce()
        .addCheese()
        .addJalapeno()
        .cook();
      return pizzaAlfredo;
    },
    makePizzaMarinara: function () {
      pizzaBuilder = new PizzaBuilder();
      pizzaMarinara = pizzaBuilder
        .addFlatbreadBase()
        .addTomatoSauce()
        .addOlives()
        .cook();
      return pizzaMarinara;
    },
  };
}

// Here's where the customer can request pizzas from
function run() {
  let pizzaShop = new PizzaShop();

  // You can ask for one of the popular pizza recipes...
  let pizzaMargherita = pizzaShop.makePizzaMargherita();
  pizzaMargherita.printInfo();
  // Output: This pizza has flatbread base with tomato sauce with cheese. It has the following toppings: olives

  let pizzaAlfredo = pizzaShop.makePizzaAlfredo();
  pizzaAlfredo.printInfo();
  // Output: This pizza has flatbread base with alfredo sauce with cheese. It has the following toppings: jalapeno

  let pizzaMarinara = pizzaShop.makePizzaMarinara();
  pizzaMarinara.printInfo();
  // Output: This pizza has flatbread base with tomato sauce without cheese. It has the following toppings: olives

  // Or send your custom request directly to the chef!
  let chef = PizzaBuilder();
  let customPizza = chef
    .addFlatbreadBase()
    .addTomatoSauce()
    .addCheese()
    .addOlives()
    .addJalapeno()
    .cook();
  customPizza.printInfo();
  // Output: This pizza has flatbread base with tomato sauce with cheese. It has the following toppings: olives,jalapeno
}

run();
