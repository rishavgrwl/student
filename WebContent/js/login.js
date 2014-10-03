$(document).ready(function(){
	var userIdNode = $('#userId');
	var passNode = $('#password');
	var userIdError = 1, passwordError = 1;
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
	passNode.change(function(){
		var password = $.trim(passNode.val());
		if (password !== ''){
			passwordError = 0;
			$('#passwordError').empty();
		} else {
			passwordError = 1;
			$('#passwordError').empty();
			$('#passwordError').append("First Name cannot be empty");
		}
		revisitSubmitButton ();
	});
	
	submitButtonNode.click (function () {
		var passwordEntered = passNode.val();
		var encryptedPassword = calcMD5 (passwordEntered);
		passNode.val(encryptedPassword);
	});

	function revisitSubmitButton () {
		if (! (userIdError || passwordError) ){
			submitButtonNode.removeAttr('disabled');
		} else {
			submitButtonNode.attr("disabled", true);
		}
	};
});