
console.log("this is client side javascript")


// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then( (data) => {
//         console.log(data)
//     })
// })


const weather_form = document.querySelector('form')
const inp = document.querySelector('input')
const message1 = document.getElementById('1')
const message2 = document.getElementById('2')


weather_form.addEventListener('submit', (data) => {
    data.preventDefault()  //is used so that the browzer does not refresh

    const loc = inp.value

    console.log(loc)
    
   
    fetch('/weather?address=' + loc).then((response) => {
    response.json().then((data) => {
        console.log(data.temperature)
        message1.textContent = "the temprature is - " + data.temperature
        message2.textContent = "the lati and longi are - " + data.lati + "," + data.longi
        
    })
})


})