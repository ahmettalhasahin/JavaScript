// let is a constant data type
let word = "JavaScript"
word[0] = 'Y'
console.log(word)

// is numbers equal ?
let numOne = 3
let numTwo = 3
console.log(numOne == numTwo)

// is strings equal ?
let JS = 'Javascript'
let PY = "Python"
console.log(JS == PY)

// is boolean equal ?
let lightOn = true
let lightOff = false
console.log(lightOff == lightOn)

// non-primitive data types are not equal
let nums = [1, 2, 3]
let numbers = [1, 2, 3]
console.log(nums == numbers)

//EXERCISES
console.log("EXERCISES")

//Level 1

//1.Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challange = '30 Days Of JavaScript'

//2.Print the string on the browser console using console.log()
console.log(challange)

//3.Print the length of the string on the browser console using console.log()
console.log(challange.length)

//4.Change all the string characters to capital letters using toUpperCase() method
console.log(challange.toUpperCase())

//5.Change all the string characters to lowercase letters using toLowerCase() method
console.log(challange.toLowerCase())

//6.Cut (slice) out the first word of the string using substr() or substring() method
console.log(challange.substr(3, 20))
console.log(challange.substring(3))

//7.Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challange.substr(0, 2))
console.log(challange.substring(0, 2))

//8.Check if the string contains a word Script using includes() method
console.log(challange.includes("Script"))

//9.Split the string into an array using split() method
console.log(challange.split())

//10.Split the string 30 Days Of JavaScript at the space using split() method
console.log(challange.split(' '))

//11.'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(companies.split(', '))

//12.Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challange.replace("JavaScript", "Phyton"))

//13.What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challange.charAt(15))

//14.What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challange.indexOf('J'))
console.log(challange.charCodeAt(11))

//15.Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challange.indexOf('a'))

//16.Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challange.lastIndexOf('a'))

//17.Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log("You cannot end a sentence with because because because is a conjunction".indexOf("because"))

//18.Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log("You cannot end a sentence with because because because is a conjunction".lastIndexOf("because"))

//19.Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log("You cannot end a sentence with because because because is a conjunction".search("because"))

//20.Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
console.log(' 30 Days Of JavaScript '.trim())

//21.Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challange.startsWith("30 D"))

//22.Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challange.endsWith("ipt"))

//23.Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(challange.match(/a/gi))

//24.Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let examp = "30 Days Of"
console.log(examp.concat(' JavaScript'))

//25.Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challange.repeat(2))

//Level 2