<?php
$host = "localhost";
$user = "root";  // Default XAMPP username
$pass = "";      // No password by default
$dbname = "user_system";

$conn = new mysqli($host, $user, $pass, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
