<?php
  function get_data(){
    $data = file(__DIR__."/players.txt", FILE_SKIP_EMPTY_LINES);
    return $data;
  } 
?>

<!DOCTYPE HTML>
<HTML>
    <head>
    </head>
    <body>
    </body>
</HTML>