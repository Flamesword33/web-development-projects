/** fallout character creator.js
    by Nathan Pelletier
    started July 30 2026

    Based off fallout 1. Website asks user for SPECIAL stats. 
    Creates a character sheet for a user based off their SPECIAL. 
    Second webpage will then ask the user to select 3 stats they are good at and for 2 optional perks.

    File will:
      Govern SPECIAL stats and point pool:
        Set a max of 10 for all SPECIAL stats                  --> DONE
        Set a min of 1 for all SPECIAL stats                   --> DONE
        Set min of 0 in the point pool                         --> DONE
        Link point pool decrease with SPECIAL stat increases   --> DONE was overcomplicating
      Govern current page stats: 
        Link SPECIAL to HP
        Link SPECIAL to AP
      Govern 2nd page stats:
        Link SPECIAL to stats
        Link custom perks to stats
        Allow 3 stats to be increased
 */

/**minus_sign(int special)
 * Checks if Special value above 1
 * Reduces given special value by 1
 * Increases point total by 1 
 */
function minus_sign(special){
  let stat = parseInt(document.getElementById(special).innerHTML);
  let points = parseInt(document.getElementById("points-left").innerHTML);

  if(stat > 1){
    stat = stat - 1;
    points = points + 1;
  }

  document.getElementById(special).innerHTML = stat;
  document.getElementById("points-left").innerHTML = points;
  set_sub_stats(special, stat);
}//minus_sign

/**plus_sign(int special)
 * Checks if Special value is below 10
 * Checks if point value is greater than 0
 * Increases Special value by 1
 * Reduces point value by 1
 */
function plus_sign(special){
  let stat = parseInt(document.getElementById(special).innerHTML);
  let points = parseInt(document.getElementById("points-left").innerHTML);

  if(points > 0 && stat < 10){
    stat = stat + 1;
    points = points - 1;
  }

  document.getElementById(special).innerHTML = stat;
  document.getElementById("points-left").innerHTML = points;
  set_sub_stats(special);
}//plus_sign

function set_sub_stats(special){
  //if HP changed
  if (special == "ST" || special == "EN"){
    set_hp();
  } 

  //if AP changed
  if (special == "AG"){
    set_ap();
  }
}//set_sub_stats

function set_hp(){
  let Strength = parseInt(document.getElementById("ST").innerHTML);
  let Endurance = parseInt(document.getElementById("EN").innerHTML);
  let HP = 15 + Strength + (2 * Endurance)

  //https://stackoverflow.com/questions/7409478/replace-innerhtml-of-all-divs-with-same-class
  let divs = document.getElementsByClassName("hp");
  [].slice.call( divs ).forEach(function ( div ) {
    div.innerHTML = HP;
  });
}

function set_ap(){
  let Agility = parseInt(document.getElementById("AG").innerHTML);
  let AP = 5 + Math.floor(Agility/2)

  //https://stackoverflow.com/questions/7409478/replace-innerhtml-of-all-divs-with-same-class
  let divs = document.getElementsByClassName("ap");
  [].slice.call( divs ).forEach(function ( div ) {
    div.innerHTML = AP;
  });
}

/**next_page()
 * sets the url for the next page with the current SPECIAL values
 * jumps to the next html page
 * <!--href="../fallout character creator/assets/stats screen.html?ST=5&PE=5&EN=5&CH=5&IN=5&AG=5&LK=5"-->
 */
function next_page(){

}

//let enemy_count = Number(document.getElementById("enemy-count").value);
//document.getElementById(id).style.property = new style