<?php
include './connection.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_GET['section'])) {
        $section = $_GET['section'];

        if ($section == 'skills') {
            $query = "SELECT * FROM `skills` ORDER BY id DESC";
            $result = mysqli_query($link, $query);
            $data = [];
            while ($row = mysqli_fetch_array($result)) {
                array_push($data, $row);
            }
            echo json_encode($data);
        }

        if ($section == 'experience') {
            $query = "SELECT * FROM `experience` ORDER BY id DESC";
            $result = mysqli_query($link, $query);
            $data = [];
            while ($row = mysqli_fetch_array($result)) {
                array_push($data, $row);
            }
            echo json_encode($data);
        }

        if ($section == 'projects') {
            $query = "SELECT * FROM `projects` ORDER BY id DESC";
            $result = mysqli_query($link, $query);
            $data = [];
            while ($row = mysqli_fetch_array($result)) {
                array_push($data, $row);
            }
            echo json_encode($data);
        }
    } else {
        echo json_encode('Unknow Request');
    }
} else {
    echo '<b><h1>Error 403</h1><h1>Forbbiden</h1></b>';
}


?>