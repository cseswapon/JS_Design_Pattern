// Create titles for all states of a task
const STATE_TODO = "TODO";
const STATE_IN_PROGRESS = "IN_PROGRESS";
const STATE_READY_FOR_REVIEW = "READY_FOR_REVIEW";
const STATE_DONE = "DONE";

// Create the task class with a title, assignee, and duration of the task
function Task(title, assignee) {
  this.title = title;
  this.assignee = assignee;

  // Helper function to update the assignee of the task
  this.setAssignee = function (assignee) {
    this.assignee = assignee;
  };

  // Function to update the state of the task
  this.updateState = function (state) {
    switch (state) {
      case STATE_TODO:
        this.state = new TODO(this);
        break;
      case STATE_IN_PROGRESS:
        this.state = new IN_PROGRESS(this);
        break;
      case STATE_READY_FOR_REVIEW:
        this.state = new READY_FOR_REVIEW(this);
        break;
      case STATE_DONE:
        this.state = new DONE(this);
        break;
      default:
        return;
    }
    // Invoke the callback function for the new state after it is set
    this.state.onStateSet();
  };

  // Set the initial state of the task as TODO
  this.updateState(STATE_TODO);
}

// TODO state
function TODO(task) {
  this.onStateSet = function () {
    console.log(
      task.assignee + ' notified about new task "' + task.title + '"'
    );
  };
}

// IN_PROGRESS state
function IN_PROGRESS(task) {
  this.onStateSet = function () {
    console.log(
      task.assignee + ' started working on the task "' + task.title + '"'
    );
  };
}

// READY_FOR_REVIEW state that updates the assignee of the task to be the manager of the developer
// for the review
function READY_FOR_REVIEW(task) {
  this.getAssignee = function () {
    return "Manager 1";
  };

  this.onStateSet = function () {
    task.setAssignee(this.getAssignee());
    console.log(
      task.assignee + ' notified about completed task "' + task.title + '"'
    );
  };
}

// DONE state that removes the assignee of the task since it is now completed
function DONE(task) {
  this.getAssignee = function () {
    return "";
  };

  this.onStateSet = function () {
    task.setAssignee(this.getAssignee());
    console.log('Task "' + task.title + '" completed');
  };
}

function run() {
  // Create a task
  let task1 = new Task("Create a login page", "Developer 1");
  // Output: Developer 1 notified about new task "Create a login page"

  // Set it to IN_PROGRESS
  task1.updateState(STATE_IN_PROGRESS);
  // Output: Developer 1 started working on the task "Create a login page"

  // Create another task
  let task2 = new Task("Create an auth server", "Developer 2");
  // Output: Developer 2 notified about new task "Create an auth server"

  // Set it to IN_PROGRESS as well
  task2.updateState(STATE_IN_PROGRESS);
  // Output: Developer 2 started working on the task "Create an auth server"

  // Update the states of the tasks until they are done
  task2.updateState(STATE_READY_FOR_REVIEW);
  // Output: Manager 1 notified about completed task "Create an auth server"
  task1.updateState(STATE_READY_FOR_REVIEW);
  // Output: Manager 1 notified about completed task "Create a login page"

  task1.updateState(STATE_DONE);
  // Output: Task "Create a login page" completed
  task2.updateState(STATE_DONE);
  // Output: Task "Create an auth server" completed
}

run();
