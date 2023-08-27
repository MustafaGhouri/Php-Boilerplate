<?php

require_once '../../config.php';
require_once($_SERVER['DOCUMENT_ROOT'] . $site_dir . '/include/connection.php');


if (!isset($_SESSION["user_id"]) && !isset($_SESSION["user_role"])) {

    $rootDir = $url . '/';
    echo '<script>window.open("../../", "_self");</script>';
    exit();
}
if ($_SESSION["user_role"] != '1') {

    $rootDir = $url . '/';
    echo  '<script>window.open("../../", "_self");</script>';
    exit();
}


function link_active($page)
{
    if (basename($_SERVER['PHP_SELF'], ".php") == $page) {
        echo $page;
        return "data-active='true'";
    }
}

$userid = $_SESSION["user_id"];
$proselect  = mysqli_query($con, "SELECT * FROM `users` where `id`='$userid'");
$profetch = mysqli_fetch_array($proselect);
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no">
    <title><?= $settinginfo['website_name']  ?> - Admin </title>
    <link rel="icon" type="image/x-icon" href="<?= $url ?>uploads/setting/<?= @$settinginfo['website_favicon'] ?>" />
    <link href="<?= $url ?>admin/assets/css/loader.css" rel="stylesheet" type="text/css" />
    <script src="<?= $url ?>admin/assets/js/loader.js"></script>
    <!-- BEGIN GLOBAL MANDATORY STYLES -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:400,600,700" rel="stylesheet">
    <link href="<?= $url ?>admin/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link href="<?= $url ?>admin/assets/css/plugins.css" rel="stylesheet" type="text/css" />
    <!-- END GLOBAL MANDATORY STYLES -->

    <!-- BEGIN PAGE LEVEL PLUGINS/CUSTOM STYLES -->

    <link href="<?= $url ?>admin/assets/css/dashboard/dash_2.css" rel="stylesheet" type="text/css" />
    <link href="<?= $url ?>admin/plugins/apex/apexcharts.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" type="text/css" href="<?= $url ?>admin/plugins/table/datatable/datatables.css">
    <link rel="stylesheet" type="text/css" href="<?= $url ?>admin/plugins/table/datatable/dt-global_style.css">
    <link rel="stylesheet" type="text/css" href="<?= $url ?>admin/plugins/select2/select2.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <style>
        .tox-notifications-container {
            display: none !important;
        }

        span.select2.select2-container.mb-4.select2-container--default.select2-container--above.select2-container--focus {
            margin-bottom: 0px !important;
        }

        .select2-container--default .select2-selection--multiple {
            padding: 5px 8px !important;
        }

        .select2-container {
            margin-bottom: 0px !important;
        }

        div.dataTables_wrapper div.dataTables_paginate ul.pagination {
            justify-content: center;
        }

        .menu-categories li.menu i {
            font-size: 20px;
            vertical-align: bottom;
            margin-right: 5px;
        }
    </style>
    <!-- END PAGE LEVEL PLUGINS/CUSTOM STYLES -->
</head>

<body>
    <!-- BEGIN LOADER -->
    <div id="load_screen">
        <div class="loader">
            <div class="loader-content">
                <div class="spinner-grow align-self-center"></div>
            </div>
        </div>
    </div>
    <!--  END LOADER -->

    <!--  BEGIN NAVBAR  -->
    <div class="header-container fixed-top">
        <header class="header navbar navbar-expand-sm">

            <ul class="navbar-item theme-brand flex-row  text-center">
                <li class="nav-item theme-logo">
                    <a href="<?= $url ?>admin">
                        <img src="<?= $url ?>uploads/setting/<?= @$settinginfo['website_logo'] ?>" style="width: 35px;" alt="logo">
                    </a>
                </li>
                <li class="nav-item theme-text">
                    <a href="<?= $url ?>index.php" class="nav-link"><?= $settinginfo['website_name'] ?></a>
                </li>
            </ul>



            <ul class="navbar-item flex-row ml-md-auto">


                <li class="nav-item dropdown user-profile-dropdown">
                    <a href="javascript:void(0);" class="nav-link dropdown-toggle user" id="userProfileDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        <img src="<?= $url ?>uploads/users/<?= $profetch['profile'] ?>" alt="">
                    </a>
                    <div class="dropdown-menu position-absolute" aria-labelledby="userProfileDropdown">
                        <div class="">
                            <div class="dropdown-item">
                                <a class="" href="<?= $url ?>admin/setting/profile">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                    Profile
                                    <p style="font-size:9px"><?= $profetch['email'] ?></p>
                                </a>
                            </div>

                            <div class="dropdown-item">
                                <a class="" href="<?= $url ?>include/logout"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-log-out">
                                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                                        <polyline points="16 17 21 12 16 7"></polyline>
                                        <line x1="21" y1="12" x2="9" y2="12"></line>
                                    </svg> Sign Out</a>
                            </div>
                        </div>
                    </div>
                </li>

            </ul>
        </header>
    </div>
    <!--  END NAVBAR  -->

    <!--  BEGIN NAVBAR  -->
    <div class="sub-header-container">
        <header class="header navbar navbar-expand-sm">
            <a href="javascript:void(0);" class="sidebarCollapse" data-placement="bottom"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg></a>

            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">

                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:void(0);">Dashboard</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span><?= $pagename ?></span></li>
                            </ol>
                        </nav>

                    </div>
                </li>
            </ul>

        </header>
    </div>
    <!--  END NAVBAR  -->


    <div class="main-container" id="container">
        <div class="overlay"></div>
        <div class="search-overlay"></div>
        <!--  BEGIN SIDEBAR  -->
        <div class="sidebar-wrapper sidebar-theme">
            <nav id="sidebar">
                <ul class="list-unstyled menu-categories" id="accordionExample">
                    <li class="menu">
                        <a href="<?= $url ?>admin/dashboard/" <?= link_active('dashboard/index') ?> aria-expanded="false" class="dropdown-toggle">
                            <div class="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                </svg>
                                <span>Dashboard</span>
                            </div>
                        </a>
                    </li>


                    <li class="menu">
                        <a href="#user" <?= link_active('user/index') ?> <?= link_active('user/list') ?> data-toggle="collapse" aria-expanded="false" class="dropdown-toggle collapsed">
                            <div class="">
                                <i class="fa fa-user"></i>
                                <span>Users</span>
                            </div>
                            <i class="fa fa-cheviron-down"></i>
                        </a>
                        <ul class="submenu list-unstyled collapse" id="user" data-parent="#accordionExample">
                            <li>
                                <a href="<?= $url ?>admin/user/"> Add </a>
                            </li>
                            <li>
                                <a href="<?= $url ?>admin/user/list">List </a>
                            </li>
                        </ul>
                    </li>



                    <li class="menu">
                        <a href="<?= $url ?>admin/setting/setting" <?= link_active('setting/setting') ?> aria-expanded="false" class="dropdown-toggle">
                            <div class="">
                                <i class="fa fa-gear"></i>
                                <span>Setting</span>
                            </div>
                        </a>
                    </li>






                </ul>


            </nav>

        </div>
        <!--  END SIDEBAR  -->