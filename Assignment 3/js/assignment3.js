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