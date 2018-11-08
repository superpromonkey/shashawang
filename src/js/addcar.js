jQuery(function($){

 (function ($) {
        $.getUrlParam = function (name) {
          var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
          var r = window.location.search.substr(1).match(reg);
          if (r != null) return unescape(r[2]); return null;
        }
      })(jQuery);

    
var jssl = $('#jssl')[0];
var totalts = $('.totalts');

    // 购买商品的件数
   
       var n =1;



       $('.goodste_br').on('click','button',function(){
         console.log('ads')
           var ad = 0;

        if($(this).is('.addgoods')){
         
            if(jssl.value== 10){
                 return  totalts.html('限购10件');
            }else{
                n++;
                ad += n;
                totalts.html('');           
                jssl.value = ad;
            }
        }
        
            if($(this).is('.jgoods')){
              if(jssl.value== 1){
                 return  totalts.html('客官不能再少了哦');
            }else{
                    n--;
                ad += n;
            totalts.html('');
            jssl.value = ad;

            }
            
        } 

        if($(this).is('.addcar')){
          console.log('4546')

             var id = $.getUrlParam('id');
              console.log(id,ad)

            
          var param ={
            goodsid: id,
            quantity: jssl.value
          };

          $.get('../api/addcar.php',param,function(data){
              // console.log(data)
          })
          
        }
       
         
    
    })



     $('.addcar').click(function(event){
     //    // Act on the event 
     //   console.log('sdfs11111')
     //   $.ajax({
     //       type: 'GET',
     //        url:'../api/addcarcar.php',
     //        dataType: 'json',
     //        data: "goodsid="+id +'&quantir ='+ quantiry,
     //        success: function( result ) {
     //            console.log(result.data.order_list);
     //           // orderList.lists = result.data.order_list;
     //        }
     //      });
     });

     // $.getUrlParam('id');
     // console.log( $.getUrlParam('id'))




  })


// (function ($) {
//         $.getUrlParam = function (name) {
//           var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
//           var r = window.location.search.substr(1).match(reg);
//           if (r != null) return unescape(r[2]); return null;
//         }
//       })(jQuery);

//       var gg= $.getUrlParam('reurl');
//       console.log()


    // function addcars(n){
       
    // }


      // $('#addcar').click(console.log('sdfs11111'))

      

    // 封装一个加入购物车的函数
  // function addincar(id){
  //       var quantiry = jssl.vaule;
  //      console.log(quantiry)

  //       // 创建请求对象,返回一个异步请求对象
  //           var xhr = new XMLHttpRequest();

  //           // 处理服务器返回数据
  //         window.onload = function(){
  //             xhr.onreadystatechange = function(){
  //               if(xhr.readyState == 4) {

  //                   var res =  JSON.parse(xhr.responseText);

  //                   // var ret = res[0][goodsname];
  //                    totaljs(res)
                      
  //               }
  //           }
        
  //            // 设置请求参数，建立与服务器连接
  //           xhr.open("get", "../api/addcarcar.php?goodsid="+id +'&quantiry ='+ quantiry , true);

  //           // 向服务器发送请求
  //           xhr.send();
  //           }
  //       };




// document.addEventListener('DOMContentLoaded',function(){

//   var jssl = document.querySelector('#jssl');
//   var totalts = document.querySelector('.totalts');
//   var addcar = document.querySelector('.addcar');
//   var goodste_br = document.querySelector('.goodste_br');

        
//          var n =1;
//        goodste_br.onclick = function(e){
//               var ad = 0;        
//               e = e || window.event;

//               var target = e.target || e.srcElement;
  
//               if(target.className ==='addgoods spbtn'){

//                   if(jssl.value == 10){
//                    return  totalts.innerHTML='限购10件';

//                     }else{
//                       console.log('target')
//                         n++;
//                         ad += n;
//                         totalts.innerHTML ='';          
//                         jssl.value=Number(ad);
//                     console.log(ad,jssl.value)
//                     }
            
//                 }
//                 if(target.className ==='jgoods spbtn'){

//                   if(jssl.value== 1){
//                     console.log('sdfa')
//                      return totalts.innerHTML ='客官不能再少了哦';
//                     }else{
//                       n--;
//                       ad += n;
//                     totalts.innerHTML ='';      
//                     jssl.value = ad;
//                      console.log(ad,jssl.value)

//                    }
//                 }      
//             }


// })