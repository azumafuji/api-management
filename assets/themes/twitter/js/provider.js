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
		    	 	
		    	 	tags = val['tags'];
		    	 	alert(tag+' in ' + tags);
					if(tags.indexOf(tag)==0){
						
						name = val['name'];
						alert(name);
					
						var template = $('#providerListingTemplate').html();
						var html = Mustache.to_html(template, val);
					
						$('#providerListing').append(html);  
						 
						}
					 						
			        });
		        });			
			 						
	        });
        });

    }    
     