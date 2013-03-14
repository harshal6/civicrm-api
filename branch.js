(function($) {
    Drupal.behaviors.branch = {
  attach : function(context,settings) {
	              $('#edit-main-company').change(function() {
			  var option_main_contact_id = $('#edit-main-company option:selected').val();
			  $.post(Drupal.settings.basePath + 'ajax-branch-get-values'  ,{option_main_contact_id : option_main_contact_id},function(){ alert(option_main_contact_id)},"json");
			  	    });
	 
	     $().crmAPI('Contact','get', {'callBack': function(data){ alert(data.count);}  });
	
	    var state_val = '';
            $('#edit-submitted-state').change(function() {
		var state_val = $('#edit-submitted-state option:selected').val();
	        $.post(Drupal.settings.basePath + 'ajax-branch-get-values'  ,{state_val : state_val},function(){ alert(state_val)},"json");
		            });
	    	}
	   		     }
})(jQuery);
