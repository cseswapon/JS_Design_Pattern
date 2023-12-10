// The memento class that can hold one snapshot of the Originator class - document
function Text(contents) {
  // Contents of the document
  this.contents = contents;

  // Accessor function for contents
  this.getContents = function () {
    return this.contents;
  };

  // Helper function to calculate word count for the current document
  this.getWordCount = function () {
    return this.contents.length;
  };
}

// The originator class that holds the latest version of the document
function Document(contents) {
  // Holder for the memento, i.e., the text of the document
  this.text = new Text(contents);

  // Function to save new contents as a memento
  this.save = function (contents) {
    this.text = new Text(contents);
    return this.text;
  };

  // Function to revert to an older version of the text using a memento
  this.restore = function (text) {
    this.text = new Text(text.getContents());
  };

  // Helper function to get the current memento
  this.getText = function () {
    return this.text;
  };

  // Helper function to get the word count of the current document
  this.getWordCount = function () {
    return this.text.getWordCount();
  };
}

// The caretaker class that providers helper functions to modify the document
function DocumentManager(document) {
  // Holder for the originator, i.e., the document
  this.document = document;

  // Array to maintain a list of mementos
  this.history = [];

  // Add the initial state of the document as the first version of the document
  this.history.push(document.getText());

  // Helper function to get the current contents of the documents
  this.getContents = function () {
    return this.document.getText().getContents();
  };

  // Helper function to get the total number of versions available for the document
  this.getVersionCount = function () {
    return this.history.length;
  };

  // Helper function to get the complete history of the document
  this.getHistory = function () {
    return this.history.map(function (element) {
      return element.getContents();
    });
  };

  // Function to overwrite the contents of the document
  this.overwrite = function (contents) {
    let newVersion = this.document.save(contents);
    this.history.push(newVersion);
  };

  // Function to append new content to the existing contents of the document
  this.append = function (contents) {
    let currentVersion = this.history[this.history.length - 1];
    let newVersion;
    if (currentVersion === undefined) newVersion = this.document.save(contents);
    else
      newVersion = this.document.save(currentVersion.getContents() + contents);
    this.history.push(newVersion);
  };

  // Function to delete all the contents of the document
  this.delete = function () {
    this.history.push(this.document.save(""));
  };

  // Function to get a particular version of the document
  this.getVersion = function (versionNumber) {
    return this.history[versionNumber - 1];
  };

  // Function to undo the last change
  this.undo = function () {
    let previousVersion = this.history[this.history.length - 2];
    this.document.restore(previousVersion);
    this.history.push(previousVersion);
  };

  // Function to revert the document to a previous version
  this.revertToVersion = function (version) {
    let previousVersion = this.history[version - 1];
    this.document.restore(previousVersion);
    this.history.push(previousVersion);
  };

  // Helper function to get the total word count of the document
  this.getWordCount = function () {
    return this.document.getWordCount();
  };
}

function run() {
  // Create a document
  let blogPost = new Document("");

  // Create a caretaker for the document
  let blogPostManager = new DocumentManager(blogPost);

  // Change #1: Add some text
  blogPostManager.append("Hello World!");
  console.log(blogPostManager.getContents());
  // Output: Hello World!

  // Change #2: Add some more text
  blogPostManager.append(" This is the second entry in the document");
  console.log(blogPostManager.getContents());
  // Output: Hello World! This is the second entry in the document

  // Change #3: Overwrite the document with some new text
  blogPostManager.overwrite("This entry overwrites everything in the document");
  console.log(blogPostManager.getContents());
  // Output: This entry overwrites everything in the document

  // Change #4: Delete the contents of the document
  blogPostManager.delete();
  console.log(blogPostManager.getContents());
  // Empty output

  // Get an old version of the document
  console.log(blogPostManager.getVersion(2).getContents());
  // Output: Hello World!

  // Change #5: Go back to an old version of the document
  blogPostManager.revertToVersion(3);
  console.log(blogPostManager.getContents());
  // Output: Hello World! This is the second entry in the document

  // Get the word count of the current document
  console.log(blogPostManager.getWordCount());
  // Output: 53

  // Change #6: Undo the last change
  blogPostManager.undo();
  console.log(blogPostManager.getContents());
  // Empty output

  // Get the total number of versions for the document
  console.log(blogPostManager.getVersionCount());
  // Output: 7

  // Get the complete history of the document
  console.log(blogPostManager.getHistory());
  /**
   * Output:
   * [
   *   '',
   *   'Hello World!',
   *   'Hello World! This is the second entry in the document',
   *   'This entry overwrites everything in the document',
   *   '',
   *   'Hello World! This is the second entry in the document',
   *   ''
   * ]
   */
}

run();
