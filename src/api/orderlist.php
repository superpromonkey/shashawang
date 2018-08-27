<?php 
   include 'DBHelper.php';

   header('Access-Control-Allow-Origin:*');
   header('Access-Control-Allow-Methods:POST,GET,OPTIONS'); 
   header('Access-Control-Request-Headers:accept, content-type');
   
    // $.get('url',{},res={})
   $brandname = isset($_GET["brandname"]) ? $_GET["brandname"] : '';
   $orderstyle = isset($_GET["orderstyle"]) ? $_GET["orderstyle"] : '';

   $sql = "select * from goodslists where brand ='$brandname'";
   $sql.= ";select * from goodslists order by $orderstyle";

   $result = multi_query_oop($sql);

   echo json_encode($result, JSON_UNESCAPED_UNICODE);

   
 
?>