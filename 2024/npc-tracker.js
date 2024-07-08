/**npc-tracker.html
    by Nathan Pelletier
    started May 13 2024

    A simple window to keep track of a NPC combatant in D&D 5e
    Will use in line javascript, should be a stand alone html
    I'm not going to bother to make this look nice with css

    Program will
      Give user a text box for name 
        rename page title to said name
      Give user a int box for max hp
        give user a secondary box and + - buttons to change hp
        Will not go over max hp
        ?auto fill hp based on inputing max?
        ?secondary box for temp hp?
        ?Close window upon going to 0 hp?
        ?typing negative number or +x will add or subtract from current value?
      Give int box for AC
      Give int box for modifier to hit with weapon
        ? + button to add more attacks?
      Give int box for damage modifier
        ?damage type text box?
      Give drop down for damage dice
      Roll attack button
      Output roll to hit and damage
        ?Output damage type?

    
    HTML ID REFERENCE
        cname : character name 
        chp : current hit points 
        mhp : max hit points 
        ac : armor class
        hitmod : bonus to hit an opponent with a d20 roll 
        dmgmod : bonus damage per hit 
        numdice : number of dice to roll
        dice : type of dice to be rolled (string values: none, d4, d6, d8, d10, d12, d20, d100)
*/

/** attack()
 *  scrubs page for battle data using id's
 *  Deligates tasks, rolling to hit and rolling damage
 *  Outputs a final result to page
 */
function attack(){
    //Int
    const hit_mod = document.getElementById("hitmod").innerHTML;
    const dmg_mod = document.getElementById("dmgmod").innerHTML;
    const num_dice = document.getElementById("numdice").innerHTML;
    //String
    const dice = document.getElementById("dice").innerHTML; 
    
    const roll_to_hit = roll_to_hit(hit_mod);
    const damage = roll_damage(dmg_mod, num_dice, dice);
    
    display_result(roll_to_hit, damage);
}//attack


/** roll_to_hit()
 *  using random, function picks a number between 1 and 20 and adds the hitmod to it before returning
 * @param {int} hitmod 
 * @returns {int}
 */
function roll_to_hit(hitmod){
    //should roll a number between 1 & 20
    let d20 = Math.floor(Math.random() * 20) + 1;

    if(typeof(hitmod) == typeof(0)){
        let result = d20 + hitmod;
        return result;
    }//if hitmod is a number

    else{
        return d20;
    }//else hitmod is not a number
}//roll_to_hit

/** roll_dice()
 * rolls multiple dice and returns the result + the modifier
 * @param {int} number_of_dice 
 * @param {string} dice 
 * @param {int} modifier 
 * @returns {int}
 */
function roll_dice(number_of_dice, dice, modifier){
    if(typeof(number_of_dice) != typeof(0))
        number_of_dice = 1;
    if(dice == "none")
        dice = 0;
    if(typeof(modifier) != typeof(0))
        modifier = 0;
    dice = determine_dice(dice);
    let result = modifier;

    for(let x = 0; x < number_of_dice; x++){
        result = roll(dice) + result;
    }
    
    return result;
}//roll_damage
