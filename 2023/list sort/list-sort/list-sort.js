/** 
 * list-sort.js
 * by Nathan Pelletier
 * Started: December 26, 2022
 * 
 * Little idea for a stand alone library:
 *   When user clicks on a class="sortable" element the list reforms, sorted alphabetically.
 *    Probably changes class to class = "sort-down"
 *    Change all other classes of sort-down or sort-up to sortable
 *    If the user clicks again the list sorts reverse alphabetically.
 *    Probably change class to class = "sort-up"
 *    3rd click on same element returns list to generic sorting based on data.
*/

//Classes and Functions//
class ListSort{
    constructor(table){
        //table needs to remain unchanged while the html changes
        this.table = table;
    }//constructor

    //initial click to sort down

    //sort-down to sort-up

    //sort-up to return to initial sort
}//ListSort



//EVENTS//

//onclick table header without class

//onclick table header with sort-down class

//onclick table header with sort-up class