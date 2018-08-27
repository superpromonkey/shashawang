jQuery(function($){
    let _username = $('#username').val();
    let _password = $('#password').val();
    let login_status = null;
    $('.btn-success').on('click',function(){
        $.post('../api/denglu.php',{'username':_password,'password':_password},res=>{
            if(res=='yes'){
                    localStorage.setItem('readylogin',login_status)
                    window.location.href = '../index.html';
            }
        })
    })
})