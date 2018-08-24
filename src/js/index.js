   
jQuery(function($){
    let idxnavt = $('.idxnavt');
    let myzh = $('.myzh');

    idxnavt.mouseover(()=>{
        $('.myzh').css('display','block');
        // myzh.stop(true,true).slideDown(1000);
        // $('.dd').stop(true,true).slideDown(1000);
    });
    idxnavt.mouseout(function(){
        $('.myzh').css('display','none');
        // myzh.stop(true,true).slideUp("slow");
 
    });

    
})

