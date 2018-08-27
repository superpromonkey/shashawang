document.addEventListener('DOMContentLoaded',()=>{

    var qgtime = document.querySelectorAll('.xsqgtime')
    var wjtime = document.querySelector('.wjtime')




// 指定结束时间
            var endstr = '2018-8-30 00:00:00'; 

            // 转换毫秒数，得到结束时间的毫秒数
            var end = Date.parse(endstr);

            showTime();

            // 不断拿当前时间跟结束时间对比，计算差值
            var timer = setInterval(showTime,1000)

            function showTime(){
                // 获取当前时间
                var now = Date.now();
    


                // 计算差值(单位:s)
                var offset = parseInt((end - now)/1000);

                // 5）倒计时结束时
                // 差值为0
                if(offset <= 0){
                   

                }

                /*
                    剩余秒数->x天x时x分x秒：
                        * 20s -> 0天0时0分20秒
                        * 65s -> 0天0时1分5秒
                        * 72m -> 0天1时12分x秒

                    求余：剩余时间
                 */
                
                // 转剩余时间
                var sec = offset%60;
                var min = Math.floor(offset/60)%60;
                var hour = Math.floor(offset/60/60)%24;
                var days = Math.floor(offset/60/60/24);

                // 补0操作
                sec = sec<10 ? '0'+sec : sec;
                min = min<10 ? '0'+min : min;
                hour = hour<10 ? '0'+hour : hour;


                // // 拼接时间格式，写入页面
                // countDown.innerHTML = days + '天' + hour + '时' + min + '分' + sec + '秒';
               var newstime =  days + ':' + hour + ':' + min + ':' + sec;

                for(var i =0; i<qgtime.length;i++){
                    
                    qgtime[i].innerHTML = newstime;
                }

                wjtime.innerHTML = days + '天' + hour + '时' + min + '分' + sec + '秒';

            }




})