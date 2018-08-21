<?php
    // 引入connect.php
    include 'connect.php';

    /*
        接口功能：验证用户名是否存在
        所需参数：
            * username
     */
    
    $username = isset($_GET['username']) ? $_GET['username'] : null; 


    // 查找数据库中是否存在同名用户
    $sql = "select * from wxdata where username='$username'";

    // 执行sql语句
    $conn->set_charset('utf8');
    $result = $conn->query($sql);
    if($result->num_rows>0){
        echo "no";
    }else{
        echo "yes";
    }
    // // 查询前设置编码，防止输出乱码

    //     echo "连接成功";

?>