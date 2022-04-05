var bankAccountBalance = 52.10;

var firstName = "Tom";
var lastName = 'Sawyer';

var numberOfFriends = 5;

var isHotOutside = false;
var isHappy = true;

console.log('Hello World');

console.log(5 + 3);
console.log(4 - 2);
console.log(6 * 7);
console.log(8 / 2);

console.log(bankAccountBalance - 30);
console.log(bankAccountBalance * numberOfFriends);

console.log(5 == 5);
console.log(5 == 6);
console.log(bankAccountBalance == numberOfFriends);
console.log(bankAccountBalance == 52.10);
console.log(numberOfFriends == 4);

var x = 35;
var y = "20";
var z = x + y;
console.log(z); //when you print this you will get 3520 but the value 
// of z is "3520" because you are concantenating the two variables


var num1 = 42;
var num2 = 10;

//write your code here
console.log((num1 - num2) * 16 );

var x = 8;
var y = 12;
x = y + x
var z = x + y;
console.log(z);



var Name = "Doreen";

for (var i = 0; i < 10; i++){
    for (var j = 0; j < 3; j++)
    console.log(Name)} //this prints out Doreen 30 times; in this loop the conditions are met to be true in the first 'for' statement,
    //so Doreen would print 10 times but the conditions are met in the second 'for' statement which makes the first 'for' statement repeat
    //3 times; so basically 10 'Doreen's will print 3 times to make a total of 30 times.

var x = 5;
var y = 6;
x = 3 +y
var z = x + y;
y = 5 + 2*x
x = y
console.log(z);

var a;
var b = 38;
var c = a + b;
console.log(c); //this prints out a NaN because it's a failed math problem

var m = 37;
console.log(m / 0);

console.log(0 / 0);

console.log(-37 / 0);

var lastName = "Hosk";
var age = 65;

var person = {
    lastName: "Hosk",
    age: 65
};
console.log(person);

//Dot Notation
person.lastName = "Hoskins";
console.log(person);
console.log(person.lastName);

//Bracket Notation
person["lastName"] = "Smith";
console.log(person.lastName);

//arrays
//let selectedColors = []; This is an empty array.
let selectedColors = ['red', 'blue'];  //red and blue are elements
console.log(selectedColors);
console.log(selectedColors[0]); //This prints only red

//Lengths of arrays and types of objects in an array can change because they are Dynamic
selectedColors[2] = 'green'; //we're  ll see (3) ['red', 'blue', 'green']

//can change the type of one of the objects in an array
selectedColors[2] = 1;
console.log(selectedColors);

console.log(selectedColors.length);

//functions
//function declaration: curly brackets
//body of function: what's inside the curly brackets; statements that define logic in our application
//Examples below to line 132 are for Performing a Task
function greet() {
    console.log('Hello World');
}

//calling the function
greet(); //calling the function; need this to actually see Hello World in the console

//adding parameters and arguments to functions
function greeting (nickname){ //nickname is a parameter; a variable that is only meaningful inside the function
    console.log('Hello ' + nickname);
}
greeting('Dora'); //Dora is an argument to the greeting function; the actual value we supply for the nickname parameter
greeting('goofball');

//a function can have multipe parameters
function greeting (nickname, maidenName) {
    console.log("Hello " + nickname + ' ' + maidenName);
}
greeting('Dora', 'Hoskins'); //if you forget to add a value here to the added variable or parameter maidenName
//you will return an undefined in the console for that variable but Dora will show up

//example of function that calculates a value
function square(number) {
    return number * number;   
}
let number = square(2);
console.log(number);

//don't have to assign square(2) to the variable number like line 138
function square(number) {
    return number * number;
}
console.log(square(2)); //there are two function calls: square(2) and also console.log  Calling the log function and passing an expression,
//the expression can be a call to another function like square(2)

