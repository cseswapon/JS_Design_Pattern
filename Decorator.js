function Customer(name, age) {
  this.name = name;
  this.age = age;

  this.printInfo = function () {
    console.log("Customer:\nName : " + this.name + " | Age: " + this.age);
  };
}

function DecoratedCustomer(customer, location) {
  this.customer = customer;
  this.name = customer.name;
  this.age = customer.age;
  this.location = location;

  this.printInfo = function () {
    console.log(
      "Decorated Customer:\nName: " +
        this.name +
        " | Age: " +
        this.age +
        " | Location: " +
        this.location
    );
  };
}

function run() {
  let customer = new Customer("John", 25);
  customer.printInfo();
  // Output:
  // Customer:
  // Name : John | Age: 25

  let decoratedCustomer = new DecoratedCustomer(customer, "FL");
  decoratedCustomer.printInfo();
  // Output:
  // Customer:
  // Name : John | Age: 25 | Location: FL
}

run();
