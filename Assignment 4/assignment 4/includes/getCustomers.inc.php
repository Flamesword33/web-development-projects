<!--This file reads customer.txt and gets:
		Their name, University, City and Sales
	It then displays these details in table form


	Debug statement in php
		//echo "<script>console.log(" . $customer . ");</script>";
	
	iconv(fromencode, toencode, stingtoencode)-->

<!-- TEMPLATE FOR ROWS
<tr>
	<td><a href="chapter12-project3.php?customer=2">Leonie Kohler</a></td>
	<td>University of Stuttgart</td>
	<td>Stuttgart</td>
	<td><span class="sparkline">1,4,4,7,5,9,10,10,10,12,11,9</span></td>
</tr>
-->

<?php 
/* found on https://www.gavsblog.com/blog/move-up-directory-levels-relative-to-the-current-file-in-php */
$dir = dirname(__DIR__, 1);
$customersList = fopen($dir . "/data/customers.txt", "r");

while(! feof($customersList)) {

	$customer = getDataFromFile($customersList, ";");

	if(count($customer) > 1){
		$customerId = $customer[0];
		$lastName = $customer[1];
		$firstName = $customer[2];
		$university = $customer[4];
		$city = $customer[6];
		$sales = explode(",", $customer[11]);
	
		outputData($customerId, $lastName, $firstName, $university, $city, $sales);
	}//if customer is not empty

}//while end of file not reached

fclose($customersList);

/**
 * Summary of getDataFromFile
 * Gets a line from $file and splits it on $split, ensures encoding in UTF-8 and returns the data in array form
 * @param mixed $file
 * @param string $split
 * @return array<string> a line of data in array form from $file
 */
function getDataFromFile($file, $split){
	//get line and split on ;
	$line = fgets($file);
	$encoding = mb_detect_encoding($line);
	$line = iconv($encoding, "UTF-8", $line);
	$data = explode($split, $line);
	return $data;
}//getDataFromFile

/**
 * Summary of outputData
 * creates rows of data with linked names and a graph of data
 * @param int $customerId
 * @param string $lastName
 * @param string $firstName
 * @param string $university
 * @param string $city
 * @param array<int> $sales 
 * @return void
 */
function outputData($customerId, $lastName, $firstName, $university, $city, $sales){
	echo '<tr>';
	echo '<td><a href="chapter12-project3.php?customer=' . $customerId .'">';
	echo $lastName . ' ' . $firstName . '</a></td>';
	echo '<td>' . $university . '</td>';
	echo '<td>' . $city . '</td>';
	echo '<td><span class="sparkline">';
	echo $sales[0];
	for($x = 1; $x < count($sales); $x++){
		echo ',' . $sales[$x];
	}//for all sales
	echo '</span></td>';
	echo '</tr>';
}//outputData

?>