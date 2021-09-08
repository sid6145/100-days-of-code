var array = [1, 3, "sam", "luffy", 50, 60]

//used to find length of array
console.log(array.length)

array.forEach((item) => {
    console.log(item)
})

//removes and returns the last element of an array
let lastELement = array.pop()
console.log(lastELement)

//adds new element to the array
array.push("uchiha")
console.log(array)

//removes and returns first element of an array
let firstElement = array.shift()
console.log(firstElement)

//adds item to the beginning of an array
array.unshift(4)

//removes elements from the specified index
array.splice(0, 3)
console.log(array)

//makes copy of an array
let newArray = array.slice()


//loops through the array and performs the specified action
array.map((item) => {
    console.log(item)
})

//at methods takes in integer and returns item which is present at that index
array.at(2)

let array2 = [ 1,2,3,4,5,6]

const array3 = array.concat(array2)
console.log(array3)

//creates and returns a new string by concatenating all items inside array
let joinedArray = array.join()

//returns index of the specified element
array.indexOf('luffy')

//convers array to string
array.toString()

//sorts the array
array.sort()

//method checks if atleast one element passes the specified test
const even = (element) => element % 2 === 0;
console.log(array.some(even))