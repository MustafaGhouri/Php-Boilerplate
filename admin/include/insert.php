<?php
require '../../config.php';
require_once($_SERVER['DOCUMENT_ROOT'] . $site_dir . '/include/connection.php');

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
  if ($imagetype == "JPG" || $imagetype == "jpg" || $imagetype == "PNG" || $imagetype == "png" || $imagetype == "jpeg" || $imagetype == "JPEG" || $imagetype == "") {
    return true;
  } else {
    return false;
  }
}


function sanitize($data)
{
  global $con;
  $var1 = mysqli_real_escape_string($con, $data);
  $var2 = htmlentities($var1);
  $var3 = htmlspecialchars($var2);
  $var4 = addslashes($var3);

  return strip_tags($var4);
}


function generateRandomString($length)
{
  return substr(str_shuffle(str_repeat($x = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', ceil($length / strlen($x)))), 1, $length);
}

switch ($_GET['page']) {
  case 'bulk':
    $university = mysqli_real_escape_string($con, htmlentities($_POST['university']));
    $operator = mysqli_real_escape_string($con, htmlentities($_POST['operator']));
    $status = mysqli_real_escape_string($con, htmlentities($_POST['status']));
    $plan = mysqli_real_escape_string($con, htmlentities($_POST['plan']));
    $expiry = mysqli_real_escape_string($con, htmlentities($_POST['expiry']));

    if ($operator == 'root') {
      $operator = 'online';
    }

    $csvFile = fopen($_FILES['file']['tmp_name'], 'r');

    $logFile = fopen('error.log', 'a');
    fwrite($logFile, "Error Log:\n");
    $counterr = 0;

    while (($data = fgetcsv($csvFile)) !== FALSE) {
      $card_no = mysqli_real_escape_string($con, $data[0]);
      $query = "INSERT INTO `cards` (`card_no`, `value`, `university`, `provider`, `is_used`, `exp_date`,`status`) VALUES ('$card_no', '$plan', '$university', '$operator', 'NOT_USED', '$expiry','$status')";
      $insert = mysqli_query($con, $query);
      if ($insert === FALSE) {

        $errorMessage = "Error: " . $query . "\n" .  mysqli_error($con) . "\n";
        fwrite($logFile, $errorMessage);
        $counterr++;
      }
    }
    if ($counterr == 0) {
      echo json_encode(["status" => 'success', "msg" => 'Successfullyd Inserted']);
    } else {
      echo json_encode(["status" => 'danger', "msg" => mysqli_error($con)]);
    }
    fclose($csvFile);
    fclose($logFile);

    break;
  case 'card':
    $cardno = htmlentities(@mysqli_real_escape_string($con, $_POST['cardno']));
    $value = htmlentities(@mysqli_real_escape_string($con, $_POST['value']));
    $link = htmlentities(@mysqli_real_escape_string($con, $_POST['link']));
    $university = htmlentities(@mysqli_real_escape_string($con, $_POST['university']));
    $operator = htmlentities(@mysqli_real_escape_string($con, $_POST['operator']));
    $status = htmlentities(@mysqli_real_escape_string($con, $_POST['status']));
    if ($operator == 'root') {
      $operator = 'online';
    }
    // Check card id Exist or Not
    $select = mysqli_query($con, "SELECT * FROM `cards` WHERE `card_no` = '$cardno' AND `university` = '$university' AND `provider` = '$operator'");
    if (mysqli_num_rows($select) > 0) {
      echo json_encode(["status" => 'warning', "msg" => '<b>' . $cardno . '</b> already exist in the database']);
      exit();
    }

    $insert = mysqli_query($con, "INSERT INTO `cards`(`card_no`, `value`, `university`, `provider`,`is_used`, `status`) VALUES ('$cardno','$value','$university','$operator','NOT_USED','1')");
    if ($insert) {
      echo json_encode(["status" => 'success', "msg" => 'Successfully Inserted']);
    } else {
      echo json_encode(["status" => 'danger', "msg" => mysqli_error($con)]);
    }
    break;
  case 'operator':
    $fullname = htmlentities(@mysqli_real_escape_string($con, $_POST['fullname']));
    $email = htmlentities(@mysqli_real_escape_string($con, $_POST['email']));
    $university = htmlentities(@mysqli_real_escape_string($con, $_POST['university']));
    $status = htmlentities(@mysqli_real_escape_string($con, $_POST['status']));
    $pswd = md5($_POST['pswd']);

    $check_operator = mysqli_query($con, "SELECT * FROM `operators` WHERE `email` = '$email' AND `university` = '$university'");
    if (mysqli_num_rows($check_operator) > 0) {
      $selectUni = mysqli_query($con, "SELECT * FROM `university` WHERE `id` = '$university'");
      $fetchUni = mysqli_fetch_array($selectUni);
      $uniName = $fetchUni['name'];
      echo json_encode(["status" => 'warning', "msg" => '<b>' . $email . '</b> in <b>' . $uniName . '</b> already exist']);
      exit();
    }

    $insert = mysqli_query($con, "INSERT INTO `operators`(`fullname`, `email`, `password`, `university`, `status` ) VALUES ('$fullname','$email','$pswd','$university','$status' )");
    if ($insert) {
      echo json_encode(["status" => 'success', "msg" => 'Successfully Inserted']);
    } else {
      echo json_encode(["status" => 'danger', "msg" => mysqli_error($con)]);
    }

    break;
  case 'university':
    $name = htmlentities(@mysqli_real_escape_string($con, $_POST['name']));
    $link = substr(htmlentities(@mysqli_real_escape_string($con, $_POST['link'])), 0, 50);
    $status = htmlentities(@mysqli_real_escape_string($con, $_POST['status']));
    $shortname = htmlentities(@mysqli_real_escape_string($con, $_POST['shortname']));
    $description = base64_encode($_POST['description']);

    // Check Image Exist or Not
    $select = mysqli_query($con, "SELECT * FROM `university` WHERE `name` = '$name'");
    if (mysqli_num_rows($select) > 0) {
      echo json_encode(["status" => 'warning', "msg" => '<b>' . $name . '</b> already exist in the database']);
      exit();
    }

    $image = '';
    $image = 'gcsho_univeristy_image' . time() . '.' . basename($_FILES["image"]["type"]);
    $filePath = '../../uploads/university/' . $image;
    $isFileMove = move_uploaded_file($_FILES['image']['tmp_name'], $filePath);

    $insert = mysqli_query($con, "INSERT INTO `university`(`name`, `link`, `image`, `description`, `status`,`short_name`) VALUES ('$name','$link','$image','$description','$status','$shortname')");
    if ($insert) {
      echo json_encode(["status" => 'success', "msg" => 'Successfully Inserted']);
    } else {
      echo json_encode(["status" => 'danger', "msg" => mysqli_error($con)]);
    }
    break;

  case 'testimonials':
    $name = htmlentities(@mysqli_real_escape_string($con, $_POST['name']));

    $designation = htmlentities(@mysqli_real_escape_string($con, $_POST['designation']));

    $picture = date('dmYHis') . str_replace(" ", "", basename($_FILES["image"]["name"]));
    $picture_type = str_replace("", "", basename($_FILES["image"]["type"]));
    $path_picture = "../../uploads/testimonials/" . $picture;
    $short_description = base64_encode($_POST['short_description']);

    if (!imagecheck($picture_type)) {
      echo json_encode(array("res" => "format"));
      exit();
    }

    move_uploaded_file($_FILES["image"]["tmp_name"], $path_picture);


    $insert = mysqli_query($con, "INSERT INTO `testimonials`(`image`, `name`, `description`, `designation`,`user_id`) VALUES ('$picture','$name','$short_description','$designation','$globaluserid')");
    if ($insert) {
      echo json_encode(array("res" => "success"));
    } else {
      echo json_encode(array("res" => "databasewrong"));
    }
    break;

  case 'service-cate':
    $cate = htmlspecialchars($_POST['cat']);
    $catlink = htmlspecialchars($_POST['cat_link']);
    $parent = htmlspecialchars($_POST['parent']);
    if ($cate != "") {
      $insert = mysqli_query($con, "INSERT INTO `service_category`(`parent`,`link`,`category`) VALUES ('$parent','$catlink','$cate')");
      if ($insert) {
        echo json_encode(array("res" => "success"));
      } else {
        echo json_encode(array("res" => "databasewrong"));
      }
    } else {
      echo json_encode(array("res" => "fillform"));
    }
    break;

  case 'playlist':
    // Step 1 - Retrieve input values
    $title = base64_encode($_POST['title']);
    $image = htmlspecialchars($_POST['yt_img']);
    $parent = $_POST['parent'];
    $embed = $_POST['embed'];
    $url = htmlspecialchars($_POST['url']);
    $status = htmlspecialchars($_POST['status']);

    // Step 2 - Sanitize and validate input values

    // Step 3 - Create SQL query
    $query = "INSERT INTO `playlist`(`title`, `url`, `yt_img`, `embed`,`parent_id`, `status`) VALUES ('$title','$url','$image','$embed',$parent,'$status' )";

    // Step 4 - Execute SQL query
    $result = mysqli_query($con, $query);

    // Step 5 - Check if query executed successfully
    if ($result) {
      // Step 6 - Output success message
      echo json_encode(array("res" => "success"));
    } else {
      // Step 7 - Output error message
      echo json_encode(array("res" => "databasewrong"));
    }

    break;

  case 'imageUploader':

    if (!empty($_FILES)) {
      $tempFile = $_FILES['file']['tmp_name'];
      $file_name = date('dmYHis') . str_replace(" ", "", basename($_FILES["file"]["name"]));
      $path_picture = "../../uploads/tinyUpload/" . $file_name;

      if (move_uploaded_file($_FILES["file"]["tmp_name"], $path_picture)) {
        //echo json_encode(array('location' => $path_picture));
        die($path_picture);
        //exit();
      } else {
        die('Fail');
      }
    }

    break;
  case 'news':
    $title = base64_encode($_POST['title']);
    $page_link = htmlspecialchars(substr($_POST['link'], 0, 50));
    $short_desc = base64_encode($_POST['short_desc']);
    $date = $_POST['date'];
    $description = base64_encode($_POST['description']);
    $session_id = $_SESSION["user_id"];
    $category = $_POST["category"];
    $type = $_POST["news_type"];
    $yt_img = $_POST["yt_img"];
    $ip =  $_SERVER['REMOTE_ADDR'];
    $data = array();

    $image = date('dmYHis') . str_replace(" ", "", basename($_FILES["image"]["name"]));


    if ($description != "" && $title != "" && $category != "") {
      $check_latest = mysqli_query($con, "SELECT * FROM `news` WHERE `category_id` = $category AND `type` = '1'");

      if (mysqli_num_rows($check_latest) > 5) {
        echo json_encode(array("res" => "Latest_news_limit_exist"));
        exit();
      }


      $link_qry = mysqli_query($con, "SELECT * FROM `news` WHERE `page_link` = '$page_link'");
      if (mysqli_num_rows($link_qry) > 0) {

        $page_link = $page_link . rand(0, 1000);
      }

      // else{ 
      $picture_type = str_replace("", "", basename($_FILES["image"]["type"]));
      $path_picture = "../../uploads/news/" . $image;

      if (!imagecheck($picture_type)) {
        echo json_encode(array("res" => "format"));
        exit();
      } else {
        move_uploaded_file($_FILES["image"]["tmp_name"], $path_picture);
      }

      if ($yt_img != "") {
        $image = "";
      }
      $insert = mysqli_query($con, "INSERT INTO `news`(`img`,`yt_img`,`description`,`title`,`short_desc`,`date`,`page_link`,`user_id`,`category_id`,`type`) VALUES ('$image','$yt_img','$description','$title','$short_desc','$date','$page_link','$session_id','$category','$type')");
      if (isset($_POST['tags'])) {
        $select_last_data = mysqli_query($con, "SELECT * FROM `news` ORDER BY id DESC LIMIT 1");
        $fetch_last_data = mysqli_fetch_array($select_last_data);
        $news_last_id = $fetch_last_data['id'];
        foreach ($_POST['tags'] as $tags) {
          $select_tag = mysqli_query($con, "SELECT * FROM `hash_tags` WHERE tags = '$tags'");
          if (mysqli_num_rows($select_tag) == 0) {
            $insert = mysqli_query($con, "INSERT INTO `hash_tags`(`tags`) VALUES ('$tags')");
          }
          array_push($data, $tags);
        }


        $select_tagss = mysqli_query($con, "SELECT * FROM `hash_tags` WHERE tags IN ('" . implode("', '", $data) . "')");

        while ($fetch_tagsss = mysqli_fetch_array($select_tagss)) {
          $tagss_last_id = $fetch_tagsss['id'];

          $insert = mysqli_query($con, "INSERT INTO `tags`(`tag_id`, `news_id`,`type`) VALUES ('$tagss_last_id' , '$news_last_id','news')");
        }
      }
      if ($insert) {
        $activity_mssg = base64_encode(substr($_POST['title'], 0, 30) . " Added by");
        $activity_log = mysqli_query($con, "INSERT INTO `activity_log`(`user_id`, `activity_mssg`, `activity_type`,`ip_address`) VALUES ('$session_id','$activity_mssg','News','$ip')");
        echo json_encode(array("res" => "success"));
      } else {
        echo json_encode(array("res" => "databasewrong"));
      }
      // }
    } else {
      echo json_encode(array("res" => "fillform"));
    }
    break;
  case 'advertisement':

    $add_link = htmlspecialchars($_POST['link']);
    $location = htmlspecialchars($_POST['location']);
    $status = htmlspecialchars($_POST['status']);
    $user_id = $_SESSION['user_id'];


    $image = date('dmYHis') . str_replace(" ", "", basename($_FILES["image"]["name"]));

    if ($add_link != "" && $location != "" && $image != "" && $status != "") {

      $select_user = mysqli_query($con, "SELECT * FROM `users` WHERE `id` = '$user_id'");
      $fetch_user = mysqli_fetch_array($select_user);
      $email = $fetch_user['email'];

      // else{ 
      $picture_type = str_replace("", "", basename($_FILES["image"]["type"]));
      $path_picture = "../../uploads/advertisement/" . $image;

      if (!imagecheck($picture_type)) {
        echo json_encode(array("res" => "format"));
        exit();
      } else {
        move_uploaded_file($_FILES["image"]["tmp_name"], $path_picture);
      }

      $insert = mysqli_query($con, "INSERT INTO `adds`(`add_link`, `location`, `image`,`user_id`,`email`,`status`) VALUES ('$add_link','$location','$image','$user_id','$email','$status')");

      if ($insert) {
        $activity_mssg = base64_encode(substr($_POST['title'], 0, 30) . " Added by");
        $activity_log = mysqli_query($con, "INSERT INTO `activity_log`(`user_id`, `activity_mssg`, `activity_type`,`ip_address`) VALUES ('$user_id','$activity_mssg','advertisement','$ip')");
        echo json_encode(array("res" => "success"));
      } else {
        echo json_encode(array("res" => "databasewrong"));
      }
    } else {
      echo json_encode(array("res" => "fillform"));
    }
    break;

  case 'editorial':
    $title = base64_encode($_POST['title']);
    $author = base64_encode($_POST['author']);
    $page_link = htmlspecialchars($_POST['link']);
    $date = $_POST['date'];
    $short_description = base64_encode($_POST['short_description']);
    $instagram = base64_encode($_POST['instagram']);
    $twetter = base64_encode($_POST['twetter']);
    $facebook = base64_encode($_POST['facebook']);
    $description = base64_encode($_POST['description']);
    $user_id = $_SESSION["user_id"];
    $ip =  $_SERVER['REMOTE_ADDR'];
    $image = date('dmYHis') . str_replace(" ", "", basename($_FILES["image"]["name"]));


    if ($description != "" && $title != "") {

      // else{ 
      $picture_type = str_replace("", "", basename($_FILES["image"]["type"]));
      $path_picture = "../../uploads/editorials/" . $image;

      if (!imagecheck($picture_type)) {
        echo json_encode(array("res" => "format"));
        exit();
      } else {
        move_uploaded_file($_FILES["image"]["tmp_name"], $path_picture);
      }

      $insert = mysqli_query($con, "INSERT INTO `editorial`(`title`,`short_description`,`link`, `description`, `image`, `publish_date`, `user_id`,`author`,`instagram_link`,`facebook_link`,`twitter_links`) VALUES ('$title','$short_description','$page_link','$description','$image','$date','$user_id','$author','$instagram','$facebook','$twetter')");

      if ($insert) {
        $activity_mssg = base64_encode(substr($_POST['title'], 0, 30) . " Added by");
        $activity_log = mysqli_query($con, "INSERT INTO `activity_log`(`user_id`, `activity_mssg`, `activity_type`,`ip_address`) VALUES ('$user_id','$activity_mssg','Editorial','$ip')");
        echo json_encode(array("res" => "success"));
      } else {
        echo json_encode(array("res" => "databasewrong"));
      }
    } else {
      echo json_encode(array("res" => "fillform"));
    }
    break;

  case 'shows':
    $yt_img = $_POST["yt_img"];
    $heading = base64_encode($_POST['heading']);
    $link = htmlspecialchars($_POST['link']);
    $short_heading = base64_encode($_POST['short_heading']);
    $short_desc = base64_encode($_POST['short_desc']);
    $show_type = $_POST["show_type"];
    $status = $_POST["status"];
    $publish_date = $_POST['publish_date'];
    $description = base64_encode($_POST['description']);
    $session_id = $_SESSION["user_id"];
    $cate_id = base64_decode($_POST["cate_id"]);
    $data = array();

    if ($url != "" && $description != "" && $heading != "") {

      $insert = mysqli_query($con, "INSERT INTO `shows` ( `heading`, `link`, `short_heading`, `short_description`, `user_id`, `cate_id`, `publish_date`, `show_type`, `yt_img`, `description`, `status`) VALUES ('$heading','$link','$short_heading','$short_desc','$session_id','$cate_id','$publish_date','$show_type','$yt_img','$description','$status')");

      if ($insert) {
        $select_last_data = mysqli_query($con, "SELECT * FROM `shows` ORDER BY id DESC LIMIT 1");
        $fetch_last_data = mysqli_fetch_array($select_last_data);
        $shows_last_id = $fetch_last_data['id'];

        foreach ($_POST['tags'] as $tags) {
          $select_tag = mysqli_query($con, "SELECT * FROM `hash_tags` WHERE tags = '$tags'");
          if (mysqli_num_rows($select_tag) == 0) {
            $insert = mysqli_query($con, "INSERT INTO `hash_tags`(`tags`) VALUES ('$tags')");
          }
          array_push($data, $tags);
        }


        $select_tagss = mysqli_query($con, "SELECT * FROM `hash_tags` WHERE tags IN ('" . implode("', '", $data) . "')");

        while ($fetch_tagsss = mysqli_fetch_array($select_tagss)) {
          $tagss_last_id = $fetch_tagsss['id'];

          $insert = mysqli_query($con, "INSERT INTO `tags`(`tag_id`, `show_id`,`type`) VALUES ('$tagss_last_id' , '$shows_last_id','shows')");
        }
      }



      if ($insert) {

        $activity_mssg = base64_encode(substr($_POST['heading'], 0, 30) . " Added by");
        $activity_log = mysqli_query($con, "INSERT INTO `activity_log`(`user_id`, `activity_mssg`, `activity_type`,`ip_address`) VALUES ('$session_id','$activity_mssg','Shows','$ip')");


        echo json_encode(array("res" => "success"));
      } else {

        echo json_encode(array("res" => "databasewrong"));
      }
    } else {

      echo json_encode(array("res" => "fillform"));
    }
    break;

  case 'banner':
    $cate_id = $_POST['cate_id'];
    $news_id = $_POST['news_id'];
    $session_id = $_SESSION["user_id"];
    $select = mysqli_query($con, "SELECT * FROM `banner` WHERE `cate_id` = '$cate_id'");
    if (mysqli_num_rows($select) > 0) {
      echo json_encode(array("res" => "alreadyBanner"));
    } else {

      $insert = mysqli_query($con, "INSERT INTO `banner`(`cate_id`, `news_id`) VALUES ('$cate_id','$news_id')");
      if ($insert) {

        echo json_encode(array("res" => "success"));
      } else {
        echo json_encode(array("res" => "databasewrong"));
      }
    }
    break;
  case 'question':
    $question = htmlspecialchars($_POST['question']);
    $answer = $_POST['answer'];
    $session_id = $_SESSION["user_id"];
    foreach ($answer as $key => $ans) {
      $party = $_POST['party'][$key];
      $ques_qry = mysqli_query($con, "SELECT `id` FROM `question` ORDER BY `id` DESC LIMIT 1;");
      $roww = mysqli_fetch_array($ques_qry);
      $ques_iddd = $roww['id'];
      $ques_iddd++;
      $ans_qry = mysqli_query($con, "INSERT INTO `qes_opt`(`opt`,`ques_id`,`party`) VALUES ('$ans','$ques_iddd','$party')");
    }
    $qry = mysqli_query($con, "INSERT INTO `question`( `question`) VALUES ('$question')");
    if ($qry) {
      $activity_mssg = base64_encode(substr($_POST['question'], 0, 30) . " Added by");
      $activity_log = mysqli_query($con, "INSERT INTO `activity_log`(`user_id`, `activity_mssg`, `activity_type`,`ip_address`) VALUES ('$session_id','$activity_mssg','Quiz','$ip')");
      echo json_encode(array("res" => "success"));
    } else {
      echo json_encode(array("res" => "databasewrong"));
    }
    break;
  case 'gallery-cate':
    $cate = htmlspecialchars($_POST['cat']);
    $cat_link = htmlspecialchars($_POST['cat_link']);
    $cat_parent = htmlspecialchars($_POST['cat_parent']);
    $insert = mysqli_query($con, "INSERT INTO `gallery_category`( `category`,`link`,`parent`) VALUES ('$cate','$cat_link','$cat_parent')");
    if ($insert) {
      echo json_encode(array("res" => "success"));
    } else {
      echo json_encode(array("res" => "databasewrong"));
    }
    break;





  case 'review':
    $name = htmlspecialchars($_POST['name']);
    $description = base64_encode($_POST['description']);
    if ($name != "" && $description != "") {
      $insert = mysqli_query($con, "INSERT INTO `review`(`name`, `description`) VALUES ('$name','$description')");
      if ($insert) {
        echo json_encode(array("res" => "success"));
      } else {
        echo json_encode(array("res" => "databasewrong"));
      }
    } else {
      echo json_encode(array("res" => "fillform"));
    }
    break;

  case 'user':
    $fname = htmlspecialchars($_POST['fname']);
    $lname = htmlspecialchars($_POST['lname']);
    $email = htmlspecialchars($_POST['email']);
    $pswd = htmlspecialchars(md5($_POST['pswd']));
    $phone = htmlspecialchars($_POST['phone']);
    $gender = htmlspecialchars($_POST['gender']);
    $dob = htmlspecialchars($_POST['dob']);
    $adr = htmlspecialchars($_POST['adress']);
    $country = htmlspecialchars($_POST['country']);
    $instagram = htmlspecialchars($_POST['instagram']);
    $tweeter = htmlspecialchars($_POST['tweeter']);
    $facebook = htmlspecialchars($_POST['facebook']);
    $snapchat = htmlspecialchars($_POST['snapchat']);
    $role = $_POST['role'];
    $status = $_POST['status'];
    // $image = date('dmYHis') . str_replace(" ", "", basename($_FILES["image"]["name"]));
    if ($fname != "" && $lname != "" && $email != "" && $dob != "" && $phone != "" && $adr != ""  && $country != "" && $role != '' && $status != "") {
      $image = date('dmYHis') . str_replace("", "", basename($_FILES["image"]["name"]));
      $picture_type = str_replace("", "", basename($_FILES["image"]["type"]));
      $path_picture = "../../uploads/users/" . $image;
      if (!imagecheck($picture_type)) {
        echo json_encode(array("res" => "format"));
        exit();
      } else {
        move_uploaded_file($_FILES["image"]["tmp_name"], $path_picture);
      }
      if ($picture_type == null) {
        $image = "user.png";
      }

      $insert = mysqli_query($con, "INSERT INTO `users`(`fname`, `lname`, `email`, `password`, `phone`, `gender`, `dob`,`adress`,`country`, `instagram`, `twitter`, `facebook`, `snapchat`, `profile`, `role_id`,`status`) VALUES ('$fname','$lname','$email','$pswd','$phone','$gender','$dob','$adr','$country','$instagram','$tweeter','$facebook','$snapchat','$image',$role,$status)");
      if ($insert) {
        echo json_encode(array("res" => "success"));
      } else {
        echo json_encode(array("res" => "databasewrong"));
      }
    } else {
      echo json_encode(array("res" => "fillform"));
    }
    break;

  case 'social':
    $fb = htmlspecialchars($_POST['facebook']);
    $twitter = htmlspecialchars($_POST['twitter']);
    $email = htmlspecialchars($_POST['email']);
    $insta = htmlspecialchars($_POST['insta']);
    $insert = mysqli_query($con, "INSERT INTO `social`(`facebook`, `twitter`, `email`, `insta`) VALUES ('$fb','$twitter','$email','$insta')");
    if ($insert) {
      echo json_encode(array("res" => "success"));
    } else {
      echo json_encode(array("res" => "databasewrong"));
    }
    break;

  case 'category':
    $title = htmlspecialchars($_POST['name']);
    $link = htmlspecialchars($_POST['link']);
    $status = htmlspecialchars($_POST['status']);
    $cate_type = htmlspecialchars($_POST['cate_type']);
    $parent = htmlspecialchars($_POST['parent']);
    $description = base64_encode($_POST['description']);
    $chktitle = mysqli_query($con, "SELECT * FROM `category` WHERE `name` = '$title'");
    if (mysqli_num_rows($chktitle) > 0) {
      echo json_encode(array("res" => "Already Exsist"));
      exit();
    }


    $insert = mysqli_query($con, "INSERT INTO `category`(`name`, `link`,`status`,`parent`,`description`,`cate_type`) VALUES ('$title','$link','$status','$parent','$description','$cate_type')");
    if ($insert) {
      echo json_encode(array("res" => "success"));
    } else {
      echo json_encode(array("res" => "databasewrong"));
    }
    break;

  case 'navigation':
    $title = htmlspecialchars($_POST['name']);
    $link = htmlspecialchars($_POST['link']);
    $status = htmlspecialchars($_POST['status']);
    $parent = htmlspecialchars($_POST['parent']);

    $insert = mysqli_query($con, "INSERT INTO `navigation`(`name`, `link`,`status`,`parent`) VALUES ('$title','$link','$status','$parent')");
    if ($insert) {
      echo json_encode(array("res" => "success"));
    } else {
      echo json_encode(array("res" => "databasewrong"));
    }
    break;

  case 'seo':
    $title = htmlspecialchars(mysqli_real_escape_string($con, $_POST['title']));
    $link =  htmlspecialchars(mysqli_real_escape_string($con, $_POST['page_link']));
    $descc = base64_encode($_POST["descc"]);


    $insert = mysqli_query($con, "INSERT INTO `seo` (`title`,`page_link`,`descc`) VALUES ('$title','$link','$descc')");
    if ($insert) {

      echo json_encode(array("res" => "success"));
    } else {
      mysqli_error($con);
      echo json_encode(array("res" => "databasewrong"));
    }
    break;


  default:
    // code...
    break;
}

function invoice_num($input, $pad_len = 7, $prefix = null)
{
  if ($pad_len <= strlen($input))
    trigger_error('<strong>$pad_len</strong> cannot be less than or equal to the length of <strong>$input</strong> to generate invoice number', E_USER_ERROR);
  if (is_string($prefix))
    return sprintf("%s%s", $prefix, str_pad($input, $pad_len, "0", STR_PAD_LEFT));
  return str_pad($input, $pad_len, "0", STR_PAD_LEFT);
}
