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
        <table border="solid 1 white">
            <tr>
                <th>Player Name</th>
                <th>Team</th>
                <th>Goals</th>
                <th>Assists</th>
                <th>Total Points</th>
            </tr>
        </table>
    </body>
</HTML>