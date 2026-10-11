/** stats screen.js
    by Nathan Pelletier
    started September 27 2026

    Based off fallout 1. Website asks user for SPECIAL stats. 
    Creates a character sheet for a user based off their SPECIAL. 
    Second webpage will then ask the user to select 3 stats they are good at and for 2 optional perks.

    File will:
      Govern 2nd page stats:           --DONE
        Link SPECIAL to stats          --DONE
        Link custom perks to stats     
        Allow 3 stats to be increased
        Prevent more than 3 stat boxes from being checked
        Prevent more than 2 perks from being checked
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
let Stat_points = 3;
let Perk_points = 2;

function main(){
  //[10,10,10,10,10,10,10]; test max
  //[1,1,1,1,1,1,1];        test min
  let stats = [5,5,5,5,5,5,5];
  stats = get_stats_from_url(stats);
  let character = new stat_screen(stats[0],stats[1],stats[2],stats[3],stats[4],stats[5],stats[6]);
  character.set_combat();
  character.set_role_play();
}

function get_stats_from_url(stats){
  let url = window.location.search;
  let key_value = ["",""];
  //this will turn url into ?ST=5&EN=5&...
  url = url.slice(1); //remove ?
  url = url.split('&');
  for(let x = 0; x<stats.length; x++){
    key_value = url[x].split('=');
    stats[x] = parseInt(key_value[1]); 
  }
  return stats;
}

class stat_screen{
  constructor(ST, PE, EN, CH, IN, AG, LK){
    this.ST = ST;
    this.PE = PE;
    this.EN = EN;
    this.CH = CH;
    this.IN = IN;
    this.AG = AG;
    this.LK = LK;
  }

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
  }

  set_cstat(id, stat1, stat2){
    let final = stat1 + stat2 + 15;
    document.getElementById(id).innerHTML = final;
  }

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

  set_rstat(id, stat){
    document.getElementById(id).innerHTML = stat;
  }


}//stat_screen