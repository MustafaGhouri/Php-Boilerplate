<?php
$pagename = "Home";
require_once '../../config.php';
require_once($_SERVER['DOCUMENT_ROOT'] . $site_dir . '/admin/include/header.php');

?>

<!--  BEGIN MAIN CONTAINER  -->
<!--  BEGIN CONTENT AREA  -->
<div id="content" class="main-content">
    <div class="layout-px-spacing">

        <div class="row layout-top-spacing">


            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
                <div class="widget widget-card-four">
                    <div class="widget-content">
                        <div class="w-header">
                            <div class="w-info d-flex justify-content-between" style="justify-content: space-between;width:100%;">
                                <h6 class="value">Total Amount </h6>

                                <i class="fa fa-money fa-2x text-black"></i>
                            </div>

                        </div>

                        <div class="w-content">

                            <div class="w-info">
                                <?php $count_users = mysqli_query($con, "SELECT sum(totalAmount) as u_count FROM `orders` WHERE `status` = 1 ");
                                $fetch_user_count = mysqli_fetch_array($count_users);
                                ?>
                                <h1> <?= $fetch_user_count['u_count'] ?></h1>
                            </div>

                        </div>


                    </div>
                    <p>(only paid orders count!)</p>
                </div>
            </div>
            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
                <div class="widget widget-card-four">
                    <div class="widget-content">
                        <div class="w-header">
                            <div class="w-info d-flex justify-content-between" style="justify-content: space-between;width:100%;">
                                <h6 class="value">Total Users</h6>
                                <i class="fa fa-user fa-2x text-black"></i>
                            </div>
                        </div>

                        <div class="w-content">

                            <div class="w-info">
                                <?php $count_users = mysqli_query($con, "SELECT COUNT(id) as u_count FROM `users` WHERE `status` = 1 ");
                                $fetch_user_count = mysqli_fetch_array($count_users);
                                ?>
                                <h1> <?= $fetch_user_count['u_count'] ?></h1>
                            </div>

                        </div>


                    </div>
                </div>
            </div>
 

            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
                <div class="widget-four">
                    <div class="widget-heading">
                        <h5 class="">Visitors by Browser</h5>
                    </div>
                    <div class="widget-content">
                        <div class="vistorsBrowser">
                            <div class="browser-list">
                                <div class="w-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chrome">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <circle cx="12" cy="12" r="4"></circle>
                                        <line x1="21.17" y1="8" x2="12" y2="8"></line>
                                        <line x1="3.95" y1="6.06" x2="8.54" y2="14"></line>
                                        <line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
                                    </svg>
                                </div>
                                <div class="w-browser-details">
                                    <div class="w-browser-info">
                                        <h6>Chrome</h6>
                                        <p class="browser-count">62%</p>
                                    </div>
                                    <div class="w-browser-stats">
                                        <div class="progress">
                                            <div class="progress-bar bg-gradient-primary" role="progressbar" style="width: 65%" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="browser-list">
                                <div class="w-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-compass">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76">
                                        </polygon>
                                    </svg>
                                </div>
                                <div class="w-browser-details">

                                    <div class="w-browser-info">
                                        <h6>Safari</h6>
                                        <p class="browser-count">25%</p>
                                    </div>

                                    <div class="w-browser-stats">
                                        <div class="progress">
                                            <div class="progress-bar bg-gradient-danger" role="progressbar" style="width: 35%" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div class="browser-list">
                                <div class="w-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-globe">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <line x1="2" y1="12" x2="22" y2="12"></line>
                                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z">
                                        </path>
                                    </svg>
                                </div>
                                <div class="w-browser-details">

                                    <div class="w-browser-info">
                                        <h6>Others</h6>
                                        <p class="browser-count">15%</p>
                                    </div>

                                    <div class="w-browser-stats">
                                        <div class="progress">
                                            <div class="progress-bar bg-gradient-warning" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>






        </div>

    </div>

     
</div>





<?php
include_once($_SERVER['DOCUMENT_ROOT'] . $site_dir . '/admin/include/footer.php');
?>
<script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.js"></script>
<script src="<?= $url ?>plugins/apex/apexcharts.min.js"></script>
<script src="<?= $url ?>backassets/assets/js/dashboard/dash_2.js"></script>
<script src="jquery.rcounterup.js"></script>
<script>
    (function($) {
        'use strict';

        $('.count-num').rCounter();
    })(jQuery);
</script>