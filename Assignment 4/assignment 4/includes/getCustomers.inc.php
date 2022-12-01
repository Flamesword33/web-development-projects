<!--This file reads customer.txt and gets:
		Their name, University, City and Sales
	It then displays these details in table form-->	Small problem: one last name contains a special character and it doesn't display-->

<script type="text/javascript">
	$(function() {
		/** This code runs when everything has been loaded on the page */
		/* Inline sparklines take their values from the contents of the tag */
		$('.sparkline').sparkline('html', {type: 'bar', barColor: '#6200EA'}); 
	});
</script>  

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
}//while end of file not reached

fclose($customersList);

?>