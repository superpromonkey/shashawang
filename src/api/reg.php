<?php
	// 引入connect.php
	include 'connect.php';

	/*
		接口功能：用户注册
			* 写入数据库
		所需参数：
			* username
			* password
	 */
	
	$username = isset($_POST['username']) ? $_POST['username'] : null; 
	$password = isset($_POST['password']) ? $_POST['password'] : null; 



	// 写入注册用户名和密码
	$sql = "insert into wxdata(username,password) values('$username','$password')";
	var_dump($username,$password,$sql);

	// 执行sql语句
	$conn->set_charset('utf8');
	$result = $conn->query($sql);

	var_dump($result);

	if($result){
		echo "success";
	}else{
		echo "fail";
	}

?>