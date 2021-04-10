document.getElementById("weatherSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("weatherInput").value;
  if (value === "")
    return;
  console.log(value);

  const url = "http://api.cfl.ca/v1/games/" + value + "?key=T8Mv9BRDdcB7bMQUsQvHqtCGPewH5y8p";
  console.log(url)

  const final = "http://api.cfl.ca/v1/standings/" + value + "?key=T8Mv9BRDdcB7bMQUsQvHqtCGPewH5y8p";
  console.log(final)

  const teams = "http://api.cfl.ca/v1/teams" + "?key=T8Mv9BRDdcB7bMQUsQvHqtCGPewH5y8p";
  console.log(teams)


  fetch(url)

    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json)


      let results = "";
      results += '<h2>Attendence at each game during the season (first 20 games)' + "</h2>";
      for (let i=0; i < 20; i++) {
        results += 'Game ' + (i + 1) + " - " + json.data[i].attendance + ' people attended' +"</p>";
        results += 'Weather ' + json.data[i].weather.sky + " - " + 'Temperature ' + json.data[i].weather.temperature + "&deg;" + "</p>";
        results += "</li>";
      }

      //results += '<h2> Temperature is ' + json.main.temp + " &deg;F</h2>"
      //results += '<li> Feels like ' + json.main.feels_like + " &deg;F</li>"
      //results += '<li> Todays Low ' + json.main.temp_min + " &deg;F</li>"
      //results += '<li> Todays High ' + json.main.temp_max + " &deg;F</li>"
      //results += '<li> Humidity ' + json.main.humidity + " &deg;F</li>"
      //results += '<li> Pressure ' + json.main.pressure + "</li>"



      //for (let i=0; i < json.weather.length; i++) {
      //  results += json.weather[i].description
      //  if (i !== json.weather.length - 1)
      //  results += ", "
      //}
      //results += "</p>";
      document.getElementById("weatherResults").innerHTML = results;

    });




fetch(final)

    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json)
      let forecast = "";


      forecast += "East season standings: ";


      for (let i=0; i < json.data.divisions.east.standings.length; i++) {

        //forecast += "output";

        forecast += "<h2>" + json.data.divisions.east.standings[i].full_name + " : " + json.data.divisions.east.standings[i].place + "</h2>";

        //forecast += "<p>Temperature: " + json.list[i].main.temp + "</p>";
        //forecast += "<p>Max Temperature: " + json.list[i].main.temp_max + "</p>";
        //forecast += "<p>Min Temperature: " + json.list[i].main.temp_min + "</p>";
        //forecast += '<img src="http://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/>'
      }

      forecast += "West season standings: ";

      for (let i=0; i < json.data.divisions.west.standings.length; i++) {

          forecast += "<h2>" + json.data.divisions.west.standings[i].full_name + " : " + json.data.divisions.west.standings[i].place + "</h2>";

      }


      //forecast += "<h2> CITY FUN FACTS</h2>"
      //forecast += '<li> Population ' + json.city.population + "</li>"
      //forecast += '<li> Country ' + json.city.country + "</li>"
      //forecast += '<li> Coordnate Longitude ' + json.city.coord.lon + "</li>"
      //forecast += '<li> Coordnate Lattitude ' + json.city.coord.lat + "</li>"



      document.getElementById("forecastResults").innerHTML = forecast;
    });




      fetch(teams)

          .then(function(response) {
            return response.json();
          }).then(function(json) {
            console.log(json)
            let teams = "";


    //teams += "Wins and Losses";

    for (let i=0; i < json.data.length; i++) {

      teams += "Nickname " +  json.data[i].nickname + "</p>";
      teams += "Location  " + json.data[i].location + "</p>";
      teams += "Venue Name " + json.data[i].venue_name + "</p>";


    }





    document.getElementById("scoreResults").innerHTML = teams;
    });




    //});

});
