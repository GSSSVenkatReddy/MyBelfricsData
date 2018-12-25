<?php
	include "config.php";
	$c =  $_GET['qid'];	//""; //
	$sql = "select * from answer where question_id=$c order by score desc";
	$result=$conn->query($sql);
	if ($result->num_rows > 0) 
	{
		$response["answers"]=array();
		$answer = array();
		while($row = $result->fetch_assoc()) {
			// email	token	title	text	question_id	ansid
			$answer["user_id"] = "1";
			$answer["email"] = $row["email"];
			$answer["token"] = $row["token"];
			$answer["title"] = $row["title"];
			$answer["text"] = $row["text"];
			$answer["question_id"] = $row["question_id"];
			$answer["id"] = $row["ansid"];
			$answer["likes"] = $row["likes"];
			$answer["dislikes"] = $row["dislikes"];
			$answer["score"] = $row["score"];
			array_push($response["answers"], $answer);
		}
		$result->close();
		//echo "success:".$row['status']."-".$row['category']."-".$row['subcategory'].";".$row['token'];
		echo json_encode($response);
	} 
	else 
	{
		echo "Error: " .  " ". $conn->error;
	}
	$conn->close();
?>

  
	