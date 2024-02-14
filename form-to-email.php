<?php
  $name = $_POST['name'];
  $visitor_email = $_POST['email'];
  $message = $_POST['message'];
  $phone = $_POST['Phone'];
  $subject = $_POST['subject'];
?>
<?php

	$email_subject = "New Portfolio Form Submission- $subject";

	$email_body = "You have received a new message from the user $name.\n".
                            "Here is the message:\n $message";


$to = "pradipwarkhade74@gmail.com";

$headers = "From: $visitor_email \r\n";

$headers .= "Reply-To: $visitor_email \r\n";

mail($to,$email_subject,$email_body,$headers);

?>
<?php
function IsInjected($str)
{
    $injections = array('(\n+)',
           '(\r+)',
           '(\t+)',
           '(%0A+)',
           '(%0D+)',
           '(%08+)',
           '(%09+)'
           );
               
    $inject = join('|', $injections);
    $inject = "/$inject/i";
    
    if(preg_match($inject,$str))
    {
      return true;
    }
    else
    {
      return false;
    }
}

if(IsInjected($visitor_email))
{
    echo "Bad email value!";
    exit;
}
?>