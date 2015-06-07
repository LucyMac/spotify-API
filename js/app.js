$(function(){     
	var spotifyAPI = 'https://api.spotify.com/v1/artists/{id}/related-artists';
	$('#artist-search').submit(function(event){
		event.preventDefault();
		var searchTerm = $('#my-artist').val();
		$.getJSON(spotifyAPI, {
	    	part: 'snippet',
	    	key: 'AIzaSyAqGGJTTcrXv0OppL-uc0WzN_GZOMajB9Q',
	    	q: searchTerm
		}, function(data){
        	$.each(data.items, function(index, value){
				console.log(data);
			});
		});
	});
});


// Related artist API format: 
// GET https://api.spotify.com/v1/artists/{id}/related-artists
// Example:
// https://api.spotify.com/v1/artists/43ZHCT0cAZBISjO8DG9PnE/related-artists


