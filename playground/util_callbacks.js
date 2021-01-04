const request = require("request")




const geocode = (address , callback)  => {
     
    const URL = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) +".json?access_token=pk.eyJ1IjoiaW5lZXNoIiwiYSI6ImNrajRteGRteTN4N3gyc240b2xhM3V5aWcifQ.-bqIBYgt1BYvaop3IfS0cQ&limit=1"

    request( {url : URL , json : true} , (error,response) => {
        if(error){
            callback('unable to connect',undefined)
        }else if(response.body.features.lenght === 0){
            callback('unable to do try another search',undefined)
        }else{
            callback(undefined , {
                latitude : response.body.features[0].center[1],
                longitude : response.body.features[0].center[0],
                name : response.body.features[0].place_name,

            })
       }
     })


 }

// module.exports = geocode

const forecast = (longi , lat , callback) => {

    const URL = "http://api.weatherstack.com/current?access_key=6f77b4ef217e10fad614306232e531ab&query="+ lat + "," + longi + "&units=m"
    
    request({url : URL , json : true} , (error , response) => {

    if(error){

        callback('unable to connect' , undefined)

    }else if(response.body.error === 0){

        callback('not found' , undefined)
    }
    else{
        callback(undefined , response.body.current.temperature)
    }
})
}



module.exports = {forecast , geocode}