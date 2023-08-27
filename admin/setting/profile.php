<?php
$pagename = "Profile";
require_once '../../config.php';
require_once($_SERVER['DOCUMENT_ROOT'] . $site_dir . '/admin/include/header.php');

$user_id = $_SESSION['user_id'];
$query = mysqli_query($con, "SELECT * FROM `users` where `id`='$user_id'");
$fetch = mysqli_fetch_array($query);
?>
<style>
    .user_profile_add input {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: 999;
        opacity: 0;
    }

    .user_profile_add img {
        width: 100%;
        object-fit: cover;
        border: 1px solid #d2d2d7;
        background-color: #f1f1f3;
        border-radius: 10px;
    }

    .user_profile_add {
        width: 130px;
        overflow: hidden;
        height: 130px;
        position: relative;
    }
</style>
<!--  BEGIN CONTENT AREA  -->
<div id="content" class="main-content">
    <div class="layout-px-spacing">
        <div class="row layout-top-spacing">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
                <div class="widget-header">
                    <div class="row">
                        <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                            <h4> Edit <?= $pagename ?> </h4>
                        </div>
                    </div>
                </div>
                <div class="widget-content widget-content-area p-3">
                    <div id="alert"></div>
                    <form method="post" id="update" enctype="multipart/form-data">
                        <input type="hidden" id="page" value="profile">
                        <input type="hidden" name="id" value="<?= @$fetch["id"] ?>">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="image" class="">Profile</label>
                                    <div class="user_profile_add">
                                        <img src="<?= (@$fetch["profile"] != "" ? $url . 'uploads/users/' . $fetch["profile"] : '../backassets/assets/img/user.png') ?>" id="output" style="max-width:300px">
                                        <input id="image" type="file" accept="images/*" id="file" onchange="loadFile(event)" name="profile" class="">
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="fname" class="">First Name</label>
                                    <input id="fname" type="text" name="fname" value="<?= @$fetch["fname"] ?>" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="lname" class="">Last Name</label>
                                    <input id="lname" type="text" name="lname" value="<?= @$fetch["lname"] ?>" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="email" class="">Email</label>
                                    <input id="email" type="email" name="email" value="<?= @$fetch["email"] ?>" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="phone" class="">Contact</label>
                                    <input id="phone" type="text" name="phone" value="<?= @$fetch["phone"] ?>" class="form-control">
                                </div>
                            </div>
                          
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <div class="d-flex justify-content-between">
                                        <label for="password">PASSWORD</label>

                                    </div>
                                    <div class="d-flex">
                                        <input id="password" name="pswd" type="password" class="form-control" placeholder="Password">
                                        <div class="btn btn-dark btn-group-vertical d-flex" id="toggle-password">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye">
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                <circle cx="12" cy="12" r="3"></circle>
                                            </svg>
                                        </div>
                                    </div>
                                    <span class="text-danger">Leave blank if you don't want to change password</span>
                                </div>
                            </div>

                        </div>
                        <input type="submit" class="mt-4 btn btn-primary" value="Update">
                    </form>
                </div>
            </div>
        </div>
        <?php
        include_once($_SERVER['DOCUMENT_ROOT']  . $site_dir .  '/admin/include/footer.php');
        ?>
        <script>
            var togglePassword = document.getElementById("toggle-password");
            if (togglePassword) {
                togglePassword.addEventListener('click', function() {
                    var x = document.getElementById("password");
                    if (x.type === "password") {
                        x.type = "text";
                    } else {
                        x.type = "password";
                    }
                });
            }
            var loadFile = function(event) {
                var image = document.getElementById('output');
                image.src = URL.createObjectURL(event.target.files[0]);
            };
        </script>