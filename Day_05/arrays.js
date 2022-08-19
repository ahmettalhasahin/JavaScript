//EXERCISES

//Level 1
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
//21.Remove the middle IT company or companies from the array
//22.Remove the last IT company from the array
//23.Remove all IT companies