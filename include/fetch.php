<?php
include_once($_SERVER['DOCUMENT_ROOT'] . '/include/connection.php');
 
switch ($_GET['page']) {
    case 'login':
        $displayName = $_POST['displayName'];
        $email = $_POST['email'];
        $profile = $_POST['profile']; 
        $phoneNumber = $_POST['phoneNumber']; 
        
        $checkUser = mysqli_query($con,"SELECT * FROM  `users` WHERE `email` = '$email'");
        if(mysqli_num_rows($checkUser) > 0){
            $fetchUser = mysqli_fetch_array($checkUser);
            
            $_SESSION['user_id'] = $fetchUser['id'];
            $_SESSION['user_role'] = $fetchUser['role_id'];
            echo json_encode(array("result" => "signin",'msg'=>'Redirecting to User Details','redirect'=>$url.'portal/'));
        }else{ 
            $insert = mysqli_query($con,"INSERT INTO `users`( `displayName` ,`email`, `profile` , `role_id`, `status`) VALUES ('$displayName','$email','$profile','2','2')");
            
            if($insert){
                $SelectUser = mysqli_query($con,"SELECT * FROM  `users` WHERE `email` = '$email'");
                $fetchUser = mysqli_fetch_array($SelectUser);
                 
                $_SESSION['user_id'] = $fetchUser['id'];
                $_SESSION['user_role'] = $fetchUser['role_id'];
                echo json_encode(array("result" => "signup",'msg'=>'Redirecting to User Details' ));
            }else{
              echo json_encode(array("result" => "wronge",'msg'=>mysqli_error($con))); 
            }
        }
       
        
        
        break;
    case 'buyplan':
        $id = base64_decode($_POST['id']);
        $plan = base64_decode($_POST['plan']);
        
        $id = mysqli_real_escape_string($con,$id);
         $plan = mysqli_real_escape_string($con,$plan) ;
        if( $plan == 'basic'){
             $plan = 1;
        } else if($plan == 'standard'){
               $plan = 2;
        }else if($plan == 'premium'){
               $plan = 3;
        }else{
               echo $data = json_encode(array("result" => "wrong",'msg'=>'Plan unauthorize'));
               exit();
        }
        $select = mysqli_query($con,"SELECT * FROM `university` WHERE `id` = '$id'");
        if(mysqli_num_rows($select)>0){
     
        unset($_SESSION['university']);
        unset($_SESSION['plan']);
                 
        $_SESSION['university'] = $id;
        $_SESSION['plan'] =  $plan;
           echo  $data = json_encode(array("result" => "success",'msg'=>'Redirecting to Checkout','redirect'=>$url.'checkout'));
            exit();
        }else{
            echo $data = json_encode(array("result" => "wrong",'msg'=>'University not found'));
            exit();
        }
        
    break;
    case 'content':
        $id = htmlspecialchars($_POST['id']);
        $selectContent = mysqli_query($con, "SELECT * FROM contents where id='$id'");
        $fetchContent = mysqli_fetch_array($selectContent);
        // $jp = base64_decode($fetchContent['jp_content']);
        $eng = base64_decode($fetchContent['content']);

        echo "
       <input type='hidden' id='$id' class='contentid' name='id' >

       <label>Content</label>
       <textarea name='eng_content' id='eng_content' class='form-control' >$eng</textarea>";

        break;

    case 'image':

        $id = htmlspecialchars($_POST['id']);

        $check_email = mysqli_query($con, "SELECT * from page_image where id='$id'");
        $fetch = mysqli_fetch_array($check_email);

        if (mysqli_num_rows($check_email) > 0) {

            $data = array("img" => "assets/img/" . $fetch['image']);
        } else {

            $data = array("result" => "wrong");
        }

        echo json_encode($data);

        break;
     
        case 'playlist':
            $id = mysqli_real_escape_string($con,$_POST['id']);
            $select = mysqli_query($con,"SELECT * FROM `playlist` WHERE `id` = $id");
            $fetch = mysqli_fetch_array($select);
            $embed = $fetch['embed'];
            echo $embed;
        break;
    default:
        // code...
        break;
}



function signupModal($name,$profile,$id,$email){
    global $con;
    $selectuniversity = mysqli_query($con,"SELECT * FROM `university` WHERE `status` = '1' ORDER BY `id` DESC");
    $option = '';
    while($fetchUni = mysqli_fetch_array($selectuniversity)){
        $uniId= $fetchUni['id'];
        $uniName= $fetchUni['short_name'];
        $option.= '<option value="'.$uniId.'"> '.$uniName.' </option>';
    }
    $html = '<div class="modal fade" id="authmodal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <div class="modalUserdetail">
                          <img src="'.$profile.'" class="avatar-1">
                          <h4>'.$name.'</h4>
                          <p>'.$email.'</p>
                    </div>
                  </div>
                  <div class="modal-body">
                    <form id="modalauth">
                        <div class="form-group mb-4">
                            <label for="student_university" class="form-label">University</label>
                            <select id="student_university" required name="student_university" class="form-control"> 
                            <option disabled selected hidden>Select your university</option>
                            '. $option .'
                            </select>
                        </div>
                        <div class="form-group mb-4">
                            <label for="student_id" class="form-label">Student Id</label>
                            <input type="text" id="student_id" required name="student_id" placeholder="Enter Your University Student Id" class="form-control"> 
                        </div>
                        <div class="form-group mb-4">
                            <label for="phone_number" class="form-label">Phone Number</label>
                            <input type="text" id="phone_number" required placeholder="Enter Your Phone Number" value="+92" name="phone_number" class="form-control"> 
                            <p class="modalphonenumber"></p>
                        </div>
                        <div class="form-group mb-4">
                            <label for="phone_number" class="form-label">Gender</label>
                            <div class="genderRedioGrp">
                                <div class="radiogroup">
                                    <input id="male" name="gender" type="radio" value="male" class="d-none" />
                                    <label for="male" class="radioLabel" >  Male   </label>
                                </div>
                                <div class="radiogroup">
                                    <input id="female" name="gender" type="radio" value="female" class="d-none" />
                                    <label for="female" class="radioLabel" > Female   </label>
                                </div>
                            </div>
                             
                        </div>
                        <div class="form-group d-flex gap-2">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-success btn-sbmit">Save changes</button>
                        </div>
                        
                    </form>
                  </div>
                 
                </div>
              </div>
            </div>';
    
    
    return base64_encode($html);
}

