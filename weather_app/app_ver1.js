// console.log("starting")

// const { require } = require("yargs");

// setTimeout( () => {
//     console.log("2 second timer")
// } , 2000)


// setTimeout( () => {
//     console.log("0 second")
// },0)



// console.log("stopping")

const chalk = require("chalk")
const request = require("request")


const URL = "http://api.weatherstack.com/current?access_key=6f77b4ef217e10fad614306232e531ab&query=37.8267,-122.4233&units=m"

request({url : URL , json : true} , (error , response) => {
    
    const data = JSON.parse(response.body)
    console.log(data.current)
   const data = response.body.current.temperature
    console.log(response.body.current.weather_descriptions[0] + " \nthe temprature is " + chalk.green(data) + " but it feels like " + chalk.green(response.body.current.feelslike))
    // console.log(error)

    
})


// const URL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiaW5lZXNoIiwiYSI6ImNrajRteGRteTN4N3gyc240b2xhM3V5aWcifQ.-bqIBYgt1BYvaop3IfS0cQ&limit=1"
// request({url : URL , json : true} , (error , response) => {
//     console.log("the longitude is  " + chalk.green(response.body.features[0].center[0]) + " \nthe latitude is " + chalk.green(response.body.features[0].center[1]))
// })
