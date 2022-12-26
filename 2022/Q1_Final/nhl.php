<?php
 
  function get_and_display_data(){
    $data = get_data();
    for($x=0; $x < count($data); $x++){
        $row = explode("\t", $data[$x]);
        
        display_data($row);
    }
  } 

  function get_data(){
    $data = file(__DIR__."/players.txt", FILE_SKIP_EMPTY_LINES);
    return $data;
  } 

  function get_and_display_total_points(){
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
            <?php
            get_and_display_data();
            ?>
        </table>
        <?php
        get_and_display_total_points();
        ?>
    </body>
</HTML>