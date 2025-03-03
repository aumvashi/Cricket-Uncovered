<?php
include "db.php";
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $password = $_POST["password"];

    $stmt = $conn->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows === 1) {
        $user = $result->fetch_assoc();

        if (password_verify($password, $user["password"])) {
            $_SESSION["user"] = $user["name"];
            echo "<script>alert('Login successful!'); window.location.href='Dashboard.html';</script>";
        } else {
            $ipassword = password_hash($password, PASSWORD_BCRYPT);
            echo "<script>alert('Incorrect password! $ipassword and ". $user["password"]."'); window.location.href='index2.html';</script>";
        }
    } else {
        echo "<script>alert('No account found with this email!'); window.location.href='index2.html';</script>";
    }

    $stmt->close();
    $conn->close();
}
?>
