<?php
require '../../config.php';
require_once($_SERVER['DOCUMENT_ROOT'] . $site_dir . '/include/connection.php');

// use PHPMailer\PHPMailer\PHPMailer;

// require '../../PHPMailer/src/Exception.php';
// require '../../PHPMailer/src/PHPMailer.php';
// require '../../PHPMailer/src/SMTP.php';
extract($_POST);
ob_start();
function compressImage($source, $destination, $quality)
{
    $info = getimagesize($source);
    if ($info['mime'] == 'image/jpeg') {
        $image = imagecreatefromjpeg($source);
    } elseif ($info['mime'] == 'image/gif') {
        $image = imagecreatefromgif($source);
    } elseif ($info['mime'] == 'image/png') {
        $image = imagecreatefrompng($source);
    }
    imagejpeg($image, $destination, $quality);
}
function imagecheck($imagetype)
{
    if ($imagetype == "JPG" || $imagetype == "jpg" || $imagetype == "PNG" || $imagetype == "png" || $imagetype == "jpeg" || $imagetype == "JPEG" || $imagetype == "" ||  $imagetype == "WEBP" || $imagetype == "webp" || $imagetype == "") {
        return true;
    } else {
        return false;
    }
}
switch ($_GET['page']) {
    case 'operator':
        $id =  htmlentities(@mysqli_real_escape_string($con, $_POST['id']));
        $fullname = htmlentities(@mysqli_real_escape_string($con, $_POST['fullname']));
        $email = htmlentities(@mysqli_real_escape_string($con, $_POST['email']));
        $university = htmlentities(@mysqli_real_escape_string($con, $_POST['university']));
        $status = htmlentities(@mysqli_real_escape_string($con, $_POST['status']));

        if ($_POST['pswd'] != '') {
            $pswd = md5($_POST['pswd']);
            $insert = mysqli_query($con, "UPDATE `operators` SET  `password`='$pswd' WHERE `id` = '$id'");
            if ($insert) {
            } else {
                echo json_encode(["status" => 'danger', "msg" => mysqli_error($con)]);
            }
        }

        $check_operator = mysqli_query($con, "SELECT * FROM `operators` WHERE `email` = '$email' AND `university` = '$university' AND `id` != '$id'");
        if (mysqli_num_rows($check_operator) > 0) {

            $selectUni = mysqli_query($con, "SELECT * FROM `university` WHERE `id` = '$university'");
            $fetchUni = mysqli_fetch_array($selectUni);
            $uniName = $fetchUni['name'];
            echo json_encode(["status" => 'warning', "msg" => '<b>' . $email . '</b> in <b>' . $uniName . '</b> already exist']);
            exit();
        }

        $insert = mysqli_query($con, "UPDATE `operators` SET  `fullname`='$fullname',`email`='$email',`university`='$university',`status`='$status' WHERE `id` = '$id'");
        if ($insert) {
            echo json_encode(["status" => 'success', "msg" => 'Operator Successfully Updated']);
        } else {
            echo json_encode(["status" => 'danger', "msg" => mysqli_error($con)]);
        }


        break;


    case 'about':
        $id = htmlspecialchars($_POST['id']);
        $description = base64_encode($_POST['description']);
        $heading = htmlspecialchars($_POST['heading']);
        $image = date('dmYHis') . str_replace(" ", "", basename($_FILES["image"]["name"]));
        $check_img = mysqli_query($con, "SELECT * FROM  about where id='$id'");
        $fetch_check = mysqli_fetch_array($check_img);
        // Valid extension
        $valid_ext = array('png', 'jpeg', 'jpg');
        // Location
        $location = "../../assets/img/" . $image;
        // file extension
        $file_extension = pathinfo($location, PATHINFO_EXTENSION);
        $file_extension = strtolower($file_extension);
        if ($file_extension != "") {
            if (in_array($file_extension, $valid_ext)) {
                $scan_image = $fetch_check['img'];
                $file_path = "../../assets/img/";
                $image_handle = opendir($file_path);
                while ($image_file = readdir($image_handle)) {
                    if ($image_file == $scan_image) {
                        unlink($file_path . "/" . $image_file);
                    }
                }
                closedir($image_handle);
            }
            if ($file_extension == "png") {
                $fileupload = move_uploaded_file($_FILES["image"]["tmp_name"], $location);
            } else {
                if (in_array($file_extension, $valid_ext)) {
                    // Compress Image
                    compressImage($_FILES['image']['tmp_name'], $location, 20);
                } else {
                    echo json_encode(array("res" => "format"));
                    exit();
                }
            }
            $updateimage = mysqli_query($con, "UPDATE `about` SET `img`='$image'  where id='$id' ");
        }
        $insert = mysqli_query($con, "UPDATE `about` SET `heading`='$heading',`description`='$description' WHERE id='$id'");
        if ($insert) {
            echo json_encode(array("res" => "success"));
        } else {
            echo json_encode(array("res" => "databasewrong"));
        }
        break;


    case 'advertisement':
        $id = $_POST['id'];
        $add_link = htmlspecialchars($_POST['link']);
        $location = htmlspecialchars($_POST['location']);
        $status = htmlspecialchars($_POST['status']);
        $user_id = $_SESSION['user_id'];


        if ($add_link != "" && $location != "" && $status != "") {

            $image = date('dmYHis') . str_replace(" ", "", basename($_FILES["image"]["name"]));
            $picture_type = str_replace("", "", basename($_FILES["image"]["type"]));
            $path_picture = "../../uploads/advertisement/" . $image;
            $selectUser = mysqli_query($con, "SELECT * FROM `adds` where `id` = '$id'");
            $fetch_check = mysqli_fetch_array($selectUser);
            if ($picture_type != "") {
                $path_pix = "../../uploads/advertisement/" . $image;
                $scan_pix = $fetch_check['image'];
                $file_path = "../../uploads/advertisement/";
                $pix_handle = opendir($file_path);
                while ($pix_file = readdir($pix_handle)) {
                    if ($pix_file == $scan_pix) {
                        unlink($file_path . "/" . $pix_file);
                    }
                }
                closedir($pix_handle);
                if (!imagecheck($picture_type)) {
                    echo json_encode(array("res" => "format"));
                    exit();
                }

                mysqli_query($con, "UPDATE `adds` SET `image`='$image'  where id='$id'  ");
                move_uploaded_file($_FILES["image"]["tmp_name"], $path_picture);
            }

            $insert =  mysqli_query($con, "UPDATE `adds` SET `add_link`='$add_link',`location`= '$location',`user_id`='$user_id',`status` = '$status' WHERE id = '$id'");


            if ($insert) {
                echo json_encode(array("res" => "success"));
            } else {
                echo json_encode(array("res" => "databasewrong"));
            }
        } else {
            echo json_encode(array("res" => "fillform"));
        }
        break;
    case 'banner':
        $id = $_POST['id'];
        $cate_id = $_POST['cate_id'];
        $news_id = $_POST['news_id'];

        $select = mysqli_query($con, "SELECT * FROM `banner` WHERE `cate_id` = '$cate_id' AND `id` != '$id'");
        if (mysqli_num_rows($select) > 0) {
            echo json_encode(array("res" => "alreadyBanner"));
        } else {

            $update = mysqli_query($con, "UPDATE `banner` SET  `cate_id`='$cate_id',`news_id`='$news_id'  WHERE `id` = '$id'");
            if ($update) {
                echo json_encode(array("res" => "success"));
            } else {
                echo json_encode(array("res" => "databasewrong"));
            }
        }
        break;

    case 'user':
        $id = htmlspecialchars($_POST['id']);
        $fname = htmlspecialchars($_POST['fname']);
        $lname = htmlspecialchars($_POST['lname']);
        $email = htmlspecialchars($_POST['email']);
        $pswd = ($_POST['pswd']);
        $phone = htmlspecialchars($_POST['phone']);
        $gender = htmlspecialchars($_POST['gender']);
        $dob = htmlspecialchars($_POST['dob']);
        $adr = htmlspecialchars($_POST['adress']);
        $status = htmlspecialchars($_POST['status']);
        $country = htmlspecialchars($_POST['country']);
        $instagram = htmlspecialchars($_POST['instagram']);
        $twitter = htmlspecialchars($_POST['tweeter']);
        $facebook = htmlspecialchars($_POST['facebook']);
        $snapchat = htmlspecialchars($_POST['snapchat']);
        if ($fname != "" && $lname != "" && $email != "" && $dob != "" && $phone != "" && $adr != "" && $status != "" && $country != "") {

            $image = date('dmYHis') . str_replace(" ", "", basename($_FILES["image"]["name"]));
            $picture_type = str_replace("", "", basename($_FILES["image"]["type"]));
            $path_picture = "../../uploads/users/" . $image;
            $selectUser = mysqli_query($con, "SELECT * FROM users where id='$id'");
            $fetch_check = mysqli_fetch_array($selectUser);
            if ($picture_type != "") {
                $path_pix = "../../uploads/users/" . $image;
                $scan_pix = $fetch_check['profile'];
                $file_path = "../../uploads/users/";
                $pix_handle = opendir($file_path);
                while ($pix_file = readdir($pix_handle)) {
                    if ($pix_file == $scan_pix) {
                        unlink($file_path . "/" . $pix_file);
                    }
                }
                closedir($pix_handle);
                if (!imagecheck($picture_type)) {
                    echo json_encode(array("res" => "format"));
                    exit();
                }
                mysqli_query($con, "UPDATE `users` SET `profile`='$image'  where id='$id' ");
                move_uploaded_file($_FILES["image"]["tmp_name"], $path_picture);
            }


            if ($pswd != "") {
                $password = md5($pswd);
                $update = mysqli_query($con, "UPDATE `users` SET `pswd`='$password' WHERE id='$id'");
            }
            $insert = mysqli_query($con, "UPDATE `users` SET `fname`='$fname',`lname`='$lname',`email`='$email',`phone`='$phone',`gender`='$gender',`dob`='$dob',`adress`='$adr',`status`='$status',`country`='$country',`instagram`='$instagram',`twitter`='$twitter',`facebook`='$facebook',`snapchat`='$snapchat'  WHERE  id='$id'");
            if ($insert) {
                echo json_encode(array("res" => "success"));
            } else {
                echo json_encode(array("res" => "databasewrong"));
            }
        } else {
            echo json_encode(array("res" => "fillform"));
        }
        break;



    case 'profile':
        $id = htmlspecialchars($_POST['id']);
        $firstname = htmlspecialchars($_POST['fname']);
        $lastname = htmlspecialchars($_POST['lname']);
        $email = htmlspecialchars($_POST['email']);
        $phone = htmlspecialchars($_POST['phone']);

        if ($firstname != "" && $lastname != "" && $email != "" && $phone != "") {

            $image = date('dmYHis') . str_replace(" ", "", basename($_FILES["profile"]["name"]));
            $picture_type = str_replace("", "", basename($_FILES["profile"]["type"]));
            $path_picture = "../../uploads/users/" . $image;
            $selectUser = mysqli_query($con, "SELECT * FROM users where id='$id'");
            $fetch_check = mysqli_fetch_array($selectUser);
            if ($picture_type != "") {
                $path_pix = "../../uploads/users/" . $image;
                $scan_pix = $fetch_check['profile'];
                $file_path = "../../uploads/users/";
                $pix_handle = opendir($file_path);
                while ($pix_file = readdir($pix_handle)) {
                    if ($pix_file == $scan_pix) {
                        unlink($file_path . "/" . $pix_file);
                    }
                }
                closedir($pix_handle);
                if (!imagecheck($picture_type)) {
                    echo json_encode(array("res" => "format"));
                    exit();
                }
                mysqli_query($con, "UPDATE `users` SET `profile`='$image'  where id='$id' ");
                move_uploaded_file($_FILES["profile"]["tmp_name"], $path_picture);
            }


            if ($_POST['pswd'] != "") {
                $password = md5($_POST['pswd']);
                $update = mysqli_query($con, "UPDATE `users` SET `password`='$password' WHERE id='$id'");
            }
            $update = mysqli_query($con, "UPDATE `users` SET `fname`='$firstname',`lname`='$lastname',`email`='$email',`phone`='$phone' WHERE id='$id'");
            if ($update) {
                echo json_encode(array("status" => "success", "msg" => 'Operator Successfully Updated'));
            } else {
                echo json_encode(["status" => 'danger', "msg" => mysqli_error($con)]);
            }
        } else {
            echo json_encode(array("status" => "warning", 'msg' => 'Fill all the fields'));
        }

        break;

    case 'social':
        $id = htmlspecialchars($_POST['id']);
        $fb = htmlspecialchars($_POST['facebook']);
        $twitter = htmlspecialchars($_POST['twitter']);
        $email = htmlspecialchars($_POST['email']);
        $insta = htmlspecialchars($_POST['insta']);
        $update = mysqli_query($con, "UPDATE `social` SET `facebook`='$fb',`twitter`='$twitter',`email`='$email',`insta`='$insta' WHERE id='$id'");
        if ($update) {
            echo json_encode(array("res" => "success"));
        } else {
            echo json_encode(array("res" => "databasewrong"));
        }
        break;
    case 'fuserprofile':
        $id = htmlspecialchars($_POST['id']);
        $firstname = htmlspecialchars($_POST['fname']);
        $lastname = htmlspecialchars($_POST['lname']);
        $email = htmlspecialchars($_POST['email']);
        $password = htmlspecialchars($_POST['pswd']);
        $gender = htmlspecialchars($_POST['gender']);
        $phone = htmlspecialchars($_POST['phone']);
        $dob = htmlspecialchars($_POST['dob']);
        $adr = htmlspecialchars($_POST['adr']);
        $state = htmlspecialchars($_POST['state']);
        $country = htmlspecialchars($_POST['country']);
        $image = date('dmYHis') . str_replace(" ", "", basename($_FILES["image"]["name"]));
        $check_img = mysqli_query($con, "SELECT * FROM users where id='$id'");
        $fetch_check = mysqli_fetch_array($check_img);
        // Valid extension
        $valid_ext = array('png', 'jpeg', 'jpg');
        // Location
        $location = "../../assets/img/" . $image;
        // file extension
        $file_extension = pathinfo($location, PATHINFO_EXTENSION);
        $file_extension = strtolower($file_extension);
        if ($file_extension != "") {
            if (in_array($file_extension, $valid_ext)) {
                $scan_image = $fetch_check['img'];
                $file_path = "../../assets/img/";
                $image_handle = opendir($file_path);
                while ($image_file = readdir($image_handle)) {
                    if ($image_file == $scan_image) {
                        unlink($file_path . "/" . $image_file);
                    }
                }
                closedir($image_handle);
            }
            if ($file_extension == "png") {
                $fileupload = move_uploaded_file($_FILES["image"]["tmp_name"], $location);
            } else {
                if (in_array($file_extension, $valid_ext)) {
                    // Compress Image
                    compressImage($_FILES['image']['tmp_name'], $location, 20);
                } else {
                    echo json_encode(array("res" => "format"));
                    exit();
                }
            }
            $updateimage = mysqli_query($con, "UPDATE `users` SET `img`='$image'  where id='$id' ");
        }
        if ($password != "") {
            $password = md5($password);
            $update = mysqli_query($con, "UPDATE `users` SET `pswd`='$password' WHERE id='$id'");
        }
        $update = mysqli_query($con, "UPDATE `users` SET `fname`='$firstname',`lname`='$lastname',`email`='$email',`gender`='$gender',`phone`='$phone',`dob`='$dob',`adress`='$adr',`state`='$state',`country`='$country' WHERE id='$id'");
        if ($update) {
            echo json_encode(array("res" => "success"));
        } else {
            echo json_encode(array("res" => "databasewrong"));
        }
        break;

    case 'frontupdate':
        $id = htmlspecialchars($_POST['id']);
        $firstname = htmlspecialchars($_POST['ufname']);
        $lastname = htmlspecialchars($_POST['ulname']);
        $email = htmlspecialchars($_POST['uemail']);
        $password = htmlspecialchars($_POST['upswd']);
        $phone = htmlspecialchars($_POST['uphone']);
        $image = date('dmYHis') . str_replace(" ", "", basename($_FILES["uimage"]["name"]));
        $check_img = mysqli_query($con, "SELECT * FROM users where id='$id'");
        $fetch_check = mysqli_fetch_array($check_img);
        // Valid extension
        $valid_ext = array('png', 'jpeg', 'jpg');
        // Location
        $location = "../../uploads/users/" . $image;
        // file extension
        $file_extension = pathinfo($location, PATHINFO_EXTENSION);
        $file_extension = strtolower($file_extension);
        if ($file_extension != "") {
            if (in_array($file_extension, $valid_ext)) {
                $scan_image = $fetch_check['profile'];
                $file_path = "../../uploads/users/";
                $image_handle = opendir($file_path);
                while ($image_file = readdir($image_handle)) {
                    if ($image_file == $scan_image) {
                        unlink($file_path . "/" . $image_file);
                    }
                }
                closedir($image_handle);
            }
            if ($file_extension == "png") {
                $fileupload = move_uploaded_file($_FILES["uimage"]["tmp_name"], $location);
            } else {
                if (in_array($file_extension, $valid_ext)) {
                    // Compress Image
                    compressImage($_FILES['uimage']['tmp_name'], $location, 20);
                } else {
                    echo json_encode(array("res" => "format"));
                    exit();
                }
            }
            $updateimage = mysqli_query($con, "UPDATE `users` SET `profile`='$image'  where id='$id' ");
        }
        if ($password != "") {
            $password = md5($password);
            $update = mysqli_query($con, "UPDATE `users` SET `pswd`='$password' WHERE id='$id'");
        }
        $update = mysqli_query($con, "UPDATE `users` SET `fname`='$firstname',`lname`='$lastname',`email`='$email',`phone`='$phone' WHERE id='$id'");
        if ($update) {
            echo json_encode(array("res" => "success"));
        } else {
            echo json_encode(array("res" => "databasewrong"));
        }
        break;
    case 'blockk':
        // echo "sdf";
        $id = htmlspecialchars($_POST['id']);
        $status = htmlspecialchars($_POST['block']);
        if ($status == "0") {
            $q = mysqli_query($con, "UPDATE `plans` SET `block`='1' WHERE id='$id'");
            if ($q) {
                echo json_encode(array("res" => "success", "msg" => "Status Block Successfully!"));
            } else {
                echo json_encode(array("res" => "danger", "msg" => "Error In Your Query!"));
            }
        } elseif ($status == "1") {
            $q = mysqli_query($con, "UPDATE `plans` SET `block`='0' WHERE id='$id'");
            if ($q) {
                echo json_encode(array("res" => "success", "msg" => "Status Unblock Successfully!"));
            } else {
                echo json_encode(array("res" => "danger", "msg" => "Error In Your Query!"));
            }
        }
        break;
    case 'status':
        // echo "sdf";
        $id = htmlspecialchars($_POST['id']);
        $status = htmlspecialchars($_POST['status']);
        if ($status == "0") {
            $q = mysqli_query($con, "UPDATE `plans` SET `status`='1' WHERE id='$id'");
            if ($q) {
                echo json_encode(array("res" => "success", "msg" => "Status Active Successfully!"));
            } else {
                echo json_encode(array("res" => "danger", "msg" => "Error In Your Query!"));
            }
        } elseif ($status == "1") {
            $q = mysqli_query($con, "UPDATE `plans` SET `status`='0' WHERE id='$id'");
            if ($q) {
                echo json_encode(array("res" => "success", "msg" => "Status Unactive Successfully!"));
            } else {
                echo json_encode(array("res" => "danger", "msg" => "Error In Your Query!"));
            }
        }
        break;
    case 'stu-status':
        // echo "sdf";
        $id = htmlspecialchars($_POST['id']);
        $status = htmlspecialchars($_POST['status']);
        if ($status == "0") {
            $q = mysqli_query($con, "UPDATE `student_plan` SET `status`='1' WHERE id='$id'");
            if ($q) {
                echo json_encode(array("res" => "success", "msg" => "Status Active Successfully!"));
            } else {
                echo json_encode(array("res" => "danger", "msg" => "Error In Your Query!"));
            }
        } elseif ($status == "1") {
            $q = mysqli_query($con, "UPDATE `student_plan` SET `status`='0' WHERE id='$id'");
            if ($q) {
                echo json_encode(array("res" => "success", "msg" => "Status Unactive Successfully!"));
            } else {
                echo json_encode(array("res" => "danger", "msg" => "Error In Your Query!"));
            }
        }
        break;
    case 'servicestatus':
        $id = htmlspecialchars($_POST['id']);
        $status = htmlspecialchars($_POST['status']);
        if ($status == "0") {
            $q = mysqli_query($con, "UPDATE `service` SET `status`='1' WHERE id='$id'");
            if ($q) {
                echo json_encode(array("res" => "success", "msg" => "Status Active Successfully!"));
            } else {
                echo json_encode(array("res" => "danger", "msg" => "Error In Your Query!"));
            }
        } elseif ($status == "1") {
            $q = mysqli_query($con, "UPDATE `service` SET `status`='0' WHERE id='$id'");
            if ($q) {
                echo json_encode(array("res" => "success", "msg" => "Status Unactive Successfully!"));
            } else {
                echo json_encode(array("res" => "danger", "msg" => "Error In Your Query!"));
            }
        }
        break;
    case 'userstatus':
        // echo "sdf";
        $id = htmlspecialchars($_POST['id']);
        $status = htmlspecialchars($_POST['status']);
        if ($status == "0") {
            $q = mysqli_query($con, "UPDATE `users` SET `status`='1' WHERE id='$id'");
            if ($q) {
                echo json_encode(array("res" => "success", "msg" => "Status Active Successfully!"));
            } else {
                echo json_encode(array("res" => "danger", "msg" => "Error In Your Query!"));
            }
        } elseif ($status == "1") {
            $q = mysqli_query($con, "UPDATE `users` SET `status`='0' WHERE id='$id'");
            if ($q) {
                echo json_encode(array("res" => "success", "msg" => "Status Deactive Successfully!"));
            } else {
                echo json_encode(array("res" => "danger", "msg" => "Error In Your Query!"));
            }
        }
        break;
    case 'studio-status':
        // echo "sdf";
        $id = htmlspecialchars($_POST['id']);
        $status = htmlspecialchars($_POST['status']);
        if ($status == "0") {
            $q = mysqli_query($con, "UPDATE `add_studio` SET `status`='1' WHERE id='$id'");
            if ($q) {
                echo json_encode(array("res" => "success", "msg" => "Status Active Successfully!"));
            } else {
                echo json_encode(array("res" => "danger", "msg" => "Error In Your Query!"));
            }
        } elseif ($status == "1") {
            $q = mysqli_query($con, "UPDATE `add_studio` SET `status`='0' WHERE id='$id'");
            if ($q) {
                echo json_encode(array("res" => "success", "msg" => "Status Deactive Successfully!"));
            } else {
                echo json_encode(array("res" => "danger", "msg" => "Error In Your Query!"));
            }
        }
        break;
    case 'studio-verify':
        // echo "sdf";
        $id = htmlspecialchars($_POST['id']);
        $verify = htmlspecialchars($_POST['verify']);
        if ($verify == "0") {
            $q = mysqli_query($con, "UPDATE `add_studio` SET `verified`='1' WHERE id='$id'");
            if ($q) {
                echo json_encode(array("res" => "success", "msg" => "Studio Verified Successfully!"));
            } else {
                echo json_encode(array("res" => "danger", "msg" => "Error In Your Query!"));
            }
        } elseif ($verify == "1") {
            $q = mysqli_query($con, "UPDATE `add_studio` SET `verified`='0' WHERE id='$id'");
            if ($q) {
                echo json_encode(array("res" => "success", "msg" => "Studio Unverify Successfully!"));
            } else {
                echo json_encode(array("res" => "danger", "msg" => "Error In Your Query!"));
            }
        }
        break;
    case 'setting':
        if ($_POST["id"] != "") {
            $id = $_POST["id"];
            $website_logo = "";
            $website_favicon = "";
            $shor_desc = mysqli_real_escape_string($con, base64_encode($_POST["shor_desc"]));
            $website_name = mysqli_real_escape_string($con, htmlspecialchars($_POST["website_name"]));
            $website_email = mysqli_real_escape_string($con, htmlspecialchars($_POST["website_email"]));
            $website_phone = mysqli_real_escape_string($con, htmlspecialchars($_POST["website_phone"]));
            $website_address = mysqli_real_escape_string($con, htmlspecialchars($_POST["website_address"]));
            $fb_link = mysqli_real_escape_string($con, htmlspecialchars($_POST["fb_link"]));
            $linkedin_link = mysqli_real_escape_string($con, htmlspecialchars($_POST["linkedin_link"]));
            $twitter_link = mysqli_real_escape_string($con, htmlspecialchars($_POST["twitter_link"]));
            $ins_link = mysqli_real_escape_string($con, htmlspecialchars($_POST["ins_link"]));
            $youtube_link = mysqli_real_escape_string($con, htmlspecialchars($_POST["youtube_link"]));
            $pinterest_link = mysqli_real_escape_string($con, htmlspecialchars($_POST["pinterest_link"]));

            if ($_FILES["website_logo"]["name"] != "") {
                $website_logo = "logo.png";
                move_uploaded_file($_FILES["website_logo"]["tmp_name"], "../../uploads/setting/" . $website_logo);
            } else {
                $website_logo = $settinginfo["website_logo"];
            }
            if ($_FILES["website_favicon"]["name"] != "") {
                $website_favicon = "favicon.ico";
                move_uploaded_file($_FILES["website_favicon"]["tmp_name"], "../../uploads/setting/" . $website_favicon);
            } else {
                $website_favicon = $settinginfo["website_favicon"];
            }
            $update = mysqli_query($con, "UPDATE `settings` SET `website_name`='$website_name',`website_email`='$website_email',`website_favicon`='$website_favicon',`website_logo`='$website_logo',`website_phone`='$website_phone',`website_address`='$website_address',`fb_link`='$fb_link',`ins_link`='$ins_link',`twitter_link`='$twitter_link',`linkedin_link`='$linkedin_link',`youtube_link`='$youtube_link',`pinterest_link`='$pinterest_link',`shor_desc`='$shor_desc' WHERE `id`='$id'");
            if ($update) {
                echo json_encode(array("status" => "success", 'msg' => 'Setting updated successfully'));
            } else {
                echo json_encode(array("status" => "warning",  'msg' => 'Something wrong in database'));
            }
        }
        break;
    case 'seo':
        if ($_POST["id"] != "") {
            $id = $_POST["id"];
            $title = mysqli_real_escape_string($con, htmlspecialchars($_POST["title"]));
            $link = mysqli_real_escape_string($con, htmlspecialchars($_POST["page_link"]));

            $descc = base64_encode($_POST["descc"]);
            $update = mysqli_query($con, "UPDATE `seo` SET `title`='$title',`page_link`='$link',`descc`='$descc' WHERE `id`='$id'");
            if ($update) {
                echo json_encode(array("res" => "success"));
            } else {
                echo json_encode(array("res" => "databasewrong"));
            }
        }
        break;

    case 'category':
        if ($_POST["id"] != "") {
            $id = $_POST["id"];
            $name = mysqli_real_escape_string($con, htmlspecialchars($_POST["name"]));
            $link = mysqli_real_escape_string($con, htmlspecialchars($_POST["link"]));
            $status = htmlspecialchars($_POST['status']);
            $parent = htmlspecialchars($_POST['parent']);
            $description = base64_encode($_POST['description']);
            $cate_type = htmlspecialchars($_POST['cate_type']);

            $update = mysqli_query($con, "UPDATE `category` SET `name`='$name',`link`='$link',`status`='$status',`parent`='$parent',`description` = '$description' ,`cate_type` = '$cate_type' WHERE `id`='$id'");
            if ($update) {
                echo json_encode(array("res" => "success"));
            } else {
                echo json_encode(array("res" => "databasewrong"));
            }
        }
        break;
    case 'slider_category':

        $id = $_POST["id"];
        $cate = mysqli_real_escape_string($con, htmlspecialchars($_POST["cate"]));


        $update = mysqli_query($con, "UPDATE `slider_cate` SET `cate_id`='$cate' WHERE `id`='$id'");
        if ($update) {
            echo json_encode(array("res" => "success"));
        } else {
            echo json_encode(array("res" => "databasewrong"));
        }

        break;


    case 'navigation':
        if ($_POST["id"] != "") {
            $id = $_POST["id"];
            $name = mysqli_real_escape_string($con, htmlspecialchars($_POST["name"]));
            $link = mysqli_real_escape_string($con, htmlspecialchars($_POST["link"]));
            $status = htmlspecialchars($_POST['status']);
            $parent = htmlspecialchars($_POST['parent']);

            $update = mysqli_query($con, "UPDATE `navigation` SET `name`='$name',`link`='$link',`status`='$status',`parent`='$parent' WHERE `id`='$id'");
            if ($update) {
                echo json_encode(array("res" => "success"));
            } else {
                echo json_encode(array("res" => "databasewrong"));
            }
        }
        break;

    case 'blockword':
        $id = $_POST["id"];
        $word = htmlspecialchars($_POST['word']);
        $insert = mysqli_query($con, "UPDATE `blockword` SET `word`='$word' WHERE `id`='$id'");
        if ($insert) {
            $data = array("res" => "success", "msg" => "Block Words Update Successfully!");
        } else {
            $data = array("res" => "danger", "msg" => "Error In Query!");
        }
        echo json_encode($data);
        break;

    case 'feedback':

        $user_id = $_POST["user_id"];
        $invoice_id = $_POST["invoice_id"];
        $star =  htmlspecialchars($_POST["rate"]);
        $comment = htmlspecialchars($_POST['message']);

        $update = mysqli_query($con, "UPDATE `invoices` SET `review` = '$comment',`star`='$star' WHERE `invoice_id` = '$invoice_id'");
        if ($update) {
            echo json_encode(array("res" => "success"));
        } else {
            echo json_encode(array("res" => "databasewrong"));
        }

        break;
    case 'fifa':
        $id = htmlspecialchars($_POST['id']);
        $column = htmlspecialchars($_POST['column']);
        $val = htmlspecialchars($_POST['val']);

        $qry = mysqli_query($con, "UPDATE `fifa_team` SET `$column`='$val'  WHERE `id` = '$id' ");

        if ($qry) {
            echo json_encode(array("res" => "success"));
        } else {
            echo json_encode(array("res" => "databasewrong"));
        }


        break;
    default:
        // code...
        break;
}
