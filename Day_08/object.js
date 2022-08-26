c = 'JavaScript' // declaring a variable without let or const make it available in window object and this found anywhere
d = 10 // this is a global scope variable and found in the window object
function LetsLearnScope() {
	console.log(c, d)
	if (true) {
		console.log(c, d)
	}
}
LetsLearnScope()
console.log(c, d)
console.log("<<<<<<<<<<<<<<<<|>>>>>>>>>>>>>>>>")
let a = 'JavaScript' // is a global scope it will be found anywhere in this file
let b = 10 // is a global scope it will be found anywhere in this file
function letsLearnScope() {
	console.log(a, b) // JavaScript 10, accessible
	if (true) {
		let a = 'Python'
		let b = 100
		console.log(a, b) // Python 100
	}
	console.log(a, b)
}
letsLearnScope()
console.log(a, b) // JavaScript 10, accessible

console.log("<<<<<<<<<<<<<<<<|>>>>>>>>>>>>>>>>")
const person = {
	firstName: 'Asabeneh',
	lastName: 'Yetayeh',
	age: 250,
	country: 'Finland',
	city: 'Helsinki',
	skills: [
		'HTML',
		'CSS',
		'JavaScript',
		'React',
		'Node',
		'MongoDB',
		'Python',
		'D3.js'
	],
	getFullName: function () {
		return `${this.firstName} ${this.lastName}`
	}
}
person.nationality = 'Ethiopian'
person.country = 'Finland'
person.title = 'teacher'
person.skills.push('Meteor')
person.skills.push('SasS')
person.isMarried = true

person.getPersonInfo = function () {
	let skillsWithoutLastSkill = this.skills
		.splice(0, this.skills.length - 1)
		.join(', ')
	let lastSkill = this.skills.splice(this.skills.length - 1)[0]

	let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
	let fullName = this.getFullName()
	let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
	return statement
}
console.log(person)
console.log(person.getPersonInfo())
console.log("<<<<<<<<<<<<<<<<|>>>>>>>>>>>>>>>>")
const persons = {
	firstName: 'Asabeneh',
	age: 250,
	country: 'Finland',
	city: 'Helsinki',
	skills: ['HTML', 'CSS', 'JS'],
	title: 'teacher',
	address: {
		street: 'Heitamienkatu 16',
		pobox: 2002,
		city: 'Helsinki'
	},
	getPersonInfo: function () {
		return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
	}
}

//Object methods: Object.assign, Object.keys, Object.values, Object.entries
//hasOwnProperty

const copyPerson = Object.assign({}, persons)
console.log(copyPerson)
console.log(copyPerson.hasOwnProperty('firstName'))
console.log(copyPerson.hasOwnProperty('score'))
console.log("<<<<<<<<<<<<<<< EXERCISES >>>>>>>>>>>>>>>")

//EXERCISES

//Level 1
console.log("<<<<<<<<<<<<<<<< LEVEL 1 >>>>>>>>>>>>>>>>")
//1.Create an empty object called dog
const dog = {}
//2.Print the the dog object on the console
console.log(dog)
//3.Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
const dogs = {
	name: "asd",
	legs: 4,
	color: "black",
	age: 13,
	bark: function () {
		return ("woof woof")
	}
}
console.log(dogs)
//4.Get name, legs, color, age and bark value from the dog object
console.log(dogs.name)
console.log(dogs.legs)
console.log(dogs.color)
console.log(dogs.age)
console.log(dogs.bark)
const values = Object.values(dogs)
console.log(values)
//5.Set new properties the dog object: breed, getDogInfo
dogs.breed = "bulldog"
dogs.getDogInfo = function () {
	return `I am ${this.name} and I have ${this.legs} legs. My color is ${this.color} and I'm ${this.age}.`
}
console.log(dogs.getDogInfo())

//Level 2
console.log("<<<<<<<<<<<<<<<< LEVEL 2 >>>>>>>>>>>>>>>>")
const users = {
	Alex: {
		email: 'alex@alex.com',
		skills: ['HTML', 'CSS', 'JavaScript'],
		age: 20,
		isLoggedIn: false,
		points: 30
	},
	Asab: {
		email: 'asab@asab.com',
		skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
		age: 25,
		isLoggedIn: false,
		points: 50
	},
	Brook: {
		email: 'daniel@daniel.com',
		skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
		age: 30,
		isLoggedIn: true,
		points: 50
	},
	Daniel: {
		email: 'daniel@alex.com',
		skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
		age: 20,
		isLoggedIn: false,
		points: 40
	},
	John: {
		email: 'john@john.com',
		skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
		age: 20,
		isLoggedIn: true,
		points: 50
	},
	Thomas: {
		email: 'thomas@thomas.com',
		skills: ['HTML', 'CSS', 'JavaScript', 'React'],
		age: 20,
		isLoggedIn: false,
		points: 40
	},
	Paul: {
		email: 'paul@paul.com',
		skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
		age: 20,
		isLoggedIn: false,
		points: 40
	}
}
//1.Find the person who has many skills in the users object.
const findUser = (users) => {
	let i = 0
	for (const key in users) {
		if (Object.hasOwnProperty.call(users, key)) {
			const element = users[key];
			if (element['skills'].length > i)
				i = element['skills'].length
		}
	}
	for (const key in users){
		if (users[key]['skills'].length == i)
			return key
	}
}
console.log(findUser(users))
//2.Count logged in users, count users having greater than equal to 50 points from the following object.
const loogedAndPoint = (users) => {
	let i = 0
	for (const property in users){
		if (users[property]['isLoggedIn'] == true && users[property]['points'] == 50){
			i++
		}
		/* for (const key in users[property]) {
			if (Object.hasOwnProperty.call(users[property], key)) {
				const element = users[property][key]
				
				console.log(property)
				console.log(element)
			}
		} */
	}
	console.log(i)
}
loogedAndPoint(users)
//3.Find people who are MERN stack developer from the users object
const mernStack = (users) => {
	const mern = []
	for (const property in users) {
		//console.log(property)
		if (Object.hasOwnProperty.call(users, property)) {
			const element = users[property]['skills'];
			//console.log(element)
			if (element.includes("MongoDB") && element.includes("Express") && element.includes("React") && element.includes("Node"))
				mern.push(property)
		}
	}
	console.log(mern)
}
mernStack(users)
//4.Set your name in the users object without modifying the original users object
users.Ahmet = {
	email: 'ahmet@ahmet.com' ,
	skills: ["HTML", "CSS", "JavaScript"],
	age: 22,
	isLoggedIn: true,
	points: 70
}
//5.Get all keys or properties of users object
console.log(users)
//6.Get all the values of users object
for (const key in users) {
	//if (Object.hasOwnProperty.call(users, key)) {
		const element = users[key];
		console.log(element)
	//}
}
//7.Use the countries object to print a country name, capital, populations and languages.
const countries = {
	Turkey:{
		capital: "Ankara",
		population: 5747325,
		language: "Turkish"
	},
	China:{
		capital: "Beijing",
		population: 21542000,
		language: "Chinese"
	},
	UnitedKingdom:{
		capital: "London",
		population: 9002488,
		language: "English"
	},
	Germany:{
		capital: "berlin",
		population: 3664088,
		language: "German"
	},
	Spain:{
		capital: "Madrid",
		population: 3305408,
		language: "Spanish"
	}
}
for (const key in countries) {
	if (Object.hasOwnProperty.call(countries, key)) {
		const element = countries[key];
		console.log(key,element)
	}
}
//Level 3
console.log("<<<<<<<<<<<<<<<< LEVEL 3 >>>>>>>>>>>>>>>>")
//1.Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

const personAccount = {
	firstName: "Ahmet Talha",
	lastName: "Şahin",
	incomes: {
		January: 1,
		February: 2,
		March: 3,
		April: 4,
		May: 5,
		June: 6,
		July: 7,
		August: 8,
		September: 9,
		October: 10,
		November: 11,
		December: 12
	},
	expenses: {
		January: 1,
		February: 2,
		March: 3,
		April: 4,
		May: 5,
		June: 6,
		July: 7,
		August: 8,
		September: 9,
		October: 10,
		November: 50,
		December: 12
	},
	totalIncome: function(){
		let total = 0
		for (const key in this.incomes) {
			if (Object.hasOwnProperty.call(this.incomes, key)) {
				const element = this.incomes[key];
				total += element
			}
		}
		return total
	},
	totalExpense: function(){
		let total = 0
		for (const key in this.expenses) {
			if (Object.hasOwnProperty.call(this.expenses, key)) {
				const element = this.expenses[key];
				total += element
			}
		}
		return total
	},
	accountInfo: function(){
		return(`${this.firstName} ${this.lastName} total income = ${this.totalIncome()}, total expense = ${this.totalExpense()}`)
	},
	addIncome: function(amount){
		personAccount.incomes.Addition = amount 
	},
	addExpense: function(amount){
		personAccount.expenses.Addition = amount
	},
	accountBalance: function(){
		return(this.totalIncome() - this.totalExpense())
	}
}
personAccount.addIncome(145)
personAccount.addExpense(100)
console.log(personAccount.incomes)
console.log(personAccount.expenses)
console.log(personAccount.totalIncome())
console.log(personAccount.totalExpense())
console.log(personAccount.accountInfo())
console.log(personAccount.accountBalance())
//2.Imagine you are getting the above users collection from a MongoDB database. 
const userss = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]
//a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
const signUp = (user) => {
	for (const key in userss) {
		if (Object.hasOwnProperty.call(userss, key)) {
			const element = userss[key];
			if (element['username'] == user){
				return "You have already an account."
			}
		}
		else
			return (userss.username = user)
	}
}
console.log(signUp("Ahomaas"))
console.log(userss)
//console.log(userss)
//b. Create a function called signIn which allows user to sign in to the application