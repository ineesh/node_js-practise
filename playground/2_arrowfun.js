// const h_1 = function(h){
//     return h * h
// }


//  const h_1  = (h) => {
//  return h*h
//  }

// const h_1 = (h) => h*h

const event = {

    name: "birthday",
    guest_name: ["lol","paul"],
    printlist () {
        console.log("guest are" + this.name)
        this.guest_name.forEach(function(guest){
            console.log("guest are " + guest)

        })

    },




}

event.printlist()

// console.log(h_1(4))