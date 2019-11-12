// Rover Object Goes Here
// ======================

let rover = {
  direction : "N",
  x : 0,
  y : 0
}

// ======================

function turnLeft(rover) {
  if(rover.direction == "N") {
   rover.direction = "W";
  }
  else if(rover.direction == "W") {
    rover.direction = "S";
  }
  
}




function turnRight(rover) {
  if(rover.direction == "N") {
    rover.direction = "E";
  }
  else if (rover.direction == "E") {
    rover.direction = "S"
  }
}

function moveForward(rover){
  console.log("moveForward was called")
}