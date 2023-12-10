// A factory to create dogs
function DogFactory() {
  // Notice that the create function is now createPet instead of createDog, since we need
  // it to be uniform across the other factories that will be used with this
  this.createPet = function (breed) {
    let dog;

    if (breed === "labrador") {
      dog = new Labrador();
    } else if (breed === "pug") {
      dog = new Pug();
    }

    dog.breed = breed;
    dog.printInfo = function () {
      console.log(
        "\n\nType: " +
          dog.type +
          "\nBreed: " +
          dog.breed +
          "\nSize: " +
          dog.size
      );
    };

    return dog;
  };
}

// A factory to create cats
function CatFactory() {
  this.createPet = function (breed) {
    let cat;

    if (breed === "ragdoll") {
      cat = new Ragdoll();
    } else if (breed === "singapura") {
      cat = new Singapura();
    }

    cat.breed = breed;
    cat.printInfo = function () {
      console.log(
        "\n\nType: " +
          cat.type +
          "\nBreed: " +
          cat.breed +
          "\nSize: " +
          cat.size
      );
    };

    return cat;
  };
}

// Dog and cat breed definitions
function Labrador() {
  this.type = "dog";
  this.size = "large";
}

function Pug() {
  this.type = "dog";
  this.size = "small";
}

function Ragdoll() {
  this.type = "cat";
  this.size = "large";
}

function Singapura() {
  this.type = "cat";
  this.size = "small";
}

function run() {
  let pets = [];

  // Initialize the two factories
  let catFactory = new CatFactory();
  let dogFactory = new DogFactory();

  // Create a common petFactory that can produce both cats and dogs
  // Set it to produce dogs first
  let petFactory = dogFactory;

  pets.push(petFactory.createPet("labrador"));
  pets.push(petFactory.createPet("pug"));

  // Set the petFactory to produce cats
  petFactory = catFactory;

  pets.push(petFactory.createPet("ragdoll"));
  pets.push(petFactory.createPet("singapura"));

  for (var i = 0, len = pets.length; i < len; i++) {
    pets[i].printInfo();
  }
}

run();

/**
Output:

Type: dog
Breed: labrador
Size: large


Type: dog
Breed: pug
Size: small


Type: cat
Breed: ragdoll
Size: large


Type: cat
Breed: singapura
Size: small

*/
