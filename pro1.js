//problem 1: write a js program to check two numbers and return true if one of the number is 100 or if the sum of the two numbers is 100

let gHundred = (a,b) => (100 === a || 100 === b || 100 === (a+b))

//console.log(gHundred(100,20))//true   
//console.log(gHundred(20,100))//true   
//console.log(gHundred(80, 80))//false   
//console.log(gHundred(10,90))//true

//problem 2: write a js program to get the extention of a filename

let gExtention = str => (str.slice(str.lastIndexOf('.')+1))

console.log(gExtention('index.html'))//html   
console.log(gExtention('res.style.css'))//css