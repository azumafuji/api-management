function listProviders()
    {
    $.getJSON('data/tags.json', function(data) {
    	toggle = 0;
    	 $.each(data['tags'], function(key, val) {
			
			var template = $('#providerTagListingTemplate').html();
			var html = Mustache.to_html(template, val);
			
			$('#providerListing').append(html);   
			
			tag = val['tag'];
			
		    $.getJSON('data/providers.json', function(data2) {
		    	
		    	 $.each(data2['serviceprovider'], function(key2, val2) {
		    	 	
		    	 	tags = val2['tags'];
		    	 	inside = tags.indexOf(tag);
		    	 	alert(tag+' in ' + tags + ' - ' + inside);
					if(inside==0){
						
						name = val2['name'];
						alert(name);
					
						var template = $('#providerListingTemplate').html();
						var html = Mustache.to_html(template, val2);
					
						$('#providerListing').append(html);  
						 
						}
					 						
			        });
		        });			
			 						
	        });
        });

    }    
     