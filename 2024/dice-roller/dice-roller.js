/** dice-roller.js
    by Nathan Pelletier
    started July 19 2024

    A program to roll a bunch of dice. It can roll a number of dice with a modifier.
    It can roll advantage (2 dice take the higher), disadvantage (2 dice take the lower).
    It can also roll 4 dice and drop the lowest.

    File will
      Display Dice & max number or number last rolled
      Slider to select dice type
        Only gives options for dice used in D&D
        Should show dice at max number before roll
      Logic for Roll button
      Takes info from Drop menu
        Prevent multiple buttons in drop menu
      Populate result box
 */

function roll_dice(){
  let dice_type = Number(document.getElementById("dice-type").value);
  let number_of_dice = Number(document.getElementById("how-many-dice").value);
  //will eventually add result from drop menu here
  basic_roll(dice_type, number_of_dice);
}//roll_dice

function basic_roll(dice_type, number_of_dice){
  let current_number = roll(dice_type);
  let final_number = current_number;
  let result = String(current_number);
  for(let x = 0; x < number_of_dice - 1; x++){
    current_number = roll(dice_type);
    result = result + " + " + String(current_number);
    final_number = current_number + final_number;
  }
  result = result + " = " + String(final_number);
  document.getElementById("roll-output").innerText = result;
}

function roll(dice){
  return Math.floor(Math.random() * dice) + 1;
}//roll
