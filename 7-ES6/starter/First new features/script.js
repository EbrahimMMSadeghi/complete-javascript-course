/*
 * Let & const
 */
/*
// ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5); // Returns Jane Miller

// ES6
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller'; // Error
console.log(name6);
*/

// Driver's Licence
    //ES5
    /*
    function driversLicence(passedTest) {
        if(passedTest){
            var firstName = 'John';
            var yearOfBirth = 1990;

            console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.')
        }
    }

    driversLicence(true);
    */

    //ES6
    /*
    function driversLicence6(passedTest) {
        if(passedTest){
            let firstName = 'John';
            const yearOfBirth = 1990;

            console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.')
        }
     }

    driversLicence6(true);
    */

// If you use a let or const before declared - error
// If you use a var before declared - undefined


/*
 * IIFEs
 */

 //ES5 IIFE
 (function(){
    var c = 3;
 })();
 //console.log(c); // Gives error

 //ES6 block
 {
     const a = 1;
     let b = 2;

     var d = 4;
 }
 //console.log(a+b); // Gives error
 console.log(d); // Gives 4


 /*
 * Strings
 */

 let firstName = 'John';
 let lastName = 'Smith';
 const yearOfBirth = 1990;

 function calcAge(year) {
     return 2019 - year;
 }

 // ES5
 console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today he is ' + calcAge(yearOfBirth) + ' years old.');

 // ES6
 console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years old.`);

 const n = `${firstName} ${lastName}`;
 console.log(n.startsWith('J')); //True
 console.log(n.startsWith('j')); //False
 console.log(n.endsWith('th')); //True
 console.log(n.includes(' ')); //True
 console.log(n.includes('oh')); //True

 console.log(firstName.repeat(5)); //JohnJohnJohnJohnJohn
 console.log(`${firstName} `.repeat(5)); //John John John John John 

/*
 * Arrow functions
 */

 const years = [1990, 1965, 1982, 1937];

 // ES5
 var ages5 = years.map(function(el) {
    return 2019 - el;
 });
 console.log(ages5);

 // ES6
 let ages6 = years.map(el => 2019 - el);

 ages6 = years.map((el, index) => `Age element ${index + 1}: ${2019 - el}.`);

 ages6 = years.map((el, index) => {
     const now = new Date().getFullYear();
     const age = now - el;
     return `Age element ${index+1}: ${age}`;
 })

// Arrow functions do not have a '.this' keyword

// ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        document.querySelector('.green').addEventListener('click', function() {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}

box5.clickMe();
// This is going to return undefineds

var box5b = {
    color: 'green',
    position: 1,
    clickMe: function() {
        
        var self = this;
        document.querySelector('.green').addEventListener('click', function() {
            var str = 'This is box number ' + self.position + ' and it is ' + self.color;
            alert(str);
        });
    }
}

box5b.clickMe();
// Now this works


// ES6
var box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        
        document.querySelector('.green').addEventListener('click', () => { // Share the lexical keyword of its parent
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}

box6.clickMe();

function Person(name){
    this.name = name;
}

// ES5
Person.prototype.myFriends5 = function(friends) {
    var arr = friends.map(function(el){
        return this.name + ' is friends with ' + el;
    }.bind(this)); // Use bind so that this. works

    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);

// ES6 my solution
Person.prototype.myFriends6 = function(friends) {
    var arr = friends.map((el) => {
        return this.name + ' is friends with ' + el;
    }); // Works

    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends6(friends);

// ES6 v2
Person.prototype.myFriends6 = function(friends) {
    var arr = friends.map(el => `${this.name} is friends with ${el}`); // Works

    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('Mike').myFriends6(friends);