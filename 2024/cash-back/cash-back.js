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
  meta_code();
};

function meta_code(){
  const coin_name = ["nickle", "dime", "quarter", "dollar", "tunie", "5 dollar", "10 dollar", "20 dollar", "50 dollar", "100 dollar"];
  const coin_value = ["0.05", "0.10", "0.25", "1", "2", "5", "10", "20", "50", "100"];
  for(let i=0; i < 12; i++){
    let temp_string = "<img src=\"assets/" + coin_name[i] + ".png\" onclick=\"CashRegister.add(" + coin_value[i] + ")\">";
    window.alert(temp_string);
    console.log(temp_string);
  }
}//meta_code