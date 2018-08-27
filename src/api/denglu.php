<?php
   include 'DBHelper.php';
   header('Access-Control-Allow-Origin:*');
   header('Access-Control-Allow-Methods:POST,GET,OPTIONS'); 
   header('Access-Control-Request-Headers:accept, content-type');
    
    $username = isset($_POST['username']) ? $_POST['username'] : null; 
    $password = isset($_POST['password']) ? $_POST['password'] : null; 


    // 查找数据库中是否存在同名用户
    $sql = "select * from wxdata where username='$username' and password='$password'";
	
   
    $result = query_oop($sql);
  
    if($result>0){
        echo "yes";
    }else{
        echo "no";
    }
    // // 查询前设置编码，防止输出乱码

    //     echo "连接成功";

?>