// Rover Object Goes Here
// ======================

let rover = {
  direction: "N",
  x: 0,
  y: 0,
  travellog : "(x, y)"
}

// ======================

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
  else (rover.direction == "E") {
    rover.direction = "N";
  }
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
  else (rover.direction == "W") {
    rover.direction = "N";
  }
}

function moveForward(rover) {
  console.log("moveForward was called")

  if (rover.direction == "N") {
    rover.y = y - 1;
  }
  else if (rover.direction == "E") {
    rover.x = x + 1;
  }
  else if (rover.direction == "S") {
    rover.y = y + 1;
  }
  else (rover.direction == "W") {
    rover.x = x - 1;
  }
}

console.log(rover);

function reciever() {
  for(var i = 0; i < rover.length; i++) {
    if(moveForward === "f") {
      console.log(moveForward())
    }
    else if(turnRight === "r") {
      console.log(turnRight())
    }
    else(turnLeft === "l") {
      console.log(turnLeft())
    }
  }
}