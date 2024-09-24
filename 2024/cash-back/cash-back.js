/** cash-back.js
    by Nathan Pelletier
    Started September 9 2024
    
    An app to learn to count back canadian change.
    
    Screen outputs 2 numbers, an amount payed and an amount owed
    User interacts with buttons, each a different coin value, a reset button and a submit button
    User is alerted by how long it took them and how much they were off by
    Canadians lack a 1 cent so numbers will be rounded when calculating how much is owed back
    
    This file should:
      On file creation:
        Generate a random number between $0.05 - $500
        Generate a second random number greater than the first
          only using coin values greater than the first amount
        Compute a total owed by rounding ammount owed and then subtracting amount payed from owed
        Start a timer
      On coin button press:
        Add amount to hidden total
      On reset button press:
        hidden total becomes 0
      On submit button press:
        compare hidden total to total owed
        Output to alert timer and total - total owed


    Current bugs:
      Page thinks that I owe customer 0 dollars regardless
        142, 91
 */

let my_register;

window.onload = function() {
  //meta_code();
  const total = random_num(500);
  const payed = addition_round(random_num(500) + total);
  setup_page(total, payed);
  my_register = new CashRegister(total, payed);
};

function meta_code(){
  const coin_name = ["nickle", "dime", "quarter", "loonie", "toonie", 
    "5 dollar", "10 dollar", "20 dollar", "50 dollar", "100 dollar"];
  const coin_value = ["0.05", "0.10", "0.25", "1", "2", "5", "10", "20", "50", "100"];
  for(let i=0; i < coin_name.length; i++){
    let temp_string = "<img src=\"assets/" + coin_name[i] + ".png\" onclick=\"CashRegister.add(" + coin_value[i] + ")\">";
    console.log(temp_string);
  }
}//meta_code

/**
 * Generates a random integer between 0 and max.
 * Said number has 2 decimal places
 * @param {int} max 
 * @returns {float}
 */
function random_num(max){
  let rand = Math.random();
  rand = rand * max * 100;
  rand = Math.round(rand);
  rand = rand / 100;
  return rand;
}//random_num

function setup_page(total, payed){
  document.getElementById("total").innerHTML = total;
  document.getElementById("customer-payed").innerHTML = payed;
}

function add(num){
  my_register.add(num);
}

function reset(){
  my_register.reset();
}

function submit(){
  my_register.submit();
}

function addition_round(unrounded){
  return (Math.round(unrounded * 100))/100;
}

/**
 * Rounds a numbers last digit to 0 or 5
 * @param {int} unrounded 
 * @returns {int}
 */
function custom_round(unrounded){
  let rounded = 0;
  let last_digit = unrounded % 10;
  switch(last_digit){
    case 0:
    case 5:
      rounded = unrounded;
      break;
    case 6:
    case 7:
      last_digit = last_digit - 5;
    case 1:
    case 2:
      rounded = unrounded - last_digit;
      break;
    case 8:
    case 9:
      last_digit = last_digit - 5;
    case 3:
    case 4:
      last_digit = 5 - last_digit;
      rounded = unrounded + last_digit;
      break;
  }
  return rounded;
}//custom_round

class CashRegister{ 
  tally = 0;

  constructor(total, payed){
    this.total = total;
    this.payed = payed;
    this.owed = payed - total;
  }

  add(amount){
    this.tally = addition_round(this.tally + amount);
    this.set_page_tally();
  }

  reset(){
    this.tally = 0;
    this.set_page_tally();
  }

  set_page_tally(){
    document.getElementById("running-tally").innerHTML = this.tally;
  }

  submit(){
    let owed = custom_round(this.owed);
    if(this.tally == owed){
      window.alert("Good work!");
      window.location.reload();
    }
    else if(this.tally > owed){
      window.alert("You're giving them too much! Try again");
      this.reset();
    }
    else if(this.tally < owed){
      window.alert("Stop stealing from the customer.");
      this.reset();
    }
  }//submit

}//CashRegister