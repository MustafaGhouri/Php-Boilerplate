<?php
include 'include/connection.php';
if (isset($_SESSION['user_id'])) {
  $id = $_SESSION['user_id'];
  $fetchUser = mysqli_query($con, "SELECT * FROM `users` WHERE `id` = '$id'");
  $auth = mysqli_fetch_array($fetchUser);
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Home | <?= $settinginfo['website_name'] ?></title>
  <link rel="icon" type="image/x-icon" href="<?= $url ?>uploads/setting/<?= @$settinginfo['website_favicon'] ?>" />
  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
  <link href='<?= $url ?>assets/css/snackbar.min.css' rel="stylesheet">
  <link href='<?= $url ?>assets/css/style.css' rel="stylesheet">
  <link href='<?= $url ?>assets/css/responsive.css' rel="stylesheet">
</head>

<body>

  <div class='main-container'>