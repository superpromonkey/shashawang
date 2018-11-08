<?php 

      
// 购物车的数据请求页面

   // 引入connect.php
    include 'connect.php';
    header('Access-Control-Allow-Origin:*');
    header('Access-Control-Allow-Methods:POST,GET,OPTIONS'); 
    header('Access-Control-Request-Headers:accept, content-type');
    header("Content-type: text/html;charset=utf-8"); 

    

    
    // 查找数据库car=1的商品
    $sql = "select * from goodslists where car='1'";

    //获取查询结果集s
    $result = $conn->query($sql);

    //使用查询结果集
    //得到数组
    $row = $result->fetch_all(MYSQLI_ASSOC);

    //释放查询结果集，避免资源浪费
    $result->close();

    //把结果输出到前台
 
  echo json_encode($row, JSON_UNESCAPED_UNICODE);
  
    // 关闭数据库，避免资源浪费
    $conn->close();
  

?>

