$(document).ready(function(){
// DOM cache
var emailVal = $('#email-address').val();
var emailAdd = $('#email-address');
var passwordVal = $('#password-field').val();
var passwordInput = $('#password-field');
var emailSuccess = $('#email-success');
var emailFail = $('#email-fail');

var passSuccess = $('#pass-success');
var passFail = $('#pass-fail');

// Validation Functions
function isEmail (email){
	var pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
	return pattern.test(email);
};

// Validation on Events
emailAdd.blur(function(){
	var emailVal = $('#email-address').val();
	if (isEmail(emailVal)){
		$(this).parent().removeClass('has-danger');
		emailAdd.parent().addClass('has-success');
		emailFail.css('display', 'none');
		emailSuccess.css('display', 'block');
	}
	else {
		emailAdd.parent().addClass('has-danger');
		emailSuccess.css('display', 'none');
		emailFail.css('display', 'block');
	}
});

passwordInput.blur(function(){
	var value = $(this);
	if (value.val().length >= 3){
		value.parent().removeClass('has-danger').addClass('has-success');
		passFail.css('display', 'none');
		passSuccess.css('display', 'block');
	}
	else {
		value.parent().addClass('has-danger').removeClass('has-success');
		passSuccess.css('display', 'none');
		passFail.css('display', 'block');
	}
});
	
});