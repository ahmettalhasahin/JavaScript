//EXERCISES

//Level 1

//1.Declare an empty array;
const arr = new Array()
console.log(arr)

//2.Declare an array with more than 5 number of elements
console.log("\n")
const numbers = [1, 34, 3, 65, 5, 6, 23]
console.log(numbers)

//3.Find the length of your array
console.log("\n")
console.log(numbers.length)

//4.Get the first item, the middle item and the last item of the array
console.log("\n")
console.log(numbers[0], numbers[parseInt(numbers.length/2)], numbers[numbers.length - 1])

//5.Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
console.log("\n")
const mixdedDataTypes = ["int", "boolean", "array", "float", "string", "struct"]
console.log(mixdedDataTypes.length)

//6.Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
console.log("\n")
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

//7.Print the array using console.log()
console.log("\n")
console.log(itCompanies)

//8.Print the number of companies in the array
console.log("\n")
console.log(itCompanies.length)

//9.Print the first company, middle and last company
console.log("\n")
console.log(itCompanies[0], itCompanies[parseInt(itCompanies.length/2)], itCompanies[itCompanies.length - 1])

//10.Print out each company
console.log("\n")
for(let i = 0; i < itCompanies.length; i++)
	console.log(itCompanies[i])

//11.Change each company name to uppercase one by one and print them out
console.log("\n")
for(let i = 0; i < itCompanies.length; i++)
	console.log(itCompanies[i].toUpperCase())

//12.Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log("\n")
console.log(itCompanies[0]+", "+itCompanies[1]+", "+itCompanies[2]+", "+itCompanies[3]+", "+itCompanies[4]+", "+itCompanies[5]+" and "+itCompanies[6]+" are big IT companies.")

//13.Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
console.log("\n")
let company = "twitter"
for(let i = 0; i < itCompanies.length; i++)
	if (itCompanies[i].toLowerCase() == company.toLowerCase()){
		console.log(itCompanies[i])
		break;
	}	
	else if (i == itCompanies.length - 1)
		console.log(`${company} is not found`)

//14.Filter out companies which have more than one 'o' without the filter method
console.log("\n")
const companies = new Array()
for(let i = 0; i < itCompanies.length; i++){
	if (itCompanies[i].match(/o/g) == null || itCompanies[i].match(/o/g).length < 2)
		companies.push(`${itCompanies[i]}`)
}
console.log(companies)

//15.Sort the array using sort() method
console.log("\n")
console.log(itCompanies.sort())

//16.Reverse the array using reverse() method
console.log("\n")
console.log((itCompanies.sort()).reverse())

//17.Slice out the first 3 companies from the array
console.log("\n")
console.log(itCompanies.slice(3, itCompanies.length))

//18.Slice out the last 3 companies from the array
console.log("\n")
console.log(itCompanies.slice(0, itCompanies.length - 3))

//19.Slice out the middle IT company or companies from the array
console.log("\n")
itCompanies.length % 2 == 0
? console.log(itCompanies.slice(itCompanies.length/2 - 1,(itCompanies.length/2) + 1))
: console.log(itCompanies.slice(itCompanies.length/2,(itCompanies.length/2) + 1))

//20.Remove the first IT company from the array
console.log("\n")
let withoutFirst = itCompanies.slice()
console.log(withoutFirst.splice(1, itCompanies.length - 1))

//21.Remove the middle IT company or companies from the array
console.log("\n")
let withoutMiddle = itCompanies.slice()
withoutMiddle.length % 2 == 0
? console.log(withoutMiddle.splice(withoutMiddle.length / 2 - 1, 2))
: console.log(withoutMiddle.splice(withoutMiddle.length / 2, 1))

//22.Remove the last IT company from the array
console.log("\n")
let withoutLast = itCompanies.slice()
console.log(withoutLast.splice(0, withoutLast.length - 1))
//23.Remove all IT companies
console.log("\n")
console.log(itCompanies.splice())

//Level 2

//1.Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
console.log("\n")
console.log(countries)
console.log(webTechs)

//2.First remove all the punctuations and change the string to array and count the number of words in the array
/*
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(words)
console.log(words.length)
["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
13
*/
console.log("\n")
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let textWithoutComma = text.replaceAll(",", "")
let textWithoutDot = textWithoutComma.replaceAll(".", "")
let words = textWithoutDot.split(" ")
console.log(words)
console.log(words.length)

//3.In the following shopping cart add, remove, edit items
/*
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
* add 'Meat' in the beginning of your shopping cart if it has not been already added
* add Sugar at the end of you shopping cart if it has not been already added
* remove 'Honey' if you are allergic to honey
* modify Tea to 'Green Tea'
*/
console.log("\n")
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
if (!(shoppingCart.includes("Meat")))
	shoppingCart.unshift("Meat")
console.log(shoppingCart)
if (!(shoppingCart.includes("Sugar")))
	shoppingCart.push("Sugar")
console.log(shoppingCart)
let allergic = true
allergic
? shoppingCart.splice(shoppingCart.indexOf("Honey"), 1)
: shoppingCart
console.log(shoppingCart)
shoppingCart.splice(shoppingCart.indexOf('Tea'), 1, 'Green Tea')
console.log(shoppingCart)

//4.In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
console.log("\n")
countries.includes('Ethiopia')? console.log("ETHIOPIA"):countries.push("Ethiopia")
console.log(countries)

//5.In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
console.log("\n")
webTechs.includes("Sass")?console.log('Sass is a CSS preprocess'):webTechs.push("Sass"),console.log(webTechs)

//6.Concatenate the following two variables and store it in a fullStack variable.
/*
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
console.log(fullStack)
["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
*/
console.log("\n")
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
let fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

//Level 3

//1.The following is an array of 10 students ages:
console.log("\n")
//const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// * Sort the array and find the min and max age
console.log(ages.sort(), ages[0], ages[ages.length - 1])
// * Find the median age(one middle item or two middle items divided by two)
ages.length % 2 == 1 ? console.log(ages[ages.length / 2]) : console.log((ages[ages.length/2 - 1] + ages[ages.length/2])/2) 
// * Find the average age(all items divided by number of items)
let total = 0
for(let i = 0; i < ages.length; i++)
	total += ages[i]
let average = total/ages.length
console.log(average)
// * Find the range of the ages(max minus min)
console.log(ages[ages.length - 1] - ages[0])
// * Compare the value of (min - average) and (max - average), use abs() method
console.log(Math.abs(ages[0] - average), Math.abs(ages[ages.length - 1] - average))

//1.Slice the first ten countries from the countries array
console.log("\n")
console.log(countries.slice(0,10))

//2.Find the middle country(ies) in the countries array
console.log("\n")
countries.length % 2 == 1 ? console.log(countries[parseInt(countries.length/2)]) : console.log((countries[countries.length / 2 - 1]), countries[countries.length / 2])

//3.Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
console.log("\n")
let first = countries.slice(0, countries.length / 2)
let second = countries.slice(countries.length / 2, countries.length)
if (countries.length % 2 == 1)
	first.push("Turkey")
console.log(first, second)
