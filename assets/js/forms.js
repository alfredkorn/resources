function validateForm(whatForm, whatPanel){
	
	var validateOK = true;
	var checkWhat = whatForm;
	if ( whatPanel ){
		checkWhat = whatPanel;
	}
	
	$(checkWhat + ' * ').filter(':input').each(function( index, el ){
		var characterReg = "";
		var thisType;
		var thisValue;
		var thisID;
			
		thisType 	= el.type;
		thisValue 	= el.value;
		
		if ( thisType != 'radio' && thisType != 'checkbox' ) {
			thisID 		= el.id;
			thisReq		= $('#' + thisID).data('req');
		} else {
			thisID 		= el.name;
			thisReq		= $(el).parent().data('req');
		}
		
		if ( thisReq == 1 ) {
		
			switch ( thisType ){
				case 'radio':
					
					if ( ! $('input:radio[name=' + thisID + ']').is(':checked') ){
						$(el).parent().addClass('fielderror');
					} else {
						$(el).parent().removeClass('fielderror');
					}
					
					break;
					
				case 'checkbox':
					
					if ( ! $('input:checkbox[name=' + thisID + ']').is(':checked') ){
						$(el).parent().addClass('fielderror');
					} else {
						$(el).parent().removeClass('fielderror');
					}
					
					break;
				
				case 'text':
					
					if ( $(el).data('match') !== undefined ){
						characterReg = new RegExp($(el).data('match'));
					} else {
						characterReg = /^\s*[a-zA-Z0-9-.,'\s]+\s*$/;
					}
					
					if(!characterReg.test(thisValue)) {
						validateOK = false;
						$('#' + thisID).addClass('fielderror');
					} else {
						$('#' + thisID).removeClass('fielderror');
					}
					
					break;
					
				case 'password':
	
					characterReg = /^\s*[a-zA-Z0-9-.,#!^*@()~'\s]+\s*$/;
					if(!characterReg.test(thisValue)) {
						validateOK = false;
						$('#' + thisID).addClass('fielderror');
					} else {
						$('#' + thisID).removeClass('fielderror');
					}
					
					if ( $('#password').val() != $('#password_confirm').val() ) {
						$('#password').addClass('fielderror');
						$('#password_confirm').addClass('fielderror');
					}
					
					break;
					
				case 'email':
	
					characterReg = /^(?!(?:(?:\x22?\x5C[\x00-\x7E]\x22?)|(?:\x22?[^\x5C\x22]\x22?)){255,})(?!(?:(?:\x22?\x5C[\x00-\x7E]\x22?)|(?:\x22?[^\x5C\x22]\x22?)){65,}@)(?:(?:[\x21\x23-\x27\x2A\x2B\x2D\x2F-\x39\x3D\x3F\x5E-\x7E]+)|(?:\x22(?:[\x01-\x08\x0B\x0C\x0E-\x1F\x21\x23-\x5B\x5D-\x7F]|(?:\x5C[\x00-\x7F]))*\x22))(?:\.(?:(?:[\x21\x23-\x27\x2A\x2B\x2D\x2F-\x39\x3D\x3F\x5E-\x7E]+)|(?:\x22(?:[\x01-\x08\x0B\x0C\x0E-\x1F\x21\x23-\x5B\x5D-\x7F]|(?:\x5C[\x00-\x7F]))*\x22)))*@(?:(?:(?!.*[^.]{64,})(?:(?:(?:xn--)?[a-z0-9]+(?:-[a-z0-9]+)*\.){1,126}){1,}(?:(?:[a-z][a-z0-9]*)|(?:(?:xn--)[a-z0-9]+))(?:-[a-z0-9]+)*)|(?:\[(?:(?:IPv6:(?:(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){7})|(?:(?!(?:.*[a-f0-9][:\]]){7,})(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,5})?::(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,5})?)))|(?:(?:IPv6:(?:(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){5}:)|(?:(?!(?:.*[a-f0-9]:){5,})(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,3})?::(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,3}:)?)))?(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9]{2})|(?:[1-9]?[0-9]))(?:\.(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9]{2})|(?:[1-9]?[0-9]))){3}))\]))$/i;
					if(!characterReg.test(thisValue)) {
						validateOK = false;
						$('#' + thisID).addClass('fielderror');
					} else {
						$('#' + thisID).removeClass('fielderror');
					}
					
					break;
					
				case 'tel':
	
					characterReg = /^\(?([2-9]\d{2})\)?[-.●]?([2-9]\d{2})[-.●]?([0-9]{4})$/;
					if(!characterReg.test(thisValue)) {
						validateOK = false;
						$('#' + thisID).addClass('fielderror');
					} else {
						$('#' + thisID).removeClass('fielderror');
					}
					
					break;
					
				case 'select-one':
		
					if (thisValue == ""){
						validateOK = false;
						$('#' + thisID + '_box').addClass('fielderror');
					} else {
						$('#' + thisID + '_box').removeClass('fielderror');
					}
					
					break;
			}
		}
	});
	
	return validateOK;
}


$( document ).ready(function() {
	
	/* * * * START PASSWORD Checker * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
	
	$('input:password').first().keyup(function() {
	    var pswd = $(this).val();
	    
		//validate the length
		if ( pswd.length < 8 ) {
		    $('#length').removeClass('pw_help_valid').addClass('pw_help_invalid');
		} else {
		    $('#length').removeClass('pw_help_invalid').addClass('pw_help_valid');
		}
		
		//validate letter
		if ( pswd.match(/[A-z]/) ) {
		    $('#letter').removeClass('pw_help_invalid').addClass('pw_help_valid');
		} else {
		    $('#letter').removeClass('pw_help_valid').addClass('pw_help_invalid');
		}
		
		//validate capital letter
		if ( pswd.match(/[A-Z]/) ) {
		    $('#capital').removeClass('pw_help_invalid').addClass('pw_help_valid');
		} else {
		    $('#capital').removeClass('pw_help_valid').addClass('pw_help_invalid');
		}

		//validate specoasl characters
		if ( pswd.match(/[!@#$%^&*~]/) ) {
		    $('#character').removeClass('pw_help_invalid').addClass('pw_help_valid');
		} else {
		    $('#character').removeClass('pw_help_valid').addClass('pw_help_invalid');
		}
		
		//validate number
		if ( pswd.match(/\d/) ) {
		    $('#number').removeClass('pw_help_invalid').addClass('pw_help_valid');
		} else {
		    $('#number').removeClass('pw_help_valid').addClass('pw_help_invalid');
		}
	    
	}).focus(function() {
		
	    $(this).closest('.row').find('.pw_help').show();
	    
	}).blur(function() {
		
	    $(this).closest('.row').find('.pw_help').hide();
	});
	
	/* * * * END PASSWORD Checker * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
	
});