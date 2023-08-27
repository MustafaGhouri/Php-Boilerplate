<?php
$pagename = "History";
require_once '../../config.php';
require_once($_SERVER['DOCUMENT_ROOT'] . $site_dir . '/admin/include/header.php');

if ($_SESSION['user_role'] != '1') {
?>
    <script>
        window.location.href = "index";
    </script>
<?php
}
?>
<style>
    .avatar.avatar-lg img {
        width: 100%;
        object-fit: cover;
    }

    .avatar.avatar-lg {
        width: 50px;
        overflow: hidden;
        height: 50px;
    }
</style>
<div id="content" class="main-content">
    <div class="layout-px-spacing">
        <div class="row layout-top-spacing">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">

                <div class="widget-content widget-content-area">
                    <div class="row m-3">
                        <div class="align-items-center col-12 col-md-12 col-sm-12 col-xl-12 d-flex justify-content-between flex_columns">
                            <h4><?= $pagename ?> List </h4>
                        </div>

                    </div>
                    <table id="zero-config" class="table dataTables_wrapper  dt-table-hover" style="width:100%">
                        <thead>
                            <tr>
                                <th>Sr no</th>
                                <th>Date Time</th>
                                <th>Profile</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php
                            $count = 1;
                            $query = mysqli_query($con, "SELECT users.* , login_history.* FROM users JOIN login_history ON users.id = login_history.user_id ORDER BY login_history.id DESC");
                            while ($row = mysqli_fetch_array($query)) {
                                $id = $row['id'];
                            ?>
                                <tr>
                                    <td><?= $count++ ?></td>
                                    <td><?= $row["date_time"] ?></td>


                                    <td>
                                        <div class="avatar avatar-lg">
                                            <img alt="avatar" src="<?= $url . 'uploads/users/' . (@$row['profile'] == '' ? 'user.png' : $row["profile"]) ?> " class="rounded-circle" />
                                        </div>
                                    </td>
                                    <td><?= $row["fname"] ?>&nbsp;&nbsp;<?= $row["lname"] ?></td>
                                    <td><?= $row["email"] ?></td>
                                    <td><?= ($row["role_id"] == "2") ? "<div class='badge badge-primary'>User</div>" : "<div class='badge badge-success'>Admin</div>"  ?></td>

                                </tr>
                            <?php
                            }
                            ?>
                        </tbody>
                    </table>
                </div>

                <?php

                include_once($_SERVER['DOCUMENT_ROOT']  . $site_dir .  '/admin/include/footer.php');
                ?>