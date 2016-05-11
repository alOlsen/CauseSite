$(document).ready( function(){

	//console.log("validator initiated...");

	var fn_var;
	var ln_var;
	var email_var;
	var zip_var;
	var task_var;

	var fn_valid 		= false;
	var ln_valid 		= false;
	var email_valid 	= false;
	var zip_valid 		= false;
	var task_var 		= false;


	$("#volBtn").click( function(){
		console.log("----------------------")
		//console.log("Volunteer button has been clicked");
		fn_var 		= $("#fn").val();
		ln_var 		= $("#ln").val();
		email_var 	= $("#email").val();
		zip_var 	= $("#zip").val();
		task_var 	= $("#volunteerTask").val();



		// console.log( fn_var );
		// console.log( ln_var );
		// console.log( email_var );
		// console.log( zip_var );
		// console.log( task_var );

		if( fn_var == "" ){
			//console.log("First Name is required!");
			$("#fn").css("border", "solid 1px red");
		}else{
			fn_valid = validate( "normalString", fn_var );
			// if( validate( "normalString", fn_var ) ){
			// 	console.log( "FN passed the test!");
			// 	fn_valid = true
			// }else{
			// 	console.log( "FN failed the test!");
			// }
		}

		if( ln_var == "" ){
			//console.log("Last Name is required!");
			$("#ln").css("border", "solid 1px red");
		}else{
			//console.log("Last Name is valid!");
			ln_valid = validate( "normalString", ln_var );
			// if( validate( "normalString", ln_var ) ){
			// 	console.log( "LN passed the test!");
			// }else{
			// 	console.log( "LN failed the test!");
			// }
		}

		if( task_var == "" ){
			$("#volunteerTask").css("border", "solid 1px red");
		}else{
			task_valid = validate( "normalString", task_var );
		}

		if( zip_var == "" ){
			//console.log("Zip code is required!");
			$("#zip").css("border", "solid 1px red");
		}else{
			//console.log("Zip code is valid!");
			zip_valid = validate( "zipCode", zip_var );
			// if( validate( "zipCode", zip_var ) ){
			// 	console.log( "Zip code passed the test!");
			// }else{
			// 	console.log( "Zip code failed the test!");
			// }
		}

		if( email_var == "" ){
			//console.log("Email is required!");
			$("#email").css("border", "solid 1px red");
		}else{
			//console.log("Email is valid!");
			email_valid = validate( "emailAddress", email_var );
			// if( validate( "emailAddress", email_var ) ){
			// 	console.log( "Email passed the test!");
			// }else{
			// 	console.log( "Email failed the test!");
			// }
		}

		if( fn_valid && ln_valid && email_valid && zip_valid && task_valid ){
			alert("Form is ready to go to the server!");
			$("#volForm").submit();
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
		}

		return valid;
	}

	function cleanUp( userInput ){
		console.log("cleanUp() initiated...")
		var temp = userInput;
		temp = temp.replace("<", "&lt;");
		temp = temp.replace(">", "&gt;");
		temp = temp.replace("SELECT", "");
		temp = temp.replace("DELETE", "");
		temp = temp.replace("INSERT", "");
		temp = temp.replace("alert()", "");
		return temp;
	}

});