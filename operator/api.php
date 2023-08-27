<?php 
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Origin: *");

include_once($_SERVER['DOCUMENT_ROOT'] . '/include/connection.php');

switch ($_GET["page"]) {
        case "login":
            $email =  mysqli_real_escape_string($con,$_POST['email']);
            $password =  md5($_POST['password']);
            
            $selectUser = mysqli_query($con,"SELECT * FROM `operators` WHERE `email` = '$email' and `password` = '$password'  ");
            if(mysqli_num_rows($selectUser) > 0){
            $fetchUser = mysqli_fetch_array($selectUser);
                    
                if($fetchUser['status'] == '1'){
                    $uniii = $fetchUser['university'];
                        $selectUni = mysqli_query($con,"SELECT * FROM `university` where `id` = '$uniii' ");
                        $fetchuni = mysqli_fetch_array($selectUni);
                        echo json_encode([
                                'status' => 'success',
                                'msg' => 'Successfully Logged-In',
                                'token' => generateRandomString(),
                                'user' => [
                                    'id' => $fetchUser['id'],
                                    'email' => $fetchUser['email'],
                                    'universityid' => $fetchUser['university'],
                                    'fullname' => $fetchUser['fullname'],
                                    'university_short_name' => $fetchuni['short_name'],
                                    'university_name' => $fetchuni['name']
                                ]
                            ]);
                            exit;
                }else{
                    echo json_encode([
                                'status' => 'warning',
                                'mg' => 'Your account has been De-Activated!'
                            ]);
                            exit;
                }
            
            }else{
                    echo json_encode(['status'=>'warning','msg'=>'Credentials not found in our records!']);
                    exit;
            }
            
             
        break;
        case 'requestOTP':
            if(!isset($_POST['operator_id']) && isset($_POST['otp']) && isset($_POST['std_id']) && isset($_POST['university_id']) ){
                 echo json_encode([
                                'status' => 'warning',
                                'msg' => 'unauthorized', 
                            ]);
                        exit;
            }
            $otp = mysqli_real_escape_string($con,$_POST['otp']);
            $orderno = mysqli_real_escape_string($con,$_POST['orderno']);
            $university_id = mysqli_real_escape_string($con,$_POST['university_id']);
            $operator_id = mysqli_real_escape_string($con,$_POST['operator_id']);
                
                
                $select = mysqli_query($con,"
                    SELECT users.displayName ,users.gender , plan.title as planName , plan.value as planValue,orders.* FROM `orders` 
                    JOIN `users` ON orders.user_id = users.id 
                    JOIN `plan` ON plan.id = orders.plan
                    WHERE orders.orderno = '$orderno' AND `orders`.otp = '$otp' AND orders.university = '$university_id' AND `orders`.status = '0'");
                    
                if(mysqli_num_rows($select)>0){
                    $fetch = mysqli_fetch_array($select);
                    
                        
                            if($fetch['gender'] == 'male'){
                                $dname = 'Mr '.$fetch['displayName'];
                            }else{
                                $dname = 'Ms '.$fetch['displayName'];
                            }
                        echo json_encode([
                                'status' => 'success',
                                'msg' => 'Successfully Order Found',
                                'order' => [
                                'student_name' => $dname,
                                'orderid' => $fetch['id'],
                                'totalAmount' => $fetch['totalAmount'],
                                'planName' => $fetch['planName'],
                                'student_university_id' => $fetch['student_university_id'],
                                'planValue' => $fetch['planValue'],
                                'orderno' => $fetch['orderno'], 
                                'university' => $fetch['university'], 
                                'plan' => $fetch['plan'], 
                                'user_id' => $fetch['user_id'], 
                                ]
                            ]);
                            exit;
                }else{
                     echo json_encode([
                                'status' => 'warning',
                                'msg' => 'OTP already redeem', 
                            ]);
                        exit;
                }
                
        break;
        
        case 'confirmOrder':
                $order = $_POST['order_id'];
                $operator_id = $_POST['operator_id']; 
                $totalAmount = $_POST['totalAmount']; 
                $university = $_POST['university']; 
                $plan = $_POST['plan_id']; 
                $user_id = $_POST['user_id']; 
                $time = time();
                
                
                $select = mysqli_query($con,"SELECT * FROM cards WHERE `university` = '$university' AND `value` = '$plan' AND `is_used` = 'NOT_USED' ORDER BY `id` DESC"); 
                if(mysqli_num_rows($select) == 0){
                    echo json_encode(['status' => 'warning', 'msg'=>'Card is not available!']);
                    exit;
                }
 
                
                $fetch = mysqli_fetch_array($select);
                $card_id = $fetch['id'];
                
                $update = mysqli_query($con,"UPDATE `orders` SET  `operator_id`='$operator_id', `status`='1', `payAmount`='$totalAmount',`receive_time`= '$time',`otp`= 'used' , `card` = '$card_id'  WHERE `id` = '$order'");
                
                
                $selectUser = mysqli_query($con,"SELECT * FROM `users` WHERE `id` = '$user_id'");
                $fetchUser = mysqli_fetch_array($selectUser);
                $selectOrder = mysqli_query($con,"SELECT * FROM `orders` WHERE `id` = '$order'");
                $fetchOrder = mysqli_fetch_array($selectOrder);
          
                if($update){
                 $fromEmail = CONNECT_EMAIL_CLIENT;
                $fromName = 'Qouta Card - GCSHO';
                $toEmail = $fetchOrder['email'];
                $subject = 'Qouta Card - GCSHO';
              ob_start();
             
                    ?>
                    <!DOCTYPE html>
                    <html>
                        <head>
                      <meta charset="UTF-8">
                      <title>Qouta Card - GCSHO</title>
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
                          <p>Thank you for using our services. Your Print Qouta Card:</p>
                        </div>
                            
                            <a href="<?=$url.'cards/card?order_id='.base64_encode($order)?>" download style="margin:0 auto;width:fit-content;padding:20px 40px; background:#fff;border:1px solid lightgray; border-radius:5px">
                                Download Qouta Card
                            </a> 
                            
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
                             
                             $update = mysqli_query($con,"UPDATE `cards` SET  `is_used`= 'USED', `user` = '$user_id' , `date_used` = '$time' WHERE `id` = '$card_id'"); 
                             echo json_encode(['status' => 'success', 'msg'=>'Successfully Order delivered!']);
                         }
                         else{
                             echo json_encode(['status' => 'warning', 'msg'=>'Email not be sending']);
                         }
                }
                else{
                    echo json_encode(['status' => 'warning', 'msg'=>'Something wrong, try again!']);
                }
                
            break;
        case 'getOrders':
                $status = mysqli_real_escape_string($con,$_POST['status']);
                $operator_id = mysqli_real_escape_string($con,$_POST['operator_id']);
                $university_id = mysqli_real_escape_string($con,$_POST['university_id']); 
                $response = [];
                $i = 0;
                $select = mysqli_query($con,"SELECT plan.title, orders.student_university_id ,orders.receive_time  FROM `orders` JOIN `plan` ON plan.id = orders.plan WHERE `orders`.status = '$status' AND `orders`.university  = '$university_id' ORDER BY orders.id DESC LIMIT 20");
                if(mysqli_num_rows($select) > 0){
                    while($fetch = mysqli_fetch_array($select)){
                        
                         
                        $response[$i]['student_university_id'] = $fetch['student_university_id'];
                        $response[$i]['title'] = $fetch['title'];
                        $response[$i]['receive_time'] =date("j - m - Y , h:i:s A",$fetch['receive_time']);
                         $i++; 
                    } 
                    echo json_encode(['status'=>'success','msg'=>'Successfully orders found','orders'=>$response],JSON_PRETTY_PRINT);
                    
                } else{
                     echo json_encode(['status'=>'warning','msg'=>'No orders found']);
                }
                
         break;
         case 'headerDetails':
            
                $operator_id = mysqli_real_escape_string($con,$_POST['operator_id']);
                $university_id = mysqli_real_escape_string($con,$_POST['university_id']); 
           
                $select = mysqli_query($con,"SELECT count(id) as pendingOrder FROM `orders`   WHERE `orders`.status = '0' AND `orders`.university  = '$university_id'");
                $fetchPendingOrder = mysqli_fetch_array($select);
                
                $selectAmount = mysqli_query($con,"SELECT sum(orders.payAmount) as totalAmontPrice FROM `orders`   WHERE `orders`.status = '1' AND `orders`.university  = '$university_id' AND `orders`.operator_id  = '$operator_id'");
                $totalAmontPrice = mysqli_fetch_array($selectAmount);
                
                echo json_encode(['status'=>'success','totalAmount'=>$totalAmontPrice['totalAmontPrice'], 'pendingOrder' => $fetchPendingOrder['pendingOrder'] ]);
                
                
        break;     
}
function generateRandomString($length = 160)
{
    $characters =
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    $charactersLength = strlen($characters);
    $randomString = "";
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
}
