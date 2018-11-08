      document.addEventListener('DOMContentLoaded',function(){

        var car_list = document.querySelector('.car_list');
        var cleargoods = document.querySelector('.cleargoods');
        var xiaoji = document.querySelector('.xiaoji');
   

       

        var cargoods='';
             genxinsj();
            function genxinsj(){
               // 创建请求对象,返回一个异步请求对象
                var xhr = new XMLHttpRequest();
                // 处理服务器返回数据
                  xhr.onreadystatechange = function(){
                    if(xhr.readyState == 4){
                        cargoods='';
                        var res =  JSON.parse(xhr.responseText);
                        
                         goods(res)
                    }
                }
            
                 // 设置请求参数，建立与服务器连接
                xhr.open("get", "../api/shoppingcar.php", true);

                // 向服务器发送请求
                xhr.send();

            }
                    
                // 生成购物车商品列表
                function goods(res){

                    for(let i =0; i<res.length;i++){
                    
                     cargoods +=  `<li data-id="${res[i].id}">
                            <div class="car_img fl">
                                <input type="checkbox" name="all" id="" class="cars">
                                <img src="../img/goodslist/${res[i].imgurl}" alt="" class="cartp">
                            </div> 
                            <div class="car_xzxx fl">
                                <p>
                                    <a href="#">${res[i].goodsname} </a>         
                                </p>
                                <p class="goossize">${res[i].size}毫升</p>
                            </div>

                            <div class="car_sl fl">
                                    <div class="car_headbt fl">${res[i].newprice}</div>
                                    <div class="car_headbt fl ">
                                        <div class="jsbox">
                                            <div class="adds fl">+</div>
                                            <input type="text" class="zhi fl" value="${res[i].quantity}">
                                            <div class="jian fl">-</div>
                                        </div>  
                                    </div>
                                    <div class="car_headbt fl">
                                        <p class="xiaoji">￥${(res[i].newprice)*(res[i].quantity)}</p>
                                        <p>商城包税</p>
                                    </div>
                                    <div class="car_headbt cleargoods fl">删除</div>
                                                   
                            </div>
                        </li> `

                    }
        
                        car_list.innerHTML = cargoods; 


                  }


                  // 计算商品的总价
                  

                    
                      car_list.onclick = function(e){
                        
                            e = e || window.event;

                            var target = e.target || e.srcElement;
                
                            if(target.className ==='car_headbt cleargoods fl'){

                            var id = target.parentNode.parentNode.getAttribute("data-id")
                        

                                     // 创建请求对象,返回一个异步请求对象
                                    var xhr = new XMLHttpRequest();

                                    // 处理服务器返回数据
                                 
                                      xhr.onreadystatechange = function(){
                                        if(xhr.readyState == 4) {
                                                genxinsj();
                                              }
                                          }
                                   
                                       // 设置请求参数，建立与服务器连接
                                      xhr.open("get", "../api/outcar.php?goodsid="+id, true);

                                      // 向服务器发送请求
                                      xhr.send();
                             

                              }
                              
                              
                          }
  
                  })