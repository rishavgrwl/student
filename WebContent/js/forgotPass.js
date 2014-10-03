$(document).ready(function(){
	var userIdNode = $('#userId');
	var passNode = $('#password');
	var userIdError = 1, passNotMatchError = 1;
	var repassNode = $('#repassword');
	var submitButtonNode = $("#submitButton");
	
	userIdNode.change(function(){
		var userId = $.trim(userIdNode.val());
		if (userId !== ''){
			var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
			if (regex.test(userId)){
				userIdError = 0;
				$('#userIdError').empty();
			} else {
				userIdError = 1;
				$('#userIdError').empty();
				$('#userIdError').append("Please enter in format abcd@example.com");
			}
		} else {
			userIdError = 1;
			$('#userIdError').empty();
			$('#userIdError').append("First Name cannot be empty");
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
		if (! (userIdError || passNotMatchError) ){
			submitButtonNode.removeAttr('disabled');
		} else {
			submitButtonNode.attr("disabled", true);
		}
	};
});