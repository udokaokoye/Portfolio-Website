<?php
include './connection.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_GET['section'])) {
        $section = $_GET['section'];

        if ($section == 'skills') {
            $id = $_POST['id'];
            $query = "DELETE FROM `skills` WHERE id = '$id' ";
            if (mysqli_query($link, $query)) {
                echo json_encode("Deleted");
            } else {
                echo json_encode("Failed");
            }
        }

        if ($section == 'experience') {
            $id = $_POST['id'];
            $query = "DELETE FROM `experience` WHERE id = '$id' ";
            if (mysqli_query($link, $query)) {
                echo json_encode("Deleted");
            } else {
                echo json_encode("Failed");
            }
        }

        if ($section == 'projects') {
            $id = $_POST['id'];
            $query = "DELETE FROM `projects` WHERE id = '$id' ";
            if (mysqli_query($link, $query)) {
                echo json_encode("Deleted");
            } else {
                echo json_encode("Failed");
            }
        }
    }
}


?>