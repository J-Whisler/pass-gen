var lowerCharset = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var upperCharset = ['A' , 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var spec = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '?', '>', '<', '{', '}', '[', ']','-','_', '`','~']
var num = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

function lower () {
    return lowerCharset
    //[Math.floor(Math.random() * lowerCharset.length)]
}

function upper () {
    return upperCharset
    //[Math.floor(Math.random() * upperCharset.length)]
}

function specials () {
    return spec
    //[Math.floor(Math.random() * spec.length)]
}

function numbers () {
    return num
    //[Math.floor(Math.random() * num.length)]
}


var arrPass = []
var stringPass = ''
var finalPass = ''

var passLength = 8

var low = true
var up = true
var specs = true
var nums = true

function userInput () {
    passLength = document.querySelector("#charNum").value


    if (document.getElementById("uppercase").checked) {
        up = true
    } else {
        up = false
    }


    if (document.getElementById("lowercase").checked) {
        low = true
    } else {
        low = false
    }

    if (document.getElementById("number").checked) {
        nums = true
    } else {
        nums = false
    }


    if (document.getElementById("symbol").checked) {
        specs = true
    } else {
        specs = false
    }
}


function passSanitize () {
    if (passLength < 8 || passLength > 128) {
        alert("Please choose a number bewtween 8 and 128 characters for password length")

    } else if (low === false && up === false && specs === false && nums === false) {
        alert("Please check at least one of the boxes to choose at least one of the character sets")
   
}

arrPass.length = 0
}

function createPassword () {

    var possibleValues = []

    if (low === true) {
        possibleValues = possibleValues.concat(lower())
    }

    if (up === true) {
        possibleValues = possibleValues.concat(upper())
    }

    if (specs === true) {
        possibleValues = possibleValues.concat(specials())
    }
    if (nums === true) {
        possibleValues = possibleValues.concat(numbers())
    }


    for (var i = 0; i < passLength; i++) {
        //console.log(possibleValues)
        var randomize = function(){
            return Math.floor(Math.random() * possibleValues.length)
        }
            arrPass.push(possibleValues[randomize()])
        
    }
}


function convert() {
    stringPass = (arrPass.toString())
    finalPass = (stringPass.replace(/,/g,""))
}

function final () {
     document.getElementById("display").value = finalPass
    
}


function generate () {
    userInput();
    passSanitize();
    createPassword();
    convert();
    final();
}

















