<?php

session_start();

include "config.php";

if(isset($_POST['email'])){

$email = $_POST['email'];
$password = $_POST['password'];

$sql = "SELECT * FROM users WHERE email='$email'";

$result = mysqli_query($conn,$sql);

if(mysqli_num_rows($result)>0){

$user = mysqli_fetch_assoc($result);

if(password_verify($password,$user['password'])){

$_SESSION['user']=$user;

header("Location: dashboard.php");

}else{

echo "Incorrect Password";

}

}else{

echo "User Not Found";

}

}

?>