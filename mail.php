<?php
// use PHPMailer\PHPMailer\PHPMailer;
// use PHPMailer\PHPMailer\Exception;

// require_once "vendor/autoload.php";

// //PHPMailer Object
// $mail = new PHPMailer(true); 
// $mail->From = "gcshopay@gcsho.com.pk";
// $mail->FromName = "GCSHO Pay";
// $mail->addAddress("mustafaghouri22@gmail.com"); 
// $mail->isHTML(true);

// $mail->Subject = "Subject Text";
// $mail->Body = "<i>Mail body in HTML</i>";
// $mail->AltBody = "This is the plain text version of the email content";

// try {
//     $mail->send();
//     echo "Message has been sent successfully";
// } catch (Exception $e) {
//     echo "Mailer Error: " . $mail->ErrorInfo;
// }

$message = '<h1>Mail recive</h1>';
$subject = "Reset Password";
$headers = 'From: gcshopay@gcsho.com.pk' . "\r\n" .
    'Reply-To: gcshopay@gcsho.com.pk' . "\r\n" .
    "MIME-Version: 1.0" . "\r\n" .
    "Content-type:text/html;charset=UTF-8" . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
$to = 'mustafaghouri22@gmail.com';
// // Send email
if (mail($to, $subject, $message, $headers)) {
    echo "true";
} else {
    echo "wrong";
}
