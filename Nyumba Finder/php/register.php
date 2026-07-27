<?php

include "config.php";

if(isset($_POST['fullname'])){

$fullname = $_POST['fullname'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$password = password_hash($_POST['password'], PASSWORD_DEFAULT);

$sql = "INSERT INTO users(fullname,email,phone,password)
VALUES('$fullname','$email','$phone','$password')";

if(mysqli_query($conn,$sql)){

header("Location: login.html");

}else{

echo "Registration Failed.";

}

}

?>