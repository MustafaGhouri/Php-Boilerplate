<?php
session_start();

// Replace YOUR_CLIENT_ID with the client ID from your Google API credentials
$client_id = '103081485364-0t3n4juioli2skebqh9lqv93vfld2fj1.apps.googleusercontent.com';

// Verify that the ID token received from Google is valid
function verifyToken($id_token) {
  $url = 'https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=' . $id_token;
  $response = file_get_contents($url);
  $data = json_decode($response);
  return $data->aud === $client_id;
}

// If the user is not already logged in, check for a Google Sign-In token in the request
if (!isset($_SESSION['user']) && isset($_POST['id_token'])) {
  $id_token = $_POST['id_token'];
  if (verifyToken($id_token)) {
    $url = 'https://www.googleapis.com/oauth2/v3/userinfo?access_token=' . $id_token;
    $response = file_get_contents($url);
    $data = json_decode($response);
    $_SESSION['user'] = $data->email;
    echo $data;
  }
}
?>
