<?php
$site_dir = '/boilerplate';
require_once $_SERVER['DOCUMENT_ROOT'] . $site_dir . '/config.php'; // Include the EnvParser class
session_start();
date_default_timezone_set("Asia/Karachi");


$con = mysqli_connect($dbHost, $dbUsername, $dbPassword, $dbName) or die('Database Not Connected');

// Base Url GET
$protocol = ((!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] != 'off') || $_SERVER['SERVER_PORT'] == 443) ? "https://" : "http://";
$url = $protocol . $_SERVER['HTTP_HOST'] . $site_dir . "/";
$url_curent = $protocol . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];

@define('CONNECT_EMAIL_CLIENT', 'YOUR_EMAIL');

// PAGE NAME GET
$mypage = basename($_SERVER['PHP_SELF'], ".php");

// SETTING GET
$settingquery = mysqli_query($con, "SELECT * FROM `settings`");
$settinginfo = mysqli_fetch_array($settingquery);

// SEO GET 
$seoquery = mysqli_query($con, "SELECT * FROM `seo` WHERE page_link='$mypage'");
$seoinfo = mysqli_fetch_array($seoquery);


$globaluserid = @$_SESSION["user_id"];
