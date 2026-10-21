/** stats screen.js
    by Nathan Pelletier
    started September 27 2026

    Based off fallout 1. Website asks user for SPECIAL stats. 
    Creates a character sheet for a user based off their SPECIAL. 
    Second webpage will then ask the user to select 3 stats they are good at and for 2 optional perks.

    File will:
      Govern 2nd page stats:           --DONE
        Link SPECIAL to stats          --DONE
        Link perks to stats            --DONE
        Allow 3 stats to be increased  --DONE
        Prevent more than 3 stat boxes from being checked --DONE
        Prevent more than 2 perks from being checked      --DONE
      Swap in correct text for each stat and perk
    Skills:
    ======
               === COMBAT ===                               ID
Pistols & Shotguns:    Agility x 2 + 15                     pistol
Machine guns & Rifles: Perception + Agility 15              rifle
Big Guns:              Perception + Strength + 15           big
Energy Weapons:        Perception + Intelligence + 15       energy
One handed Melee:      Strength + Agility + 15              one-hand
Two handed Melee:      Strength x 2 + 15                    two-hand
Unarmed:               Strength + Endurance + 15            unarmed
Throwing:              Strength + Perception + 15           throw
Traps/Mines:           Intelligence + Luck + 15             trap

             === ROLE PLAY ===
First Aid:      Perception + Intelligence + 30              first-aid
Doctor:         Perception/2 + Intelligence + 5             doctor
Sneak:          Agility + 20                                sneak
Lockpick:       (Perception + Agility)/2 + 15               lockpick
Pickpocket:     (Perception + Luck)/2 + 10                  steal
Science:        Intelligence*2 + 10                         science
Repair:         Perception + Intelligence + 10              repair
Speech:         Charisma*2 + 15                             speech
Barter:         Charisma x 2 + Intelligence + 5             barter
Gambling:       Luck x 3 + 5                                gamble
Survival:       Endurance + Intelligence + 15               survive

    === BUGS ===
       
 */

//needs to create event on window start, said event:
//  reads url and sets stats on page

// let x = document.getvalue...;
// x.checked == true/false;

/////////
//GLOBALS
var Stat_points = 3;  
var Perk_points = 2;

/**main()
 * Creates a new character with stats from the url
 * sets up the html page combat and roleplaying stats
 * @requires get_stats_from_url(stats) 
 * @requires set_combat() 
 * @requires set_role_play()
 */
function main(){
  //[10,10,10,10,10,10,10]; test max
  //[1,1,1,1,1,1,1];        test min
  let stats = [5,5,5,5,5,5,5];
  stats = get_stats_from_url(stats);
  let character = new stat_screen(stats[0],stats[1],stats[2],stats[3],stats[4],stats[5],stats[6]);
  character.set_combat();
  character.set_role_play();
}//main

/**get_stats_from_url(stats)
 * Reads the url after the ? for ints and returns them
 * Expects 
 *   url to be formatted as: ?var1=5&var2=4...
 *   stats to be less than or equal in size to the url variables 
 * 
 * @param {list[int]} stats: a int list 
 * @returns {list[int]} stats: a filled out list of ints
 */
function get_stats_from_url(stats){
  let url = window.location.search;
  let key_value = ["",""];
  //this will turn url into ?ST=5&EN=5&...
  url = url.slice(1); //remove ?
  url = url.split('&');
  for(let x = 0; x<stats.length; x++){
    key_value = url[x].split('=');
    stats[x] = parseInt(key_value[1]); 
  }//for
  return stats;
}//get_stats_from_url

/**increase(id)
 * Expects <div><input type="checkbox"> </div>
 *         <div id="var">25</div>
 * Finds the given value and if the box is checked increses it by 20
 * Internal counter to 3, after that increse() prevents further checkboxes from activating
 * Unchecking boxes reduces given number by 20 and reduces the internal counter
 * @param {String} id: the html id of the stat 
 */
function increase(id){
  let current = parseInt(document.getElementById(id).innerHTML);
  let stat = document.getElementById(id)
  let check_box = stat.previousElementSibling.firstChild;
  let is_increase = check_box.checked;

  if(is_increase == true){
    if(Stat_points > 0){
      document.getElementById(id).innerHTML = current + 20;
      Stat_points = Stat_points - 1;
    }
    else if(Stat_points == 0){
      check_box.checked = false;
    }
  }//box checked
  else if(is_increase == false){
    document.getElementById(id).innerHTML = current - 20;
    Stat_points = Stat_points + 1;
  }//box unchecked
  //change_text(id);
}//increase

function check_perks(id){
  let perk = document.getElementById(id)
  let is_checked = perk.checked;

  if(is_checked == true){
    if(Perk_points > 0){
      Perk_points = Perk_points - 1;
    }
    else if(Perk_points == 0){
      perk.checked = false;
    }
  }//box checked
  else if(is_checked == false){
    Perk_points = Perk_points + 1;
  }//box unchecked
  //change_text(id);
}//check_perks


class stat_screen{
  constructor(ST, PE, EN, CH, IN, AG, LK){
    this.ST = ST;
    this.PE = PE;
    this.EN = EN;
    this.CH = CH;
    this.IN = IN;
    this.AG = AG;
    this.LK = LK;
    //copy to remember in case of changes
    this.original_CH = CH;
  }//constructor

  /**set_combat()
   * populates information about games combat stats
   * @requires set_cstat(string,int,int)
   */
  set_combat(){
    this.set_cstat("pistol", this.AG, this.AG);
    this.set_cstat("rifle", this.PE, this.AG);
    this.set_cstat("big", this.PE, this.ST);
    this.set_cstat("energy", this.PE, this.IN);
    this.set_cstat("one-hand", this.ST, this.AG);
    this.set_cstat("two-hand", this.ST, this.ST);
    this.set_cstat("unarmed", this.ST, this.EN);
    this.set_cstat("throw", this.ST, this.PE);
    this.set_cstat("trap", this.IN, this.LK);
  }//set_combat

  /**set_cstat(id, stat1, stat2)
   * Adds 2 stats and 15, then saves it to the html via an id
   * @param {string} id: html id string 
   * @param {int} stat1 
   * @param {int} stat2 
   */
  set_cstat(id, stat1, stat2){
    let final = stat1 + stat2 + 15;
    document.getElementById(id).innerHTML = final;
  }//set_cstat

  /**set_role_play()
   * populates information about games role play stats
   * @requires set_rstat(string, int)
   */
  set_role_play(){
    this.set_rstat("first-aid", this.PE+this.IN+30);
    this.set_rstat("doctor", Math.floor(this.PE/2) + this.IN + 5);
    this.set_rstat("sneak", this.AG+20);
    this.set_rstat("lockpick", Math.floor((this.PE+this.AG)/2) +15);
    this.set_rstat("steal", Math.floor((this.PE+this.LK)/2) + 15);
    this.set_rstat("science", this.IN+this.IN+10);
    this.set_rstat("repair", this.PE+this.IN+10);
    this.set_rstat("speech", this.CH+this.CH+15);
    this.set_rstat("barter", this.CH+this.CH+this.IN+5);
    this.set_rstat("gamble", this.LK*3 + 5);
    this.set_rstat("survive", this.EN+this.IN+15);
  }

  /**set_rstat(id, stat)
   * Saves information to a given html id
   * @param {string} id: a html id 
   * @param {int} stat 
   */
  set_rstat(id, stat){
    document.getElementById(id).innerHTML = stat;
  }//set_rstat

  /**ghoul(is_ghoul)
   * Halves ghoul charisma and updates speech & barter
   * Resets non ghoul characters
   * @param {boolean} is_ghoul
   * @requires set_rstat(string,int) 
   */
  ghoul(is_ghoul){
    if(is_ghoul == true){
      this.CH = Math.floor(this.CH/2);
    }
    else if(is_ghoul == false){
      this.CH = this.original_CH;
    }
    this.set_rstat("speech", this.CH+this.CH+15);
    this.set_rstat("barter", this.CH+this.CH+this.IN+5);
  }

}//stat_screen