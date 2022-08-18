//EXERCISES

//Level 1

//1.Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = 'Ahmet Talha'
let lastName = "Şahin"
let country = "Turkey"
let city = 'Istanbul'
let age = 22
let isMarried = false
let year = 2022
console.log(typeof(firstName) + '\n' + typeof(lastName) + '\n' + typeof(country) + '\n' + typeof(city) + '\n' + typeof(age) + '\n' + typeof(isMarried) + '\n'+ typeof(year))

//2.Check if type of '10' is equal to 10
console.log("\n")
console.log('10' === 10)

//3.Check if parseInt('9.8') is equal to 10
console.log("\n")
console.log(parseInt('9.8') == 10)

//4.Boolean value is either true or false.
// -> Write three JavaScript statement which provide truthy value.
console.log("\n")
console.log(1 == '1')
console.log(1 == [1])
console.log('1' == [1])
// -> Write three JavaScript statement which provide falsy value.
console.log(1 === '1')
console.log(1 === [1])
console.log('1' === [1])

//5.Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
console.log("\n")
//4 > 3
console.log(true == (4 > 3))
//4 >= 3
console.log(true == (4 >= 3))
//4 < 3
console.log(false == (4 < 3))
//4 <= 3
console.log(false == (4 <= 3))
//4 == 4
console.log(true == (4 == 4))
//4 === 4
console.log(true == (4 === 4))
//4 != 4
console.log(false == (4 != 4))
//4 !== 4
console.log(false == (4 !== 4))
//4 != '4'
console.log(false == (4 != '4'))
//4 == '4'
console.log(true == (4 == '4'))
//4 === '4'
console.log(false == (4 === '4'))
//Find the length of python and jargon and make a falsy comparison statement.
console.log(false == ("python".length != 'jargon'.length))

//6.Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
console.log("\n")
//4 > 3 && 10 < 12
console.log(true == (4 > 3 && 10 < 12))
//4 > 3 && 10 > 12
console.log(false == (4 > 3 && 10 > 12))
//4 > 3 || 10 < 12
console.log(true == (4 > 3 || 10 < 12))
//4 > 3 || 10 > 12
console.log(true == (4 > 3 || 10 > 12))
//!(4 > 3)
console.log(false == (!(4 > 3)))
//!(4 < 3)
console.log(true == (!(4 < 3)))
//!(false)
console.log(true ==(!(false)))
//!(4 > 3 && 10 < 12)
console.log(false == (!(4 > 3 && 10 < 12)))
//!(4 > 3 && 10 > 12)
console.log(true == (!(4 > 3 && 10 > 12)))
//!(4 === '4')
console.log(true == (!(4 === '4')))
//There is no 'on' in both dragon and python
console.log(false == (!("dragon".includes("on")) && !("phyton".includes("on"))))

//7.Use the Date object to do the following activities
console.log("\n")
const now = new Date()
//What is the year today?
console.log(now.getFullYear())
//What is the month today as a number?
console.log(now.getMonth())
//What is the date today?
console.log(now.getDate())
//What is the day today as a number?
console.log(now.getDay())
//What is the hours now?
console.log(now.getHours())
//What is the minutes now?
console.log(now.getMinutes())
//Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(now.getTime())

//Level 2

//1.Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
/*
Enter base: 20
Enter height: 10
The area of the triangle is 100
*/
console.log(Math.PI)
console.log("\n")
								/* let base = prompt("Area of triangle", "Enter base")
								let height = prompt("Area of triangle", "Enter height")
								console.log(base * height * 0.5)  */

//2.Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
/*
Enter side a: 5
Enter side b: 4
Enter side c: 3
The perimeter of the triangle is 12
*/
console.log("\n")
								/* let sideA = prompt("Perimeter of triangle", "Enter side a")
								let sideB = prompt("Perimeter of triangle", "Enter side b")
								let sideC = prompt("Perimeter of triangle", "Enter side c")
								console.log((sideA * 1) + (sideB * 1) + (sideC * 1)) */

//3.Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
console.log("\n")
								/* let len = prompt("Length of rectangle", "Enter length")
								let wid = prompt("Width of rectangle", "Enter width")
								console.log("Area = " + (len * wid) + "\n" + "Perimeter = " + (2*(len*1 + wid*1))) */

//4.Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
console.log("\n")
								/* let rad = prompt("Radius of circle", "Enter radius")
								console.log("Area = " + (Math.PI * rad * rad) + "\n" + "Circumference = " + (Math.PI * rad * 2)) */

//5.Calculate the slope, x-intercept and y-intercept of y = 2x -2
console.log("\n")
let firstM = 2
let interceptOfX = ((0*1) + 2)/2
let interceptOfY = (2 * 0) - 2
console.log("m = " + firstM)
console.log("x-intercept = " + interceptOfX + ', ' + "y-intercept = " + interceptOfY)

//6.Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
console.log("\n")
let secondM = ((10-2)/(6-2))
console.log("m = " + secondM)

//7.Compare the slope of above two questions.
console.log("\n")
console.log(firstM == secondM)

//8.Calculate the value of y (y = x^2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
let x = -3
let y = 0
console.log(y == (x * x) + (6 * x) + (9 * 1))

//9.Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
/* 
Enter hours: 40
Enter rate per hour: 28
Your weekly earning is 1120
*/
console.log("\n")
								/* let hour = prompt("Enter Hour")
								let rate = prompt("Enter rate per hour")
								console.log("Your weekly earning is " + hour*rate)
								*/

//10.If the length of your name is greater than 7 say, your name is long else say your name is short.
console.log("\n")
let yourName = "Ahmet"
if (yourName.length > 7)
	console.log("Your name is long.")
else
	console.log("Your name is short.")

//11.Compare your first name length and your family name length and you should get this output.
/*
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
Your first name, Asabeneh is longer than your family name, Yetayeh
*/
console.log("\n")
let firstNa = 'Ahmet Talha'
let lastNa = 'Şahin'
if (firstNa.length > lastNa.length)
	console.log("Your first name, "+ firstNa+ " is longer than your family name, " + lastNa)
else
	console.log("Your first name, "+ firstNa+ " is shorter than your family name, " + lastNa)

//12.Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
console.log("\n")
let myAge = 22
let yourAge = 20
let diff
if(myAge > yourAge){
	diff = myAge - yourAge
	console.log("I am " + diff + " years older than you.")
}
else{
	diff = yourAge - myAge
	console.log("You are " + diff + " years older than me.")
}

//13.Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
/* 
Enter birth year: 1995
You are 25. You are old enough to drive

Enter birth year: 2005
You are 15. You will be allowed to drive after 3 years.
*/
console.log("\n")
let currentDate = new Date()
let birth = prompt("Enter birth year")
let ages = currentDate.getFullYear() - birth
if (ages >= 18)
	console.log("You are " + ages +". You are old enough to drive")
else
	console.log("You are "+ ages +". You will be allowed to drive after " + (18 - ages) + " years.")

//14.Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
/*
Enter number of years you live: 100
You lived 3153600000 seconds.
*/
console.log("\n")
let live = prompt("Enter number of years you live")
console.log(live * 60 * 60 * 24 * 365)

//15.Create a human readable time format using the Date time object
/*
YYYY-MM-DD HH:mm
DD-MM-YYYY HH:mm
DD/MM/YYYY HH:mm
*/
console.log("\n")
console.log(now.getFullYear()+"-"+now.getMonth()+"-"+now.getDate()+" "+now.getHours()+":"+now.getMinutes())
console.log(now.getDate()+"-"+now.getMonth()+"-"+now.getFullYear()+" "+now.getHours()+":"+now.getMinutes())
console.log(now.getDate()+"/"+now.getMonth()+"/"+now.getFullYear()+" "+now.getHours()+":"+now.getMinutes())

//Level 3

//1.Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
//YYY-MM-DD HH:mm eg. 20120-01-02 07:05
console.log("\n")
let h = ''
let m = ''
if(now.getHours() < 10)
	h = 0
if(now.getMinutes() < 10)
	m = 0
console.log(now.getFullYear()+"-"+now.getMonth()+"-"+now.getDate()+" "+h+now.getHours()+":"+m+now.getMinutes())
