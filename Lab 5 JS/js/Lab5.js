/**Lab5.js 
 * by Nathan Pelletier
 * started November 17, 2022
 * 
 * This project has 2 goals:
 *   1. Add a click event handler to each of the small images 
 *      Clicking a small image causes it to replace the bigger image (header to)
 *   2. Add a mouseover and mouseout event to the large image
 *      This will change the ocpacity of figcaption to 80% in css
 * 
 *  Subgoal: add animation to the effects.
 *  For this project don't touch html or css, only javascript
*/

//event listeners for thumbnails


function replace_large_image(small_image, small_title){
    //which image is it?
    var title = document.querySelector("#featured img").getAttribute("title");
    if(small_title != title){
        overwrite_large_image(small_image, small_title);
    }//if new image otherwise we're done here
}//replace_large_image

function overwrite_large_image(small_image, small_title){
    //get large image
    var large_image = document.querySelector("#featured img");
    var figure_caption = document.querySelector("#featured figcaption");
    
    large_image.setAttribute("src", "images/medium/" + small_image);
    large_image.setAttribute("title", small_title);
    figure_caption.innerHTML = small_title;
}//overwrite_large_image