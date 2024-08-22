/** workout-app.js
    by Nathan Pelletier
    started July 26 2024
    
    This app is a re-creation of an app I previously made over 2 weeks for a client.
    In 2020 myself and Oscar were working for the Camrose Fitness Center.
    We designed an app to welcome the user, introduce a user to the machines present
      based on images. 
    Each machine page included a picture of the machine, a video on how to use it and a further discription.
    Finally we included a link with google map data to show users how to get to the gym.
    
    Said original app is lost to time. All that remains are the assets I created for the endevor.
    
    This file will:
      Allow for the various machines to display on workout-app-main2.html
        based on id tag in url (hopefully don't need backend)
        Display correct workout machienes
        Hide incorrect machienes

    https://stackoverflow.com/questions/1034621/get-the-current-url-with-javascript  //link to get current url with js
    window.location.href
    https://stackoverflow.com/questions/36858508/how-to-send-a-parameter-in-html-link-and-how-to-retrieve-it //retrieve url info
    var params = {};
    location.search.slice(1).split("&").forEach(function(pair) {
      pair = pair.split("=");
      params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    });
    https://stackoverflow.com/questions/3842614/how-do-i-call-a-javascript-function-on-page-load
    window.onload = function() {
      yourFunction(param1, param2);
    };

*/

window.onload = function() {
  correct_page_content();
};

function correct_page_content(){
  let id = get_url_id();
  //switch preserves default state for all other possiblities
  switch(id){
    case "arms":
      make_class_invisible("arms");
      break;
    case "back":
      make_class_invisible("back");
      break;
    case "chest":
      make_class_invisible("chest");
      break;
    case "shoulder":
      make_class_invisible("shoulder");
      break;
    case "hips":
      make_class_invisible("hips");
      break;
    case "legs":
      make_class_invisible("legs");
      break;
  }
}//correct_page_content

function get_url_id(){
  let ID = "";
  let endquery = location.search.slice(1); //this line grabs url after ?
  let pair = endquery.split("=");
  ID = decodeURIComponent(pair[1]);
  return ID;
}//get_url_id

function make_class_invisible(current_class){
  let class_list = document.getElementsByClassName("machine");
  let visible_class_list = document.getElementsByClassName(current_class);
  
  for(let i=0; i<class_list.length; i++){
    class_list[i].style.display = "none";
  }

  //1 more loop to undo wanted class
  for(let j=0; j<visible_class_list.length; j++){
    visible_class_list[j].style.display = "initial";
  }
}//make_class_invisible