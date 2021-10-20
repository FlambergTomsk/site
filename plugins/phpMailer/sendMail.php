<?php
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;

  require 'phpmailer/src/Exception.php';
  require 'phpmailer/src/PHPMailer.php';

  $mail = new PHPMailer(true);
  $mail->CharSet = 'UTF-8';
  $mail->setLanguage('ru', 'phpmailer/language/');
  $mail->IsHTML(true);

   $mail->setFrom('flamberg@list.ru', 'Mailer');
  $mail->addAddress('flamberg@list.ru', 'Joe User');

  $mail->Body=$body

  if (!$mail->send()){
    $message = 'Ошибка'
  } else {
  $message = 'Ошибка'
    $message = 'Данные отправлены'
  }

  $response = ['message'=> $message];
  header('Content-type: application/json');
  echo json_encode($response);
?>
