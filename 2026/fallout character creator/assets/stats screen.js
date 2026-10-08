/** stats screen.js
    by Nathan Pelletier
    started September 27 2026

    Based off fallout 1. Website asks user for SPECIAL stats. 
    Creates a character sheet for a user based off their SPECIAL. 
    Second webpage will then ask the user to select 3 stats they are good at and for 2 optional perks.

    File will:
      Govern 2nd page stats:
        Link SPECIAL to stats
        Link custom perks to stats
        Allow 3 stats to be increased

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


class stat_screen{
  constructor(ST, PE, EN, CH, IN, AG, LK){
    this.ST = ST;
    this.PE = PE;
    this.EN = EN;
    this.CH = CH;
    this.IN = IN;
    this.AG = AG;
    this.LK = LK;
    
    this.stat_counter = 3;
    this.perk_counter = 2;
  }


}//stat_screen