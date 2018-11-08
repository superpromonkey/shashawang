   
jQuery(function($){

     var listitem = $('.ahover');


    // 我的账户动画
   $('.idxnavt').mouseover(()=>{
    
        $('.myzh').stop(false,false).slideDown(800);
    });
    $('.idxnavt').mouseout(function(){
        $('.myzh').stop(false,false).slideUp("slow");
 
    });
 
  
    // 商品列表导航
         $(".ahover").click(function(){
            $(this).children("ul").toggle('addblock');
          })

   

           


   
})

