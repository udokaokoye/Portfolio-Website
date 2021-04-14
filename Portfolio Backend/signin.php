<?php
include './connection.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $query = "SELECT * FROM `users` WHERE `email` = '$email'";
    $result = mysqli_query($link, $query);
    $row = mysqli_fetch_array($result);
    
    if (isset($row)) {
        if (password_verify($password, $row['password'])) {
            echo json_encode("SUCCESS");
        } else {
            echo json_encode("Incorrect Email / Password");
        }
    } else {
        echo json_encode("User Not Found");
    }

} else {
    echo '<b><h1>Error 403</h1><h1>Forbbiden</h1></b>';
}


?>