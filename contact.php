<?php
$field_members = $_POST['members'];
$field_email = $_POST['email'];
$field_description = $_POST['description'];

$mail_to = 'swarwick@sfu.ca';
$subject = 'AFK Submission Form ';

$body_message = 'Members: '.$field_members."\n";
$body_message .= 'E-mail: '.$field_email."\n";
$body_message .= 'Description: '.$field_description;

$headers = 'From: '.$field_email."\r\n";
$headers .= 'Reply-To: '.$field_email."\r\n";

$mail_status = mail($mail_to, $subject, $body_message, $headers);

if ($mail_status) { ?>
	<script language="javascript" type="text/javascript">
		alert('Thank you for the message. We will contact you shortly.');
		window.location = 'index.html';
	</script>
<?php
}
else { ?>
	<script language="javascript" type="text/javascript">
		alert('Message failed. Please, send an email to sdcinglis@gmail.com directly.');
		window.location = 'index.html';
	</script>
<?php
}
?>