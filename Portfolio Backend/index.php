<?php
include './connection.php';
// ini_set();
$var = 'http://192.168.200.146/Portfolio%20Backend/Images/sgsgd609f0ff697be8_1.JPG';
$res = explode('/', $var);

print_r($res);

echo str_replace(' ', '', "Employee Managment System");

//         $message = "Line 1\r\nLine 2\r\nLine 3";

// // In case any of our lines are larger than 70 characters, we should use wordwrap
//         $message = wordwrap($message, 70, "\r\n");

// // Send
//         if (mail('leviokoye@gmail.com', 'My Subject', $message)) {
//             echo "Success";
//         } else {
//             echo "Failed";
//         }

?>