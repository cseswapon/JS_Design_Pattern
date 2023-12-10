// Complaint class that stores title and severity of a complaint
// Higher value of severity indicates a more severe complaint
function Complaint(title, severity) {
  this.title = title;
  this.severity = severity;
}

// Base level handler that receives all complaints
function Representative() {
  // If this handler can not handle the complaint, it will be forwarded to the next level
  this.nextLevel = new Management();

  this.handleComplaint = function (complaint) {
    if (complaint.severity === 0)
      console.log(
        "Representative resolved the following complaint: " + complaint.title
      );
    else this.nextLevel.handleComplaint(complaint);
  };
}

// Second level handler to handle complaints of severity 1
function Management() {
  // If this handler can not handle the complaint, it will be forwarded to the next level
  this.nextLevel = new Leadership();

  this.handleComplaint = function (complaint) {
    if (complaint.severity === 1)
      console.log(
        "Management resolved the following complaint: " + complaint.title
      );
    else this.nextLevel.handleComplaint(complaint);
  };
}

// Highest level handler that handles all complaints unhandled so far
function Leadership() {
  this.handleComplaint = function (complaint) {
    console.log(
      "Leadership resolved the following complaint: " + complaint.title
    );
  };
}

function run() {
  // Create an instance of the base level handler
  let customerSupport = new Representative();

  // Create multiple complaints of varying severity and pass them to the base handler

  let complaint1 = new Complaint("Submit button doesn't work", 0);
  customerSupport.handleComplaint(complaint1);
  // Output: Representative resolved the following complaint: Submit button doesn't work

  let complaint2 = new Complaint("Payment failed", 1);
  customerSupport.handleComplaint(complaint2);
  // Output: Management resolved the following complaint: Payment failed

  let complaint3 = new Complaint("Employee misdemeanour", 2);
  customerSupport.handleComplaint(complaint3);
  // Output: Leadership resolved the following complaint: Employee misdemeanour
}

run();
