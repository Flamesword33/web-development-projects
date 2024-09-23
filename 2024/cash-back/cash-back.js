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
 */

window.onload = function() {
  //meta_code();
  const total = random_num();
  const payed = random_num() + total;
  let CashRegister = new CashRegister(total, payed);
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

class CashRegister{ 
  tally = 0;

  constructor(total, payed){
    this.total = total;
    this.payed = payed;
    this.owed = payed - total;
    this.setup_page();
  }

  setup_page(){
    document.getElementById("total").innerHTML = this.total;
    document.getElementById("customer-payed").innerHTML = this.payed;
  }

  add(amount){
    this.tally += amount;
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

  }

}