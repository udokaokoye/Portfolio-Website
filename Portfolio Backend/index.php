<?php
include './connection.php';
ini_set();
echo 'Hello World';


        $message = "Line 1\r\nLine 2\r\nLine 3";

// In case any of our lines are larger than 70 characters, we should use wordwrap
        $message = wordwrap($message, 70, "\r\n");

// Send
        if (mail('leviokoye@gmail.com', 'My Subject', $message)) {
            echo "Success";
        } else {
            echo "Failed";
        }

?>