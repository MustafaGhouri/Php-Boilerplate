<?php

require '../../config.php';
require_once($_SERVER['DOCUMENT_ROOT'] .$site_dir. '/include/connection.php');
@session_start();

extract($_POST);
ob_start();

switch ($_GET['page']) {
    case 'operator':
        $id = mysqli_real_escape_string($con, $_POST['id']);
?>
        <option value="root">Sell Online Payment</option>
        <?php
        $query = mysqli_query($con, "SELECT * FROM `operators` WHERE `university` = '$id' ");
        if (mysqli_num_rows($query) > 0) {
            while ($fetch = mysqli_fetch_array($query)) {
        ?>
                <option value="<?= $fetch['id'] ?>"><?= $fetch['fullname'] ?></option>
            <?php
            }
        } else {
            ?>

            <option disabled>Operator not found in this university</option>
<?php
        }
        break;
    case 'newsList':
        // Get News Order by For Sorting
        $column_names = array(
            "id",
            "action",
            "img",
            "time",
            "title",
            "tags",
            "userName",
            "userId"
            // Other column names...
        );

        $order_by = '';
        if (isset($_POST['order']) && count($_POST['order']) > 0) {
            $order_by = 'ORDER BY ';
            for ($i = 0; $i < count($_POST['order']); $i++) {
                $order_column = intval($_POST['order'][$i]['column']);
                $order_dir = $_POST['order'][$i]['dir'];
                $order_by .= $column_names[$order_column] . ' ' . $order_dir . ', ';
            }
            $order_by = substr_replace($order_by, '', -2);
        }
        // Get the requested page number and number of records per page from the POST data
        $page = $_POST['start'] / $_POST['length'] + 1;
        $perPage = $_POST['length'];

        // Calculate the offset and total number of rows
        $offset = ($page - 1) * $perPage;
        $totalRowsResult = mysqli_query($con, 'SELECT COUNT(*) FROM news');
        $totalRows = mysqli_fetch_array($totalRowsResult)[0];



        // Get the search term
        $searchTerm = base64_encode($_POST['search']['value']);


        // Query the data for the current page
        $result = mysqli_query($con, "SELECT * FROM news $order_by LIMIT $perPage OFFSET $offset");
        // Add the search term to the query
        $result = mysqli_query($con, "SELECT * FROM news WHERE title LIKE '%$searchTerm%' $order_by LIMIT $perPage OFFSET $offset");

        $data = array();
        $i = 1;
        while ($row = mysqli_fetch_assoc($result)) {
            $id = $row['id'];
            $selectuser = mysqli_query($con, "SELECT u.id as uid,b.*, u.* ,c.name AS category FROM news b INNER JOIN users u on u.id = b.user_id INNER JOIN category c ON c.id = b.category_id WHERE b.id = $id");
            $fetchuser = mysqli_fetch_array($selectuser);
            $select_clicks = mysqli_query($con, "SELECT COUNT(id) as clicks FROM news_ranking WHERE news_id = '$id'");
            $fetch_clicks = mysqli_fetch_array($select_clicks);
            $select_tags = mysqli_query($con, "SELECT hash_tags.id as hash_tag_id,hash_tags.tags FROM `tags` JOIN hash_tags on tags.tag_id = hash_tags.id JOIN news on news.id = tags.news_id where tags.news_id = '$id' LIMIT 2");
            $tags = array();

            while ($fetch_tags = mysqli_fetch_array($select_tags)) {
                $tags[] = $fetch_tags['tags'];
            }
            $tags = implode(',', $tags);
            $newsLink = $url . 'sub_detail?link=' . $row['page_link'] . '&id=' . $row['id'];
            $data[] = array(
                "sno" => $i++,
                "id" => $row['id'],
                "date" => $row['date'],
                "title" => base64_decode(substr($row['title'], 0, 70)),
                "img" => ($row['img'] != '') ? $url . 'uploads/news/' . $row['img'] : $row['yt_img'],
                "tags" => $tags,
                "category" => $fetchuser['category'],
                "user_id" => ($fetchuser['uid'] == 1) ? '<span class="badge badge-danger"> Admin </span>' : '<span class="badge badge-success">' . @$fetchuser['fname'] . ' ' . @$fetchuser['lname'] . '</span>',
                "clicks" => $fetch_clicks['clicks'],
                "description" => @base64_decode(substr(@$row['short_desc'], 0, 100)),
                "link" => '<a target="_blank" href="' . $newsLink . '" class="banner_image_link" tabindex="-1"> <i class="fa fa-2x fa-arrow-right text-primary"></i> </a>',
            );
        }

        // Return the data in the format required by the DataTable
        echo json_encode(array(
            "draw" => intval($_POST['draw']),
            "recordsTotal" => $totalRows,
            "recordsFiltered" => $totalRows,
            "data" => $data
        ));

        break;


    case 'status1':
        $count_status1 = mysqli_query($con, "SELECT count(messages.status) as status1 FROM `messages` JOIN users on messages.sender_id = users.id where messages.status = 1 and messages.receiver_id='$globaluserid'");
        $fetch_status1 = mysqli_fetch_assoc($count_status1);
        echo $fetch_status1['status1'];
        break;
    case 'status0':
        $count_status0 = mysqli_query($con, "SELECT count(messages.status) as status0 FROM `messages` JOIN users on messages.sender_id = users.id where messages.status = 0 and messages.receiver_id='$globaluserid'");
        $fetch_status0 = mysqli_fetch_assoc($count_status0);
        echo $fetch_status0['status0'];
        break;


    case 'select':
        $id = $_POST["iid"];
        // echo $id;
        $queryd = mysqli_query($con, "SELECT * FROM `users` where id='$id'");
        if (mysqli_num_rows($queryd) > 0) {
            $response = array();
            while ($fet = mysqli_fetch_array($queryd)) {
                array_push($response, array("email" => $fet["email"], "pswd" => "123"));
            }
            echo json_encode($response);
        }
        break;



    case 'login':
        $user_email = htmlspecialchars(mysqli_real_escape_string($con, $_POST['email']));
        $password = md5(htmlspecialchars(mysqli_real_escape_string($con, $_POST['password'])));
        if ($user_email == "" || $password == "") {
            echo json_encode(array("res" => "warning", "msg" => "Please Enter Your " . (($user_email == "" && $password != "") ? "Email!" : "") . (($user_email != "" && $password == "") ? "Password !" : "") . (($user_email == "" && $password == "") ? "Email And Password !" : "")));
            exit();
        }
        $check_email = mysqli_query($con, "SELECT * FROM `users` where email='$user_email' and password ='$password'");
        $fetch = mysqli_fetch_array($check_email);
        if (mysqli_num_rows($check_email) > 0) {
            if ($fetch['status'] == 1) {
                $_SESSION['user_id'] = $fetch['id'];
                $_SESSION['user_role'] = $fetch['role_id'];
                $userid = $fetch['id'];
                $history = mysqli_query($con, "INSERT INTO `login_history`(`user_id`, `status`) VALUES ('$userid','login')");
            }
            if (isset($_SESSION['user_role'])) {
                if ($_SESSION['user_role'] == '1') {

                    echo json_encode(array("res" => (($fetch["status"] == 1) ? "success" : "") . (($fetch["status"] == 0) ? "warning" : ""), "status" => $fetch["status"], "msg" => (($fetch["status"] == 1) ? "Login Successfully!" : "") . (($fetch["status"] == 0) ? "You Can't Login Right Now Wait For Admin Approval!" : ""), "redirect" => $url . "admin/dashboard/"));

                    exit();
                } else if ($_SESSION['user_role'] == 3) {
                    echo json_encode(array("res" => (($fetch["status"] == 1) ? "success" : "") . (($fetch["status"] == 0) ? "warning" : ""), "status" => $fetch["status"], "msg" => (($fetch["status"] == 1) ? "Login Successfully!" : "") . (($fetch["status"] == 0) ? "You Can't Login Right Now Wait For Admin Approval!" : ""), "redirect" => $url . "dashboard"));
                    exit();
                } else {
                    echo json_encode(array("res" => "warning", "msg" => "Your Email And Password Is Not Correct!"));
                    exit();
                }
            }
        } else {
            echo json_encode(array("res" => "warning", "msg" => "Your Email And Password Is Not Correct!"));
        }
        break;
}
