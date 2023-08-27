<?php
require '../../config.php';
require_once($_SERVER['DOCUMENT_ROOT'] .$site_dir. '/include/connection.php');
switch ($_GET['page']) {
    case 'bulk':
            $erre = 0;
            foreach($_POST['idies'] as $id){
                
                $delete = mysqli_query($con,"DELETE FROM `cards` WHERE `id` = '$id' ");
                if($delete === FALSE){
                    $erre++;
                }
            }
        
            if($erre == 0){
                 echo json_encode(array("status" => "success"));
            }else{
                  echo json_encode(array("status" => "databasewrong"));
            }
        break;
    case 'cards':
        $id = htmlentities(@mysqli_real_escape_string($con, $_POST['id']));
        $delete = mysqli_query($con, "DELETE FROM `cards` WHERE id='$id'");
        if ($delete) {
            echo json_encode(array("res" => "success"));
        } else {
            echo json_encode(array("res" => "databasewrong"));
        }
    break;
    case 'operator':
        $id = htmlentities(@mysqli_real_escape_string($con, $_POST['id']));
        $delete = mysqli_query($con, "DELETE FROM `operators` WHERE id='$id'");
        if ($delete) {
            echo json_encode(array("res" => "success"));
        } else {
            echo json_encode(array("res" => "databasewrong"));
        }
    break;
    case 'university':
        $id = htmlentities(@mysqli_real_escape_string($con, $_POST['id']));
        $selectUser = mysqli_query($con, "SELECT * FROM university where id='$id'");
        $fetch_check = mysqli_fetch_array($selectUser);
        if (isset($fetch_check['image'])) {
            $scan_pix = $fetch_check['image'];
            $file_path = "../../uploads/university/" . $scan_pix;
            if (file_exists($file_path)) {
                unlink($file_path);
            }
        }
        $delete = mysqli_query($con, "DELETE FROM `university` WHERE id='$id'");
        if ($delete) {
            echo json_encode(array("res" => "success"));
        } else {
            echo json_encode(array("res" => "databasewrong"));
        }
        break;
    case 'testimonial':
        $id = htmlentities(@mysqli_real_escape_string($con, $_POST['id']));
        $selectUser = mysqli_query($con, "SELECT * FROM testimonials where id='$id'");
        $fetch_check = mysqli_fetch_array($selectUser);
        $scan_pix = $fetch_check['image'];

        $file_path = "../../uploads/testimonials/" . $scan_pix;
        if (file_exists($file_path)) {
            unlink($file_path);
        }

        $delete = mysqli_query($con, "DELETE FROM `testimonials` WHERE id='$id'");
        if ($delete) {
            echo json_encode(array("res" => "success"));
        } else {
            echo json_encode(array("res" => "databasewrong"));
        }
        break;
    case 'user':
        $id = htmlspecialchars($_POST['id']);
        $check_img = mysqli_query($con, "SELECT * FROM users where id='$id'");
        $fetch_check = mysqli_fetch_array($check_img);
        $scan_image = $fetch_check['profile'];
        $file_path = "../../uploads/users/";
        $image_handle = opendir($file_path);
        while ($image_file = readdir($image_handle)) {
            if ($image_file == $scan_image) {
                unlink($file_path . "/" . $image_file);
            }
        }
        closedir($image_handle);
        $delete = mysqli_query($con, "DELETE FROM `users`  WHERE id='$id'");
        if ($delete) {
            echo json_encode(array("res" => "success"));
        } else {
            echo json_encode(array("res" => "databasewrong"));
        }
        break;

    case 'slider-categories':
        $id = htmlspecialchars($_POST['id']);
        $delete = mysqli_query($con, "DELETE FROM `slider_cate`  WHERE id='$id'");
        if ($delete) {
            echo json_encode(array("res" => "success"));
        } else {
            echo json_encode(array("res" => "databasewrong"));
        }
        break;
    case 'countries':
        $id = htmlspecialchars($_POST['id']);

        $delete = mysqli_query($con, "DELETE FROM `countries`  WHERE id='$id'");
        if ($delete) {
            echo json_encode(array("res" => "success"));
        } else {
            echo json_encode(array("res" => "databasewrong"));
        }
        break;
    case 'expert':
        $id = htmlspecialchars($_POST['id']);
        // $check_img = mysqli_query($con, "SELECT * FROM users where id='$id'");
        // $fetch_check = mysqli_fetch_array($check_img);
        // $scan_image = $fetch_check['img'];
        // $file_path = "../../uploads/users/";
        // $image_handle = opendir($file_path);
        // while ($image_file = readdir($image_handle)) {
        //     if ($image_file == $scan_image) {
        //         unlink($file_path . "/" . $image_file);
        //     }
        // }
        // closedir($image_handle);
        $delete = mysqli_query($con, "DELETE FROM `users`  WHERE id='$id'");
        if ($delete) {
            echo json_encode(array("res" => "success"));
        } else {
            echo json_encode(array("res" => "databasewrong"));
        }
        break;
    case 'musicians':
        $id = htmlspecialchars($_POST['id']);
        $check_img = mysqli_query($con, "SELECT * FROM users where id='$id'");
        $fetch_check = mysqli_fetch_array($check_img);
        $scan_image = $fetch_check['img'];
        $file_path = "../../uploads/users/";
        $image_handle = opendir($file_path);
        while ($image_file = readdir($image_handle)) {
            if ($image_file == $scan_image) {
                unlink($file_path . "/" . $image_file);
            }
        }
        closedir($image_handle);
        $delete = mysqli_query($con, "DELETE FROM `users`  WHERE id='$id'");
        if ($delete) {
            echo json_encode(array("res" => "success"));
        } else {
            echo json_encode(array("res" => "databasewrong"));
        }
        break;
    case 'artists':
        $id = htmlspecialchars($_POST['id']);
        $check_img = mysqli_query($con, "SELECT * FROM users where id='$id'");
        $fetch_check = mysqli_fetch_array($check_img);
        $scan_image = $fetch_check['img'];
        $file_path = "../../assets/img/";
        $image_handle = opendir($file_path);
        while ($image_file = readdir($image_handle)) {
            if ($image_file == $scan_image) {
                unlink($file_path . "/" . $image_file);
            }
        }
        closedir($image_handle);
        $delete = mysqli_query($con, "DELETE FROM `users`  WHERE id='$id'");
        if ($delete) {
            echo json_encode(array("res" => "success"));
        } else {
            echo json_encode(array("res" => "databasewrong"));
        }
        break;
    case 'creaters':
        $id = htmlspecialchars($_POST['id']);
        $check_img = mysqli_query($con, "SELECT * FROM users where id='$id'");
        $fetch_check = mysqli_fetch_array($check_img);
        $scan_image = $fetch_check['img'];
        $file_path = "../../assets/img/";
        $image_handle = opendir($file_path);
        while ($image_file = readdir($image_handle)) {
            if ($image_file == $scan_image) {
                unlink($file_path . "/" . $image_file);
            }
        }
        closedir($image_handle);
        $delete = mysqli_query($con, "DELETE FROM `users`  WHERE id='$id'");
        if ($delete) {
            echo json_encode(array("res" => "success"));
        } else {
            echo json_encode(array("res" => "databasewrong"));
        }
        break;
    case 'creater-plans':
        $id = htmlspecialchars($_POST['id']);

        $delete = mysqli_query($con, "DELETE FROM `creater_pkg`  WHERE id='$id'");
        if ($delete) {
            echo json_encode(array("res" => "success"));
        } else {
            echo json_encode(array("res" => "databasewrong"));
        }
        break;
    case 'featured-works':
        $id = htmlspecialchars($_POST['id']);
        $check_img = mysqli_query($con, "SELECT * FROM featured_work where id='$id'");
        $fetch_check = mysqli_fetch_array($check_img);
        $scan_image = $fetch_check['img'];
        $file_path = "../../assets/img/";
        $image_handle = opendir($file_path);
        while ($image_file = readdir($image_handle)) {
            if ($image_file == $scan_image) {
                unlink($file_path . "/" . $image_file);
            }
        }
        closedir($image_handle);
        $delete = mysqli_query($con, "DELETE FROM `featured_work`  WHERE id='$id'");
        if ($delete) {
            echo json_encode(array("res" => "success"));
        } else {
            echo json_encode(array("res" => "databasewrong"));
        }
        break;
    case 'tutorials':
        $id = htmlspecialchars($_POST['id']);
        $check_img = mysqli_query($con, "SELECT * FROM tutorials where id='$id'");
        $fetch_check = mysqli_fetch_array($check_img);
        $scan_image = $fetch_check['img'];
        $scan_video = $fetch_check['video'];
        $file_path = "../../uploads/tutorials/";
        $image_handle = opendir($file_path);
        while ($image_file = readdir($image_handle)) {
            if ($image_file == $scan_image) {
                unlink($file_path . "/" . $image_file);
            }
            if ($image_file == $scan_video) {
                unlink($file_path . "/" . $image_file);
            }
        }
        closedir($image_handle);
        $delete = mysqli_query($con, "DELETE FROM `tutorials`  WHERE id='$id'");
        if ($delete) {
            echo json_encode(array("res" => "success"));
        } else {
            echo json_encode(array("res" => "databasewrong"));
        }
        break;
    case 'news_list':
        $id = htmlspecialchars($_POST['id']);
        $check_img = mysqli_query($con, "SELECT * FROM news where id='$id'");
        $fetch_check = mysqli_fetch_array($check_img);
        $scan_image = $fetch_check['img'];
        $file_path = "../../uploads/news/";
        $image_handle = opendir($file_path);
        while ($image_file = readdir($image_handle)) {
            if ($image_file == $scan_image) {
                unlink($file_path . "/" . $image_file);
            }
        }
        closedir($image_handle);
        mysqli_query($con, "DELETE FROM `tags` WHERE news_id = '$id'");
        $delete = mysqli_query($con, "DELETE FROM `news`  WHERE id='$id'");
        if ($delete) {
            $delete_banner = mysqli_query($con, "DELETE FROM `banner`  WHERE `news_id` = '$id'");
            echo json_encode(array("res" => "success"));
        } else {
            echo json_encode(array("res" => "databasewrong"));
        }
        break;
    case 'about':
        $id = htmlspecialchars($_POST['id']);
        $check_img = mysqli_query($con, "SELECT * FROM about where id='$id'");
        $fetch_check = mysqli_fetch_array($check_img);
        $scan_image = $fetch_check['img'];
        $file_path = "../../assets/img/";
        $image_handle = opendir($file_path);
        while ($image_file = readdir($image_handle)) {
            if ($image_file == $scan_image) {
                unlink($file_path . "/" . $image_file);
            }
        }
        closedir($image_handle);
        $delete = mysqli_query($con, "DELETE FROM `about`  WHERE id='$id'");
        if ($delete) {
            echo json_encode(array("res" => "success"));
        } else {
            echo json_encode(array("res" => "databasewrong"));
        }
        break;
    case 'playlistcate':
        $id = htmlspecialchars($_POST['id']);

        $delete = mysqli_query($con, "DELETE FROM `playlist`  WHERE id='$id' ");
        $delete = mysqli_query($con, "DELETE FROM `playlist`  WHERE parent_id='$id' ");
        if ($delete) {
            echo json_encode(array("res" => "success"));
        } else {
            echo json_encode(array("res" => "databasewrong"));
        }
        break;
    case 'services':
        $id = htmlspecialchars($_POST['id']);
        $check_img = mysqli_query($con, "SELECT * FROM service where id='$id'");
        $fetch_check = mysqli_fetch_array($check_img);
        $scan_image = $fetch_check['image'];
        $file_path = "../../uploads/service/";
        $image_handle = opendir($file_path);
        while ($image_file = readdir($image_handle)) {
            if ($image_file == $scan_image) {
                unlink($file_path . "/" . $image_file);
            }
        }
        closedir($image_handle);
        $delete = mysqli_query($con, "DELETE FROM `service`  WHERE id='$id'");
        if ($delete) {
            echo json_encode(array("res" => "success"));
        } else {
            echo json_encode(array("res" => "databasewrong"));
        }
        break;
    case 'gallery-categories':
        $id = htmlspecialchars($_POST['id']);
        $delete = mysqli_query($con, "DELETE FROM `gallery_category`  WHERE id='$id'");
        if ($delete) {
            echo json_encode(array("res" => "success"));
        } else {
            echo json_encode(array("res" => "databasewrong"));
        }
        break;
    case 'shows_cate_list':
        $id = htmlspecialchars($_POST['id']);
        $delete = mysqli_query($con, "DELETE FROM `shows_cate`  WHERE `id` = '$id' ");
        if ($delete) {
            echo json_encode(array("res" => "success"));
        } else {
            echo json_encode(array("res" => "databasewrong"));
        }
        break;
    case 'shows_list':
        $id = htmlspecialchars($_POST['id']);
        $deleteShow = mysqli_query($con, "DELETE FROM `shows`  WHERE `id` = '$id' ");
        if ($deleteShow) {
            $deleteTags = mysqli_query($con, "DELETE FROM `tags`  WHERE `show_id` = '$id' ");

            if ($deleteTags) {
                echo json_encode(array("res" => "success"));
            } else {
                echo json_encode(array("res" => "databasewrong"));
            }
        }
        break;
    case 'quiz_list':
        $id = $_POST['id'];

        $delete = mysqli_query($con, "DELETE FROM `question` WHERE `id` = '$id'");
        if ($delete) {
            echo json_encode(array("res" => "success"));
        } else {
            echo json_encode(array("res" => "databasewrong"));
        }
        break;
    case 'editorials':
        $id = $_POST['id'];
        $check_img = mysqli_query($con, "SELECT * FROM `editorial` where id='$id'");
        $fetch_check = mysqli_fetch_array($check_img);
        $scan_image = $fetch_check['image'];
        $file_path = "../../uploads/editorials/";
        $image_handle = opendir($file_path);
        while ($image_file = readdir($image_handle)) {
            if ($image_file == $scan_image) {
                unlink($file_path . "/" . $image_file);
            }
        }
        closedir($image_handle);
        $delete = mysqli_query($con, "DELETE FROM `editorial` WHERE `id` = '$id'");
        if ($delete) {
            echo json_encode(array("res" => "success"));
        } else {
            echo json_encode(array("res" => "databasewrong"));
        }
        break;
    case 'banners':
        $id = htmlspecialchars($_POST['id']);
        $delete = mysqli_query($con, "DELETE FROM `banner`  WHERE `id` = '$id' ");
        if ($delete) {
            echo json_encode(array("res" => "success"));
        } else {
            echo json_encode(array("res" => "databasewrong"));
        }
        break;
    case 'cate':
        $id = htmlspecialchars($_POST['id']);
        $delete = mysqli_query($con, "DELETE FROM `studio_category`  WHERE cate_id='$id'");
        if ($delete) {
            echo json_encode(array("res" => "success"));
        } else {
            echo json_encode(array("res" => "databasewrong"));
        }
        break;
    case 'reviews':
        $id = htmlspecialchars($_POST['id']);
        $delete = mysqli_query($con, "DELETE FROM `review`  WHERE id='$id'");
        if ($delete) {
            echo json_encode(array("res" => "success"));
        } else {
            echo json_encode(array("res" => "databasewrong"));
        }
        break;
    case 'teams':
        $id = htmlspecialchars($_POST['id']);
        $check_img = mysqli_query($con, "SELECT * FROM team where id='$id'");
        $fetch_check = mysqli_fetch_array($check_img);
        $scan_image = $fetch_check['img'];
        $file_path = "../../uploads/team/";
        $image_handle = opendir($file_path);
        while ($image_file = readdir($image_handle)) {
            if ($image_file == $scan_image) {
                unlink($file_path . "/" . $image_file);
            }
        }
        closedir($image_handle);
        $delete = mysqli_query($con, "DELETE FROM `team`  WHERE id='$id'");
        if ($delete) {
            echo json_encode(array("res" => "success"));
        } else {
            echo json_encode(array("res" => "databasewrong"));
        }
        break;
    case 'what-we-do':
        $id = htmlspecialchars($_POST['id']);
        $check_img = mysqli_query($con, "SELECT * FROM what_we_do where id='$id'");
        $fetch_check = mysqli_fetch_array($check_img);
        $scan_image = $fetch_check['image'];
        $file_path = "../../uploads/";
        $image_handle = opendir($file_path);
        while ($image_file = readdir($image_handle)) {
            if ($image_file == $scan_image) {
                unlink($file_path . "/" . $image_file);
            }
        }
        closedir($image_handle);
        $delete = mysqli_query($con, "DELETE FROM `what_we_do`  WHERE id='$id'");
        if ($delete) {
            echo json_encode(array("res" => "success"));
        } else {
            echo json_encode(array("res" => "databasewrong"));
        }
        break;
    case 'why-choose-us':
        $id = htmlspecialchars($_POST['id']);
        $check_img = mysqli_query($con, "SELECT * FROM why_choose_us where id='$id'");
        $fetch_check = mysqli_fetch_array($check_img);
        $scan_image = $fetch_check['image'];
        $file_path = "../../uploads/";
        $image_handle = opendir($file_path);
        while ($image_file = readdir($image_handle)) {
            if ($image_file == $scan_image) {
                unlink($file_path . "/" . $image_file);
            }
        }
        closedir($image_handle);
        $delete = mysqli_query($con, "DELETE FROM `why_choose_us`  WHERE id='$id'");
        if ($delete) {
            echo json_encode(array("res" => "success"));
        } else {
            echo json_encode(array("res" => "databasewrong"));
        }
        break;
    case 'upcomoing-videos':
        $id = htmlspecialchars($_POST['id']);
        $check_img = mysqli_query($con, "SELECT * FROM upcoming_videos where id='$id'");
        $fetch_check = mysqli_fetch_array($check_img);
        $scan_image = $fetch_check['img'];
        if ($fetch_check['type'] == 'video') {
            $scan_video = $fetch_check['video'];
        }
        $file_path = "../../uploads/upcoming/";
        $image_handle = opendir($file_path);
        while ($image_file = readdir($image_handle)) {
            if ($image_file == $scan_image) {
                unlink($file_path . "/" . $image_file);
            }
            if ($fetch_check['type'] == 'video') {
                if ($image_file == $scan_video) {
                    unlink($file_path . "/" . $image_file);
                }
            }
        }
        closedir($image_handle);
        $delete = mysqli_query($con, "DELETE FROM `why_choose_us`  WHERE id='$id'");
        if ($delete) {
            echo json_encode(array("res" => "success"));
        } else {
            echo json_encode(array("res" => "databasewrong"));
        }
        break;
    case 'service-categories':
        $id = htmlspecialchars($_POST['id']);
        $check_img = mysqli_query($con, "SELECT * FROM service_category where id='$id'");
        $fetch_check = mysqli_fetch_array($check_img);
        $scan_image = $fetch_check['image'];
        $file_path = "../../assets/img/";
        $image_handle = opendir($file_path);
        while ($image_file = readdir($image_handle)) {
            if ($image_file == $scan_image) {
                unlink($file_path . "/" . $image_file);
            }
        }
        closedir($image_handle);
        $delete = mysqli_query($con, "DELETE FROM `service_category`  WHERE id='$id'");
        if ($delete) {
            echo json_encode(array("res" => "success"));
        } else {
            echo json_encode(array("res" => "databasewrong"));
        }
        break;
    case 'plan-categories':
        $id = htmlspecialchars($_POST['id']);


        $delete = mysqli_query($con, "DELETE FROM `plan_category_name`  WHERE id='$id'");
        if ($delete) {
            echo json_encode(array("res" => "success"));
        } else {
            echo json_encode(array("res" => "databasewrong"));
        }
        break;
    case 'students':
        $id = htmlspecialchars($_POST['id']);

        $check_img = mysqli_query($con, "SELECT * FROM student_plan where id='$id'");
        $fetch_check = mysqli_fetch_array($check_img);
        $scan_video = $fetch_check['video'];
        $scan_image = $fetch_check['thumbnail'];
        $file_path = "../../uploads/plan/";
        $image_handle = opendir($file_path);
        while ($image_file = readdir($image_handle)) {
            if ($image_file == $scan_image) {
                unlink($file_path . "/" . $image_file);
            }
            if ($image_file == $scan_video) {
                unlink($file_path . "/" . $image_file);
            }
        }
        closedir($image_handle);

        $delete = mysqli_query($con, "DELETE FROM `student_plan`  WHERE id='$id'");
        if ($delete) {
            echo json_encode(array("res" => "success"));
            mysqli_query($con, "DELETE FROM `student_plan_package`  WHERE student_plan_id='$id'");
        } else {
            echo json_encode(array("res" => "databasewrong"));
        }
        break;
    case 'service':
        $id = htmlspecialchars($_POST['id']);
        $check_img = mysqli_query($con, "SELECT * FROM service where id='$id'");
        $fetch_check = mysqli_fetch_array($check_img);
        $scan_image = $fetch_check['img'];
        $file_path = "../../assets/img/";
        $image_handle = opendir($file_path);
        while ($image_file = readdir($image_handle)) {
            if ($image_file == $scan_image) {
                unlink($file_path . "/" . $image_file);
            }
        }
        closedir($image_handle);
        $delete = mysqli_query($con, "DELETE FROM `service`  WHERE id='$id'");
        if ($delete) {
            echo json_encode(array("res" => "success"));
        } else {
            echo json_encode(array("res" => "databasewrong"));
        }
        break;
    case 'portfolio':
        $id = htmlspecialchars($_POST['id']);
        $check_img = mysqli_query($con, "SELECT * FROM portfolio where pid='$id'");
        $fetch_check = mysqli_fetch_array($check_img);
        $scan_image = $fetch_check['img'];
        $file_path = "../../assets/img/";
        $image_handle = opendir($file_path);
        while ($image_file = readdir($image_handle)) {
            if ($image_file == $scan_image) {
                unlink($file_path . "/" . $image_file);
            }
        }
        closedir($image_handle);
        $delete = mysqli_query($con, "DELETE FROM `portfolio`  WHERE pid='$id'");
        if ($delete) {
            echo json_encode(array("res" => "success"));
        } else {
            echo json_encode(array("res" => "databasewrong"));
        }
        break;
    case 'plans':
        $id = htmlspecialchars($_POST['id']);
        $check_img = mysqli_query($con, "SELECT * FROM plans where id='$id'");
        $fetch_check = mysqli_fetch_array($check_img);
        $scan_image = $fetch_check['image'];
        $scan_video = $fetch_check['video'];
        $file_path = "../../uploads/plan/";
        $image_handle = opendir($file_path);
        while ($image_file = readdir($image_handle)) {
            if ($image_file == $scan_image) {
                unlink($file_path . "/" . $image_file);
            }
            if ($image_file == $scan_video) {
                unlink($file_path . "/" . $image_file);
            }
        }
        closedir($image_handle);
        $delete = mysqli_query($con, "DELETE FROM `plans`  WHERE id='$id'");
        $delete = mysqli_query($con, "DELETE FROM `service_package`  WHERE plan_id='$id'");
        if ($delete) {
            echo json_encode(array("res" => "success"));
        } else {
            echo json_encode(array("res" => "databasewrong"));
        }
        break;

    case 'categories':
        $id = htmlspecialchars($_POST['id']);
        $check_img = mysqli_query($con, "SELECT * FROM category where id='$id'");
        $fetch_check = mysqli_fetch_array($check_img);
        $scan_image = $fetch_check['img'];
        $file_path = "../../uploads/category/";
        $image_handle = opendir($file_path);
        while ($image_file = readdir($image_handle)) {
            if ($image_file == $scan_image) {
                unlink($file_path . "/" . $image_file);
            }
        }
        closedir($image_handle);
        $delete = mysqli_query($con, "DELETE FROM `category`  WHERE id='$id'");
        if ($delete) {
            echo json_encode(array("res" => "success"));
        } else {
            echo json_encode(array("res" => "databasewrong"));
        }
        break;

    case 'navigations':
        $id = htmlspecialchars($_POST['id']);
        $delete = mysqli_query($con, "DELETE FROM `navigation`  WHERE id='$id'");
        if ($delete) {
            echo json_encode(array("res" => "success"));
        } else {
            echo json_encode(array("res" => "databasewrong"));
        }
        break;
    case 'seo_list':
        $id = htmlspecialchars($_POST['id']);
        $delete = mysqli_query($con, "DELETE FROM `seo`  WHERE id='$id'");
        if ($delete) {
            echo json_encode(array("res" => "success"));
        } else {
            echo json_encode(array("res" => "databasewrong"));
        }
        break;

    case 'most_popular_topics':
        $id = htmlspecialchars($_POST['id']);
        $check_img = mysqli_query($con, "SELECT * FROM blog where id='$id'");
        $fetch_check = mysqli_fetch_array($check_img);
        $scan_image = $fetch_check['img'];
        $file_path = "../../uploads/topics/";
        $image_handle = opendir($file_path);
        while ($image_file = readdir($image_handle)) {
            if ($image_file == $scan_image) {
                unlink($file_path . "/" . $image_file);
            }
        }
        closedir($image_handle);
        mysqli_query($con, "DELETE FROM `tags` WHERE topic_id = '$id'");
        $delete = mysqli_query($con, "DELETE FROM `blog`  WHERE id='$id'");
        if ($delete) {
            echo json_encode(array("res" => "success"));
        } else {
            echo json_encode(array("res" => "databasewrong"));
        }
        break;

    default:
        // code...
        break;
}
