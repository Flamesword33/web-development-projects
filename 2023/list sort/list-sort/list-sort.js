/** 
 * list-sort.js
 * by Nathan Pelletier
 * Started: December 26, 2022
 * 
 * Little idea for a stand alone library:
 *   When user clicks on a class="sortable" element the list reforms, sorted alphabetically.
 *    Change clicked <hr> 
 *      class = "sort-down" onclick = "sort-up"
 *      class = "sort-up"   onclick = "revert-sort"
 *      
 *    Change all other classes of sort-down or sort-up to sortable
 *    If the user clicks again the list sorts reverse alphabetically.
 *    Probably change class to class = "sort-up"
 *    3rd click on same element returns list to generic sorting based on data.
 * 
 *   Storage
 *     2 matrix's, one remembers initial sorting and one is sorted based on column
 * 
 * 
 *   Citations
 *     [1] https://stackoverflow.com/questions/728360/how-do-i-correctly-clone-a-javascript-object
*/


/////////////////////////
//Classes and Functions//
/** Object takes a table and sorts it 
 *   Needs to be setup externally with onclick event
 *   Once setup will loop based on how many times a given table header is clicked
 *     Sorts a given table row alphabetically/numerically (sort_down)
 *     Sorts a given table row reverse alphabetically/numerically (sort_up)
 *     Reverts a given table to how it first entered the object
 *   WARNING: will overwrite all previous onclick functions on all table header tags <th>
 */
class ListSort{
    /**
     * @param {object} table - a given <table> tag 
     */
    constructor(table){
        this.table = table;
        //code to clone an object [1]
        //Used to keep a copy of current table state
        const static_table = structuredClone(table);
        this.static_table = static_table;
    }//constructor

    /**
     * Checks all table rows for changes and reverts them before entering sort_down
     * @param {object} header - a given <th> tag object
     */
    first_click(header){
        this.check_table_for_changes();
        this.sort_down(header);
    }//first_click

    /**
     * Takes a unsorted row and sorts given row alphabetically/numerically
     * Also changes the table headers onclick to sort_up and its class to sort-down
     * @param {object} header - a given <th> tag object
     */
    sort_down(header){
        let list = get_list_from_header(header);
        list.sort();
        sort_table_to_fit_list(list);
        header.onclick = this.sort_up(header);
        header.class.toggle("sort-down");
    }//sort_down

    //sort-down to sort-up
    /**
     * Given a row that is sorted down, sort_up will sort reverse alphabetically/numerically
     * Also changes the table headers onclick to revert_table and class to sort-up
     * @param {object} header - a given <th> tag object
     */
    sort_up(header){
        let list = get_list_from_header(header);
        list.reverse();
        sort_table_to_fit_list(list);
        header.onclick = this.revert_table(header);
        header.class.toggle("sort-down");
        header.class.toggle("sort-up");
    }//sort_up

    //sort-up to return to initial sort
    /**
     * Given a row that is sorted up, revert_table will revert the table to its starting
     * order. 
     * Removes class = "sort-up"
     * Changes onclick to sort_down
     * @param {object} header - a given <th> tag object
     */
    revert_table(header){
        //revert the table header
        header.class.toggle("sort-up");
        header.onclick = this.sort_down(header);
        //revert table
        this.check_table_for_changes();
    }//revert_table

    /**
     * Looks through elements of the objects table and reverts changed elements
     */
    check_table_for_changes(){
        let table_data = this.table.getElementsByTagName("td");
        let original_data = this.static_table.getElementsByTagName("td");
        let counter;

        for(counter = 0; counter < table_data.length; counter++){
            if(table_data[counter].innerHTML != original_data[counter].innerHTML){
                table_data[counter].innerHTML = original_data[counter].innerHTML;
            }//if table data has changed
        }//for each

        ///////////////////////////////////
        //Needs to revert onclick for all headers

        ///////////////////////////////////////
        //Needs to check all headers class for sort-down and sort-up

    }//check_table_for_changes

    get_list_from_header(header){
        let list = []

        return list;
    }//get_list_from_header

    sort_table_to_fit_list(list){

    }//sort_table_to_fit_list
}//ListSort


//////////
//EVENTS//
window.addEventListener("load", function(){
    inital_sort_event(document.getElementsByTagName("table"));
});//window.onload

//onclick table header without class
function inital_sort_event(tables){
    for(current_table in tables){
        //need to setup object ListSort here
        let table = new ListSort(current_table);
        headers = current_table.getElementsByTagName("th");
        for(current_header in headers){
            current_header.onclick = table.first_click(current_header);
        }//for each header
    }//for each table
    
}//initial_sort_event
