// A product class, that acts as a Leaf node
function Product(name, price) {
  this.name = name;
  this.price = price;

  this.getTotalPrice = function () {
    return this.price;
  };
}

// A box class, that acts as a parent/child node
function Box(name) {
  this.contents = [];
  this.name = name;

  // Helper function to add an item to the box
  this.add = function (content) {
    this.contents.push(content);
  };

  // Helper function to remove an item from the box
  this.remove = function () {
    var length = this.contents.length;
    for (var i = 0; i < length; i++) {
      if (this.contents[i] === child) {
        this.contents.splice(i, 1);
        return;
      }
    }
  };

  // Helper function to get one item from the box
  this.getContent = function (position) {
    return this.contents[position];
  };

  // Helper function to get the total count of the items in the box
  this.getTotalCount = function () {
    return this.contents.length;
  };

  // Helper function to calculate the total price of all items in the box
  this.getTotalPrice = function () {
    let totalPrice = 0;

    for (let i = 0; i < this.getTotalCount(); i++) {
      totalPrice += this.getContent(i).getTotalPrice();
    }

    return totalPrice;
  };
}

function run() {
  // Let's create some electronics
  const mobilePhone = new Product("mobile phone", 1000);
  const phoneCase = new Product("phone case", 30);
  const screenProtector = new Product("screen protector", 20);

  // and some stationery products
  const pen = new Product("pen", 2);
  const pencil = new Product("pencil", 0.5);
  const eraser = new Product("eraser", 0.5);
  const stickyNotes = new Product("sticky notes", 10);

  // and put them in separate boxes
  const electronicsBox = new Box("electronics");
  electronicsBox.add(mobilePhone);
  electronicsBox.add(phoneCase);
  electronicsBox.add(screenProtector);

  const stationeryBox = new Box("stationery");
  stationeryBox.add(pen);
  stationeryBox.add(pencil);
  stationeryBox.add(eraser);
  stationeryBox.add(stickyNotes);

  // and finally, put them into one big box for convenient shipping
  const package = new Box("package");
  package.add(electronicsBox);
  package.add(stationeryBox);

  // Here's an easy way to calculate the total order value
  console.log("Total order price: USD " + package.getTotalPrice());
  // Output: USD 1063
}

run();
