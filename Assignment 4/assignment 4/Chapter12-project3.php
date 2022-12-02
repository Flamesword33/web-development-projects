
<!DOCTYPE html>
<html lang="en">

<head>
  <title>Chapter 12</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href='http://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>

  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  <link rel="stylesheet" href="https://code.getmdl.io/1.1.3/material.blue_grey-orange.min.css">

  <link rel="stylesheet" href="css/styles.css">
    
    
  <script   src="https://code.jquery.com/jquery-1.7.2.min.js" ></script>
       
  <script src="https://code.getmdl.io/1.1.3/material.min.js"></script>
  <script src="js/jquery.sparkline.2.1.2.js"></script>
    
  <script type="text/javascript">
  $(function() {
    /** This code runs when everything has been loaded on the page */
    /* Inline sparklines take their values from the contents of the tag */
    $('.sparkline').sparkline('html', {type: 'bar', barColor: '#6200EA'}); 
  });
  </script>    
</head>

<body>
    
<div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer
            mdl-layout--fixed-header">
            
  <?php include 'includes/header.inc.php'; ?>
  <?php include 'includes/left-nav.inc.php'; ?>
    
  <main class="mdl-layout__content mdl-color--grey-50">
    <section class="page-content">
      <div class="mdl-grid">
        
        <!-- mdl-cell + mdl-card -->
        <div class="mdl-cell mdl-cell--7-col card-lesson mdl-card  mdl-shadow--2dp">
          <div class="mdl-card__title mdl-color--orange">
            <h2 class="mdl-card__title-text">Customers</h2>
          </div>
          <div class="mdl-card__supporting-text">
            <table class="mdl-data-table  mdl-shadow--2dp">
              <thead>
                <tr>
                  <th class="mdl-data-table__cell--non-numeric">Name</th>
                  <th class="mdl-data-table__cell--non-numeric">University</th>
                  <th class="mdl-data-table__cell--non-numeric">City</th>
                  <th>Sales</th>
                </tr>
              </thead>
              <tbody>
                                
                <!--My code here -->
                <?php include 'includes/getCustomers.inc.php'; ?>
                                              
              </tbody>
            </table>
          </div>
        </div>  <!-- / mdl-cell + mdl-card -->
              
              
        <div class="mdl-grid mdl-cell--5-col">
          <!-- mdl-cell + mdl-card -->
          <div class="mdl-cell mdl-cell--12-col card-lesson mdl-card  mdl-shadow--2dp">
            <div class="mdl-card__title mdl-color--deep-purple mdl-color-text--white">
              <h2 class="mdl-card__title-text">Customer Details</h2>
            </div>
            
            <div class="mdl-card__supporting-text">

              <!--My code here -->
              <?php if(array_key_exists("customer",$_GET)){
                getCustomerDetails($_GET['customer']);} ?>
              <!--My code here -->
                                                                                                                                                                           
            </div>    
          </div>  <!-- / mdl-cell + mdl-card -->   

          <!-- mdl-cell + mdl-card -->
          <div class="mdl-cell mdl-cell--12-col card-lesson mdl-card  mdl-shadow--2dp">
            <div class="mdl-card__title mdl-color--deep-purple mdl-color-text--white">
              <h2 class="mdl-card__title-text">Order Details</h2>
            </div>
            
            <div class="mdl-card__supporting-text">        
              <table class="mdl-data-table  mdl-shadow--2dp">
                <thead>
                  <tr>
                    <th class="mdl-data-table__cell--non-numeric">Cover</th>
                    <th class="mdl-data-table__cell--non-numeric">ISBN</th>
                    <th class="mdl-data-table__cell--non-numeric">Title</th>
                  </tr>
                </thead>
                <tbody>

                  <!--My code here-->
                  <?php if(array_key_exists("customer",$_GET)){
                    getOrderDetails($_GET['customer']);} ?>
                  <!--My code here -->

                </tbody>
              </table>
            </div>    
          </div>  <!-- / mdl-cell + mdl-card -->           
        
        </div>   <!-- / mdl-grid mdl-cell--5-col -->
      </div>  <!-- / mdl-grid -->    

    </section>
  </main>    
</div>    <!-- / mdl-layout --> 
          
</body>
</html>


<?php
  //this code hides unnessisary boxes when customer
  if (! array_key_exists("customer", $_GET)){
    echo "<style> section div.mdl-grid.mdl-cell--5-col{opacity:0;}</style>"; 
  } //if customer is null
  

  /**
   * @docstring getCustomerDetails takes a customer id and
   * finds the customers: name, university, address, city and country.
   * Given those details this function then displays as a header and 
   * following paragraph
   * @param int $customerId
   * @return bool status of functions success
   */
  function getCustomerDetails($customerId){

    $customer = openFileAndGetData($customerId, file(__DIR__ . "/data/customers.txt"), 0);
    if($customer == false){
      echo "<script>console.log('Error: customer not found');</script>";
      return false;
    }//if failed to find id end early

    //read the file for details and return
    $lastName = $customer[1];
    $firstName = $customer[2];
    $university = $customer[4];
    $address = $customer[5];
    $city = $customer[6];
    $country = $customer[8];

    //display the info
    outputCustomerDetailsData($lastName, $firstName, $university, $address, $city, $country);
    return true;
  }//getCustomerDetails 

  /**
   * Summary of openFileAndGetData
   * takes a file and matches an id to a line in the file, returns said line
   * @param int $id
   * @param array<string> $file
   * @param int $position where data is located in file line
   * @return array<string>|bool a string of data or false if empty
   */
  function openFileAndGetData($id, $file, $position){
    /* error report: failes to find customerId > 16, return value is false
    *    no error prior to id=16, only after.
    * 
    * figured it out: im compairing the first letter to customerId, so when I hit 10 my error happens
    * need to explode in this function instead of outside it
    */
    for($x = 0; $x< count($file); $x++){
      $line = explode(";", $file[$x]);
      if($line[$position] == $id){
        return $line;
      }//if customer id found
    }//for each line of customers.txt
    return false;
  }//openFileAndGetData

  /**
   * Summary of outputCustomerDetailsData
   * outputs data in the Customer Details area
   * @param string $lastName
   * @param string $firstName
   * @param string $university
   * @param string $address
   * @param string $city
   * @param string $country
   */
  function outputCustomerDetailsData(
    $lastName, 
    $firstName, 
    $university, 
    $address, 
    $city, 
    $country){
    echo "<h3>" . $lastName . " " . $firstName . "</h3>";
    echo "<p>" . $university . "</p>";
    echo "<p>" . $address . "</p>"; 
    echo "<p>" . $city . " " . $country . "</p>";
  }//outputCustomerDetailsData

  /**
   * @docstring getOrderDetails takes a customer id and
   * finds the customers orders: Cover, ISBN and title.
   * Given these details the function then displays them in a table.
   * @param int $customer
   */
  function getOrderDetails($customer){
    //read order.txt into an array
    //find entries with $array[1] == $customer
      //if no entries find $customer name from customer.txt
      //in this case display "No orders for" + $firstName + " " + $lastName
    //display details as a table
  }//getOrderDetails

?>