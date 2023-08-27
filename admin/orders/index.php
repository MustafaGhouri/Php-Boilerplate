<?php
$pagename = "Orders";
include_once($_SERVER['DOCUMENT_ROOT'] . '/admin/include/header.php');
$mypage = "orders";
date_default_timezone_set("Asia/Karachi");  
?>

<div id="content" class="main-content">
    <div class="layout-px-spacing">
        <div class="row layout-top-spacing">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">

                <div class="widget-content widget-content-area">
                    <div class="row m-3">
                        <div class="align-items-center col-12 col-md-12 col-sm-12 col-xl-12 d-flex justify-content-between flex_columns">
                            <h4><?= $pagename ?> List</h4>
                            <a href="<?= $url ?>admin/university/" class="btn btn-primary float-right">Add New</a>
                        </div>

                    </div>
                    <table id="zero-config" class="table dt-table-hover" style="width:100%">
                        <thead>
                            <tr> 
                                <!--<th>Actions</th>-->
                                <th>Order #</th>
                                <th>Total Amount</th>
                                <th>Payment Method</th>  
                                <th>Status</th>  
                                <th>Order Time</th>  
                                <th>Delivery Time</th>  
                                <th>University</th> 
                                <th>Plan</th> 
                                <th>Student ID</th> 
                                <th>Student Phone</th>  
                            </tr>
                        </thead>
                        <tbody>
                            <?php
                            $count = 1;
                            $query = mysqli_query($con, "SELECT orders.id ,orders.orderno, orders.student_university_id, orders.plan ,orders.phone,orders.paymentType,orders.totalAmount ,orders.status ,orders.time as orderTime, orders.receive_time as orderResTime, plan.title, university.short_name FROM `orders` JOIN plan ON plan.id = orders.plan JOIN university ON university.id = orders.university ORDER BY orders.id DESC");
                            if (mysqli_num_rows($query) > 0) {
                                while ($row = mysqli_fetch_array($query)) {
                            ?>
                                    <tr>   
                                        <td><?= @$row['orderno'] ?></td>
                                        <td>Rs.<?= @$row['totalAmount'] ?></td>
                                        <td><?= @$row['paymentType'] ?></td>
                                        <td><?= @$row['status'] == '1' ? '<span class="badge badge-success">Paid</span>':'<span class="badge badge-warning">Pending</span>' ?></td>  
                                        
                                        <td> <?= @date("j - m - Y , h:i:s A",intval($row['orderTime'])) ?></td>
                                        <td> <?= @$row['orderResTime'] != '' ? @date("j - m - Y , h:i:s A", intval($row['orderResTime'])) : '--- Pending ---' ?>  </td>
                                        <td><?= @$row['short_name'] ?></td>
                                        <td><?= @$row['title'] ?></td>
                                        <td><?= @$row['student_university_id'] ?></td>
                                        <td><?= @$row['phone'] ?></td>

                                    </tr>
                            <?php
                                };
                            };
                            ?>
                        </tbody>
                    </table>
                </div>

                <?php
                include_once($_SERVER['DOCUMENT_ROOT'] . '/admin/include/footer.php');
                ?>