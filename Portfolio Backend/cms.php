<?php
include './connection.php';


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_GET['section'])) {
        $section = $_GET['section'];
        if ($section == 'skills') {
            // !Skills Query
            $skill_name = $_POST['skill_name'];
            $skill_percent = $_POST['skill_percent'];

            $query = "INSERT INTO `skills` (`skill`, `percent`) VALUES (
                '".mysqli_real_escape_string( $link, $skill_name )."', 
                '".mysqli_real_escape_string( $link, $skill_percent )."'
                )";

                if (mysqli_query($link, $query)) {
                    echo json_encode("SUCCESS");
                } else {
                    echo json_encode("FAILED");
                }
        }

        if ($section == 'experience') {
            // !Experience Query
            $jb_position = $_POST['jb_position'];
            $jb_company = $_POST['jb_company'];
            $jb_duration_location = $_POST['jb_duration_location'];
            $jb_description = $_POST['jb_description'];

            $query = "INSERT INTO `experience` (`job_title`, `job_description`, `company`, `duration`) VALUES (
                '".mysqli_real_escape_string( $link, $jb_position )."', 
                '".mysqli_real_escape_string( $link, $jb_description )."', 
                '".mysqli_real_escape_string( $link, $jb_company )."', 
                '".mysqli_real_escape_string( $link, $jb_duration_location )."'
                )";

                if (mysqli_query($link, $query)) {
                    echo json_encode("SUCCESS");
                } else {
                    echo json_encode("FAILED");
                }
        }

        if ($section == 'projects') {
            // !Projects Query
            $project_id = uniqid();
            $prj_title = $_POST['prj_title'];
            $prj_tech = $_POST['prj_tech'];
            $prj_url = $_POST['prj_url'];
            $prj_description = $_POST['prj_description'];
            $prj_filter_key = $_POST['prj_filter_key'];
            $prj_platform = $_POST['prj_platform'];
            $image1 = '';
            $image2 = '';
            $image3 = '';
            $image4 = '';
            $image5 = '';

            if ( isset( $_FILES['prj_img1'] ) ) {
                $path = 'Images/';
                $file_name = str_replace(' ', '', $_FILES['prj_img1']['name']);
                $file_tmp = $_FILES['prj_img1']['tmp_name'];
                $file_type = $_FILES['prj_img1']['type'];
                $file = $path . $file_name;
                if ( move_uploaded_file( $file_tmp, $file ) ) {
                    // $error = false;
                    $image1 = URLROOT . $file;
                }
            }

            if ( isset( $_FILES['prj_img2'] ) ) {
                $path = 'Images/';
                $file_name = str_replace(' ', '', $_FILES['prj_img2']['name']);
                $file_tmp = $_FILES['prj_img2']['tmp_name'];
                $file_type = $_FILES['prj_img2']['type'];
                $file = $path . $file_name;
                if ( move_uploaded_file( $file_tmp, $file ) ) {
                    // $error = false;
                    $image2 = URLROOT . $file;
                }
            }

            if ( isset( $_FILES['prj_img3'] ) ) {
                $path = 'Images/';
                $file_name = str_replace(' ', '', $_FILES['prj_img3']['name']);
                $file_tmp = $_FILES['prj_img3']['tmp_name'];
                $file_type = $_FILES['prj_img3']['type'];
                $file = $path . $file_name;
                if ( move_uploaded_file( $file_tmp, $file ) ) {
                    // $error = false;
                    $image3 = URLROOT . $file;
                }
            }

            if ( isset( $_FILES['prj_img4'] ) ) {
                $path = 'Images/';
                $file_name = str_replace(' ', '', $_FILES['prj_img4']['name']);
                $file_tmp = $_FILES['prj_img4']['tmp_name'];
                $file_type = $_FILES['prj_img4']['type'];
                $file = $path . $file_name;
                if ( move_uploaded_file( $file_tmp, $file ) ) {
                    // $error = false;
                    $image4 = URLROOT . $file;
                }
            }

            if ( isset( $_FILES['prj_img5'] ) ) {
                $path = 'Images/';
                $file_name = str_replace(' ', '', $_FILES['prj_img5']['name']);
                $file_tmp = $_FILES['prj_img5']['tmp_name'];
                $file_type = $_FILES['prj_img5']['type'];
                $file = $path . $file_name;
                if ( move_uploaded_file( $file_tmp, $file ) ) {
                    // $error = false;
                    $image5 = URLROOT . $file;
                }
            }

            $query = "INSERT INTO `projects` (`project_id`, `project_name`, `project_filter_key`, `project_tech`, `project_description`, `project_platform`, `prj_img1`, `prj_img2`, `prj_img3`, `prj_img4`, `prj_img5`, `project_link`) VALUES (
                '".mysqli_real_escape_string( $link, $project_id )."', 
                '".mysqli_real_escape_string( $link, $prj_title )."', 
                '".mysqli_real_escape_string( $link, $prj_filter_key )."', 
                '".mysqli_real_escape_string( $link, $prj_tech )."', 
                '".mysqli_real_escape_string( $link, $prj_description )."', 
                '".mysqli_real_escape_string( $link, $prj_platform )."', 
                '".mysqli_real_escape_string( $link, $image1 )."', 
                '".mysqli_real_escape_string( $link, $image2 )."', 
                '".mysqli_real_escape_string( $link, $image3 )."', 
                '".mysqli_real_escape_string( $link, $image4 )."', 
                '".mysqli_real_escape_string( $link, $image5 )."', 
                '".mysqli_real_escape_string( $link, $prj_url )."'
                )";

                if (mysqli_query($link, $query)) {
                    echo json_encode("SUCCESS");
                } else {
                    echo json_encode("FAILED");
                }
        }
    } else {
        echo json_encode('Unknown Request');
    }
} else {
    echo '<b><h1>Error 403</h1><h1>Forbbiden</h1></b>';
} 




?>