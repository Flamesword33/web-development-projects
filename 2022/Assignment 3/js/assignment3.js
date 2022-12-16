/** assignment3.js 
 * by Nathan Pelletier
 * Started: November 19, 2022
 * Finished: November 24, 2022
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
 * 
 * Had a cheeky thought:
 *   Could load page and add span with style display:"none";
 *     then only one set of events would need to be created and not several
 *   Assignment says I can't but this would be a way to optimize the pages load times
 *    and vastly simplify the code
*/

class TagVisibility{

    /**
     * @param {tag} highlight 
     * @param {tag} hide 
     */
    constructor(highlight, hide){
        this.highlight = highlight;
        this.hide = hide;
    }//constructor


    // ANYTHING TO DO WITH BUTTON HIGHLIGHT //
    /**
     * @docstring highlightMain finds all elements on a page with lookForElements. This 
     * function then sends said elements off to addSpanToAll to add a child span to each
     * element.
     */
    highlightMain(){
        var elementList = this.lookForElements();
        //console.log(elementList);
        this.addSpanToAll(elementList);
    }//highlight

    /**
     * @docstring lookForElements finds elements throughout document where nodeType == 1.
     * It uses depth first search.
     * @return {list} All elements of a given html page.
     */
    lookForElements(){
        /*found on https://stackoverflow.com/questions/16518015/select-all-elements-on-a-page
          var allElements = document.getElementsByTagName("*"); //not defined, worth a shot though
          ... x.children returns only nodeType = 1 nodes
          screw it, no more shortcuts here */
        const body = document.querySelector("body");
        var elementList = [body];
        const children = body.childNodes;

        for(var i = 0; i < children.length; i++){
            if(children[i].nodeType == 1){
                elementList = this.lookForChildren(children[i], elementList);
            }//if children are elements
        }//for all children of body

        return elementList;
    }//lookForElements

    /**
     * @docstring lookForChildrn recordes the parent element to elementList.
     * Finds all child elements of parent element.
     * Recursivly calls its self for each child found.
     * @param {element} parent parent element of target child
     * @param {list} elementList 
     * @return {list} a list of all elements found so far
     */
    lookForChildren(parent, elementList){
        elementList.push(parent);
        const children = parent.childNodes;

        //base case
        if (children.length == 0){
            return elementList;
        }//if no children

        for(var i = 0; i < children.length; i++){
            if(children[i].nodeType == 1){
                elementList = this.lookForChildren(children[i], elementList);
            }
        }//for all children of parent
        return elementList;
    }//lookForChildren

    /**
     * @docstring addSpanToAll loops through a list of elements and sends each element
     * to addSpan to give it a child span element. 
     * @param {list} elements a list of elements 
     */
    addSpanToAll(elements){
        elements.forEach(this.addSpan);
    }//addSpanToAll

    /**
     * @docstring addSpan adds a span element as the child of element.
     * Each span is marked with class = "hoverNode".
     * Each spans innerHTML is the tagName of its parent element.
     * @param {element} parent 
     */
    addSpan(parent){
        var spanElement = document.createElement("span");
        //THIS LINE NEEDS TO FIND WHAT TAG THE PARENT IS AND MAKE TEXT OUT OF IT
        const textNode = document.createTextNode(parent.tagName);
        // add class = "hoverNode" here
        spanElement.className = "hoverNode";

        spanElement.appendChild(textNode);
        parent.appendChild(spanElement);
    }//addSpan


    // ANYTHING TO DO WITH HIDE BUTTON //
    /**
     * @docstring hideMain finds all elements with class = hoverNode and passes them
     * to removeNodes.
     */
    hideMain(){
        var hoverNodes = document.getElementsByClassName("hoverNode");
        this.removeNodes(hoverNodes);
    }//hide

    /**
     * @docstring Loops through each node given in a list and removes them.
     * @param {list} nodes a list of nodes for removal
     */
    removeNodes(nodes){
        //needed as remove reduces the length of hoverNodes each pass
        var numNodes = nodes.length;
        for(var i = 0; i < numNodes; i++){
            nodes[0].remove();
        }//for each hoverNode
    }//removeNodes


    // ANYTHING TO DO WITH ALERT //
    /**
     * @docstring htmlDetailsMain takes an element, finds its parent and passes it off to
     * getDetailsFromParent. This function should result in alerting the user to the details
     * gained from the parent element.
     * @param {element} element 
     */
    htmlDetailsMain(element){
        const parent = element.parentElement;
        this.getDetailsFromParent(parent);
    }//htmlDetails

    /**
     * @docstring getDetailsFromParent grabs the id, tagName, className and innerHTML
     * from a page element and displays it as an alert.
     * @param {element} parent 
     */
    getDetailsFromParent(parent){
        //saving these to help me remember key details, rather than search for them
        //each time. Yes I know this is a waste of memory. Sped up debugging though :P
        const id = parent.id;
        const tagName = parent.tagName;
        const className = parent.className;
        const innerHtml = parent.innerHTML;
        alert(" Id: " + id + 
            "\n Tag name: " + tagName + 
            "\n Class name: " + className +
            "\n Inner HTML: " + innerHtml);
    }//getDetailsFromParent
}//TagVisibility


//===event listeners===//
window.addEventListener("load", function() {
    var visibility = new TagVisibility(
        document.getElementById("highlight"),
        document.getElementById("hide")
    );

    highlightNodesEvent(visibility);
    hideHighlightsEvent(visibility);

});//window.addEventListener

/**
 * @docstring highlightNodesEvent takes an object and starts an event when the highlight button
 * is pressed. The event should cause all elements on screen to display their tags
 * in a child span tags innerHTML.The event will also toggle the visiblity of the 
 * highlight and hide buttons.
 * 
 * This function also uses getHtmlDetails to create an onClick event for each of the class = hoverNode
 * elements. This event will get the details of a parent element and alert the user. 
 * @param {object} visibility 
 */
function highlightNodesEvent(visibility){
    visibility.highlight.addEventListener("click", function(event){
        visibility.highlightMain();
        toggleHighlight(visibility);
        getHtmlDetails(visibility);
    });
}//highlightNodesEvent

/**
 * @docstring hideHighlightsEvent takes an object and starts an event when the hide 
 * button is pressed. The event should cause all elements with class hoverNode to be removed.
 * The event will also toggle the visiblity of the hide and highlight buttons.
 * @param {object} visibility 
 */
function hideHighlightsEvent(visibility){
    //this will hide the hide button on first page load
    visibility.hide.style.display = "none";
    visibility.hide.addEventListener("click", function(event){
        visibility.hideMain();
        toggleHide(visibility);
    });
}//hideHighlightsEvent

//This needs to be re-run each time highlightNodesEvent is run
/**
 * @docstring getHtmlDetails takes an object and creates events for all memebers 
 * of class hoverNode. The events should cause an on screen alert when a hoverNode is clicked.
 * This will display the parent nodes: tag, id, class, ect...
 * @param {object} visibility 
 */
function getHtmlDetails(visibility){
    var nodes = document.getElementsByClassName("hoverNode");
    for(var i = 0; i < nodes.length; i++){
        nodes[i].addEventListener("click", function(event){
            visibility.htmlDetailsMain(event.target);
        });
    }//for each node
}//getHtmlDetails

/** In a future project where I can touch css, these 2 functions would be 1 
 * called toggle buttons.
 *  
 * Its code would be:
 * visibility.highlight.classList.toggle("visible");
 * visibility.hide.classList.toggle("visible");
 * 
 * and in css:
 * .visible{display:"none";}
 */ 

/**
 * @docstring toggleHighlight uses an object to get the highlight and hide buttons.
 * With said buttons it toggles their visibility. Function toggleHide reverses the toggle.
 * @param {object} visibility 
 */
function toggleHighlight(visibility){
    visibility.highlight.style.display = "none";
    visibility.hide.style.display = "block";
}//toggleHighlight

/**
 * @docstring toggleHide uses an object to get the highlight and hide buttons.
 * With said buttons it toggles their visibility. Function toggleHighlight reverses the toggle.
 * @param {object} visibility 
 */
function toggleHide(visibility){
    visibility.highlight.style.display = "block";
    visibility.hide.style.display = "none";
}//toggleHide