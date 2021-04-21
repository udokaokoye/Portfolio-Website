<?php
include './connection.php';


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $query = "INSERT INTO `contact` (`name`, `email`, `message`) VALUES (
        '".mysqli_real_escape_string( $link, $name )."', 
        '".mysqli_real_escape_string( $link, $email )."', 
        '".mysqli_real_escape_string( $link, $message )."'
    )";

    $message = wordwrap($message, 70, "\r\n");

    if (mysqli_query($link, $query)) {
        echo json_encode("SUCCESS");
        // $msg = wordwrap($message, 70);
//         $message = "Line 1\r\nLine 2\r\nLine 3";

// // In case any of our lines are larger than 70 characters, we should use wordwrap
//         $message = wordwrap($message, 70, "\r\n");

// // Send
//         mail('leviokoye@gmail.com', 'My Subject', $message);
    } else {
        echo json_encode("FAILED");
    }
}


?>