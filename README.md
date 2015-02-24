Build a weather forecast application where we can input any city and find out the temperature in Fahrenheit using
Open Weather API.Open Weather API gives us a set of very useful URLs that are useful. For example navigate to the link
[http://api.openweathermap.org/data/2.5/weather?q=sanfrancisco] and you will find JSON data about San Francisco. nd you the same JSON data.

1. Create a form element. Listen to a form being submitted with jQuery's submit() function.
2. However, the submit() function automatically
reloads the page so we are going to be returning false.
3. Do an AJAX call to grab the temperature data and display. The temperature is in Kelvin.
Display it it Fahrenheit.