//constructor function
function Car(name, color, brand, type) {
    this.name  = name,
    this.color = color,
    this.brand = brand,
    this.type = type
}

let car1 = new Car("Mustang", "white", "ford", "petrol")
console.log(car1)

//adding new properties to objects
Car.speed = "300kmph"


let Person = {
    fname: "Siddhant",
    lname: "Deshmukh",
    age: 21,
    hobby: "Video games",
    //this keyword in an object references to the object itself
    speak: function(){
        alert(`Hi my name is ${this.fname} ${this.lname} `)
    }
}

Person.speak()

// this keyword outsite object references to the global object
// which is windonw object in chrome
console.log(this)
