//EXERCISES
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

//Level 1

//1.Iterate 0 to 10 using for loop, do the same using while and do while loop
let i
for(i = 0; i < 10; i++)
	console.log(i)
i = 0
while(i < 10)
	console.log(i++)
i = 0
do{
	console.log(i++)
}while(i < 10)
//2.Iterate 10 to 0 using for loop, do the same using while and do while loop
console.log("\n")
for(i = 10; i > 0; i--)
	console.log(i)
i = 10
while(i > 0)
	console.log(i--)
i = 10
do{
	console.log(i--)
}while(i > 0)

//3.Iterate 0 to n using for loop
console.log("\n")
for(i = 0; i < 28; i++)
	console.log(i)
//4.Write a loop that makes the following pattern using console.log():
/*
#
##
###
####
#####
######
#######
*/
console.log("\n")
const array = []
for(i = 0; i < 8; i++){
	array.push("#")
	console.log((array.toString()).replaceAll(",",""))
}
//5.Use loop to print the following pattern:
/*
0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100
*/
console.log("\n")
for (i = 0; i <= 10;i++)
	console.log(`${i} x ${i} = ${i*i}`)

//6.Using loop print the following pattern
/*
 i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000
 */
console.log("\n")
console.log("i    i^2   i^3")
for (i = 0; i <= 10; i++){
	if (i > 9)
		console.log(`${i}   ${i**2}   ${i**3}`)
	else if (i ** 2 > 9)
		console.log(`${i}    ${i**2}    ${i**3}`)
	else
		console.log(`${i}    ${i**2}     ${i**3}`)
}

//7.Use for loop to iterate from 0 to 100 and print only even numbers
console.log("\n")
for(i = 0; i <= 100; i += 2)
	console.log(i)

//8.Use for loop to iterate from 0 to 100 and print only odd numbers
console.log("\n")
for(i = 1; i <= 100; i += 2)
	console.log(i)

//9.Use for loop to iterate from 0 to 100 and print only prime numbers
console.log("\n")
console.log(2)
for (i = 2; i <= 100; i++){
	for(let j = 2; j < i; j++){
		if (i % j == 0)
			break
		else if (i == j + 1)
			console.log(i)
	}
}

//10.Use for loop to iterate from 0 to 100 and print the sum of all numbers.
/*
The sum of all numbers from 0 to 100 is 5050.
*/
console.log("\n")
let total = 0
for (i = 0; i <= 100; i++)
	total += i
console.log(`The sum of all numbers from 0 to 100 is ${total}.`)

//11.Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
/*
The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
*/
console.log("\n")
let odd = 0
let even = 0
for (i = 0; i <= 100; i++){
	if (i % 2 == 0)
		even += i
	else
		odd += i
}
console.log(`The sum of all evens from 0 to 100 is ${even}. And the sum of all odds from 0 to 100 is ${odd}.`)

//12.Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
/*
[2550, 2500]
*/
console.log("\n")
const tmp = [even , odd];
console.log(tmp);

//13.Develop a small script which generate array of 5 random numbers
console.log("\n")
const randomNumber = []
for (i = 0; i < 5; i++){
	randomNumber.push(parseInt(Math.random() * 10))
}
console.log(randomNumber)

//14.Develop a small script which generate array of 5 random numbers and the numbers must be unique
console.log("\n")
let num
const numArray = []
for ( ; numArray.length < 5; ){
	num = (parseInt(Math.random() * 10))
	if(!(numArray.includes(num)))
		numArray.push(num)
}
console.log(numArray)

//15.Develop a small script which generate a six characters random id:
/*
5j2khz
*/
console.log("\n")
console.log(Math.random().toString(36).substr(2, 6))

//Level 2

//1.Develop a small script which generate any number of characters random id:
/*
fe3jo1gl124g
xkqci4utda1lmbelpkm03rba
*/
console.log("\n")
let str = ""
for(i = parseInt(Math.random() * 10); i > 0; i--){
	str = str.concat(Math.random().toString(36).substr(8))
}
console.log(str)

//2.Write a script which generates a random hexadecimal number.
/*
'#ee33df'
*/
console.log("\n")
str = '#'
console.log(str.concat(Math.random().toString(16).substring(2)))

//3.Write a script which generates a random rgb color number.
/*
rgb(240,180,80)
*/
console.log("\n")
let x = Math.floor(Math.random() * 256)
let y = Math.floor(Math.random() * 256)
let z = Math.floor(Math.random() * 256)
console.log("rgb("+x+","+y+","+z+")")

//4.Using the above countries array, create the following new array.
/*
["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
*/
console.log("\n")
const countriesUpper = []
for (i = 0; countries.length > i; i++)
	countriesUpper.push(countries[i].toUpperCase())
console.log(countriesUpper)

//5.Using the above countries array, create an array for countries length'.
/*
[7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
*/
console.log("\n")
const countriesLen = []
for (i = 0; countries.length > i; i++)
	countriesLen.push(countries[i].length)
console.log(countriesLen)

//6.Use the countries array to create the following array of arrays:
/*
[
['Albania', 'ALB', 7],
['Bolivia', 'BOL', 7],
['Canada', 'CAN', 6],
['Denmark', 'DEN', 7],
['Ethiopia', 'ETH', 8],
['Finland', 'FIN', 7],
['Germany', 'GER', 7],
['Hungary', 'HUN', 7],
['Ireland', 'IRE', 7],
['Iceland', 'ICE', 7],
['Japan', 'JAP', 5],
['Kenya', 'KEN', 5]
]
*/
console.log("\n")
const countriesArray = new Array(countries.length)
for (i = 0; i < countries.length; i++){
	countriesArray[i] = [countries[i],countriesUpper[i].substr(0,3),countriesLen[i]]
}
console.log(countriesArray)

//7.In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
console.log("\n")
let containingLand = []
for (i = 0; i < countries.length; i++){
	if (countries[i].includes("land"))
		containingLand.push(countries[i])
}
if (containingLand.length == 0)
	console.log("All these countries are without land")
else
	console.log(containingLand)

//8.In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
console.log("\n")
let containingIa = []
for (i = 0; i < countries.length; i++){
	if (countries[i].includes("ia"))
		containingIa.push(countries[i])
}
if (containingIa.length == 0)
	console.log("These are countries ends without ia")
else
	console.log(containingIa)

//9.Using the above countries array, find the country containing the biggest number of characters.
console.log("\n")
let j = 0
for (i = 0; i < countries.length - 1; i++)
	if (countries[j].length < countries[i].length)
		j = i
console.log(countries[j])

//10.Using the above countries array, find the country containing only 5 characters.
console.log("\n")
countryWithFive = []
for (i = 0; i < countries.length; i++){
	if (countries[i].length == 5)
		countryWithFive.push(countries[i])
}
console.log(countryWithFive)

//11.Find the longest word in the webTechs array
console.log("\n")
j = 0
for (i = 0; i < webTechs.length - 1; i++)
	if (webTechs[j].length < webTechs[i].length)
		j = i
console.log(webTechs[j])

//12.Use the webTechs array to create the following array of arrays:
/*
[["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
*/
console.log("\n")
let webTechsArray = [[]]
for(i = 0; i < webTechs.length; i++){
	webTechsArray[i] = [webTechs[i], webTechs[i].length]
}
console.log(webTechsArray)

//13.An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack

//14.Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
console.log("\n")
const webTech = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
for (tech of webTech){
	console.log(tech)
}

//15This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
console.log("\n")
let fruits = ['banana', 'orange', 'mango', 'lemon']
for (i = fruits.length - 1 ; i >= 0; i--){
	console.log(fruits[i])
}

//16.Print all the elements of array as shown below.
/*
const fullStack = [
	['HTML', 'CSS', 'JS', 'React'],
	['Node', 'Express', 'MongoDB']
]
HTML
CSS
JS
REACT
NODE
EXPRESS
MONGODB
*/
console.log("\n")
const fullStack = [['HTML', 'CSS', 'JS', 'React'],['Node', 'Express', 'MongoDB']]
for (i = 0; i < fullStack.length; i++)
	for (j = 0; j < fullStack[i].length; j++)
		console.log(fullStack[i][j].toUpperCase())