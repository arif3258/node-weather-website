const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=1e0b936c342c2dd8cad089ae18ecce09&query=' + latitude + ',' + longitude
    request({
        url,
        json: true
    }, (error, {
        body
    }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);
        } else if (body.error) {
            callback('Unable to find location');
        } else {
            callback(
                undefined, {
                    forecastData: body.current.weather_descriptions + ' It is currently ' + body.current.temperature + ' degrees out. And it feels like ' + body.current.feelslike + ' degrees.',
                    forecastIcon: body.current.weather_icons
                });
        }
    })
}

module.exports = forecast