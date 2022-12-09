
//Filters
$(function() { 

  // Intro overlay
  $('.get-started').on('click',function() {
    $('.introduction').fadeOut();
  });

  // init Isotope by selecting the grid class and selecting the grid-item to be filtered
  let $grid = $('.painting-grid').isotope({
    itemSelector: '.painting-item',
  });

  var filters = {};

  $('.filters-sidebar').on( 'click', '.button', function( event ) {
    var $button = $( event.currentTarget );
    // get group key
    var $buttonGroup = $button.parents('.button-group');
    var filterGroup = $buttonGroup.attr('data-filter-group');
    // set filter for group
    filters[ filterGroup ] = $button.attr('data-filter');
    // combine filters
    var filterValue = concatValues( filters );
    // set filter for Isotope
    $grid.isotope({ filter: filterValue });
  });
  
  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function( event ) {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      var $button = $( event.currentTarget );
      $button.addClass('is-checked');
    });
  });
  function concatValues( obj ) {
    var value = '';
    for ( var prop in obj ) {
      value += obj[ prop ];
    }
    return value;
  }
})
$(".isotope-reset").click(function(){
  $(".painting-grid").isotope({
      filter: '*'
  });
});

//Open About
$(".about-button").on("click", function() {
  $(".about-overlay, .about-content").addClass("active");
});

//Close About
$(".close, .about-overlay").on("click", function() {
  $(".about-overlay, .about-content").removeClass("active");
});

// Open Sidebar
$('.openbtn').on('click',function() {
  $('#mySidebar').addClass('opened');
})

// Close Sidebar
$('.closebtn').on('click',function() {
  $('#mySidebar').removeClass('opened');
})

// API Things

		// Creating a constant variable to store the API endpoint URL.

		const url = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/437125';
		fetch(url)
			.then(function(response) {
				// First get confirmation there's a connection
				console.log(response);
				return response.json();
			})
			.then(function(data) {
				// If there's a connection, then we can use the data from the API
				console.log(data);

				// Try writing a for loop to get all 22 films to display on the page.
        $(".painting-image img").attr('src', data[0].primaryImage)
				$(".painting-title").html(data[0].title);
        $(".painting-date").html(data[0].objectDate);
        $(".painting-artist").html(data[0].artistDisplayName)
        $(".painting-link").html(data[0].objectURL)
				$(".painting-description p").html(data[0].description);
			})
			.catch(function(error) {
				// If there's an error, show in the browser console.
				console.log(error);
			});

/* JSON */
// Impressionism JSON set

	// First pass the json file name into Fetch.
	// fetch('paintings1.json') 
  // // See if there's a response. If all good move to the next step.
  //   .then(function(response) {
  //     return response.json();
  //   })
  //   // Get the data from the JSON file.
  //   .then(function(data) {
  //   for (let i = 0; i < data.paintings1.length; i++) {
  //     $(".paintings1").append(
  //       '<div class="painting-item '+ data.paintings1[i].colour +' '+ data.paintings1[i].movement +'">'+
  //         '<a href="'+ data.paintings1[i].link +'" target=_blank>'+
  //         '<img src="'+ data.paintings1[i].photo +'">'+
  //         '<div class="painting-content">'+
  //           '<h2>'+ data.paintings1[i].name +'</h2>'+
  //           '<h3>'+ data.paintings1[i].artist +'</h3>'+
  //           '<h4>'+ data.paintings1[i].date +'</h4>'+
  //           '<p>'+ data.paintings1[i].description +'</p>'+
  //         '</div>'+
  //         '</a>'+
  //       '</div>'
  //     )
  //   }
  //   })
  //   // At any point if there's an error in the chain of events, then it immediately goes to an error state.
  //   .catch(function(error) {
  //     $('h1').html('Error!')
  //     console.log(error);
  //   })

// Post-Impressionism JSON set
   
	// // First pass the json file name into Fetch.
	// fetch('paintings2.json') 
  // // See if there's a response. If all good move to the next step.
  //   .then(function(response) {
  //     return response.json();
  //   })
  //   // Get the data from the JSON file.
  //   .then(function(data) {
  //   for (let i = 0; i < data.paintings2.length; i++) {
  //     $(".paintings2").append(
  //       '<div class="painting-item '+ data.paintings2[i].colour +' '+ data.paintings2[i].movement +'">'+
  //         '<a href="'+ data.paintings2[i].link +'" target=_blank>'+
  //         '<img src="'+ data.paintings2[i].photo +'">'+
  //         '<div class="painting-content">'+
  //           '<h2>'+ data.paintings2[i].name +'</h2>'+
  //           '<h3>'+ data.paintings2[i].artist +'</h3>'+
  //           '<h4>'+ data.paintings2[i].date +'</h4>'+
  //           '<p>'+ data.paintings2[i].description +'</p>'+
  //         '</div>'+
  //         '</a>'+
  //       '</div>'
  //     )
  //   }
  //   })
  //   // At any point if there's an error in the chain of events, then it immediately goes to an error state.
  //   .catch(function(error) {
  //     $('h1').html('Error!')
  //     console.log(error);
  //   })
    
    
