<?php


   // 引入connect.php
    include 'connect.php';
    header('Access-Control-Allow-Origin:*');
    header('Access-Control-Allow-Methods:POST,GET,OPTIONS'); 
    header('Access-Control-Request-Headers:accept, content-type');
    header("Content-type: text/html;charset=utf-8"); 

    

    $goodsid = isset($_GET['goodsid']) ? $_GET['goodsid'] : ''; 

    
    // 查找数据库中是否存在同名用户
    $sql = "select * from goodslists where id='$goodsid'";

    //获取查询结果集s
    $result = $conn->query($sql);

    //使用查询结果集
    //得到数组
    $row = $result->fetch_all(MYSQLI_ASSOC);

    //释放查询结果集，避免资源浪费
    $result->close();

    //把结果输出到前台
 
  echo json_encode($row, JSON_UNESCAPED_UNICODE);
  // echo json_encode($goodsid, JSON_UNESCAPED_UNICODE);
    // 关闭数据库，避免资源浪费
    $conn->close();
  

?>