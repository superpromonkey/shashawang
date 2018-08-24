
document.addEventListener('DOMContentLoaded',()=>{
    let username = document.querySelector('#username');
    let password = document.querySelector('#password');
    let passwords = document.querySelector('#passwords');
    let btnReg = document.querySelector('.btnReg');
    var _code = document.querySelector('.code');
    var codenum = document.querySelector('.codenum');


    let status = [200,304];

    let isok = false;

    username.focus();

    // 注册
    btnReg.onclick = ()=>{
        if(!isok){
            return false;
        }

        // 获取用户名/密码
        let _username = username.value;
        var _password = password.value;
        var _passwords = passwords.value;
        var _code = code.value;
        
        if(_username ==''){
           
           username.nextElementSibling.innerText ='用户名不能为空！！！';
           username.focus();
           return ;
        }
        
        if(_password ==''){
           
           _password.nextElementSibling.innerText ='密码不能为空！！！';
           password.focus();
           return  
        }

         if(_passwords ==''){
            passwords.nextElementSibling.innerText ='请再次输入密码！！！';
        }else if(_passwords!=_password){
            passwords.nextElementSibling.innerText ='输入密码不一致！！！';
            passwords.focus();
            return ; 
        }
        
        if(_code ==''){
            code.nextElementSibling.innerText ='验证码不能为空！！！';
            code.focus();
            return;
        }else if(_code!=codenum.innerHTML){
            code.nextElementSibling.innerText ='验证码有误！！！';
            code.focus();
           return ;
        }

        let xhr = new XMLHttpRequest();
        xhr.onload = ()=>{
            if(status.indexOf(xhr.status) >= 0){
                console.log(xhr.responseText);
            }
        }
        xhr.open('post','../api/reg.php',true);

        // 设置请求头，以便后端接收post数据
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');


        xhr.send(`username=${_username}&password=${_password}`);
        location.href = 'zccg.html';
    }




    // 验证用户名是否存在
    username.onblur = ()=>{
        let _username = username.value;
       
        let xhr = new XMLHttpRequest();
        
        if(_username ==''){
           
            username.nextElementSibling.innerText ='用户名不能为空！！！';
            username.focus();
            return 
       
        }  

       passwords.onfocus =()=>{
        let _password = password.value;
            if(_password ==''){
            
            password.nextElementSibling.innerText ='密码不能为空！！！';
            password.focus();
            return ;
            }else{
                password.nextElementSibling.innerText ='';
            }
       }
        
        xhr.onload = ()=>{
            if(status.indexOf(xhr.status) >= 0){
                var formGroup = username.parentNode;
                if(xhr.responseText === 'yes'){
                    isok = true;

                    // 成功：添加has-success类
                    formGroup.classList.remove('has-error');
                    formGroup.classList.add('has-success');
                    username.nextElementSibling.innerText = '';
                }else if(xhr.responseText === 'no'){
                    isok = false;
                    formGroup.classList.remove('has-success');
                    formGroup.classList.add('has-error');
                    username.nextElementSibling.innerText = '用户名已存在';
                    // username.value = "";
                    username.focus();
                   
               
                }
            }
        }
        xhr.open('get','../api/check_username.php?username='+_username,true);
        xhr.send();


    }
});
