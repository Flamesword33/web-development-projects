<?php
  function get_data(){
    $data = file(__DIR__."/players.txt", FILE_SKIP_EMPTY_LINES);
    return $data;
  } 
?>

<!DOCTYPE HTML>
<HTML>
    <head>
        <title>AUCSC 218 Final</title>
    </head>
    <body>
      <h1>Top Scorers in the NHL</h1>
    </body>
</HTML>