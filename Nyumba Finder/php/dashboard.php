<?php

session_start();

if(!isset($_SESSION['user'])){

header("Location:login.html");

}

?>

<!DOCTYPE html>

<html>

<head>

<title>Dashboard</title>

<link rel="stylesheet" href="css/style.css">

</head>

<body>

<h1>

Welcome

<?php

echo $_SESSION['user']['fullname'];

?>

</h1>

<br>

<a href="add-property.html">

Add Property

</a>

<br><br>

<a href="logout.php">

Logout

</a>

</body>

</html>