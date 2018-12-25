<?php
	include "config.php";
	$oe = $_POST['aid'];
	$c = $_POST['score'];
	$sql = "update answer set score=(score+ '$c')  where ansid='$oe'";
	
	//$sql="update users set name='xyz'";

	if ($conn->query($sql) === TRUE) {
		echo "profile updated  successfully -".$oe."- ".$c." ".$s." ".$st;
	} else {
		echo "Error: " . $conn->error;
	}
	$conn->close();
?>