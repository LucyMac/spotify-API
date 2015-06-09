$(function(){     
	var getArtist = 'https://api.spotify.com/v1/search?type=artist';
	$('#artist-search').submit(function(event){
		event.preventDefault();
		var searchTerm = $('#my-artist').val();
		$.ajax(getArtist, {
			data: {
	    		q: searchTerm
	    	},
	    	success: function(data){
	        	$.each(data.artists.items, function(index, value){
					console.log(value);
				});
			}
		});
	});
});


