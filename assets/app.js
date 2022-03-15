// window.alert("This is an alert! JavaScript is running!");
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playAttack = 10;

// logging multiple variables
// console.log(playerName, playerHealth, playAttack);

var enemyName = "Roborto";
var enemyHealth = 100;
var enemyAttack = 10;

console.log(enemyName, enemyHealth, enemyAttack);

// this creates a function named "fight"
var fight = function () {
  window.alert("Welcome to Robot Gladiators!");
  // ask if they wanna play
  var promptFight = prompt(
    "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."
  );

  //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
  enemyHealth = enemyHealth - playAttack;
  // Log a resulting message to the console so we know that it worked.
  console.log(
    playerName +
      " attacked " +
      enemyName +
      ". " +
      enemyName +
      " now has " +
      enemyHealth +
      " health remaining."
  );
  // check enemy's health
  if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
  } else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }

  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
  playerHealth = playerHealth - enemyAttack;

  // Log a resulting message to the console so we know that it worked.
  console.log(
    enemyName +
      " attacked " +
      playerName +
      ". " +
      playerName +
      " now has " +
      playerHealth +
      " health remaining."
  );
  // check player's health
  if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
  } else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  }
};
fight();
