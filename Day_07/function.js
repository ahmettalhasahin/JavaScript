const n = () => console.log("\n")
//EXERCISES

//Level 1

//1.Declare a function fullName and it print out your full name.
function fullName() {
	console.log("Ahmet Talha Şahin")
}
fullName()

//2.Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
n()
function fullname() {
	let space = " "
	let firstName = "Ahmet Talha"
	let lastName = "Şahin"
	return (firstName + space + lastName)
}
console.log(fullname())

//3.Declare a function addNumbers and it takes two two parameters and it returns sum.
n()
function addNumbers(num1, num2) {
	let sum = num1 + num2
	return sum
}
console.log(addNumbers(23, 5))

//4.An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
n()
function areaOfRectangle(length, width) {
	let area = length * width
	return area
}
console.log(areaOfRectangle(5, 7))

//5.A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
n()
function perimeterOfRectangle(length, width) {
	let perimeter = 2 * (length + width)
	return perimeter
}
console.log(perimeterOfRectangle(3, 4))

//6.A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
n()
function volumeOfRectPrism(length, width, height) {
	let volume = length * width * height
	return volume
}
console.log(volumeOfRectPrism(3, 5, 2))

//7.Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
n()
function areaOfCircle(r) {
	let area = Math.PI * r * r
	return area
}
console.log(areaOfCircle(4))

//8.Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
n()
function circumOfCircle(r) {
	let circumference = 2 * Math.PI * r
	return circumference
}
console.log(circumOfCircle(4))

//9.Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
n()
function densityOfSubstance(mass, volume) {
	let density = mass / volume
	return density
}
console.log(densityOfSubstance(34, 17))

//10.Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
n()
function speedOfObject(distance, time) {
	let speed = distance / time
	return speed
}
console.log(speedOfObject(450, 15))

//11.Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
n()
const weightOfSubstance = (mass, gravity) => mass * gravity
console.log(weightOfSubstance(4, 5))

//12.Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
n()
const convertCelsiusToFahrenheit = (oC) => (oC * 9 / 5) + 32
console.log(convertCelsiusToFahrenheit(32))

//13.Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
/*
The same groups apply to both men and women.
Underweight: BMI is less than 18.5
Normal weight: BMI is 18.5 to 24.9
Overweight: BMI is 25 to 29.9
Obese: BMI is 30 or more
*/
n()
const bodyMassIndex = (weight = 70, height = 1.8) => {
	let bmi = weight / (height * height)
	if (bmi < 18.5)
		return ("Underweight")
	else if (18.5 <= bmi && bmi < 25)
		return ("Normal weight")
	else if (25 <= bmi && bmi < 30)
		return ("Overweight")
	else if (30 <= bmi)
		return ("Obese")
}
console.log(bodyMassIndex(90, 1.75))

//14.Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
n()
const checkSeason = (month) => {
	if (month == "December" || month == "January" || month == "February")
		return "Winter"
	else if (month == "March" || month == "April" || month == "May")
		return "Spring"
	else if (month == "June" || month == "July" || month == "August")
		return "Summer"
	else if (month == "September" || month == "October" || month == "Novomber")
		return "Autumn"
}
console.log(checkSeason("January"))

//15.Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
n()
const findMax = (num1, num2, num3) => {
	if (num1 > num2 && num1 > num3)
		return num1
	else if (num2 == num3 && num1 > num2)
		return num1
	else if (num2 > num1 && num2 > num3)
		return num2
	else if (num1 == num2 && num2 > num3)
		return num2
	else if (num1 == num3 && num2 > num3)
		return num2
	else
		return num3
}
console.log(findMax(384, 45, 4))

//Level 2

//1.Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
n()
const solveLinEquation = (a, b, c) => {
	/* 	let gcd = 1
		for (i = 1; a % i == 0 && b % i == 0; i++)
			gcd *= i */
	for (let x = 0; a * x <= c; x++) {
		if ((c - (a * x)) % b == 0) {
			return ("x: " + x + ", y: " + ((c - (a * x)) / b))
		}
	}
}
console.log(solveLinEquation(-3, -13, 10))

//2.Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
n()
const solveQuadEquation = (a, b, c) => {
	if (a != 0) {
		let x1 = -((b - Math.sqrt(b ** 2 - (4 * a * c))) / (2 * a))
		let x2 = -((b + Math.sqrt(b ** 2 - (4 * a * c))) / (2 * a))
		return ("x1 = " + x1 + ", x2 = " + x2)
	}
}
console.log(solveQuadEquation(1, 7, 12))

//3.Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
n()
const printArray = (arr) => {
	for (parameter of arr) {
		console.log(parameter)
	}
}
printArray([2, "dfg", 3, 4, 5, 6, "string"])

//4.Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
n()
const showDateTime = () => {
	let now = new Date()
	const zero = (a) => {
		if (a < 10)
			return (0)
		else
			return ("")
	}
	console.log(`${zero(now.getDate())}` + now.getDate() + "/" + `${zero(now.getMonth())}` + now.getMonth() + "/" + now.getFullYear() + " " + `${zero(now.getHours())}` + now.getHours() + ":" + `${zero(now.getMinutes())}` + now.getMinutes())
}
showDateTime()

//5.Declare a function name swapValues. This function swaps value of x to y.
n()
const swapValues = (x, y) => console.log("x => " + y + ", " + "y => " + x)
swapValues(3, 4)

//6.Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
/*
console.log(reverseArray([1, 2, 3, 4, 5]))
//[5, 4, 3, 2, 1]
console.log(reverseArray(['A', 'B', 'C']))
//['C', 'B', 'A']
*/
n()
const reverseArray = (array) => {
	let revArray = []
	for (let len = array.length - 1; len >= 0; len--) {
		revArray.push(array[len])
	}
	return revArray
}
console.log(reverseArray([5, 4, 3, 2, 1]))

//7.Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
n()
const capitalizeArray = (array) => {
	let capitalizedarray = []
	for (element of array) {
		capitalizedarray.push(element.toUpperCase())
	}
	return capitalizedarray
}
console.log(capitalizeArray(["apple", "banana", "cherry"]))

//8.Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
n()
const addItem = (str) => {
	let array = ["apple"]
	array.push(str)
	return array
}
console.log(addItem("peach"))

//9.Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
n()
const removeItem = (index) => {
	let array = [1, 3, 5, 7, 9, 11, 13]
	array.splice(index, 1)
	return array
}
console.log(removeItem(3))

//10.Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
const sumOfNumbers = (x, y) => {
	let sum = 0
	for (i = x; i < y; i++)
		sum += i
	return sum
}
console.log(sumOfNumbers(7, 15))

//11.Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
n()
const sumOfOdds = (x, y) => {
	let sum = 0
	if (x % 2 == 0)
		for (i = x + 1; i < y; i += 2)
			sum += i
	else
		for (i = x; i < y; i += 2)
			sum += i
	return sum
}
console.log(sumOfOdds(5, 8))
console.log(sumOfOdds(6, 8))

//12.Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
n()
const sumOfEven = (x, y) => {
	let sum = 0
	if (x % 2 == 1)
		for (i = x + 1; i < y; i += 2)
			sum += i
	else
		for (i = x; i < y; i += 2)
			sum += i
	return sum
}
console.log(sumOfEven(5, 8))
console.log(sumOfEven(4, 8))

//13.Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
n()
const evensAndOdds = (int) => {
	if (int % 2 == 0)
		return (`The number of odds are ${int / 2}.${n()} The number of evens are ${(int / 2) + 1}.`)
	else
		return (`The number of odds are ${(int + 1) / 2}. The number of evens are ${((int + 1) / 2)}.`)
}
console.log(evensAndOdds(101))

//14.Write a function which takes any number of arguments and return the sum of the arguments
n()
const sumOfArguments = (...arg) => {
	let sum = 0
	for (element of arg) {
		sum += element
	}
	return sum
}
console.log(sumOfArguments(1, 2, 3, 4, 5, 6))

//15.Write a function which generates a randomUserIp.
n()
const randomUserIp = () => console.log(parseInt(Math.floor((Math.random().toString(10)) * 256)) + "." + parseInt(Math.floor((Math.random().toString(10)) * 256)) + "." + parseInt(Math.floor((Math.random().toString(10)) * 256)) + "." + parseInt(Math.floor((Math.random().toString(10)) * 256)))

randomUserIp()

//16.Write a function which generates a randomMacAddress
n()
const randomMacAddress = () => {
	const zero = (num) => {
		if (num < 16)
			return (0)
		else
			return ""
	}
	let one = parseInt(Math.floor(Math.random() * 256))
	let two = parseInt(Math.floor(Math.random() * 256))
	let three = parseInt(Math.floor(Math.random() * 256))
	let four = parseInt(Math.floor(Math.random() * 256))
	let five = parseInt(Math.floor(Math.random() * 256))
	let six = parseInt(Math.floor(Math.random() * 256))
	let mac = `${zero(one)}${one.toString(16).toUpperCase()}:${zero(two)}${two.toString(16).toUpperCase()}:${zero(three)}${three.toString(16).toUpperCase()}:${zero(four)}${four.toString(16).toUpperCase()}:${zero(five)}${five.toString(16).toUpperCase()}:${zero(six)}${six.toString(16).toUpperCase()}`
	console.log(mac)
}
randomMacAddress()

//17.Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
n()
const randomHexaNumberGenerator = () => {
	return (`'#${parseInt(Math.random() * (16 ** 6)).toString(16)}'`)
}
console.log(randomHexaNumberGenerator())

//18.Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
n()
const userIdGenerator = () => {
	return (parseInt(Math.floor(Math.random() * (36 ** 7))).toString(36).toUpperCase())
}
console.log(userIdGenerator())

//Level 3

//1.Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
/*
userIdGeneratedByUser()
'kcsy2
SMFYb
bWmeq
ZXOYh
2Rgxf
'
userIdGeneratedByUser()
'1GCSgPLMaBAVQZ26
YD7eFwNQKNs7qXaT
ycArC5yrRupyG00S
UbGxOFI7UXSWAyKN
dIV0SSUTgAdKwStr
'
*/
n()
															/* const userIdGeneratedByUser = () => {
																let a = prompt("Number of characters")
																let b = prompt("Number of IDs")
																let str = "'"
																for(i = 0; i < b; i++){
																	str = str.concat(parseInt(Math.floor(Math.random() * (36 ** a))).toString(36).toUpperCase())
																	str = str.concat('\n');
																}
																str = str.concat("'")
																console.log(str);
															}
															userIdGeneratedByUser() */

//2.Write a function name rgbColorGenerator and it generates rgb colors.
/*
rgbColorGenerator()
rgb(125,244,255)
*/
n()
const rgbColorGenerator = () => {
	console.log("rgb(" + (Math.floor(Math.random() * 256)).toString(10) + "," + (Math.floor(Math.random() * 256)).toString(10) + "," + (Math.floor(Math.random() * 256)).toString(10) + ")")
}
rgbColorGenerator()

//3.Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
n()
const arrayOfHexaColors = () => {
	let a = []
	const zero = (n) => {
		if (n < 16)
			return 0
		else
			return ("")
	}
	for (i = Math.floor(Math.random() * 10); i >= 0; i--) {
		let r = (Math.floor(Math.random() * 256)).toString(16)
		let g = (Math.floor(Math.random() * 256)).toString(16)
		let b = (Math.floor(Math.random() * 256)).toString(16)
		a.push(`#${zero(r)}${r}${zero(g)}${g}${zero(b)}${b}`)
	}
	console.log(a)
}
arrayOfHexaColors()

//4.Write a function arrayOfRgbColors which return any number of RGB colors in an array.
n()
const arrayOfRgbColors = () => {
	let a = []
	for (i = Math.floor(Math.random() * 10); i >= 0; i--) {
		a.push(`rgb(${(Math.floor(Math.random() * 256)).toString(10)},${(Math.floor(Math.random() * 256)).toString(10)},${(Math.floor(Math.random() * 256)).toString(10)})`)
	}
	console.log(a)
}
arrayOfRgbColors()

//5.Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
n()
const convertHexaToRgb = (hexcolor) => {
	let first = hexcolor.slice(1,3)
	let second = hexcolor.slice(3,5)
	let third = hexcolor.slice(5,7)
	console.log(`rgb(${parseInt(first, 16)},${parseInt(second,16)},${parseInt(third,16)})`)
}
convertHexaToRgb("#97d57c")

//6.Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.
n()
const convertRgbToHexa = (rgb) =>{
	let array = []
	let hex = "#"
	array = (rgb.match(/\d+/g))
	for (i = 0; i < 3; i++){
		if (parseInt(array[i]) < 16)
			hex = hex.concat("0")
		hex = hex.concat(parseInt(array[i]).toString(16))
	}
	console.log(hex)
}
convertRgbToHexa("rgb(214,156,145)")

//7.Write a function generateColors which can generate any number of hexa or rgb colors.
/*
console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
console.log(generateColors('hexa', 1)) // '#b334ef'
console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'
*/
n()
const generateColors = (type, count) => {
	let array = []
	if (type == 'hexa'){
		const zero = (n) => {
			if (n < 16)
				return 0
			else
				return ("")
		}
		for (;count > 0;count--) {
			let r = (Math.floor(Math.random() * 256)).toString(16)
			let g = (Math.floor(Math.random() * 256)).toString(16)
			let b = (Math.floor(Math.random() * 256)).toString(16)
			array.push(`#${zero(r)}${r}${zero(g)}${g}${zero(b)}${b}`)
		}
	}
	else if (type == 'rgb'){
		for (;count > 0;count--){
			array.push(`rgb(${(Math.floor(Math.random() * 256)).toString(10)},${(Math.floor(Math.random() * 256)).toString(10)},${(Math.floor(Math.random() * 256)).toString(10)})`)
		}
	}
	console.log(array)
}
generateColors("rgb",5)

//8.Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
n()
const shuffleArray = (array) => {
	
}
shuffleArray(["banana", "apple", "strawberry", "cherry", "peach"])
//9.Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

//10.Call your function isEmpty, it takes a parameter and it checks if it is empty or not

