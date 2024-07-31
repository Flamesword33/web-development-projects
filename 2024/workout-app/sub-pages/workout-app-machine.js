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
*/
