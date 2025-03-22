/** mass-combat-sim.html
    by Nathan Pelletier
    started January 22 2025

    A program to roll a bunch of dice. It will simplify a turn of combat in D&D 5e where many attackers with the same attack hit a single target.
    It will have a way to input how many attacks, their modifier to hit, the damage they do and the targets AC (Armor class).
    It will then output a damage number for each successful attack and a final damage total. 
    In the case of natural 20's it will roll another set of damage dice.

    File will
      Display Dice with max number     --DONE
        + modifier beside
      Slider to select dice type       --DONE
        Only gives options for dice used in D&D
      Logic for Roll button
      Takes info from
        Number of attacks 
        AC box
        modifier to hit
        Drop menu
        dice sliders                   --DONE
      Populate result box
        Sum(1 to number of attacks)[if (AC-modifier to hit)<=random(20, drop_menu) then roll_dice(dice_type, number_of_dice)]
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
  change_dice_image(dice_type, final_number);
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
  if(dice_type == 2){
    document.getElementById("dice-image").style.backgroundImage = 
      "url('../mass-combat-sim/assets/d2-" + String(roll) + ".png')";
    document.getElementById("dice-image").firstChild.innerText = "";
  }
  else if(dice_type < 14 || dice_type == 20){
    document.getElementById("dice-image").style.backgroundImage = 
      "url('../mass-combat-sim/assets/d" + String(dice_type) + ".png')";
    document.getElementById("dice-image").firstChild.innerText = roll;
  }
  else{
    document.getElementById("dice-image").style.backgroundImage = "url('../mass-combat-sim/assets/d1.png')";
    document.getElementById("dice-image").firstChild.innerText = roll;
  }
}//change_dice_image

//limit #'s on selector (maybe)
/**update_dice_type()
 * Looks up the dice-type slider and updates the dice background image to fit
 */
function update_dice_type(){
  let dice_type = document.getElementById("dice-type").value;
  if(Number(dice_type) == 2){
    document.getElementById("dice-image").style.backgroundImage = 
      "url('../mass-combat-sim/assets/d2-2.png')";
    document.getElementById("dice-image").firstChild.innerText = "";
  }
  else if(Number(dice_type) < 14 || Number(dice_type) == 20){
    document.getElementById("dice-image").style.backgroundImage = 
      "url('../mass-combat-sim/assets/d" + dice_type + ".png')";
    document.getElementById("dice-image").firstChild.innerText = dice_type;
  }
  else{
    document.getElementById("dice-image").style.backgroundImage = "url('../mass-combat-sim/assets/d1.png')";
    document.getElementById("dice-image").firstChild.innerText = dice_type;
  }
}//update_dice_type

//document.getElementById(id).style.property = new style