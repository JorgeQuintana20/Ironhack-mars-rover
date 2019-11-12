// Rover Object Goes Here
// ======================
//Not sure how to do travelLog
let rover = {
  direction: "N",
  x : 0,
  y : 0,
  travelLog : [[0,0]]
}

// ======================

x = 0;

y = 0;

function turnLeft(rover) {
  if (rover.direction == "N") {
    rover.direction = "W";
  }
  else if (rover.direction == "W") {
    rover.direction = "S";
  }
  else if (rover.direction == "S") {
    rover.direction = "E";
  }
  else if (rover.direction == "E") {
    rover.direction = "N";
  }
  console.log("turnLeft was called!");
}

function turnRight(rover) {
  if (rover.direction == "N") {
    rover.direction = "E";
  }
  else if (rover.direction == "E") {
    rover.direction = "S";
  }
  else if (rover.direction == "S") {
    rover.direction = "W";
  }
  else if (rover.direction == "W") {
    rover.direction = "N";
  }
  console.log("turnRight was called!");
}

function moveForward(rover) {
  if (rover.direction == "N") {
    rover.y = y - 1;
  }
  else if (rover.direction == "E") {
    rover.x = x + 1;
  }
  else if (rover.direction == "S") {
    rover.y = y + 1;
  }
  else if (rover.direction == "W") {
    rover.x = x - 1;
  }
  console.log("moveForward was called!")
}

function moveBackwards(rover) {
  if (rover.direction == "N") {
    rover.y = y + 1;
  }
  else if (rover.direction == "E") {
    rover.x = x - 1;
  }
  else if (rover.direction == "S") {
    rover.y = y - 1;
  }
  else if (rover.direction == "W") {
    rover.x = x + 1;
  }
  console.log("moveBackward was called!")
}


//Not sure how to do??
function reciever(command) {
  for(let i = 0; i < command; i++) {
    if ("f" === moveForward) {
      moveForward();
    }
    else if ("r" === turnRight) {
      turnRight();
    }
    else if ("l" === turnLeft) {
      turnLeft();
    }
  }
}

