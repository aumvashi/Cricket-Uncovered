<?php
include('config.php');

error_reporting(0);

$username=$_POST['name'];
$email=$_POST['email'];
$password=$_POST['password'];

$selectQuery= "SELECT * FROM cricket WHARE email='".$email."';
$result=$db_con->query($selectQuery);
$rowCount= mysqli_num_rows($result);
if($rowCount>0){
	echo "Email Id Alredy Registered";
}

else{
	$insertQuery="INSERT INTO cricket('name','email','password') VALUES ('".$username."','".$email."','".$password."')";

$result= $db_con->query($insertQuery);
if($result){
	echo "Signup Succesfully";
}

else {
	echo "Signup Unsuccesfully";
}

}



?>