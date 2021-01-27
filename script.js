$(function(){
    $("#searchBar").on("submit", function(event){
        event.preventDefault()
        var cityName = $("#cityName").val()
        var query = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=imperial&appid=f32f49316980620553289770dc77a2fe`
        $.ajax({
            url:query,
            method:"GET",
        }).then(function(response){
            console.log(response)
            var temp = response.list[0].main.temp
            var humidity = response.list[0].main.humidity
            var windSpeed = response.list[0].wind.speed
            $("#temp").text("Temperature: " + temp + "*F")
            $("#humid").text(humidity)
            $("#windSpeed").text(windSpeed)
var fiveDay = []
fiveDay.push(response.list[3])
fiveDay.push(response.list[11])
fiveDay.push(response.list[19])
fiveDay.push(response.list[27])
fiveDay.push(response.list[35])
for (var i = 0; i < fiveDay.length; i++) {
    var date = fiveDay[i].dt_txt
    var icon = ""+fiveDay[i].weather[0].icon
    var temp = fiveDay[i].main.temp
    var humidity = fiveDay[i].main.humidity
    var forecast = "Date: " + date + "Icon: " + icon + "temp: " + temp + "Humitity: %" + humidity + "\n"

    $("#fiveDay").append(forecast)
}

        })
})
})
