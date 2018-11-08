
document.addEventListener('DOMContentLoaded',function(){

    var goodste_br = document.querySelector('.goodste_br');
    var addgoods =  document.querySelector('.addgoods');
    var jssl =  document.querySelector('#jssl');
    var jgoods =  document.querySelector('.jgoods');
    var addcar =  document.querySelector('.addcar');
    var addsbox =  document.querySelector('.addsbox');
    // var addsbox =  document.querySelector('.addsbox');
    var contentxq ='';



        // 获取到url中的id值
       
         function GetRequest() {  
           var url = location.search; //获取url中"?"符后的字串  
           var theRequest = new Object();  
           if (url.indexOf("?") != -1) {  
              var str = url.substr(1);  
              strs = str.split("&");  
              for(var i = 0; i < strs.length; i ++) {  
                 theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);  
              }  
           }  
           return theRequest;  
        }   

        // 获取id值
          if(GetRequest().id==""){
             var id =1;
          }else{
             var id =GetRequest().id;
          }



        // 创建请求对象,返回一个异步请求对象
         var res;
        var xhr = new XMLHttpRequest();

        // 处理服务器返回数据
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4) {

                res = JSON.parse(xhr.responseText)[0];

                // 把参数传回
                xqcs(res)
                

            }
        }

         // 设置请求参数，建立与服务器连接
        xhr.open('get', '../api/xqpage.php?goodsid='+id , true);
          
        // 向服务器发送请求
        xhr.send();




        function xqcs(res){


            contentxq += `<div class="xqcont">

                     <p>
                        <i class="syh">“</i>${res.goodsname2}${res.goodsname}
                    </p>
                    <div class="goodste_brc">
                        <p class="product-titles2">
                            <i class="icon66">国内保税仓</i>
                            <i class="icon66">零扣关</i>
                            <i class="icon66">包税</i>
                            <a href="#" target="_blank">
                            ${res.brand}&nbsp;</a>
                        </p>
                        <p>活泉柔肤水  (${res.size}毫升)</p>
                        <div class="ruleWrap">
                            <ul class="dispatching" id="J-dispatching">
                                <li><div class="one">配送</div><div class="two">保税仓发货，直送时间为2-5个工作天</div></li>
                                <li>
                                    <div class="one">运费</div>
                                    <div class="two pro-rule"><span id="J-rule1" class="pulldown js-rule">满￥168免运费</span>
                                        <p class="hid">保税仓直送商品订单满￥168免运费</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="one">税费</div>
                                    <div class="two pro-rule">
                                        <font style="color:#EC3E7C;">本商品包税，无需再额外缴纳。</font>如有疑问，请联系客服咨询。     
                                        
                                    </div>
                                </li>
                                <li><div class="one">服务</div><div class="two service"><span class="icon67">30日退换保证</span><span class="icon67">正品保障</span><span class="icon67">价格承诺</span></div></li>    
                            </ul>
                        </div>
                    </div>
                    <div class="goodste_brt">
                        <div class="spshuliang">
                                <b> 数量:</b>
                           
                                <div class = "addsbox" style ="display:inline-block">
                                    <button  class="addgoods spbtn">+</button>
                                    <input type="text" id="jssl" class="shuliangsy spbtn " value="1">
                                    <button class="jgoods spbtn">-</button >
                                    <span class="totalts"</span>
                                </div>
                           
                        </div>

                        <span class="detail">
                            特卖价<b class="price"><ins class="action-price">￥${res.newprice}</ins></b>
                                <span class="old-price">
                                <del>市场价</del>
                                <i class="grey"><del class="action-mktprice">￥${res.price}</del></i>
                            </span>
                        </span>

                       
                        <div class="xgbtbox">
                            <button class="addcar dhtzbyn">加入购物车</button>
                            <div class="dhtzbyn smgw">扫扫即加入购物车 
                                <div class="smgw"></div>
                            </div>
                        </div>

                        <div class="pinglun">
                            <span>评 分 <i class="pinglunxx"></i> (20人评价)</span>  
                        </div>

                        <div class="fenxiang">
                            <div class="fenxiang_l fl">
                                <a href="#">
                                <i class="icon iconfont icon-sifagongzheng-zhiyezige-"></i>
                                收藏
                                </a>                                    
                            </div>
                            <div class="fenxiang_r">
                                    分享到:&nbsp;
                                <a href="#"></a>
                                <a href="#"></a>
                            
                            </div>
                        </div>

                    </div>

            </div>`
     

            console.log(contentxq)
            // 写入页面
            goodste_br.innerHTML = contentxq;
        }


    

   function addincar(id){

        console.log('47474774')
         var quantiry;
       if( jssl.vaule == undefined){
             var quantiry = 1;
       }else{
         var quantiry = jssl.vaule;
       }
      

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
            xhr.open("get", "../api/addcarcar.php?goodsid="+id +'&quantiry ='+ quantiry , true);

            // 向服务器发送请求
            xhr.send();
            }
        };

        


    // function addincar(id){
    //     var quantiry = jssl.vaule;
    //    console.log(quantiry)

    //     // 创建请求对象,返回一个异步请求对象
    //         var xhr = new XMLHttpRequest();

    //         // 处理服务器返回数据
    //       window.onload = function(){
    //           xhr.onreadystatechange = function(){
    //             if(xhr.readyState == 4) {

    //                 var res =  JSON.parse(xhr.responseText);

    //                 // var ret = res[0][goodsname];
    //                  totaljs(res)
                      
    //             }
    //         }
        
    //          // 设置请求参数，建立与服务器连接
    //         xhr.open("get", "../api/addcarcar.php?goodsid="+id +'&quantiry ='+ quantiry , true);

    //         // 向服务器发送请求
    //         xhr.send();
    //         }
    //     };

     /* console.log(addcar)
      goodste_br.onload = function(){


    addcar.onclick = function(e){
            e = e | window.event;
            var target = e.target | e.srcElement;
            if(target.className == 'addcar dhtzbyn')
            console.log('sdfjskld')
         }
     }*/

})