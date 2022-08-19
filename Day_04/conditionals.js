//EXERCISES

//Level 1

//1.Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
/*
Enter your age: 30
You are old enough to drive.

Enter your age:15
You are left with 3 years to drive.
*/
let yourAge = prompt("Enter your age:")
if (yourAge >= 18)
	console.log("You are old enough to drive.")
else
	console.log("You are left with "+ (18 - yourAge) +" years to drive.")

//2.Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
/*
Enter your age: 30
You are 5 years older than me.
*/
console.log("\n")
let myAge = 20
if (myAge > yourAge)
	console.log("I am "+ (myAge - yourAge) +" years older than you.")
else if(myAge == yourAge)
	console.log("We are same ages.")
else if(myAge < yourAge)
	console.log("You are "+(yourAge - myAge)+" years older than me.")
else
	console.log("It isn't number")

//3.If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
/*
using if else
ternary operator.
  let a = 4
  let b = 3
  4 is greater than 3
*/
console.log("\n")
let a = 4
let b = 9
if (a > b)
	console.log(`${a} is greater than ${b}`)
else
	console.log(`${a} is less than ${b}`)

a > b
	? console.log(`${a} is greater than ${b}`)
	: console.log(`${a} is less than ${b}`)

//4.Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
/*
Enter a number: 2
2 is an even number

Enter a number: 9
9 is is an odd number.
*/
console.log("\n")
let number = prompt("Enter a number: ")
if (number % 2 == 0)
	console.log(number + " is an even number.")
else
	console.log(number + " is an odd number.")

//Level 2

//1.Write a code which can give grades to students according to theirs scores:
/*
80-100, A
70-79, B
60-69, C
50-59, D
0-49, F
*/
console.log("\n")
let score = prompt("Enter your score : ")
if (100 >= score && score >= 80)
	console.log("Your rank : A")
else if (80 > score && score >= 70)
	console.log("Your rank : B")
else if (70 > score && score >= 60)
	console.log("Your rank : C")
else if (60 > score && score >= 50)
	console.log("Your rank : D")
else if (50 > score && score >= 0)
	console.log("Your rank : F")
else
	console.log("Enter a number between 0 and 100")

//2.Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
/*
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer
*/
console.log("\n")
let month = prompt("Enter month : ")
if (month == "September" || month == "October" || month == "November")
	console.log("The season is : Autumn")
else if (month == "December"|| month == "January" || month == "February")
	console.log("The season is : Winter")
else if (month == "March" || month == "April" || month == "May")
	console.log("The season is : Spring")
else if (month == "June" || month == "July" || month == "August")
	console.log("The season is : Summer")

//3.Check if a day is weekend day or a working day. Your script will take day as an input.
/*
What is the day  today? Saturday
Saturday is a weekend.

What is the day today? saturDaY
Saturday is a weekend.

What is the day today? Friday
Friday is a working day.

What is the day today? FrIDAy
Friday is a working day.
*/
console.log("\n")
let today = prompt("What is the day : ")
let day = today.toUpperCase()
if (day == "SATURDAY" || day == "SUNDAY")
	console.log(`${day} is a weekend.`)
else if (day == "MONDAY" || day == "TUESDAY" || day == "WEDNESDAY" || day == "THURSDAY" || day == "FRIDAY")
	console.log(`${day} is a working day.`)

//Level 3

//1.Write a program which tells the number of days in a month.
/*
Enter a month: January
January has 31 days.

Enter a month: JANUARY
January has 31 day

Enter a month: February
February has 28 days.

Enter a month: FEbruary
February has 28 days.
*/
console.log("\n")
let year = prompt("Enter a year : ")
let months = prompt("Enter a month : ")
let mont = months.toLowerCase()
if (mont == "january")
	months = 1
else if (mont == "february")
	months = 2
else if (mont == "march")
	months = 3
else if (mont == "april")
	months = 4
else if (mont == "may")
	months = 5
else if (mont == "june")
	months = 6
else if (mont == "july")
	months = 7
else if (mont == "august")
	months = 8
else if (mont == "september")
	months = 9
else if (mont == "october")
	months = 10
else if (mont == "novomber")
	months = 11
else if (mont == "december")
	months = 12
let date = new Date(year, months, 0).getDate()
console.log(`${mont} has ${date} days.`)