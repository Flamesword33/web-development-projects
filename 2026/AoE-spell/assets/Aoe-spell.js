/** Aoe-spell.js
    by Nathan Pelletier
    started January 3 2026

    A program to roll a bunch of dice. It is here to simplify if multiple enemies are hit by an area of effect.
    In D&D a DC (difficulty class) is given as a number to beat via rolls. Characters then make a roll based on a stat
    with a given modifier. d20+X vs DC: Y. If they hit a higher number than the DC the character takes 1/2 damage 
    otherwise they take full damage. Normally in tabletop games 1 damage roll is given for the group. 
    In this sim I will give unique rolls for all effected.

    This program needs a way to diplay successful saves (maybe different color?).
    The final result needs to be each individual characters damage total. 

    File will


    Only need to change:
      mass_combat_against_AC()
      
 */

/** roll_dice(int)
 * Function grabs an int by id: "dice-type" & "how-many-dice"
 * Function then rolls "how-many-dice" with "dice-type" sides
 * @param {Number} number_of_hits how many times damage dice must be rolled
 */
function roll_dice(number_of_hits){
  let dice_type = Number(document.getElementById("dice-type").value);
  let number_of_dice = Number(document.getElementById("how-many-dice").value);
  //will eventually add result from drop menu here
  basic_roll(dice_type, number_of_dice, number_of_hits);
}//roll_dice

/** basic_roll()
 * Performs a simple roll with dice_type sides and number_of_dice times
 * It records every roll along the way and after totaling the result it outputs it to 
 * a text element of id: "roll-output"
 * @param {Number} dice_type # of faces on a dice
 * @param {Number} number_of_dice # of times to roll a dice_type per hit
 * @param {Number} number_of_hits how many attacks were made
 */
function basic_roll(dice_type, number_of_dice, number_of_hits){
  let dmg_mod = Number(document.getElementById("dmg-mod").value) * number_of_hits;
  let current_number = 0;
  let final_number = 0;
  let result = "";
  for(let a=0; a<number_of_hits; a++){
    result = result + "(";
    for(let x = 0; x < number_of_dice; x++){
      current_number = roll(dice_type);
      result = result + " + " + String(current_number);
      final_number = final_number + current_number;
    }
    result = result + ")";
  }
  if(dmg_mod != 0){
    final_number = final_number + dmg_mod;
    result = result + " + " + Number(dmg_mod);
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


function mass_combat_against_DC(){
  let enemy_count = Number(document.getElementById("enemy-count").value);
  let DC = Number(document.getElementById("DC").value);
  let hit_mod = Number(document.getElementById("hit-mod").value);
  let number_of_hits = 0;
  let current_roll = 0;
  for(let x=0; x<enemy_count; x++){
    current_roll = roll(20);
    if(current_roll == 20){
      number_of_hits += 2;
      continue;
    }
    if(current_roll == 1){
      continue;
    }
    if(current_roll + hit_mod >= DC){
      number_of_hits += 1;
    }
  }
  roll_dice(number_of_hits);
}//mass_combat_agaisnt_DC

//document.getElementById(id).style.property = new style