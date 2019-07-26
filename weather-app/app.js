const request = require('request')

// const url = 'https://api.darksky.net/forecast/c4d994588c0e3ab73c84415bf0606529/37.8267,-122.4233?units=si&lang=es'

// request({ url: url }, (error, response) =>  {
//     const data = JSON.parse(response.body)
//     console.log(data);
// })

// request({ url: url, json: true }, (error, response) => {
//     console.log('It is currently ' + response.body.currently.temperature + ' and there is ' + response.body.currently.precipProbability + ' chance of rain');
// })

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoianVzdGluYS1kZSIsImEiOiJjanhrNTBjMGsyNnJkM25zOHdib3Q3amJ2In0.34x8J79mPKkOi91CtpofAA'

request({url: geocodeURL, json: true },  (error, response) => {
    if (error) {
        console.log('Unable to connect to location services!');
    } else if (response.body.features.length === 0) {
        console.log('unable to find location. try another');
    } else {
        const longitude = response.body.features[0].center[1];
        const latitude = response.body.features[0].center[0];
        console.log('longitude:', longitude);
        console.log('latitude:', latitude);
    }
})
