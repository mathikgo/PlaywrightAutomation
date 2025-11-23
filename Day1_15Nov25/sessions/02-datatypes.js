// /* Types of Datatypes: in JavaScript


// Primitive datatype:

// 1. number
// 2. string
// 3. boolean
// 4. undefined
// 5. Null

// Non-Primitive datatype
// 1. arrays
// 2. Objects*/

// //number

// var phoneNumber = 8797878979 //Declaration
// console.log(phoneNumber); // To print the number in the terminal
// console.log(typeof phoneNumber ) //number

// var rateOfInterest = 7.5
// console.log(rateOfInterest);// decimal value as also taken as number datatype.
// console.log(typeof rateOfInterest);

// //typeof operator

// //typeof will tell you what kind of datatype the variable in holding

// //bigint

// var population = 76868687678876876786n
// console.log(typeof population);// bigint


/* About BigInt datatype :

/* BigInt
- (2^53 - 1) to (2^53 - 1)

This range is:
-9007199254740991 to 9007199254740991

If you go beyond this range — like using:

let num = 9007199254740992;

JavaScript *can't guarantee accuracy*, and you'll get the ts(80008) warning in TypeScript because the value might be *rounded, **inaccurate, or **unexpected*.

 */

//string

var username = "ravi@testleaf.com"
var password = "@Testleaf"

console.log(username);
console.log(password);

console.log(typeof username)//string
console.log(typeof password)//string

//boolean

var validUsername = true
console.log(validUsername);
console.log(typeof validUsername) //boolean

//undefined

var accountNumber
console.log(accountNumber); //undefined
console.log(typeof accountNumber);//undefined

//Null

var middleName=null; // is left empty intentionally by the customer
console.log(typeof middleName); //it points to an object because of a HISTORICAL BUG in JavaScript from the beginning. 