      document.addEventListener('DOMContentLoaded',function(){

        var car_list = document.querySelector('.car_list');
        var cleargoods = document.querySelector('.cleargoods');

        var cargoods='';


          // 创建请求对象,返回一个异步请求对象
            var xhr = new XMLHttpRequest();

            // 处理服务器返回数据
          window.onload = function(){
              xhr.onreadystatechange = function(){
                if(xhr.readyState == 4) {

                    var res =  JSON.parse(xhr.responseText);

                    // var ret = res[0][goodsname];
                     totaljs(res)
                      
                }
            }
        
             // 设置请求参数，建立与服务器连接
            xhr.open("get", "../api/outcar.php", true);

            // 向服务器发送请求
            xhr.send();
            }
