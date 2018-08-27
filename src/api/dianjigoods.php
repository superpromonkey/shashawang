<?php
   include 'DBHelper.php';
   header('Access-Control-Allow-Origin:*');
   header('Access-Control-Allow-Methods:POST,GET,OPTIONS'); 
   header('Access-Control-Request-Headers:accept, content-type');
    
    $id = isset($_POST['id']) ? $_POST['id'] :''; 
   
    // select id,title,price,imgurl,'$num' from list where id='$id'";


    var_dump( $id)

  
    // if($result>0){
    //     echo "yes";
    // }else{
    //     echo "no";
    // }
    // // // 查询前设置编码，防止输出乱码

    // //     echo "连接成功";

?>