const express = require('express')
const path = require("path")
const hbs = require('hbs')
const weather = require("./sources/util_callbacks.js")

//const wether = require("C:/Users/israi/Desktop/node js/playground/4_callbacks.js")

const app = express()

const port = process.env.PORT || 3000 // heroku will use environment variables and give the value

const value = path.join(__dirname , '../template/views') // define for temolate folder 
const par = path.join(__dirname , '../template/partials')

//__dirname
//__filename

app.set('view engine', 'hbs')
app.set('views' , value) // change the serch for views to template
hbs.registerPartials(par)

console.log(path.join(__dirname, '../public'))
//setup static directory
app.use(express.static(path.join(__dirname, '../public')))// used to access html file


app.get('' , (req, res) => {
    res.render('index', {
        title : 'weather',
        name : 'ineesh'
    })
})

// app.get('' , (req, res) => {
//     res.send('<h1 color="red">weather</h1>')
// })

// app.get('/help' , (req, res) => {
//     res.send([{
//         name : "ineesh",
//         rollno : 12 
//     },
//     {
//         name : "lol"
//     }])
// })




// app.get('/about' , (req, res) => {
//     res.send('<title>about my page</title>')
// })

app.get('/weather' , (req,res) => {

    if(!req.query.address)  {
        return res.send({
            error : 'please add a address'
        })
    }

    weather.geocode(req.query.address, (error,{latitude , longitude , location} = {} )=> {
            weather.forecast(latitude , longitude , (error,data) =>{
                if(error){
                    return res.send({
                        error : 'error in getting values'
                    })
                }
                res.send({
                    temperature : data,
                    address : req.query.address,
                    longi : longitude,
                    lati : latitude

                   
                })
            })
    })
    // res.send({
    //     address : req.query.address
    // })


    // res.send({
    //     address : 'delhi',
    //     place : 'India'
    // })
})

app.get('/about' , (req, res) => {
    res.render('about' ,{
        title : 'lol',
        name : 'ineesh'
    })
})

app.get('/help' , (req, res)=> {
    res.render('help', {
        title : 'ineesh raina',
        message : 'popular stuff',
        name : 'ineesh raina'
    })
})

app.get('/products' ,(req,res) => {

    if(!req.query.search){
       return res.send({
            error:'please send something in search'
        })

    }

    console.log(req.query.search)
    res.send({
        products: []
    })

})

// app.get('/weather' , (req, res) => {
//     res.send({
//         forecast: "12",
//         loc: "delhi"


//     })
// })

app.get('/help/*', (req,res) => {
    res.render('404', {
        title : 'help article not found'
    })
})
//for pages that dont exits
app.get('*' , (req,res) => {
    res.render('404', {
        title : 'not found'
    })
})
app.listen(port , () => {
    console.log("server running" + port)
})

