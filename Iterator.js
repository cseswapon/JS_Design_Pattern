// Iterator for a complex list with custom methods
function Iterator(list) {
  this.list = list;
  this.index = 0;

  // Fetch the current element
  this.current = function () {
    return this.list[this.index];
  };

  // Fetch the next element in the list
  this.next = function () {
    return this.list[this.index++];
  };

  // Check if there is another element in the list
  this.hasNext = function () {
    return this.index < this.list.length;
  };

  // Reset the index to point to the initial element
  this.resetIndex = function () {
    this.index = 0;
  };

  // Run a forEach loop over the list
  this.forEach = function (callback) {
    for (
      let element = this.next();
      this.index <= this.list.length;
      element = this.next()
    ) {
      callback(element);
    }
  };
}

function run() {
  // A complex list with elements of multiple data types
  let list = ["Lorem ipsum", 9, ["lorem ipsum dolor", true], false];

  // Create an instance of the iterator and pass it the list
  let iterator = new Iterator(list);

  // Log the first element
  console.log(iterator.current());
  // Output: Lorem ipsum

  // Print all elements of the list using the iterator's methods
  while (iterator.hasNext()) {
    console.log(iterator.next());
    /**
     * Output:
     * Lorem ipsum
     * 9
     * [ 'lorem ipsum dolor', true ]
     * false
     */
  }

  // Reset the iterator's index to the first element
  iterator.resetIndex();

  // Use the custom iterator to pass an effect that will run for each element of the list
  iterator.forEach(function (element) {
    console.log(element);
  });
  /**
   * Output:
   * Lorem ipsum
   * 9
   * [ 'lorem ipsum dolor', true ]
   * false
   */
}

run();
