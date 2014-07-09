// var renderData = function(layoutStyle) {
// 	// console.log("Rendering the data with layout style: " + layoutStyle);
// 	$('.data').empty();
// 	console.log(quoteData);
// 	for (var i = 0; i <= quoteData.length - 1; i++) {

// 		var newDataItem = $('<div class="quote-data">');
// 		newDataItem.append(
// 			'<div>' + quoteData[i].text + '</div>'
// 		);
// 		newDataItem.append(
// 			'<div>-' + quoteData[i].author + '</div>'
// 		);
// 		newDataItem.append(
// 			'<div>Rating: ' + quoteData[i].rating + '</div>'
// 		);
// 		newDataItem.append(
// 			'<img id="button-remove" src="http://placehold.it/20&text=Remove">'
// 		);
// 		// Create new DOM element
// 		newDataItem.appendTo('.data');

// 	};
// }









// when var's are outside of function, only 1 quote is added. WHY?? when inside it is unlimited.
var undoButton = $('<button class="undoDelete" ><img src="http://a.deviantart.net/avatars/s/i/sillyicekingplz.gif?1"></button>')
var	randomButton = $('<button class="randomQuote"><img src="http://fc02.deviantart.net/fs70/f/2011/220/a/1/poo_brain_horse_icon_by_supajackle-d45x9b2.gif"></button>')
var arrQuotes = []



$('.inputbox').append(randomButton)
// var undid = $('')
// var deletedQuote = $(undid)

	$(document).on('click', '.sub-button', function(){
		var quoteText = $('#inputfield').val();
		var	authorText = $('.author').val();
		
		var quoteBox = $('<div class="quotebody"></div>');
		var	textBox	= $('<div class="textbody"></div>')
		var itemBox = $('<div class="itembody"></div>')
		
		var theQuote = $('<p class="a-quote">Quote: ' + quoteText + '</p>')
		var theAuthor = $('<p class="an-author">Character: '+ authorText +'</p>')
		var deleteButton = $('<button class="deletequote">Delete</button>')
		var ratingBar = $('<div class="rating"><legend>Mathmatical-ness!!!:</legend><input type="radio" id="star5" name="rating" value="5" /><label for="star5" title="Rocks!">5 stars</label><input type="radio" id="star4" name="rating" value="4" /><label for="star4" title="Pretty good">4 stars</label><input type="radio" id="star3" name="rating" value="3" /><label for="star3" title="Meh">3 stars</label><input type="radio" id="star2" name="rating" value="2" /><label for="star2" title="Kinda bad">2 stars</label><input type="radio" id="star1" name="rating" value="1" /><label for="star1" title="Sucks big time">1 star</label></div>')

		
		

		// var ratingBar = $('<ul class=rating><legend>Mathmatical-ness!!!:</legend><li type="radio" id="star5" name="rating" value="5"></li><li type="radio" id="star4" name="rating" value="4"></li><li type="radio" id="star3" name="rating" value="3"></li><li type="radio" id="star2" name="rating" value="2"></li><li type="radio" id="star1" name="rating" value="1"></li></ul>')

// Quote appears when i click the Submit Button

		$(quoteBox).append(textBox, itemBox)
		$(textBox).append(theQuote, theAuthor)
		$(itemBox).append(ratingBar, deleteButton)


		
		$('.inputbox').after(quoteBox)
		$(arrQuotes).push(quoteBox)
			console.log(quoteText,"-", authorText)
		

	});

// Quote is deleted when i click the Delete button
		$(document).on('click', '.deletequote', function(){
			// var accesses the closest qoutebody
			var storeQuote = $(this).closest('.quotebody')

			// this hides the var storeQuote
			storeQuote.hide()
			console.log('delete button')
			// this adds an undo button when delete is clicked
			$('.inputbox').append(undoButton)
	   

// Quote reappears when undo button is clicked
			$(document).on('click', '.undoDelete', function(){
				// this actually reshows ALL deleted items, not just the last one
				storeQuote.show()
				$('.inputbox').after(storeQuote)

				console.log('undo')
			});

	    });



// random qoute button
			$(document).on('click', '.randomQuote', function(){
				
				alert(arrQuotes[2])
				

				console.log('undo')
			});
// for the Stars make a ul li list see http://rating-widget.com/get/rating/blogger/





$(document).on('ready', function() {
  





});


