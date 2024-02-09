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
*/


/////////////////////////
//Classes and Functions//
class ListSort{
    constructor(table){
        //table needs to remain unchanged while the html changes
        this.table = table;
        this.current_table = this.table;
    }//constructor

    //initial click to sort down
    normal_to_sort_down(header){
        let list = get_list_from_header(header);
        list.sort();
        sort_table_to_fit_list(list);
        header.onclick = current_sort.sort_down_to_sort_up(header);
        header.class.toggle("sort-down");
    }//normal_to_sort_down

    //sort-down to sort-up
    sort_down_to_sort_up(header){
        let list = get_list_from_header(header);
        list.reverse();
        sort_table_to_fit_list(list);
        header.onclick = current_sort.revert_table(header);
        header.class.toggle("sort-down");
        header.class.toggle("sort-up");
    }//sort_down_to_sort_up

    //sort-up to return to initial sort
    revert_table(header){
        //revert the table header
        header.class.toggle("sort-up");
        header.onclick = current_sort.normal_to_sort_down(header);
    }//revert_table

    get_list_from_header(header){

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
        let current_sort = new ListSort(current_table);
        headers = current_table.getElementsByTagName("th");
        for(current_header in headers){
            current_header.onclick = current_sort.normal_to_sort_down(current_header);
        }//for each header
    }//for each table
    
}//initial_sort_event
