$(document).on('ready', function() {
  


	$(document).on('click', '.sub-button', function(){
		var quoteText = $('#inputfield').val();
		var	authorText = $('.author').val();
		var quoteBox = $('<div class="quotebody"><p class="a-quote">Quote: ' + quoteText + '</p><p class="an-author">Character: '+ authorText +'</p><button class="deletequote">Delete</button><fieldset class="rating"><legend>Please rate:</legend><input type="radio" id="star5" name="rating" value="5" /><label for="star5" title="Rocks!">5 stars</label><input type="radio" id="star4" name="rating" value="4" /><label for="star4" title="Pretty good">4 stars</label><input type="radio" id="star3" name="rating" value="3" /><label for="star3" title="Meh">3 stars</label><input type="radio" id="star2" name="rating" value="2" /><label for="star2" title="Kinda bad">2 stars</label><input type="radio" id="star1" name="rating" value="1" /><label for="star1" title="Sucks big time">1 star</label></fieldset></div>');
		// input a hover function then display the delete button



		$('.inputbox').after(quoteBox)
		console.log(quoteText,"-", authorText)
	
				// $('.deletequote').css({
				// // position: relative,
				// // backgroundImage: url("http://image.shutterstock.com/display_pic_with_logo/842287/115487998/stock-photo-metallic-blue-background-foil-paper-illustration-for-christmas-background-wrapping-paper-design-or-115487998.jpg")
				// background: #00FF00,
				// // fontSize: 100,
				// }) 
		



	});


	$(document).on('click', '.deletequote', function(){
		$(this).closest('.quotebody').remove()
		console.log('delete button')
	});


// for the Stars make a ul li list see http://rating-widget.com/get/rating/blogger/





// $('.deletequote').css({
// 	// position: relative,
// 	// backgroundImage: url("http://image.shutterstock.com/display_pic_with_logo/842287/115487998/stock-photo-metallic-blue-background-foil-paper-illustration-for-christmas-background-wrapping-paper-design-or-115487998.jpg")
// 	backgroundColor: blue,
// 	// fontSize: 100,
// 	}) 


});


