$(document).on('ready', function() {
  


	$(document).on('click', '.sub-button', function(){
		var quoteText = $('#inputfield').val();
		var	authorText = $('.author').val();
		var quoteBox = $('<div class="quotebody"><p class="a-quote">Quote: ' + quoteText + '</p><p class="an-author">Character: '+ authorText +'</p><button class="deletequote">Delete</button><div class="rating"></div></div>');

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



// $('.deletequote').css({
// 	// position: relative,
// 	// backgroundImage: url("http://image.shutterstock.com/display_pic_with_logo/842287/115487998/stock-photo-metallic-blue-background-foil-paper-illustration-for-christmas-background-wrapping-paper-design-or-115487998.jpg")
// 	backgroundColor: blue,
// 	// fontSize: 100,
// 	}) 


});


