<?php

include_once($_SERVER['DOCUMENT_ROOT'] . '/include/connection.php');
 
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




switch ($_GET['page']) { 
    case 'checkoutCod':
        if(!isset($_SESSION['university']) && !isset($_SESSION['plan']) && !isset($_SESSION['user_id'])){
            echo json_encode(['res'=>'warning','msg' => 'Session expired. Please try again.']);
                exit();
        }
        $user_id = $_SESSION['user_id'];
        $university = $_SESSION['university'];
        $plan = $_SESSION['plan'];
        $email = $_POST['email']; 
        $stdId = $_POST['stdId'];
        $phone = $_POST['phone'];
        $time = time();
        $ordernum = 'ORD-1';
        
        $selectUser = mysqli_query($con,"SELECT * FROM `users` WHERE `id` = '$user_id'");
        $fetchUser = mysqli_fetch_array($selectUser);
        
        $selectPlane = mysqli_query($con,"SELECT * from `plan` WHERE id = '$plan'");
        $fetchPlane = mysqli_fetch_array($selectPlane);
        
        $checkUserOrder = mysqli_query($con,"SELECT * FROM `orders` WHERE `user_id` = '$user_id' AND `plan` = '$plan' AND `university` = '$university' AND `status` = '0'");
        if(mysqli_num_rows($checkUserOrder) > 0){
            echo json_encode(['res'=>'warning','msg' => 'Your previous order is already pending. Please collect it first before placing a new order.']);
            exit();
        }
        
        $checkLastOrder = mysqli_query($con,"SELECT * FROM `orders` ORDER BY `id` DESC");
        if(mysqli_num_rows($checkLastOrder) == 0){
            
        }else{
            
            $fetchLastOrder = mysqli_fetch_array($checkLastOrder);
            $lastOrderId = $fetchLastOrder['id'];
            $ordernum = 'ORD-'.$lastOrderId;
        }
        
        $totalAmount = floatval(10 + $fetchPlane['value']);
        $otp = substr(strrev(base64_encode($ordernum)),0,6);

        $insert = mysqli_query($con,"INSERT INTO `orders`(`orderno`, `plan`, `university`, `user_id`, `student_university_id`, `email`, `phone`, `time`, `status`,`totalAmount`, `paymentType`,`otp`) VALUES ('$ordernum','$plan','$university','$user_id','$stdId','$email','$phone',$time,'0','$totalAmount','COD','$otp')");
        $insert = mysqli_query($con,"UPDATE `users` SET `student_id`='$stdId',`university`='$university', `phone`='$phone' WHERE `id` = '$user_id'");
     
        if($insert ) { 
                $fromEmail = CONNECT_EMAIL_CLIENT;
                $fromName = 'GCSHO Pay';
                $toEmail = $email;
                $subject = 'OTP Email';
              ob_start();
             
                    ?>
                    <!DOCTYPE html>
                    <html>
                        <head>
                      <meta charset="UTF-8">
                      <title>OTP Email </title>
                      <style>
                        body {
                          font-family: Arial, sans-serif;
                          margin: 0;
                          padding: 0;
                        }
                        table{
                                width: 100%;
                        }
                    th, td {
                            width: 50%;
                            text-align: left;
                            border-bottom: 1px solid #b9b9b9;
                            padding: 8px 5px;
                        }
                        .container {
                          max-width: 600px;
                          margin: 20px auto;
                          padding: 20px;
                          border: 1px solid #ddd;
                          border-radius: 4px;
                          background-color: #f5f5f5;
                        }
                    
                        .logo {
                          text-align: center;
                          margin-bottom: 20px;
                        }
                    
                        .logo img {
                          width: 120px;
                        }
                    
                        .message {
                          font-size: 16px;
                          line-height: 1.5;
                          margin-bottom: 20px;
                        }
                    
                        .otp {
                          font-size: 24px;
                          font-weight: bold;
                          text-align: center;
                          margin-bottom: 20px;
                          
                        }
                    
                        .button {
                          display: inline-block;
                          padding: 10px 20px;
                          background-color: #4CAF50;
                          color: #fff;
                          text-decoration: none;
                          border-radius: 4px;
                        }
                    
                        .button:hover {
                          background-color: #45a049;
                        }
                      </style>
                    </head>
                        <body>
                      <div class="container">
                        <div class="logo">
                          <img src="<?=$url?>uploads/setting/logotext.png" alt="Logo">
                        </div>
                        <div class="message">
                          <p>Dear user,<?=$fetchUser['displayName']?></p>
                          <p>Thank you for using our services. Your One-Time Password (OTP) is:</p>
                        </div>
                        
                        <div class="otp" >
                            <center>
                          <p style="background:#fff;border:1px solid lightgray; border-radius:10px; width:fit-content;padding:20px 50px"><?=$otp?></p>
                          </center>
                        </div>
                              <p> 
                             <b>Note: </b>
                            Please note the following instructions for receiving your digital print quota card from the GCS Operator at the university copy shop:
                            <ol style="padding:0">
                                <li>Visit the designated GCS Operator at the university copy shop.</li>  
                                <li> Provide the OTP code and pay the invoice amount for the card.</li>  
                                <li>Your digital print quota card will be sent to your registered email.</li>  </ol>
                            </p>
                            <center><hr><h1>Order Details</h1><hr></center>
                            <table>
                                <tr>
                                    <th>Order number</th>
                                    <td><?=$ordernum?></td>
                                </tr>
                                <tr>
                                    <th>Student Id</th>
                                    <td><?=$stdId?></td>
                                </tr>
                                <tr>
                                    <th>Full Name</th>
                                    <td><?=$fetchUser['displayName']?></td>
                                </tr>
                                <tr>
                                    <th>Email</th>
                                    <td><?=$email?></td>
                                </tr>
                                <tr>
                                    <th>Plane</th>
                                    <td><?=$fetchPlane['title']?></td>
                                </tr>
                                <tr>
                                    <th>Plane Amount</th>
                                    <td><?=$fetchPlane['value']?></td>
                                </tr>
                                <tr>
                                    <th>Cash Handling Charges</th>
                                    <td>10</td>
                                </tr>
                                <tr>
                                    <th>Total Amount</th>
                                    <td><?= $totalAmount?></td>
                                </tr>
                                <tr>
                                    <th>Order Time</th>
                                    <td><?=  date("Y-m-d - h : i :s a") ?></td>
                                </tr>
                            </table>
                          
                      </div>
                    </body>
                    </html>

                    
                <?php    
        
            $html = ob_get_contents();
            ob_end_clean();
            $message = $html;
               
                // Create email headers
                $headers  = 'MIME-Version: 1.0' . "\r\n";
                $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
                // Create email headers
                $headers .= 'From:' . $fromEmail . "\r\n" .
                'Reply-To:' . $fromEmail . "\r\n" .
                'X-Mailer: PHP/' . phpversion();
                
               if(mail($toEmail, $subject, $message, $headers)){
                    
                    unset($_SESSION['university']);
                    unset($_SESSION['plan']);
                 
                echo json_encode(['res'=>'success','msg' => 'Your Order has been placed.','redirect'=>$url.'thankyou/'.base64_encode($ordernum)]);
                 exit();
               }
        }else{ 
            echo json_encode(['res'=>'warning','msg' => mysqli_error($con)]);
            exit();
        }
        break;
    case 'signupDetail':
                if(!isset($_SESSION['authid'])){
            echo json_encode(['res'=>'warning','msg' => 'Session expired. Please try again.']);
            exit();
        }
        
        $id = $_SESSION['authid'];
        $university = mysqli_real_escape_string($con,$_POST['student_university']);
        $student_id = mysqli_real_escape_string($con,$_POST['student_id']);
        $phone_number = mysqli_real_escape_string($con,$_POST['phone_number']);
        $gender = mysqli_real_escape_string($con,$_POST['gender']);
        
        if($university == '' || $student_id == '' || $phone_number == '' || $gender == ''){
            echo json_encode(['res'=>'warning','msg' => 'Fill all the fields']);
            exit();
        }
        
        $insert = mysqli_query($con,"UPDATE `users` SET  `student_id`= '$student_id' ,`university`= '$university' ,`phone`= '$phone_number',`gender`='$gender' ,`status`=1 WHERE `id` = '$id' ");
        if($insert){
            $checkUser = mysqli_query($con,"SELECT * FROM  `users` WHERE `id` = '$id'"); 
            $fetchUser = mysqli_fetch_array($checkUser);
            $_SESSION['user_id'] = $fetchUser['id'];
            $_SESSION['user_role'] = $fetchUser['role_id'];
            unset($_SESSION["authid"]);
            echo json_encode(['res'=>'success','msg' => 'Successfully logged in.']);
            exit();
        }else{ 
            echo json_encode(['res'=>'warning','msg' => 'Something went wrong. Please try again.']);
            exit();
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


function OTP_email($otpCode, $username, $email) {
    $fromEmail = 'gcsho@eazysauda.com';
    $fromName = 'GCSHO Pay';
    $toEmail = 'mustafaghouri22@gmail.com';
    $subject = 'OTP Email';

    // Read the HTML template
    $template = file_get_contents(__DIR__ . '/../emails/otp_email.html');

    // Replace placeholders with actual values
    $template = str_replace('{OTP_CODE}', $otpCode, $template);
    $template = str_replace('{USER_NAME}', $username, $template);

    // Create email headers
    $headers = "From: $fromName <$fromEmail>\r\n";
    $headers .= "Reply-To: $fromEmail\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=iso-8859-1\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

    // Send email
    if (mail($toEmail, $subject, $template, $headers)) {
        return true;
    } else {
        return false;
    }
}
