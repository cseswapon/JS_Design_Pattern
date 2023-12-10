// Visitor class that defines the methods to be called when visiting each place
function Reader(name, cash) {
  this.name = name;
  this.cash = cash;

  // The visit methods can access the place object and invoke available functions
  this.visitBookstore = function (bookstore) {
    console.log(this.name + " visited the bookstore and bought a book");
    bookstore.purchaseBook(this);
  };

  this.visitLibrary = function () {
    console.log(this.name + " visited the library and read a book");
  };

  // Helper function to demonstrate a transaction
  this.pay = function (amount) {
    this.cash -= amount;
  };
}

// Place class for a library
function Library() {
  this.accept = function (reader) {
    reader.visitLibrary();
  };
}

// Place class for a bookstore that allows purchasing book
function Bookstore() {
  this.accept = function (reader) {
    reader.visitBookstore(this);
  };

  this.purchaseBook = function (visitor) {
    console.log(visitor.name + " bought a book");
    visitor.pay(8);
  };
}

function run() {
  // Create a reader (the visitor)
  let reader = new Reader("Rick", 30);

  // Create the places
  let booksInc = new Bookstore();
  let publicLibrary = new Library();

  // The reader visits the library
  publicLibrary.accept(reader);
  // Output: Rick visited the library and read a book
  console.log(reader.name + " has $" + reader.cash);
  // Output: Rick has $30

  // The reader visits the bookstore
  booksInc.accept(reader);
  // Output: Rick visited the bookstore and bought a book
  console.log(reader.name + " has $" + reader.cash);
  // Output: Rick has $22
}

run();
