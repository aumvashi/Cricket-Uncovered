<?php
include('config.php');
error_reporting(0);

$email = $_POST['email'];
$password = $_POST['password'];

$selectQuery = "SELECT * FROM cricket WHARE email='".$email."'AND password='".$password."'" ;
$result= $db_con->query(selectQuery);
$rowCount= mysqli_num_rows($result);
if($rowCount>0){
	while ($row = mysqli_fetch_assoc($result)) {
		$data[]= $row;
		
	}
	echo "Login Succesfully";
}
else{
	echo "Login unsuccesfully";
}

?>