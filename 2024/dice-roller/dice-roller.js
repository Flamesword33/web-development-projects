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

/** roll_dice()
 * Function grabs 2 numbers by id: "dice-type" & "how-many-dice"
 * Function then rolls "how-many-dice" with "dice-type" sides
 */
function roll_dice(){
  let dice_type = Number(document.getElementById("dice-type").value);
  let number_of_dice = Number(document.getElementById("how-many-dice").value);
  //will eventually add result from drop menu here
  basic_roll(dice_type, number_of_dice);
}//roll_dice

/** basic_roll()
 * Performs a simple roll with dice_type sides and number_of_dice times
 * It records every roll along the way and after totaling the result it outputs it to 
 * a text element of id: "roll-output"
 * @param {Number} dice_type number of faces on a dice
 * @param {Number} number_of_dice 
 */
function basic_roll(dice_type, number_of_dice){
  let current_number = roll(dice_type);
  let final_number = current_number;
  let result = String(current_number);
  for(let x = 0; x < number_of_dice - 1; x++){
    current_number = roll(dice_type);
    result = result + " + " + String(current_number);
    final_number = current_number + final_number;
  }
  change_dice_image(dice_type, current_number);
  result = result + " = " + String(final_number);
  document.getElementById("roll-output").innerText = result;
}//basic_roll

/** roll()
 * Takes a max value and returns a random whole number result from 1-max
 * @param {Number} dice number of faces on a dice
 * @returns {Number}
 */
function roll(dice){
  return Math.floor(Math.random() * dice) + 1;
}//roll

function change_dice_image(dice_type, roll){
  document.getElementById("dice-image").style.backgroundImage = 
    "url('../dice-roller/assets/d" + String(dice_type) + "-" + String(roll) + ".png')";
}//change_dice_image

//limit #'s on selector (maybe)
/**update_dice_type()
 * Looks up the dice-type slider and updates the dice background image to fit
 */
function update_dice_type(){
  let dice_type = document.getElementById("dice-type").value;
  document.getElementById("dice-image").style.backgroundImage = 
    "url('../dice-roller/assets/d" + dice_type + "-" + dice_type + ".png')";
}//update_dice_type

//document.getElementById(id).style.property = new style