//The host will reveal a door that doesn't contain the prize
function getNonPrizeDoor(host, numDoors, playerChoice) {
  let i = 1;
  while (i == host || i == playerChoice) {
    i = (i + 1) % numDoors;
  }
  return i;
}

//Player will switch to the other unopened door
function switchFunction(shownDoor, numDoors, playerChoice) {
  let i = 1;
  while (i == shownDoor || i == playerChoice) {
    i = (i + 1) % numDoors;
  }
  return i;
}

//Game Start
function gameShow(switchValue = true, numOfTests) {
  let noOfWins = 0;
  let doors = [0, 1, 2]; ////Get the doors
  let numDoors = doors.length; //Get the number of doors

  for (let i = 0; i < numOfTests; i++) {
    doorWithPrize = Math.floor(Math.random() * numDoors); //Randomly choose the door with the wanted prize
    host = doorWithPrize; //The host knows which door has the prize
    //The player chooses initially a random door that she/he believes has the prize
    playerChoice = Math.floor(Math.random() * numDoors);
    originalPlayerChoice = playerChoice;
    shownDoor = getNonPrizeDoor(host, numDoors, playerChoice);
    if (switchValue === true) {
      playerChoice = switchFunction(shownDoor, numDoors, playerChoice);
    }
    if (playerChoice === host && switchValue === false) {
      noOfWins++;
    }
    //Then the player wins from not switching
    else if (playerChoice === host && switchValue === true) {
      //Then the player wins from switching
      noOfWins++;
    }
  }

  return noOfWins;
}

let numberOfTestCases = 1000;
let noOfWinsWithoutSwitch = gameShow(false, numberOfTestCases);
let noOfWinsWithSwitch = gameShow(true, numberOfTestCases);

console.log(`Testing each case with ${numberOfTestCases} test cases`);
console.log(
  `Stay: count ${noOfWinsWithoutSwitch} = ${(
    (noOfWinsWithoutSwitch / numberOfTestCases) *
    100
  ).toFixed(1)}%`
);
console.log(
  `Switch: count ${noOfWinsWithSwitch} = ${(
    (noOfWinsWithSwitch / numberOfTestCases) *
    100
  ).toFixed(1)}%`
);
