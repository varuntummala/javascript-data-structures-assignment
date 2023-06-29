//START OF REVIEW

// As discussed in class, 2 of the most common and important
// data structures native to javascript: Arrays and Objects

//To review, an array is an ordered collection of data where each item is assigned
//an index starting from 0
//e.g.
let mySampleArray = ["Index 0", "Index 1", "Index 2"];

//An object, is used to store collections of data in a key-value pair format,
//where each key is a string (although quotes are optional for keys without spaces in them) and
//the values can be any data type

let mySampleObject = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
};

//END OF REVIEW

//START OF ASSIGNMENT
//Given what we just learned, your assignment is to create an array of objects!
//Set the myZooAnimals variable underneath this text to an array of objects that have the
//following keys:
//1. animalType
//2. name
//3. age
//4. pictureURl

//Hint: go to https://unsplash.com for some great, high-res pics and search up whatever animal you want!

//Make sure to make at least 3 animal objects with these keys inside of the myZooAnimals array!

let myZooAnimals;

myZooAnimals =  [
  {
    "animalType": "Rodent",
    "name": "Rat",
    "age": "2 Years",
    "pictureURL": "images/Rat.webp"
  },
  {
    "animalType": "Mammal",
    "name": "Whale",
    "age": "10 years",
    "pictureURL": "images/Whale.webp"
  },
  {
    "animalType": "Bird",
    "name": "Peaock",
    "age": "5 years",
    "pictureURL": "images/Peacock.jpg"
  }
]
console.log(myZooAnimals);

//END OF ASSIGNMENT
