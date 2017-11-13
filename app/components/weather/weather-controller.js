function WeatherController(){
	var wc = this;
	var weatherService = new WeatherService();
	
	weatherService.getWeather(function(weather){
		console.log(weather);
		//What can you do with this weather object?
		
		function convertTemp(tempK){
			var temp = Math.round(((weather.main.temp - 273.15) * 1.8) + 32)
			draw(temp)
		}
		convertTemp(weather.main.temp)
	})

	function draw(temp) {
		var template =' ' 
		  template += `
			<div class='card'>
			  <div>
					<h4>Temp:${temp}°F</h4>
			
					
			  </div>
			</div>
		  `
		
		document.getElementById('weather').innerHTML = template
		
	  }

}
