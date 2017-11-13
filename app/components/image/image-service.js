function ImageService() {
	var url = '//bcw-getter.herokuapp.com/?url=';
	var url2 = 'http://www.splashbase.co/api/v1/images/random'
	var apiUrl = url + encodeURIComponent(url2);

	this.getImage = function (callWhenDone) {
		// ^^^^^^^ How do you call this function?
		return $.get(apiUrl, function (res) {
				res = JSON.parse(res)
				//localStorage.setItem('image', JSON.stringify(res))
				if(res.large_url){
					console.log('Large URL: ', res)
					callWhenDone(res)
				} else {
					console.log('other')
					
				}
				//console.log('Image Data:', res)
		})
	}
}
