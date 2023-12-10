// Writer class that receives an assignment, writes it in 2 seconds, and marks it as finished
function Writer(name, manager) {
  // Reference to the manager, writer's name, and a busy flag that the manager uses while assigning the article
  this.manager = manager;
  this.name = name;
  this.busy = false;

  this.startWriting = function (assignment) {
    console.log(this.name + ' started writing "' + assignment + '"');
    this.assignment = assignment;
    this.busy = true;

    // 2 s timer to replicate manual action
    setTimeout(() => {
      this.finishWriting();
    }, 2000);
  };

  this.finishWriting = function () {
    if (this.busy === true) {
      console.log(this.name + ' finished writing "' + this.assignment + '"');
      this.busy = false;
      return this.manager.notifyWritingComplete(this.assignment);
    } else {
      console.log(this.name + " is not writing any article");
    }
  };
}

// Editor class that receives an assignment, edits it in 3 seconds, and marks it as finished
function Editor(name, manager) {
  // Reference to the manager, editor's name, and a busy flag that the manager uses while assigning the article
  this.manager = manager;
  this.name = name;
  this.busy = false;

  this.startEditing = function (assignment) {
    console.log(this.name + ' started editing "' + assignment + '"');
    this.assignment = assignment;
    this.busy = true;

    // 3 s timer to replicate manual action
    setTimeout(() => {
      this.finishEditing();
    }, 3000);
  };

  this.finishEditing = function () {
    if (this.busy === true) {
      console.log(this.name + ' finished editing "' + this.assignment + '"');
      this.manager.notifyEditingComplete(this.assignment);
      this.busy = false;
    } else {
      console.log(this.name + " is not editing any article");
    }
  };
}

// The mediator class
function Manager() {
  // Store arrays of workers
  this.editors = [];
  this.writers = [];

  this.setEditors = function (editors) {
    this.editors = editors;
  };
  this.setWriters = function (writers) {
    this.writers = writers;
  };

  // Manager receives new assignments via this method
  this.notifyNewAssignment = function (assignment) {
    let availableWriter = this.writers.find(function (writer) {
      return writer.busy === false;
    });
    availableWriter.startWriting(assignment);
    return availableWriter;
  };

  // Writers call this method to notify they're done writing
  this.notifyWritingComplete = function (assignment) {
    let availableEditor = this.editors.find(function (editor) {
      return editor.busy === false;
    });
    availableEditor.startEditing(assignment);
    return availableEditor;
  };

  // Editors call this method to notify they're done editing
  this.notifyEditingComplete = function (assignment) {
    console.log('"' + assignment + '" is ready to publish');
  };
}

function run() {
  // Create a manager
  let manager = new Manager();

  // Create workers
  let editors = [new Editor("Ed", manager), new Editor("Phil", manager)];

  let writers = [new Writer("Michael", manager), new Writer("Rick", manager)];

  // Attach workers to manager
  manager.setEditors(editors);
  manager.setWriters(writers);

  // Send two assignments to manager
  manager.notifyNewAssignment("var vs let in JavaScript");
  manager.notifyNewAssignment("JS promises");

  /**
   * Output:
   * Michael started writing "var vs let in JavaScript"
   * Rick started writing "JS promises"
   *
   * After 2s, output:
   * Michael finished writing "var vs let in JavaScript"
   * Ed started editing "var vs let in JavaScript"
   * Rick finished writing "JS promises"
   * Phil started editing "JS promises"
   *
   * After 3s, output:
   * Ed finished editing "var vs let in JavaScript"
   * "var vs let in JavaScript" is ready to publish
   * Phil finished editing "JS promises"
   * "JS promises" is ready to publish
   */
}

run();
