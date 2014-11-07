$(document).ready(function(){
	var addressLine1Node = $('#street1');
	var addressLine2Node = $('#street2');
	var cityNode = $('#city');
	var zipCodeNode = $('#zipCode');
	var phoneNode = $('#phone');
	var submitButtonNode = $("#submitButton");
	var addressLine1Error = 1, addressLine2Error = 1, cityError = 1, zipCodeError = 1, phoneError = 1;
	
	addressLine1Node.change(function(){
		var addressLine1 = $.trim(addressLine1Node.val());
		if (addressLine1 !== ''){
			addressLine1Error = 0;
			$('#addressLine1Error').empty();
		} else {
			addressLine1Error = 1;
			$('#addressLine1Error').empty();
			$('#addressLine1Error').append("This field can not be left empty");
		}
		revisitSubmitButton ();
	});
	
	addressLine2Node.change(function(){
		var addressLine2 = $.trim(addressLine2Node.val());
		if (addressLine2 !== ''){
			addressLine2Error = 0;
			$('#addressLine2Error').empty();
		} else {
			addressLine2Error = 1;
			$('#firstNameError').empty();
			$('#firstNameError').append("This field can not be left empty");
		}
		revisitSubmitButton ();
	});
	
	cityNode.change(function(){
		var city = $.trim(cityNode.val());
		if (city !== ''){
			cityError = 0;
			$('#cityError').empty();
		} else {
			cityError = 1;
			$('#cityError').empty();
			$('#cityError').append("This field can not be left empty");
		}
		revisitSubmitButton ();
	});
	
	phoneNode.change(function(){
		var phone = $.trim(phoneNode.val());
		if (phone !== ''){
			phoneError = 0;
			$('#phoneError').empty();
		} else {
			cityError = 1;
			$('#phoneError').empty();
			$('#phoneError').append("This field can not be left empty");
		}
		revisitSubmitButton ();
	});
	
	zipCodeNode.change(function(){
		var zip = $.trim(zipCodeNode.val());
		if (zip !== ''){
			zipCodeError = 0;
			$('#zipCodeError').empty();
		} else {
			zipCodeError = 1;
			$('#zipCodeError').empty();
			$('#zipCodeError').append("This field can not be left empty");
		}
		revisitSubmitButton ();
	});
	
	
	submitButtonNode.click (function () {
		var totalAddress = addressLine1Node.val() + addressLine2Node.val() + cityNode.val() + zipCodeNode.val() + phoneNode.val(); 
		var encryptedPassword = calcMD5 (totalAddress);
		debugger;
		$('#addressId').val(encryptedPassword);

	});

	
	function revisitSubmitButton () {
		if (! (addressLine1Error || addressLine2Error || cityError || zipCodeError || phoneError) ){
			submitButtonNode.removeAttr('disabled');
		} else {
			submitButtonNode.attr("disabled", true);
		}
	};
});