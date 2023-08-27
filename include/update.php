<?php
include_once "connection.php";

switch ($_GET['page']) {
    case 'image':
        $id = htmlspecialchars($_POST['id']);
        $image = date('dmYHis') . str_replace(" ", "", basename($_FILES["image"]["name"]));

        // Valid extension
        $valid_ext = array('png', 'jpeg', 'jpg');

        // Location
        $location = "../assets/img/" . $image;

        // file extension
        $file_extension = pathinfo($location, PATHINFO_EXTENSION);
        $file_extension = strtolower($file_extension);

        // Check extension
        if ($file_extension == "png") {
            $path_image = "../assets/img/" . $image;
            $fileupload = move_uploaded_file($_FILES["image"]["tmp_name"], $path_image);

        } else {
            if (in_array($file_extension, $valid_ext)) {

                // Compress Image
                move_uploaded_file($_FILES['image']['tmp_name'], $location);

            } else {
                $data = array("result" => "format");
                echo json_encode($data);
                exit();
            }
        }

//     $image= date('dmYHis').str_replace(" ", "", basename($_FILES["image"]["name"]));
        //     $image_type= str_replace("","",basename($_FILES["image"]["type"]));
        // if(!imagecheck($image_type)){
        //     $data = array("result" => "format");
        //           echo json_encode($data);
        //   exit();
        // }
        $check_users = mysqli_query($con, "SELECT * FROM page_image where id='$id'");
        $fetch_check = mysqli_fetch_array($check_users);

        $scan_image = $fetch_check['image'];
        $file_path = "../assets/img/";
        $image_handle = opendir($file_path);
        while ($image_file = readdir($image_handle)) {
            if ($image_file == $scan_image) {
                unlink($file_path . "/" . $image_file);
            }
        }
        closedir($image_handle);

// $path_image = "../assets/img1/". $image;
        // $fileupload =  move_uploaded_file($_FILES["image"]["tmp_name"], $path_image);

// if($fileupload){

        $updateimage = mysqli_query($con, "UPDATE `page_image` SET `image`='$image'  where id='$id' ");
        $data = array("result" => "true", "img" => $image);

// }
        // else{
        //   $data = array("result" => "wrong");

// }
        echo json_encode($data);

        break;

    case 'content':

        $id = htmlspecialchars($_POST['id']);
// $jp_content = base64_encode(htmlspecialchars($_POST['jp_content']));
        $eng_content = base64_encode(htmlspecialchars($_POST['eng_content']));
        $update = mysqli_query($con, "UPDATE `contents` SET `content`='$eng_content' WHERE id='$id'");
        if ($update) {
            $data = array("result" => "success");
        } else {
            $data = array("result" => "wrong");
        }
        echo json_encode($data);

        break;

    default:
// code...
        break;
}
