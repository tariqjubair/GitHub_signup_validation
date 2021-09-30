
// ==== jQuery ====

$(function () {

// ==== ==== Header: on-scroll class ==== ====
    
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 200) {
            $(".navbar").addClass("ext_hd");
            $(".navbar .container").addClass("cont_pd");
        } 
        else {
            $(".navbar").removeClass("ext_hd");
            $(".navbar .container").removeClass("cont_pd");
        }
    });

// ==== ==== Header: x-sm Fixed-Header ==== ====

    $('#menu_btn').click(function(){
        $(".navbar").toggleClass("xsm_menu_bg");
    });

});

// ==== javascript ====


// === Variables ===

var uname = document.getElementById('uname');
var uname_hd = document.getElementById('uname_hd');
var uname_sign = document.getElementById('uname_sign');
var uname_err = document.getElementById('uname_err');

var email = document.getElementById('email');
var email_hd = document.getElementById('email_hd');
var email_sign = document.getElementById('email_sign');
var email_err = document.getElementById('email_err');
var email_regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

var pass = document.getElementById('pass');
var pass_hd = document.getElementById('pass_hd');
var pass_sign = document.getElementById('pass_sign');
var pass_err = document.getElementById('pass_err');
var pass_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

var gen = document.getElementById('gen');
var gen_hd = document.getElementById('gen_hd');
var gen_sign = document.getElementById('gen_sign');
var gen_err = document.getElementById('gen_err');
var gen_ml = document.getElementById('gen_ml');
var gen_fml = document.getElementById('gen_fml');
var gen_oth = document.getElementById('gen_oth');

function sub(){

// === Username Input ===

    if(uname.value == '' || uname.value.length < 4){
        uname_hd.style.color = '#e60000';
        uname_err.style.display = 'block';
        uname_sign.style.display = 'block';
        uname.style.border = '1px solid #df1d1d';
        uname.focus();
        return false;
    }
    
// === Email Input ===

    else if(email.value == '' || !email_regex.test(email.value)){
        email_hd.style.color = '#e60000';
        email_err.style.display = 'block';
        email_sign.style.display = 'block';
        email.style.border = '1px solid #df1d1d';
        email.focus();
        return false;
    }

// === Password Input ===

    else if(pass.value == '' || !pass_regex.test(pass.value)){
        pass_hd.style.color = '#e60000';
        pass_err.style.display = 'block';
        pass_sign.style.display = 'block';
        pass.style.border = '1px solid #df1d1d';
        pass.focus();
        return false;
    }

// === Confirm Password Input ===

    else if(cpass.value == '' || cpass.value != pass.value){
        cpass_hd.style.color = '#e60000';
        cpass_err.style.display = 'block';
        cpass_sign.style.display = 'block';
        cpass.style.border = '1px solid #df1d1d';
        cpass.focus();
        return false;
    }

// === Radio Input ===

    else if(gen_ml.checked != true && gen_fml.checked != true && gen_oth.checked != true){
        gen_hd.style.color = '#e60000';
        gen_err.style.display = 'block';
        gen_sign.style.display = 'block';
        // gen.style.border = '1px solid #df1d1d';
        // gen.focus();
        return false;
    }

// === Textarea Input ===

    else if(para.value.split(" ").length-1 < 20 || para.value.split(" ").length-1 > 50){
        para_hd.style.color = '#e60000';
        para_err.style.display = 'block';
        para_sign.style.display = 'block';
        para.style.border = '1px solid #df1d1d';
        para.focus();
        return false;
    }

}

// === Password View ===

function passview(){
    var pass = document.getElementById('pass');
    if(pass.type == 'password'){
        pass.type = 'text';
    }
    else(pass.type = 'password');
}

function cpassview(){
    var cpass = document.getElementById('cpass');
    if(cpass.type == 'password'){
        cpass.type = 'text';
    }
    else(cpass.type = 'password');
}

// === Function Error-Valid ===

function errvalid(){
    if(uname.value != ''){
        uname_hd.style.color = '#000';
        uname_err.style.display = 'none';
        uname_sign.style.display = 'none';
        uname.style.border = '1px solid #d8d8d8';
    }

    if(email.value != ''){
        email_hd.style.color = '#000';
        email_err.style.display = 'none';
        email_sign.style.display = 'none';
        email.style.border = '1px solid #d8d8d8';
    }

    if(pass.value != ''){
        pass_hd.style.color = '#000';
        pass_err.style.display = 'none';
        pass_sign.style.display = 'none';
        pass.style.border = '1px solid #d8d8d8';
    }

    if(cpass.value != ''){
        cpass_hd.style.color = '#000';
        cpass_err.style.display = 'none';
        cpass_sign.style.display = 'none';
        cpass.style.border = '1px solid #d8d8d8';
    }

    if(gen_ml.checked == true || gen_fml.checked == true || gen_oth.checked == true){
        gen_hd.style.color = '#000';
        gen_err.style.display = 'none';
        gen_sign.style.display = 'none';
    }

    if(para.value.split(" ").length-1 > 19 && para.value.split(" ").length-1 < 51){
        para_hd.style.color = '#000';
        para_err.style.display = 'none';
        para_sign.style.display = 'none';
        para.style.border = '1px solid #d8d8d8';
    }

}

uname.addEventListener('blur', errvalid);
email.addEventListener('blur', errvalid);
pass.addEventListener('blur', errvalid);
cpass.addEventListener('blur', errvalid);
gen_ml.addEventListener('blur', errvalid);
gen_fml.addEventListener('blur', errvalid);
gen_ml.addEventListener('blur', errvalid);
para.addEventListener('blur', errvalid);