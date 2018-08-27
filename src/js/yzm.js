
// document.addEventListener('DOMContentLoaded',function(){
//     let username = document.querySelector('#username');
//     let password = document.querySelector('#password');
//     let passwords = document.querySelector('#passwords');
//     let bdtx = document.querySelector('.bdtx');
//     var yzm = document.querySelector('.codenum');
//     var code = document.querySelector('#code');
//     let btnReg = document.querySelector('.btnReg');
//     var yzmh;
//     yzmh= cs(0,9,4);
//     yzm.onclick = function(){
//          yzmh = cs(0,9,4)
//         yzm.innerHTML = yzmh[0];
      
      
     
//    }
    
//            btnReg.onclick = ()=>{
//             let _username = username.value;
//             var _password = password.value;
//             var _passwords = passwords.value;
//             var _code = code.value;

//                 if(_passwords != _password){
//                     passwords.nextElementSibling.innerText ='两次输入密码不一致';
//                     return false;
//                 }else{
//                     // passwords.nextElementSibling.innerText ='';
//                 }
//             }
            

//             username.onkeyup = function(){console.log('dsfsf')
//                 var _username = username.value;
                
//                 if(!/^1[3-9]\d{9}$/.test(_username)){
//                     if(!/^[a-z0-9][\w\-\.]{2,29}@[a-z0-9\-]{2,67}(\.[a-z\u2E80-\u9FFF]{2,6})+$/.test(_username)){
//                         username.focus();
//                         return false;
//                     }else{
//                         username.nextElementSibling.innerText = "输入正确"
//                     }
                    
//                 }else{
//                     username.nextElementSibling.innerText = "输入正确"
//                 }
//             }

//             password.onkeyup = function(){
//                 var _password = password.value;
//                 if(!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/.test(_password)){
//                     password.nextElementSibling.innerText ='输入密码错误';
//                     return false;
//                 }else{
//                     password.nextElementSibling.innerText ='输入密码错误';
//                    if(_password !=''){
                       
//                     password.nextElementSibling.innerText ='输入正确';
//                    }
//                 }
//             }

//             passwords.onkeyup = function(){
               
//                 var _username = username.value;
//                 var _password = password.value;
//                 var _passwords = passwords.value;
//                     if(_password !=''){
//                         if(_passwords != _password){
//                             passwords.nextElementSibling.innerText ='两次输入密码不一致';
//                             return false;
//                         }else{
//                             passwords.nextElementSibling.innerText ='输入正确';
//                         }
//                     }
                
//             }
  
//             yzm.innerHTML= yzmh[0]; 

//             code.onkeyup = (e)=>{
//                   yzmfz();
//              }
//                 code.onfocus = function(){
//                     yzmfz();
//                 }
         
//                 function yzmfz(){
//                  clearInterval(yzyzm)
//                  var yzyzm = setInterval(function(){
//                      var _codes = code.value;
//                      if(Number(yzmh[1])== _codes){
                      
//                          code.nextElementSibling.innerText ='验证码正确！！！';
//                          clearInterval(yzyzm)
//                      }else{
//                       if(_codes ==''){
//                           code.nextElementSibling.innerText ='验证码不能为空！！！';
//                           clearInterval(yzyzm)
//                           return
//                          }else{
//                           code.nextElementSibling.innerText ='验证码有误！！！';
//                           return
//                          }
//                      }
//                  },1000)
//              }
         
           

           

//  function cs(min,max,n){   
//      var code = '';
//      var mima='';
//     for(var i = 0; i<n;i++){
//         var r = parseInt(Math.random()*256);
//         var g = parseInt(Math.random()*256);
//         var b = parseInt(Math.random()*256);
//         var res = parseInt(Math.random()*(max-min+1)+min);
//         mima +=res;
//         code+= '<span style="color:'+'rgb('+r+','+g+','+b+')'+'">'+res+'</span>' ;  
//     }
//     return [code,mima];
// }


// })