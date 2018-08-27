jQuery(function($){
    function gernerateConstruction() {
        $.get('../api/goodslist.php',{},res=>{
             let resultdata = JSON.parse(res);
             let newresultdata = [];
             let res1 = '';
             let goodsnum = resultdata.length;
             let pagenum = Math.ceil(goodsnum/9);

             let oli = '';            
             for(let i=0;i<pagenum;i++){
                 oli += `<li class="yemaxiabiao">${i+1}</li>`;
             }
             $('.btn_pages').html(oli);
            newresultdata = resultdata.slice(0,9);
            reConstruction(newresultdata,res1);

            $('.btn_pages').on('click','li',function(){
                 let click_num = parseInt($(this).text());
                 console.log(click_num)
                 if(click_num==3){
                    newresultdata = resultdata.slice(8*(click_num-1),goodsnum);
                    reConstruction(newresultdata,res1)
                 }
                 else{
                    newresultdata = resultdata.slice(8*(click_num-1),8*click_num+1)
                    reConstruction(newresultdata,res1);
                 }
             })         
        })
    }
    function reConstruction(newresultdata,res1){
        newresultdata.map((item)=>{

            res1 += `
               <li data-id ="${item.id}"><a href="#">
                       <img src="../img/goodslist/${item.imgurl}" alt="">
                       <div class="sale-price">
                           <span class="count fr">3.3折</span>
                           <span class="price tl">￥${item.newprice}</span>
                           <span class="dis tl"><del>￥${item.price}</del></span>
                       </div>
                       <div class="arrivals-info">
                               <div class="infoconts">
                                   <div class="des02">
                                       <b class="yew"> ${item.goodsname}</b>                                
                                           <a href="/brand/clarins" target="_blank">娇韵诗</a>
                                   </div>
                                   <p class="des03">
                                   <a href="/facialcare/Clarins-107545102001.html" target="_blank">焕颜紧致颈霜                                  </a></p>
                                   <p class="des04">${item.size} 毫升&nbsp;&nbsp;</p>
                               </div>
                               <!-- 秒杀简介 -->
                           <!-- 已售出 -->
                           <p class="salenum">已售0件</p>
                       </div>
                   </a>
                   <button class="goods_bt"> 加入购物车 </button>     
               </li>`;
        });

        $('.arrivalslist').html(res1);     

    }


    gernerateConstruction();



   



    // 排序

    $('.list_paixu .paixu_l').on('click','a span',function(){
            let currentClassName = $(this).attr('class');
            console.log(currentClassName);
            let styleorder = null;
            let orderdata = [
                ['style1','brand'],
                ['style2','hotdu'],
                ['style3','commentgrade'],
                ['style4','price']
            ];
            orderdata.map((item)=>{
                if(currentClassName == item[0]){
                    styleorder = item[1]
                }
            })
            console.log(styleorder)
            
           $.get('../api/orderlist.php',{orderstyle:styleorder},res=>{
                let res2data = JSON.parse(res).data2;
                console.log(res2data);


                 })      
           
           })


     
        //    $('.arrivalslist').on('click','li',function(){
        //     let gsid = $(this).attr('data-id');
        //     console.log(gsid*1);
        //    $.get('../api/orderlist.php',{gsid},res=>{
        //         let res2data = JSON.parse(res).data2;
                


        //          })      
           
        //    })

                  
    
    })
          


