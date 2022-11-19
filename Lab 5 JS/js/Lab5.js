/**Lab5.js 
 * by Nathan Pelletier
 * started November 17, 2022
 * finished November 18, 2022
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


/** 
 * @docstring check_before_replace_large_image determines if the same image was clicked
 * as the large version. If it isn't overwrite_large_image() is called
 * @param {string} small_image example format "myImage.jpg"
 * @param {string} small_title 
 */
function check_before_replace_large_image(small_image, small_title){
    //which image is it?
    var title = document.querySelector("#featured img").getAttribute("title");

    if(small_title != title){
        overwrite_large_image(small_image, small_title);
    }//if new image otherwise we're done here
}//check_before_replace_large_image

/**
 * @docstring overwrite_large_image overwrites the html #featured img and #featured figcaption
 * new values are determined by the passed img file and title
 * @param {string} small_image example format "myImage.jpg"
 * @param {string} small_title 
 */
function overwrite_large_image(small_image, small_title){
    //get large image
    var large_image = document.querySelector("#featured img");
    var figure_caption = document.querySelector("#featured figcaption");
    
    large_image.setAttribute("src", "images/medium/" + small_image);
    large_image.setAttribute("title", small_title);
    figure_caption.innerHTML = small_title;
}//overwrite_large_image

/**
 * @param {tag} html_element 
 */
function make_visible(html_element){
    html_element.style.opacity = '80%';
}

/**
 * @param {tag} html_element 
 */
 function make_invisible(html_element){
    html_element.style.opacity = '0%';
}


//===event listeners===//
window.addEventListener("load", function() {

    thumbnails_event(document.querySelectorAll("#thumbnails img"));

    figure_event(document.querySelector("#featured img"));

});//window.addEventListener

/**
 * @docstring thumbnails_event listens for a clicked thumbnail, determines the thumbnails 
 * picture name and title and passes said values to check_before_replace_large_image()
 * @param {list} thumbnails a list of html elements 
 */
function thumbnails_event(thumbnails){
    for(var i=0; i < thumbnails.length; i++){        
        thumbnails[i].addEventListener("click", function(event){
            var title = event.target.getAttribute("title");
            var img_path = event.target.getAttribute("src");
            var img = img_path.split("/");
            check_before_replace_large_image(img[2], title);
        });
    }//for
}//thumbnails_event

/**
 * 
 * @param {tag} figure a html tag
 */
function figure_event(figure){
    var figcaption = document.querySelector("#featured figcaption");
    figcaption.style.transition = "1s";
    
    figure.addEventListener("mouseover", function(event){    
        make_visible(figcaption);
    });

    figure.addEventListener("mouseout", function(event){
        make_invisible(figcaption);
    });
}//figure_event