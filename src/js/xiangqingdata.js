document.addEventListener('DOMContentLoaded',function(){

    .onclick = function(e){
        e = e || window.event;
        var carList = document.querySelector('.carList');
        var target = e.target || e.srcElement;
        
             
        // 判断是否点击了按钮
        if(target.className === 'btn-close'){
            // //获取当前li
            var currentLi = target.parentNode;
            var carList = document.querySelector('.carList');

            //获取当前商品的guid
            var guid = currentLi.getAttribute('data-guid');

            

            // render();
            console.log(currentLi);
            carList.removeChild(currentLi);
                 
        }
    }

})