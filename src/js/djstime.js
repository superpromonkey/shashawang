document.addEventListener('DOMContentLoaded',()=>{

    var qgtime = document.querySelectorAll('.xsqgtime')
    var wjtime = document.querySelector('.wjtime')




// 指定结束时间

var qc = setInterval( function showTime(){
           
             var date = new Date();

            var hours = date.getHours()*3600;
            var mins = date.getMinutes()*60;
            var secs = date.getSeconds();

            // 当前的时间毫秒数
            var total = hours + mins +secs;
            // 开始时间的毫秒数
            var open = 9*3600;

            var outtimes;            

           

            if( hours >= 0 && hours <=9*3600 ){
                    outtimes =  9*3600;
                    var offset = outtimes-total;

            }else{
                outtimes =  24*3600;
                var offset = outtimes-Math.abs(total-open);

            }
                
            //     // 转剩余时间
                var sec = offset%60;
                var min = Math.floor(offset/60)%60;
                var hour = Math.floor(offset/60/60)%24;
                var days = Math.floor(offset/60/60/24);

            //     // 补0操作
                sec = sec<10 ? '0'+sec : sec;
                min = min<10 ? '0'+min : min;
                hour = hour<10 ? '0'+hour : hour;


               var newstime =  hour + ':' + min + ':' + sec;

                for(var i =0; i<qgtime.length;i++){
                    
                    qgtime[i].innerHTML = newstime;
                }

            

                wjtime.innerHTML = days + '天' + hour + '时' + min + '分' + sec + '秒';
                
                


                // 时间重置
                if(hours==open){
                    clearInterval(qc)
                    return;
                }


            }, 1000)
          
     



})