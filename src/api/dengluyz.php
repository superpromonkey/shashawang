<?php
    // 引入connect.php
    include 'connect.php';

    /*
        接口功能：验证用户名是否存在
        所需参数：
            * username
     */
    
    
    $username = isset($_POST['username']) ? $_POST['username'] : null; 
    $password = isset($_POST['password']) ? $_POST['password'] : null;

    // 格式： select <字段1, 字段2, …> from < 表名 > where < 表达式 >;
     // 查找数据库中是否存在对应的名用户和密码
    // $sql = "select * from wxdata where username='$username',password='$password'";
    $sql = "select * from wxdata where username='$username'";

    // 执行sql语句
    $conn->set_charset('utf8');
    $result = $conn->query($sql);

    if($result->num_rows>0){
        echo "no";
    }else{
        echo "yes";
    }
?>