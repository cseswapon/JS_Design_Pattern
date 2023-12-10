// The newsletter class that can send out posts to its subscribers
function Newsletter() {
  // Maintain a list of subscribers
  this.subscribers = [];

  // Subscribe a reader by adding them to the subscribers' list
  this.subscribe = function (subscriber) {
    this.subscribers.push(subscriber);
  };

  // Unsubscribe a reader by removing them from the subscribers' list
  this.unsubscribe = function (subscriber) {
    this.subscribers = this.subscribers.filter(function (element) {
      if (element !== subscriber) return element;
    });
  };

  // Publish a post by calling the receive function of all subscribers
  this.publish = function (post) {
    this.subscribers.forEach(function (element) {
      element.receiveNewsletter(post);
    });
  };
}

// The reader class that can subscribe to and receive updates from newsletters
function Reader(name) {
  this.name = name;

  this.receiveNewsletter = function (post) {
    console.log("Newsletter received by " + name + "!: " + post);
  };
}

function run() {
  // Create two readers
  let rick = new Reader("ed");
  let morty = new Reader("morty");

  // Create your newsletter
  let newsletter = new Newsletter();

  // Subscribe a reader to the newsletter
  newsletter.subscribe(rick);

  // Publish the first post
  newsletter.publish("This is the first of the many posts in this newsletter");
  /**
   * Output:
   * Newsletter received by ed!: This is the first of the many posts in this newsletter
   */

  // Subscribe another reader to the newsletter
  newsletter.subscribe(morty);

  // Publish the second post
  newsletter.publish("This is the second of the many posts in this newsletter");
  /**
   * Output:
   * Newsletter received by ed!: This is the second of the many posts in this newsletter
   * Newsletter received by morty!: This is the second of the many posts in this newsletter
   */

  // Unsubscribe the first reader
  newsletter.unsubscribe(rick);

  // Publish the third post
  newsletter.publish("This is the third of the many posts in this newsletter");
  /**
   * Output:
   * Newsletter received by morty!: This is the third of the many posts in this newsletter
   */
}

run();
