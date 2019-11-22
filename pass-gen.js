
var passLength = 8


function lower () {
    var lowerCharset = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    return lowerCharset[Math.floor(Math.random) * lowerCharset.length]
}

function upper () {
    var upperCharset = ['A' , 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    return upperCarset[Math.floor(Math.random) * upperCharset.length]
}

function specials () {
    var spec = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '?', '>', '<', '{', '}', '[', ']','-','_', '`','~',]
    return spec[Math.floor(Math.random) * spec.length]
}

function numbers () {
    var num = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    return num[Math.floor(Math.random) * num.length]
}


var arrPass = []
var stringPass = ''
var finalPass = ''

stringPass = (arrPass.toString())
finalPass = (stringPass.replace(/,/g,""))

var low = true
var up = true
var specs = true
var nums = true

function userInput () {
    passLength = document.getElementById("charNum").value


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


document.getElementById('display').value = finalPass3;
}

function convert() {
    finalPass2 = (finalPass.toString())
    finalPass3 = (finalPass2.replace(/,/g,""))
}


function run () {
    generate()
    convert()
}















