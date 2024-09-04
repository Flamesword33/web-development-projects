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
      Allow for the various machines to display on workout-app-machine.html
        based on id tag in url (hopefully don't need backend)
        Display correct video
        display correct title
        display correct text
      Work with workout-app-map.html button presses to change the map out

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
  resizeIframe();
};

window.onresize = function() {
  resizeIframe();
};

function correct_page_content(){
  let id = get_url_id();
  switch(id){
    case "bicept_curl":
      fix_page("bicepcurl.mp4", "Biceps Curl", "bicepcurl.txt");
      break;
    case "tricept_extension":
      fix_page("tricepextensionvideo.mp4", "Triceps Extension", "tricepextension.txt");
      break;
    case "lat_pulldown":
      fix_page("latpulldownvideo.mp4", "Lat Pulldown", "latpulldown.txt");
      break;
    case "seated_row":
      fix_page("seatedrowvideo.mp4", "Seated Row", "seatedrow.txt");
      break;
    case "chin_dip":
      fix_page("chindipvideo.mp4", "Chin Dip", "chindip.txt");
      break;
    case "rotary_shoulder":
      fix_page("shoulderpress.mp4", "Rotary Shoulder", "rotaryshoulder.txt");
      break;
    case "pec_fly":
      fix_page("pecflyvideo.mp4", "Pec Fly/Rear Delt", "pecflyreardelt.txt");
      break;
    case "rotary_chest":
      fix_page("chestpress.mp4", "Rotary Chest", "rotarychest.txt");
      break;
    case "inner_thigh":
      fix_page("innerthighvideo.mp4", "Inner Thigh", "innerthigh.txt");
      break;
    case "outer_thigh":
      fix_page("outerthigh.mp4", "Outer Thigh", "outerthigh.txt");
      break;
    case "calf_raise":
      fix_page("calfraise.mp4", "Calf Raise", "calfraise.txt");
      break;
    case "glute_press":
      fix_page("glutepressvideo.mp4", "Glute Press", "glutepress.txt");
      break;
    case "leg_extension":
      fix_page("legextensionvideo.mp4", "Leg Extension", "legextension.txt");
      break;
    case "leg_press":
      fix_page("legpressvideo.mp4", "Leg Press", "legpress.txt");
      break;
    case "leg_curl":
      fix_page("seatedlegcurlvideo.mp4", "Seated Leg Curl", "seatedlegcurl.txt");
      break;
  }
}//correct_page_content

function get_url_id(){
  let ID = "";
  let endquery = location.search.slice(1); //this line grabs url after ?
  let pair = endquery.split("=");
  ID = decodeURIComponent(pair[1]);
  return ID;
}

function fix_page(video, name, text){
  document.getElementById("video").src = "../assets/Edited videos/" + video;
  document.getElementsByTagName("h1")[0].innerHTML = name;
  document.getElementById("text").src = "../assets/machine research/" + text;
}//fix_page


////////////////
//IN PROGRESS
//Currently not getting anything back for width from the element
function resizeIframe(){
  window.alert(width);
  let width = document.getElementById("video").offsetWidth;
}