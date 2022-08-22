const n = () => console.log("\n")
//EXERCISES

//Level 1

//1.Declare a function fullName and it print out your full name.
function fullName(){
	console.log("Ahmet Talha Şahin")
}
fullName()

//2.Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
n()
function fullname(){
	let space = " "
	let firstName = "Ahmet Talha"
	let lastName = "Şahin"
	return(firstName + space + lastName)
}
console.log(fullname())

//3.Declare a function addNumbers and it takes two two parameters and it returns sum.
n()
function addNumbers(num1, num2){
	let sum = num1 + num2
	return sum
}
console.log(addNumbers(23,5))

//4.An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
n()
function areaOfRectangle(length, width){
	let area = length * width
	return area
}
console.log(areaOfRectangle(5,7))

//5.A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
n()
function perimeterOfRectangle(length, width){
	let perimeter = 2 * (length + width)
	return perimeter
}
console.log(perimeterOfRectangle(3,4))

//6.A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
n()
function volumeOfRectPrism(length, width, height){
	let volume = length * width * height
	return volume 
}
console.log(volumeOfRectPrism(3,5,2))

//7.Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
n()
function areaOfCircle(r){
	let area = Math.PI * r * r
	return area
}
console.log(areaOfCircle(4))

//8.Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
n()
function circumOfCircle(r){
	let circumference = 2 * Math.PI * r
	return circumference
}
console.log(circumOfCircle(4))

//9.Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
n()
function densityOfSubstance(mass, volume){
	let density = mass/volume
	return density
}
console.log(densityOfSubstance(34,17))

//10.Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
n()
function speedOfObject(distance,time){
	let speed = distance/time
	return speed
}
console.log(speedOfObject(450,15))

//11.Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
n()
const weightOfSubstance = (mass, gravity) => mass * gravity
console.log(weightOfSubstance(4,5))

//12.Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
n()
const convertCelsiusToFahrenheit = (oC) => (oC * 9/5) + 32
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
const bodyMassIndex = (weight = 70, height = 1.8) =>{
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
console.log(bodyMassIndex(90,1.75))

//14.Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
n()
const checkSeason = (month) => {
	if (month == "December" || month == "January" || month == "February")
		return "Winter"
	else if (month == "March" || month == "April" || month == "May")
		return "Spring"
	else if (month == "June" || month == "July" || month == "August")
		return "Summer"
	else if (month == "September" || month == "October" || month == "Novomber")
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
console.log(findMax(384 , 45, 4))

//Level 2

//1.Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.