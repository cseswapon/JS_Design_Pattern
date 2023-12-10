function Factory() {
  this.createDog = function (breed) {
    let dog;

    if (breed === "labrador") {
      dog = new Labrador();
    } else if (breed === "bulldog") {
      dog = new Bulldog();
    } else if (breed === "golden retriever") {
      dog = new GoldenRetriever();
    } else if (breed === "german shepherd") {
      dog = new GermanShepherd();
    }

    dog.breed = breed;
    dog.printInfo = function () {
      console.log(
        "\n\nBreed: " +
          dog.breed +
          "\nShedding Level (out of 5): " +
          dog.sheddingLevel +
          "\nCoat Length: " +
          dog.coatLength +
          "\nCoat Type: " +
          dog.coatType
      );
    };

    return dog;
  };
}

function Labrador() {
  this.sheddingLevel = 4;
  this.coatLength = "short";
  this.coatType = "double";
}

function Bulldog() {
  this.sheddingLevel = 3;
  this.coatLength = "short";
  this.coatType = "smooth";
}

function GoldenRetriever() {
  this.sheddingLevel = 4;
  this.coatLength = "medium";
  this.coatType = "double";
}

function GermanShepherd() {
  this.sheddingLevel = 4;
  this.coatLength = "medium";
  this.coatType = "double";
}

function run() {
  let dogs = [];
  let factory = new Factory();

  dogs.push(factory.createDog("labrador"));
  dogs.push(factory.createDog("bulldog"));
  dogs.push(factory.createDog("golden retriever"));
  dogs.push(factory.createDog("german shepherd"));

  for (var i = 0, len = dogs.length; i < len; i++) {
    dogs[i].printInfo();
  }
}

run();

/**
Output:

Breed: labrador
Shedding Level (out of 5): 4
Coat Length: short
Coat Type: double


Breed: bulldog
Shedding Level (out of 5): 3
Coat Length: short
Coat Type: smooth


Breed: golden retriever
Shedding Level (out of 5): 4
Coat Length: medium
Coat Type: double


Breed: german shepherd
Shedding Level (out of 5): 4
Coat Length: medium
Coat Type: double
*/
