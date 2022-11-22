/** assignment3.js 
 * by Nathan Pelletier
 * Started: November 19, 2022
 * 
 * This program writes a helper script that visually identifies the tags on a given web page
 *   The helper script can be toggled on and off by this program
 * 
 * As this is a stand alone js file we will not be modifying the html or css files
 *   this is hooked into.
 * 
 * We will be hooking this program into two buttons on this page, each will toggle
 *   to visible when not in use.
 * 
 * TODO:
 * 1. program looks through html looking for nodeType == 1
 * 2. program adds child node <span class=hoverNode> parentName </span> to each element
 *      in step 1
 * 3. add onClick events to all step 2 children
 * 4. add alert that displays an element 
 *      tag name:   h1
 *      id:         mainLogo
 *      class name: primary enlarge
 *      inner HTML: Ace Adventures
 * 5. program removes all added spans (look for class=hoverNode)
 * 6. Add Event to toggle between Highlight Nodes and Hide Highlight
 * 7. Connect Highlight Nodes to step 1, 2
 * 8. Connect Hide Highlight to step 5
*/

class TagVisibility{
    // ANYTHING TO DO WITH BUTTON HIGHLIGHT //
    highlight(){
        var elementList = this.lookForElements();
        this.addSpanToAll(elementList);
    }//highlight

    /**
     * Looks for elements throughout document where nodeType == 1
     * @return {list} a list of tags
     */
    lookForElements(){}//lookForElements

    /**
     * Adds a span as the children of all elements in list 
     * @param {list} elements a list of tags
     */
    addSpanToAll(elements){
        elements.forEach(this.addSpan);
    }//addSpanToAll

    /**
     * Adds a span element as the child of element
     * each span should have class = "hoverNode"
     * @param {tag} element 
     */
    addSpan(element){
        const spanElement = document.createElement("span");
        //THIS LINE NEEDS TO FIND WHAT TAG THE PARENT IS AND MAKE TEXT OUT OF IT
        const textNode = document.createTextNode(element.tag);

        spanElement.appendChild(textNode);
        element.appendChild(spanElement);
    }//addSpan


    // ANYTHING TO DO WITH HIDE BUTTON //
    hide(){}//hide


    // ANYTHING TO DO WITH ALERT //
    htmlDetails(element){}//htmlDetails

}//TagVisibility


//===event listeners===//
window.addEventListener("load", function() {
    //eventName(document.querySelectorAll("where"));
    var visibility = new TagVisibility();

    highlightNodesEvent(visibility);
    hideHighlightsEvent(visibility);
    getHtmlDetails(visibility);

});//window.addEventListener

function highlightNodesEvent(visibility){
    const highlight = document.getElementById("highlight");
    highlight.addEventListener("click", function(event){
        visibility.highlight();
    });
}

function hideHighlightsEvent(visibility){
    const hide = document.getElementById("hide");
    hide.addEventListener("click", function(event){
        visibility.hide();
    });
}

function getHtmlDetails(visibility){
    const nodes = document.getElementsByClassName("hoverNode");
    for(var i = 0; i < nodes.length; i++){
        nodes[i].addEventListener("click", function(event){
            visibility.htmlDetails(event.target);
        });
        
    }
}