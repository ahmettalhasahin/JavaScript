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

/* 1.Using console.log() print out the following statement:
The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another. */
console.log("\nThe quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")

/* 2.Using console.log() print out the following quote by Mother Teresa:
"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead." */
console.log("\n\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"")

//3.Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log("\n")
console.log('10' === 10)
console.log(parseInt('10') === 10)

//4.Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log("\n")
let num = Math.round('9.8')
console.log(num == 10)

//5.Check if 'on' is found in both python and jargon
console.log("\n")
console.log("phyton".includes("on") && "jargon".includes("on"))

//6.I hope this course is not full of jargon. Check if jargon is in the sentence.
console.log("\n")
let jargon = "I hope this course is not full of jargon."
console.log(jargon.includes("jargon"))

//7.Generate a random number between 0 and 100 inclusively.
console.log("\n")
console.log((Math.random())*100)

//8.Generate a random number between 50 and 100 inclusively.
console.log("\n")
console.log(((Math.random())*50) + 50)

//9.Generate a random number between 0 and 255 inclusively.
console.log("\n")
console.log(Math.random() * 255)

//10.Access the 'JavaScript' string characters using a random number.
console.log("\n")
let index = Math.floor(Math.random() * 10)
let str = "JavaSCript"
console.log(str[index])

/*11.Use console.log() and escape characters to print the following pattern.
1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125 */
console.log("\n1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125")

//12.Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log("\n")
let slice = 'You cannot end a sentence with because because because is a conjunction'
console.log(slice.indexOf("because"))
let first = slice.substr(0,31)
console.log(slice.lastIndexOf("because"))
console.log("because".length)
console.log(slice.length)
let second = slice.substr(slice.lastIndexOf("because") + ("because".length) + 1)
console.log(first.concat(second))
//Level 3

//1.'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let sentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log("\n"+sentence)
let love = sentence.match(/love/gi)
console.log(love.length)

//2.Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log("\n")
let count = 'You cannot end a sentence with because because because is a conjunction'
console.log(count.match(/because/gi).length)

/*3.Clean the following text and find the most frequent word (hint, use replace and regular expressions).
    const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching' */
console.log("\n")
let cleaner = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log(cleaner.replace(/\%|\$|\@|\&|\#|\;/gi,''))

//4.Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
console.log("\n")
let array = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let counter = array.match(/\d+/g)
console.log(counter)
let salary = (counter[0] * 12) + parseInt(counter[1]) + (counter[2] * 12)
console.log(salary)
