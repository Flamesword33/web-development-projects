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


/** The following code was from an attempt to write a sorting algorithm 
 * I got as far as number sorting but was then greeted with .sort() and .reverse()
 * welp...
 */ 
/* //psudocode taken from https://www.mygreatlearning.com/blog/quick-sort-algorithm/
    quick_sort(list, begining, end){
        if (begining < end){
            var pivot = list[end];
            list = sort_around_pivot(list, begining, end);
            var pivot_index = find_pivot(list, begining, end, pivot);
            list = quick_sort(list, begining, pivot_index);
            list = quick_sort(list, pivot_index+1, end);
        }//if items in list
        return list;
 
        /**
         * if element is smaller then increase search index
         * we are sorting all smaller elements left of pivot 
         * and all greater or equal right of pivot
        
        function sort_around_pivot(array, start, finish){
            var pivot = array[finish];
            var search_index = start;

            for(var x = start; x < finish - 1; x++){
                if(array[x] < pivot){
                    array = swap_elements(array, x, search_index);
                    search_index++;
                }
            }//for all elements except our pivot
            return swap_elements(array, search_index, finish);
            
        }//sort_around_pivot

        function find_pivot(array, start, finish, pivot){
            for(var x = start; x < finish; x++){
                if(array[x] == pivot){
                    return x;
                }
            }
        }//find_pivot

        function swap_elements(list, element1, element2){
            var temp = list[element1];
            list[element1] = list[element2];
            list[element2] = temp;
            return list;
        }//swap_elements
    }//quick_sort */

    /*reverse_list(list){
        var new_list = [];
        reverse_count = list.length;
        for(var x = 0; x < list.length; x++){
            reverse_count = reverse_count - 1; //note array goes from 0 to length-1 so subtract first
            new_list.push(list[reverse_count]);
        }//for each list element
        return new_list;
    }//reverse_list */


/////////////////////////
//Classes and Functions//
class ListSort{
    constructor(table){
        //table needs to remain unchanged while the html changes
        this.table = table;
    }//constructor

    //initial click to sort down
    normal_to_sort_down(list){
        list.sort();
        sort_table_to_fit_list(list);
    }//normal_to_sort_down

    //sort-down to sort-up
    sort_down_to_sort_up(list){
        list.reverse();
        sort_table_to_fit_list(list);
    }//sort_down_to_sort_up

    //sort-up to return to initial sort
    show_table(table);
}//ListSort


//////////
//EVENTS//
window.addEventListener("load", function(){
    inital_sort_event(document.getElementsByTagName("table"));
});//window.onload

//onclick table header without class
function inital_sort_event(tables){
    for(current_table in tables){
        headers = current_table.getElementsByTagName("th")
        for(current_header in headers){
            //change headers to have onclick = "sort_down(table, header)"
        }//for each header
    }//for each table
    
    /*
    headers.onclick = function(){
        //add function call here
    }
    */
}//initial_sort_event
