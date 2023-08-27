<?php
$pagename = "User";
require_once '../../config.php';
require_once($_SERVER['DOCUMENT_ROOT'] . $site_dir . '/admin/include/header.php');
$mypage = "user";


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
                            <h4>List <?= $pagename ?> </h4>
                            <a href="users" class="btn btn-primary float-right">Add</a>
                        </div>

                    </div>
                    <table id="zero-config" class="table dataTables_wrapper  dt-table-hover" style="width:100%">
                        <thead>
                            <tr>
                                <th>Sr no</th>
                                <th>Actions</th>
                                <th>Status</th>
                                <th>Profile</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Gender</th>
                                <th>Date of Birth</th>
                                <th>Address</th>
                                <th>Country</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php
                            $count = 1;
                            $query = mysqli_query($con, "SELECT * FROM users WHERE role_id != 1");
                            while ($row = mysqli_fetch_array($query)) {
                                $id = $row['id'];
                            ?>
                                <tr>
                                    <td><?= $count++ ?></td>
                                    <td>
                                        <a href="users?edit=<?= base64_encode($row["id"]) ?>"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-2">
                                                <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                                            </svg></a> |
                                        <a href="javascript:void(0)" onclick="del('<?= $row['id'] ?>')" data-bs-toggle="modal" data-bs-target="#deletemodal"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2">
                                                <polyline points="3 6 5 6 21 6"></polyline>
                                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                                <line x1="14" y1="11" x2="14" y2="17"></line>
                                            </svg></a>
                                    </td>

                                    <td>
                                        <form><input type='hidden' id='page' value='userstatus'><span class="cursor" onclick="userstatus(<?= $row['id'] ?>,  <?= $row['status'] ?> )"> <?php if ($row['status'] == 0) {
                                                                                                                                                                                            echo '<span class="btn-sm btn-wide btn-danger">UnApporved</span>';
                                                                                                                                                                                        } else {
                                                                                                                                                                                            echo '<span class="btn-sm btn-wide btn-success">Apporved</span> </span>';
                                                                                                                                                                                        } ?></form>
                                    </td>
                                    <td>
                                        <div class="avatar avatar-lg">
                                            <img alt="avatar" src="<?= $url . 'uploads/users/' . (@$row['profile'] == '' ? 'user.png' : $row["profile"]) ?> " class="rounded-circle" />
                                        </div>
                                    </td>
                                    <td><?= $row["fname"] ?>&nbsp;&nbsp;<?= $row["lname"] ?></td>
                                    <td><?= $row["email"] ?></td>
                                    <td><?= $row["phone"] ?></td>
                                    <td><?= $row["gender"] ?></td>
                                    <td><?= $row["dob"] ?></td>
                                    <td><?= $row["adress"] ?></td>
                                    <td><?= $row["country"] ?></td>

                                </tr>
                            <?php
                            }
                            ?>
                        </tbody>
                    </table>
                </div>

                <?php
                require_once($_SERVER['DOCUMENT_ROOT'] . $site_dir . '/admin/include/footer.php');
                ?>