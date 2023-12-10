// Old bot
function Robot() {
  this.walk = function (numberOfSteps) {
    // code to make the robot walk
    console.log("walked " + numberOfSteps + " steps");
  };

  this.sit = function () {
    // code to make the robot sit
    console.log("sit");
  };
}

// New bot that does not have the walk function anymore
// but instead has functions to control each step independently
function AdvancedRobot(botName) {
  // the new bot has a name as well
  this.name = botName;

  this.sit = function () {
    // code to make the robot sit
    console.log("sit");
  };

  this.rightStepForward = function () {
    // code to take 1 step from right leg forward
    console.log("right step forward");
  };

  this.leftStepForward = function () {
    // code to take 1 step from left leg forward
    console.log("left step forward");
  };
}

function RobotAdapter(botName) {
  // No references to the old interfact since that is usually
  // phased out of development
  const robot = new AdvancedRobot(botName);

  // The adapter defines the walk function by using the
  // two step controls. You now have room to choose which leg to begin/end with,
  // and do something at each step.
  this.walk = function (numberOfSteps) {
    for (let i = 0; i < numberOfSteps; i++) {
      if (i % 2 === 0) {
        robot.rightStepForward();
      } else {
        robot.leftStepForward();
      }
    }
  };

  this.sit = robot.sit;
}

function run() {
  let robot = new Robot();

  robot.sit();
  // Output: sit
  robot.walk(5);
  // Output: walked 5 steps

  robot = new RobotAdapter("my bot");

  robot.sit();
  // Output: sit
  robot.walk(5);
  // Output:
  // right step forward
  // left step forward
  // right step forward
  // left step forward
  // right step forward
}

run();
