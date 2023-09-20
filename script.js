let stringVariable = "text"
let numberVariable = 15
let booleanVariable = true

function myFunc(param1, param2) {
    return param1 + param2
}

console.log(stringVariable)
console.log("stringVariable")
console.log(stringVariable, numberVariable, booleanVariable)

let array = ["alma", 12, false, undefined, null]
console.log(array)

let stringArray = ["Kata", "Zsombor", "Imola"]
console.log(stringArray[0])

let myObj = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
    key4: 15,
    key5: 600,
    key6: true,
    key7: ["Kata", "Zsombor", "Imola"]
}

console.log(myObj.key7[2])

let myFacebook = {
    name: "Kata",
    age: 28,
    location: "Budapest",
    friends: ["Gipsz Jakab", "John Doe", "Példa Péter"],
    favoriteMovies: [
        {
            title: "Harry Potter",
            year: 2012,
            characters: [
                "Harry Potter",
                "Ronald Weasley",
                "Hedvig",
            ]
        },
        {
            title: "Üvegtigris",
            year: 2004,
            characters: [
                "Csoki",
                "Gaben",
                "Lali",
            ]
        }
    ]
}

console.log(myFacebook.favoriteMovies[0].characters[1])

function negativeOrPositive(number) {
    if (number < 0) {
        return "negative"
    } else if (number > 0){
        return "positive"
    } else {
        return "zero"
    }
}

function logger(text) {
    console.log(text)
}

/* logger(negativeOrPositive(0)) */

function decideIfBeerIsGood(beer) {
    if (beer.price < 340 && beer.abv > 4.7) {
        return beer.name + ": jó sör, mert olcsó és üt"
    } else if (beer.price < 340) {
        return beer.name + ": jó sör, mert olcsó"
    } else if (beer.abv > 4.7) {
        return beer.name + ": jó sör, mert üt"
    } else {
        return beer.name + ": nem jó sör"
    }
}

let dreher = { name: "Dreher", price: 349, abv: 5 }
let soproni = { name: "Soproni", price: 329, abv: 4.5 }
let borsodi = { name: "Borsodi", price: 339, abv: 4.8 }
let pecsi = {name: "Pécsi", price: 379, abv: 4.2 }

logger(decideIfBeerIsGood(dreher)) 
logger(decideIfBeerIsGood(soproni)) 
logger(decideIfBeerIsGood(borsodi))
logger(decideIfBeerIsGood(pecsi)) 