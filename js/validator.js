$(document).ready( function(){
	var VISA = 16;
	var DISCOVER = 14;
	var fn_var;
	var ln_var;
	var email_var;
	var zip_var;
	var task_var;
	var state_var;
	var cc_var;
	var amount_var;

	var fn_valid 		= false;
	var ln_valid 		= false;
	var email_valid 	= false;
	var zip_valid 		= false;
	var task_valid 		= false;
	var state_valid		= false;
	var cc_valid 		= false;
	var amount_valid 	= false;

	$("#donBtn").click( function(){
		console.log( "Donate button is clicked");
		fn_var 		= $("#fn").val();
		ln_var 		= $("#ln").val();
		email_var 	= $("#email").val();
		state_var 	= $("#state").val();
		zip_var 	= $("#zip").val();
		cc_var 		= $("#cc").val();
		amount_var  = $("#amount").val();

		if( fn_var == "" ){
			$("#fn").css("border", "solid 1px red");
		}else{
			fn_valid = validate( "normalString", fn_var );
		}

		if( ln_var == "" ){
			$("#ln").css("border", "solid 1px red");
		}else{
			ln_valid = validate( "normalString", ln_var );
		}

		if( state_var == "" ){
			$("#state").css("border", "solid 1px red");
		}else{
			state_valid = validate( "normalString", state_var );
		}

		if( zip_var == "" ){
			$("#zip").css("border", "solid 1px red");
		}else{
			zip_valid = validate( "zipCode", zip_var );
		}

		if( email_var == "" ){
			$("#email").css("border", "solid 1px red");
		}else{
			email_valid = validate( "emailAddress", email_var );
		}

		if( cc_var == "" ){
			$("#cc").css("border", "solid 1px red");
		}else{
			cc_valid = validate( "creditCard", cc_var );
		}

		if( amount_var == "" ){
			$("#amount").css("border", "solid 1px red");
		}else{
			amount_valid = validate( "number", amount_var );
		}

		if( fn_valid && ln_valid && state_valid && zip_valid && email_valid && cc_valid && amount_valid){
			//$("#donateForm").submit()
		}else{
			alert("Please make sure your form is complete");
		}

	});

	$("#volBtn").click( function(){
		console.log("----------------------")
		fn_var 		= $("#fn").val();
		ln_var 		= $("#ln").val();
		email_var 	= $("#email").val();
		zip_var 	= $("#zip").val();
		task_var 	= $("#volunteerTask").val();

		if( fn_var == "" ){
			$("#fn").css("border", "solid 1px red");
		}else{
			fn_valid = validate( "normalString", fn_var );
		}

		if( ln_var == "" ){
			$("#ln").css("border", "solid 1px red");
		}else{
			ln_valid = validate( "normalString", ln_var );
		}

		if( task_var == "" ){
			$("#volunteerTask").css("border", "solid 1px red");
		}else{
			task_valid = validate( "normalString", task_var );
		}

		if( zip_var == "" ){
			$("#zip").css("border", "solid 1px red");
		}else{
			zip_valid = validate( "zipCode", zip_var );
		}

		if( email_var == "" ){
			$("#email").css("border", "solid 1px red");
		}else{
			email_valid = validate( "emailAddress", email_var );
		}

		if( fn_valid && ln_valid && email_valid && zip_valid && task_valid ){
			alert("Form is ready to go to the server!");
			//$("#volForm").submit();
		}else{
			alert( "Please make sure your form is complete properly!")
		}

	} );


	function validate( inputType, userInput ){
		var valid = false;
		switch( inputType ){
			case 'normalString':
					console.log( "Validating a String" );
					userInput = cleanUp( userInput );
					valid = true;
				break;
			case 'emailAddress':
				console.log( "Validating Email Address" );
					userInput = cleanUp( userInput );
					if( userInput.indexOf("@") >= 0){
						//valid so far...
						if( userInput.indexOf(".") >= 0 ){
							valid = true;
						}
					}
				break;
			case 'zipCode':
					console.log( "Validating a zip code" );
					userInput = cleanUp( userInput );
					if( isNaN( userInput ) ){
						valid = false;
					}else{
						//so far so good.
						if( userInput.length == 5 ){
							valid = true;
						}else{
							valid = false;
						}
					}
				break;
			case "creditCard":
					console.log("Validating CC")
					userInput = cleanUp( userInput );
					if( isNaN( userInput ) ){
						valid = false;
					}else{
						if( userInput.length == VISA){
							valid = true;
						}else{
							valid = false;
						}
					}
				break;
			case "number":
					userInput = cleanUp( userInput );
					if( isNaN( userInput ) ){
						valid = false;
					}else{
						valid = true;
					}
				break;
		}
		return valid;
	}

	function cleanUp( userInput ){
		console.log("cleanUp() initiated...")
		var temp = userInput;
		temp = temp.replace(/-/g, "");
		temp = temp.replace("<", "&lt;");
		temp = temp.replace(">", "&gt;");
		temp = temp.replace("SELECT", "");
		temp = temp.replace("DELETE", "");
		temp = temp.replace("INSERT", "");
		temp = temp.replace("alert()", "");
		return temp;
	}

});