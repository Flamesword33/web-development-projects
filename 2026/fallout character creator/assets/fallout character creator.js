/** fallout character creator.js
    by Nathan Pelletier
    started July 30 2026

    Based off fallout 1. Website asks user for SPECIAL stats. 
    Creates a character sheet for a user based off their SPECIAL. 
    Second webpage will then ask the user to select 3 stats they are good at and for 2 optional perks.

    File will:
      Govern SPECIAL stats and point pool:
        Set a max of 10 for all SPECIAL stats
        Set a min of 1 for all SPECIAL stats
        Set min of 0 in the point pool
        Link point pool decrease with SPECIAL stat increases
      Govern 2nd page stats:
        Link SPECIAL to stats
        Link custom perks to stats
        Allow 3 stats to be increased
 */

/**check_special()
 * Checks each special for a value between 0 and 10
 * Checks point pool for value 0 and above
 */  
function check_special(){

}

/**minus_sign(int special)
 * Checks if Special value above 1
 * Reduces given special value by 1
 * Increases point total by 1 
 */
function minus_sign(special){

}

/**plus_sign(int special)
 * Checks if Special value is below 10
 * Checks if point value is greater than 0
 * Increases Special value by 1
 * Reduces point value by 1
 */
function plus_sign(special){
  
}

//let enemy_count = Number(document.getElementById("enemy-count").value);
//document.getElementById(id).style.property = new style