$(document).ready(function(){
	var firstNameNode = $('#firstName');
	var lastNameNode = $('#lastName');
	var emailNode = $('#emailId');
	var passNode = $('#password');
	var repassNode = $('#repassword');
	var submitButtonNode = $("#submitButton");
	var firstNameError = 1, lastNameError = 1, emailError = 1, passNotMatchError = 1;
	
	emailNode.change(function(){
		var emailValue = $.trim(emailNode.val());
		if (emailValue !== ''){
			var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
			if (regex.test(emailValue)){
				emailError = 0;
				$('#emailError').empty();
			} else {
				emailError = 1;
				$('#emailError').empty();
				$('#emailError').append("Please enter in format abcd@example.com");
			}
		} else {
			emailError = 1;
			$('#emailError').empty();
			$('#emailError').append("Please enter in format abcd@example.com");
		}
		revisitSubmitButton ();
	});
	
	firstNameNode.change(function(){
		var firstName = $.trim(firstNameNode.val());
		if (firstName !== ''){
			firstNameError = 0;
			$('#firstNameError').empty();
		} else {
			firstNameError = 1;
			$('#firstNameError').empty();
			$('#firstNameError').append("First Name cannot be empty");
		}
		revisitSubmitButton ();
	});
	
	lastNameNode.change(function(){
		var lastName = $.trim(lastNameNode.val());
		if (lastName !== ''){
			lastNameError = 0;
			$('#lastNameError').empty();
		} else {
			lastNameError = 1;
			$('#lastNameError').empty();
			$('#lastNameError').append("last Name cannot be empty");
		}
		revisitSubmitButton ();
	});
	
	
	repassNode.change(function(){
		checkSamePasswords ();
	});
   
	passNode.change(function(){
		checkSamePasswords ();
	});
	
	submitButtonNode.click (function () {
		var passwordEntered = passNode.val();
		var encryptedPassword = calcMD5 (passwordEntered);
		passNode.val(encryptedPassword);
		repassNode.val(encryptedPassword);
	});

	function checkSamePasswords () {
		var firstAttempt = $.trim(passNode.val());
		var secondAttempt = $.trim(repassNode.val());
		if (secondAttempt !== '' && firstAttempt !== '' ){
			if ( firstAttempt ===  secondAttempt){
				passNotMatchError = 0;
				$('#passError').empty();
			} else {
				passNotMatchError = 1;
				$('#passError').empty();
				$('#passError').append("Paswords do not match");
			}
		} else {
			passNotMatchError = 1;
			$('#passError').empty();
			if (secondAttempt !== '' || firstAttempt !== '' ) {
				$('#passError').append("Paswords cannot be empty");
			} else {
				$('#passError').append("Paswords do not match");
			}
		}
		
		revisitSubmitButton();
	};
	
	function revisitSubmitButton () {
		if (! (firstNameError || lastNameError || emailError || passNotMatchError) ){
			submitButtonNode.removeAttr('disabled');
		} else {
			submitButtonNode.attr("disabled", true);
		}
	};
});