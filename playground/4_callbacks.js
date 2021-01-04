// setTimeout(() => {
//     console.log("2 seconds are ") // callback function
// }, 2000);

const app = require("./util_callbacks")

 

 app.geocode("delhi" , (error , data) => {
     console.log("Error" , error)
     console.log("Data" , data)

     app.forecast(data.longitude , data.latitude ,  (error, data) => {
        console.log('Error', error)
        console.log('temprature', data)
      })

 })

