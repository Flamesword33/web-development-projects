/**npc-tracker.html
    by Nathan Pelletier
    started May 13 2024

    A simple window to keep track of a NPC combatant in D&D 5e
    Will use in line javascript, should be a stand alone html
    I'm not going to bother to make this look nice with css

    Program will
      Give user a text box for name                                                 -->DONE
        rename page title to said name                                              -->DONE
      Give user a int box for max hp                                                -->DONE
        give user a secondary box and + - buttons to change hp                      
        Will not go over max hp                                                     -->Desided not to, will use as temp hp
        ?auto fill hp based on inputing max?                                        
        ?secondary box for temp hp?                                                 
        ?Close window upon going to 0 hp?                                           -->DONE
        ?typing negative number or +x will add or subtract from current value?      -->DONE
        ?health bar?                                                                -->Next
      Give int box for AC                                                           -->DONE
      Give int box for modifier to hit with weapon                                  -->DONE
        ? + button to add more attacks?
      Give int box for damage modifier                                              -->DONE
        ?damage type text box?
      Give drop down for damage dice                                                -->DONE
      Roll attack button                                                            -->DONE
      Output roll to hit and damage                                                 -->DONE
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

    Bugs:
        symbols such as space must be scrubbed from the input, currently give NaN error

*/

/////////
//GLOBALS
/** The previous Current hp value */
let Current_Hp = 0;

/** attack()
 *  scrubs page for battle data using id's
 *  Deligates tasks, rolling to hit and rolling damage
 *  Outputs a final result to page
 */
function attack(){
    //Int
    let hit_mod = document.getElementById("hitmod").value;
    if(hit_mod == "")
        hit_mod = 0;
    let dmg_mod = document.getElementById("dmgmod").value;
    if(dmg_mod == "")
        dmg_mod = 0;
    let num_dice = document.getElementById("numdice").value;
    if(num_dice == "")
        num_dice = 1;
    let dice = document.getElementById("dice").value; 

    //let text1 = "";
    //window.alert(text1.concat(String(hit_mod),"-",String(dmg_mod),"-", String(num_dice), "-", String(dice)));
    
    let hit = roll_to_hit(hit_mod);
    let damage = roll_dice(num_dice, dice, dmg_mod);
    //window.alert(text1.concat(String(hit), "-", String(damage)));
    
    display_result(hit, damage);
}//attack

/** roll_to_hit()
 *  using random, function picks a number between 1 and 20 and adds the hitmod to it before returning
 * @param {int} hitmod 
 * @returns {int}
 */
function roll_to_hit(hitmod){
    //should roll a number between 1 & 20
    let d20 = Math.floor(Math.random() * 20) + 1;
    let result = d20 + Number(hitmod);
    return result;
}//roll_to_hit

/** roll_dice()
 * rolls multiple dice and returns the result + the modifier
 * @param {int} number_of_dice 
 * @param {string} dice 
 * @param {int} modifier 
 * @returns {int}
 */
function roll_dice(number_of_dice, dice, modifier){
    let result = Number(modifier);

    for(let x = 0; x < Number(number_of_dice); x++){
        //window.alert(String(x));
        result = result + roll(dice);
    }
    
    return result;
}//roll_dice

function display_result(hit, damage){
    let text1 = "";
    window.alert(text1.concat(hit, " to hit. \n", damage, " damage."));
}

function roll(dice){
    if(dice == 0)
        return 0;
    else{
        let roll = Math.floor(Math.random() * Number(dice)) + 1;
        return roll;
    }       
}//roll


//Second event: if id="cname" has changed value --> change title to new value
function change_title(){
    let current_name = document.getElementById("cname").value;
    //alert(current_name);
    document.title = current_name;
}//change_title


//third event: if current hp == 0 close window
function hp_check(){
    let hp = document.getElementById("chp").value;
    //a safety check to make sure the page is setup before closing the window
    let max_hp = document.getElementById("mhp").value;
    
    if(hp != ""){
        hp = add_hp(hp);
        if(hp <= 0 && max_hp != ""){
            window.close();
        }
        Current_Hp = hp;
    }
}//hp_check

/** add_hp()
 * Interprets a string number, looks for +x or -x and adds said value to previous health recorded
 * @param {string} hp 
 * @returns {int}
 */
function add_hp(hp){
    //if first char is + or -
    let first_char = hp.charAt(0);
    if(first_char == "+" || first_char == "-"){
        hp = Current_Hp + Number(hp);
    }
    document.getElementById("chp").value = hp;
    return Number(hp);
}//add_hp