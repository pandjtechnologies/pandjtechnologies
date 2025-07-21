<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'vendor/autoload.php';

// reCAPTCHA validation
$recaptcha_secret = '6LcN2E0rAAAAAHh5me_ukv0gWMIsgfTuYgLv_Iub';
$response = $_POST['g-recaptcha-response'];

$verify = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret={$recaptcha_secret}&response={$response}");
$captcha_success = json_decode($verify);

if (!$captcha_success->success) {
    die("reCAPTCHA verification failed. Please try again.");
}

// Handle form
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name    = htmlspecialchars($_POST["name"]);
    $email   = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host       = 'smtp.elasticemail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'pandjtechnologies@gmail.com'; // Your Elastic Email address
        $mail->Password   = '3E0E73CFD585BC4F476A2673871B5B5F282D60C098988C5D1008A603B0570720A817A447ACC2EC017B8268B2C404AD08';   // Replace this with your API key
        $mail->SMTPSecure = 'tls';
        $mail->Port       = 587;

        $mail->setFrom('pandjtechnologies@gmail.com', 'P & J Technologies');
        $mail->addAddress('pandjtechnologies@gmail.com');
        $mail->addReplyTo($email, $name);

        $mail->isHTML(false);
        $mail->Subject = 'New Contact Form Submission';
        $mail->Body    = "Name: $name\nEmail: $email\nMessage:\n$message";

        $mail->send();
        echo "Thank you! Your message has been sent.";
    } catch (Exception $e) {
        echo "Mailer Error: {$mail->ErrorInfo}";
    }
}
?>
