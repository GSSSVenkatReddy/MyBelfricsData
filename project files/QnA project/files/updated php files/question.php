<?php
	include "config.php";
	$e = $_GET['email'];
	//$t = $_POST['token'];	
	$c =  $_GET['category'];	//"MECHANICAL"; //
	if($c=="ALL")
	{
		$sql = "select *, users.id uid, question.id qid,question.category category, question.subcategory  from question INNER JOIN users ON question.userid=users.id";
		if($e!='')
		{
			$sql=$sql." where users.email='$e'  order by question.id desc";
		}
		else{
			$sql=$sql."   order by question.id desc";
		}
		
	}
	else
	{
		$sql = "select *, users.id uid, question.id qid ,question.category category, question.subcategory from question INNER JOIN users oN question.userid=users.id   where question.category='$c' ";
		if($e!='')
		{
			$sql=$sql." and users.email='$e' order by  question.id desc";
		}
		else
		{
			$sql=$sql." order by question.id desc";
		}
	}
	//echo $sql;
	$result=$conn->query($sql);
	if ($result->num_rows > 0) 
	{
		$response["questions"]=array();
		$question = array();
		while($row = $result->fetch_assoc()) {
			$question["user_id"] = $row["userid"];
			$question["id"] = $row["qid"];
			$question["title"] = $row["title"];
				$user=array();
				$user["id"]=$row["uid"];
				$user["name"]=$row["name"];
				$user["email"]=$row["email"];
				$question["user"]=array();
				array_push($question["user"], $user);
			$question["text"] = $row["text"];
			$question["likes"] = $row["likes"];
			$question["dislikes"] = $row["dislikes"];
			$question["score"] = $row["score"];
			$question["ilike"] = $row["ilike"];
			$question["category"] = $row["category"];
			$question["subcategory"] = $row["subcategory"];
			array_push($response["questions"], $question);
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

  
	