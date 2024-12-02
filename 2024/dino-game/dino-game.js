/*dino-game.js
    by Nathan Pelletier
    Started November 12 2024
    
  A copy of the crome out of internet dino-game. Made with the tutorials:
  "https://youtu.be/4Oz34co7VLY"
  https://www.geeksforgeeks.org/html5-game-development-infinitely-scrolling-background/
  https://youtu.be/Mg7ibYWhjPI?si=XFEpe7vEQimztiaK
  At end dino can:
    run
    jump
      over trees
    duck
      under birds
  Score counts up based on timer * 10

  This file will:
    Draw the
      background
      dino
      tree
      bird
    animate
      Dino
        jump
        run
        duck
      background
        scroll
        parallax?
      bird/tree
        move towards dino
    score
      distance travelled
    end game
      if dino connects with tree or bird
*/

window.addEventListener('keypress', function(event){
  if(event.code == "Space"){
    scroll_screen();
  }
})

function scroll_screen(){
  var can = document.getElementById('canvas1');    
  
  //starting img_width at width and going to 0 makes right to left camera
  //starting img_width at 0 and increasing to width makes left to right camera
  var height = can.height;
  var width = can.width;
  var img_width = width;
 
  // the scroll speed
  // an important thing to ensure here is that can.height
  // is divisible by scrollSpeed
  var scrollSpeed = 2;

  // The 2D Context for the HTML canvas element. It
  // provides objects, methods, and properties to draw and
  // manipulate graphics on a canvas drawing surface.
  var ctx = can.getContext('2d');
   
  // create an image element
  var img = new Image();
   
  // specify the image source relative to the html or js file
  // when the image is in the same directory as the file
  // only the file name is required:
  img.src = "images/dino\ game\ background.jpg";
   
  // this is the primary animation_loop that is called 60 times
  // per second
  function animation_loop(){
    // draw image 1
    ctx.drawImage(img, img_width, 0, width, height);
   
    // draw image 2
    ctx.drawImage(img, img_width - width, 0, width, height);
   
    // update image height
    img_width -= scrollSpeed;
   
    //resetting the images when the first image entirely exits the screen
    if (img_width == 0)
      img_width = width;
   
    // this function creates a 60fps animation by scheduling a
    // animation_loop function call before the
    // next redraw every time it is called
    window.requestAnimationFrame(animation_loop);
  }//animation_loop
   
  // initiates the animation
  animation_loop();
}//scroll_screen()

