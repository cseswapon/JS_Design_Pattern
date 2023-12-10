function DatabaseHandler() {
  const data = {};

  this.set = function (key, val) {
    data[key] = val;
  };
  this.get = function (key, val) {
    return data[key];
  };
  this.remove = function (key) {
    data[key] = null;
  };
}

function DatabaseProxy(databaseInstance) {
  this.set = function (key, val) {
    if (key === "") {
      console.log("Invalid input");
      return;
    }

    if (val === undefined) {
      console.log("Setting value to undefined not allowed!");
      return;
    }

    databaseInstance.set(key, val);
  };

  this.get = function (key) {
    if (databaseInstance.get(key) === null) {
      console.log("Element deleted");
    }

    if (databaseInstance.get(key) === undefined) {
      console.log("Element not created");
    }

    return databaseInstance.get(key);
  };

  this.remove = function (key) {
    if (databaseInstance.get(key) === undefined) {
      console.log("Element not added");
      return;
    }

    if (databaseInstance.get(key) === null) {
      console.log("Element removed already");
      return;
    }

    return databaseInstance.remove(key);
  };
}

function run() {
  let databaseInstance = new DatabaseHandler();

  databaseInstance.set("foo", "bar");
  databaseInstance.set("foo", undefined);
  console.log("#1: " + databaseInstance.get("foo"));
  // #1: undefined

  console.log("#2: " + databaseInstance.get("baz"));
  // #2: undefined

  databaseInstance.set("", "something");

  databaseInstance.remove("foo");
  console.log("#3: " + databaseInstance.get("foo"));
  // #3: null

  databaseInstance.remove("foo");
  // databaseInstance.remove("baz")

  // Create a fresh database instance to try the same operations
  // using the proxy
  databaseInstance = new DatabaseHandler();
  let proxy = new DatabaseProxy(databaseInstance);

  proxy.set("foo", "bar");
  proxy.set("foo", undefined);
  // Proxy jumps in:
  // Output: Setting value to undefined not allowed!

  console.log("#1: " + proxy.get("foo"));
  // Original value is retained:
  // Output: #1: bar

  console.log("#2: " + proxy.get("baz"));
  // Proxy jumps in again
  // Output:
  // Element not created
  // #2: undefined

  proxy.set("", "something");
  // Proxy jumps in again
  // Output: Invalid input

  proxy.remove("foo");

  console.log("#3: " + proxy.get("foo"));
  // Proxy jumps in again
  // Output:
  // Element deleted
  // #3: null

  proxy.remove("foo");
  // Proxy output: Element removed already
  proxy.remove("baz");
  // Proxy output: Element not added
}

run();
