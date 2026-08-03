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



//let enemy_count = Number(document.getElementById("enemy-count").value);
//document.getElementById(id).style.property = new style