$( document ).ready(function() {
	
	$('.form_submit').click(function() {
		
		var whatForm 	= '#' + $(this).parents('form:first').attr('id');
		var whatMsg 	= $(this).closest('form').find('.form_msg');
		
		$(whatMsg).slideUp();
		$(whatMsg).removeClass('makered');
		$(whatMsg).removeClass('makegreen');
		
		var validateOK = validateForm( whatForm );
	    
		if(validateOK === true) {
			
			$.ajax({
				cache: false,
			    type : "POST",
		        url: "ajax/AJAX_doit.php",
		        data: $(whatForm).serialize(),
		        beforeSend: function(){ $(this).html('Processing...');},
		        success: function(result){
		        	if( result.match('SUCCESS') ){
			        	
			        	$(whatForm)[0].reset();
			        	$(whatMsg).html('Your request has been submitted.');
						$(whatMsg).addClass('makegreen');
						$(whatMsg).slideDown();
		        		$(this).html('Thank you');
		        		
		        	} else {
			        	
						$(whatMsg).html('Your request could not be completed (E01)' + result);
						$(whatMsg).addClass('makered');
						$(whatMsg).slideDown();
		        		$(this).html('Oops!');
		        	}
		        },
                error: function(textStatus, errorThrown) {
	                
					$(whatMsg).html('Your request could not be completed (E02)');
					$(whatMsg).addClass('makered');
					$(whatMsg).slideDown();
		        	$(this).html('Oops!');
                }
	        });
	        
		} else {
			
			$(whatMsg).html('Please check the highlighted fields!');
			$(whatMsg).slideDown();
			$(whatMsg).addClass('makered');
		    $(this).html('Oops!');
		}
		
		return false;
	});
	
});