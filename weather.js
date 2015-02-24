/**
 * Created by subratrout on 2/24/15.
 */
$(document).ready(function(){
    $('form').submit(function(){
        var url = "http://api.openweathermap.org/data/2.5/weather?q=" + $('input').val()+",usa&APPID=23b6315d1d620b5371ceedcf3f3401d3";
        $.get(url, function(res){
            var temp =Math.round(((res.main.temp-273.15)*9/5)+32);
            $('#result').html('<h1>'+ res.name + '</h1><p>'+ temp + '&deg;</p>')
        }, 'json')
        return false;
    })
})