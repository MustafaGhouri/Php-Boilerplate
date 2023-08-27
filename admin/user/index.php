<?php
$pagename = "Users";
require_once '../../config.php';
require_once($_SERVER['DOCUMENT_ROOT'] . $site_dir . '/admin/include/header.php');

if (isset($_GET["edit"])) {
    $edit = base64_decode($_GET["edit"]);
    $query = mysqli_query($con, "SELECT * FROM `users` where `id`='$edit'");
    $fetch = mysqli_fetch_array($query);
};
if ($_SESSION['user_role'] != '1') {
?>
    <script>
        window.location.href = "index";
    </script>
<?php
}
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
                            <h4> <?= isset($_GET["edit"]) ? "Edit" : "Add" ?> <?= $pagename ?></h4>
                        </div>
                    </div>
                </div>
                <div class="widget-content widget-content-area p-3">
                    <div id="alert"></div>
                    <form method="post" id="<?= isset($_GET["edit"]) ? "update" : "add" ?>" enctype="multipart/form-data">
                        <input type="hidden" id="page" value="user">
                        <input type="hidden" name="id" value="<?= @$fetch["id"] ?>">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="image" class="">Profile</label>
                                    <div class="user_profile_add">
                                        <img src="<?= (@$fetch["profile"] != "" ? $url . 'uploads/users/' . $fetch["profile"] : '../backassets/assets/img/user.png') ?>" id="output" style="max-width:300px">
                                        <input id="image" type="file" accept="images/*" id="file" onchange="loadFile(event)" name="image" class="">
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
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="phone" class="">Contact</label>
                                    <input id="phone" type="text" name="phone" value="<?= @$fetch["phone"] ?>" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-6 mt-4">
                                <label class="form-label">Gender</label>
                                <br>
                                <input type="radio" id="m" name="gender" <?php if (@$fetch['gender'] == "Male") {
                                                                                echo "checked";
                                                                            } ?> value="Male">&nbsp;
                                <label for="m">Male</label>&nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="radio" id="f" name="gender" <?php if (@$fetch['gender'] == "Female") {
                                                                                echo "checked";
                                                                            } ?> value="Female"> &nbsp;
                                <label for="f">Female</label>
                            </div>

                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="dob" class="">Date of Brith</label>
                                    <input id="dob" type="date" name="dob" value="<?= @$fetch["dob"] ?>" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="adress" class="">Address</label>
                                    <input id="adress" type="text" name="adress" value="<?= @$fetch["adress"] ?>" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="country" class="">Country</label>
                                    <input id="country" type="text" name="country" value="<?= @$fetch["country"] ?>" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-6 ">
                                <label class="form-label" for="status">Status</label>
                                <select name="status" id="status" class="form-control">
                                    <option value="0">UnApporved</option>
                                    <option value="1">Apporved</option>
                                </select>
                            </div>
                            <div class="col-md-6">
                                <label class="form-label" for="role">User Role</label>
                                <select name="role" id="role" class="form-control">
                                    <option value="1" <?= @$fetch["role_id"] == 1 ? 'selected' : '' ?>>Admin</option>
                                    <option value="2" <?= @$fetch["role_id"] == 2 ? 'selected' : '' ?>>User</option>
                                    <option value="3" <?= @$fetch["role_id"] == 3 ? 'selected' : '' ?>>Advertisement</option>
                                </select>
                            </div>

                            <div class="col-xl-12 col-lg-12 col-md-12 layout-spacing mt-4">
                                <div class="info">
                                    <h5 class="">Social</h5>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="input-group social-instagram mb-3">
                                                <div class="input-group-prepend mr-3">
                                                    <span class="input-group-text" id="instagram">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram">
                                                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                                        </svg>
                                                    </span>
                                                </div>
                                                <input type="text" name="instagram" class="form-control" placeholder="Instagram Username" aria-label="Username" aria-describedby="instagram" value="<?= @$fetch["instagram"] ?>">
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="input-group social-tweet mb-3">
                                                <div class="input-group-prepend mr-3">
                                                    <span class="input-group-text" id="tweet"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter">
                                                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                                        </svg></span>
                                                </div>
                                                <input type="text" name="tweeter" class="form-control" placeholder="Twitter Username" aria-label="Username" aria-describedby="tweet" value="<?= @$fetch["twitter"] ?>">
                                            </div>
                                        </div>


                                        <div class="col-md-6">
                                            <div class="input-group social-fb mb-3">
                                                <div class="input-group-prepend mr-3">
                                                    <span class="input-group-text" id="fb"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook">
                                                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                                        </svg></span>
                                                </div>
                                                <input type="text" name="facebook" class="form-control" placeholder="Facebook Username" aria-label="Username" aria-describedby="fb" value="<?= @$fetch["facebook"] ?>">
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="input-group social-snapchat mb-3">
                                                <div class="input-group-prepend mr-3">
                                                    <span class="input-group-text" id="snapchat">
                                                        <i class="fa fa-snapchat-ghost" style="font-size: 1.7rem;"></i>
                                                    </span>
                                                </div>
                                                <input type="text" name="snapchat" class="form-control" placeholder="Snapchat Username" aria-label="Username" aria-describedby="snapchat" value="<?= @$fetch["snapchat"] ?>">
                                            </div>
                                        </div>
                                    </div>


                                </div>


                            </div>


                            <!-- <input class="form-control" type="file" name="image" aria-label="file example" accept="image/*" data-bs-original-title="" title=""> -->

                        </div>
                        <input type="submit" class="mt-4 btn btn-primary" value="<?= isset($_GET["edit"]) ? "Update" : "Add" ?>">
                    </form>
                </div>
            </div>
        </div>
        <?php
        require_once($_SERVER['DOCUMENT_ROOT'] . $site_dir . '/admin/include/footer.php');
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