function QuoteController() {

	var qs = new QuoteService()

	qs.getQuote(function (quote) {
		console.log('What is the quote', quote)
		draw(quote)
	})
	function draw(quote) {
		var template = ' '
		template += `
			<div class='cardQ'>
			  <div>
				  <h4>Quote:<h5>${quote.quote}</h5></h4>
			  </div>
			</div>
		  `

		document.getElementById('quote').innerHTML = template

	}
}
