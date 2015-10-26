//Once you complete a problem, open up Chrome and check the answer in the console.


//Create an object called me. Give it a key of name with the value being your name, and another key of age with the value being your age. Then alert your name using dot notation.

var me = {
  name: "Tom",
  age: 22,
}
console.log(me.name);



//NEXT PROBLEM




//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category.

var favoriteThings = {
  band: "Kygo",
  food: "Pizza",
  person: "Mr Rogers",
  book: "Wheel of Time",
  movie: "Grandma's Boy",
  holliday: "Christmas",
}


//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.

favoriteThings.car = "Tesla";
favoriteThings.brand = "Nike";


//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your favoriteThings object to be '50 Shades of Gray'.

favoriteThings.food = "Lettuce";
favoriteThings.book = "50 Shades of Gray";



//NEXT PROBLEM



/*Create an empty Object called backPack. Now, create a variable called 'item'
and set it equal to the string 'firstPocket'. Using bracket notation,
add a 'firstPocket' key (or property) to backPack, using 'item'.
Set the value of that key to 'chapstick'.

Using dot notation, add another key (or property) to your backPack object
that is named color, with the value being the color of your backpack. */

var backPack = {};
var item = "firstPocket";
backPack[firstPocket] = item; 

//After you do the above, alert your entire backPack object.

alert(backPack);

/*You probably noticed that it just alerted [object Object].
Alerting to see the data in your Object doesn't work so well.
Instead, console.log your whole backPack object and then check out the console. */

console.log(backPack);




//NEXT PROBLEM




//Create another 'me' object with the following properties name, age, height, gender, married, eyeColor, hairColor. Fill those properties in with the appropriate values.

var me = {
  name: "Tom",
  age: 22,
  height: "5feet9inches",
  gender: "male",
  married: false,
  eyeColor: "brown",
  hairColor: "brown",
}

//Now, loop through your object and alert every value. *Tyler --> 24 --> 6'0 --> Male, etc etc

for (var prop in me) {
  alert(me[prop]);
}




//NEXT PROBLEM




//Create an Object called 'album' with 5 keys named different song titles that you make up, with the values being the length of each song.

var album = {
  track1: 2.22,
  track2: 3.33,
  track3: 4.44,
  track4: 3.55,
  track5: 4.22,
}

//Now, loop through your album object alerting every song title individually.

for(var prop in album){
  alert(prop);
}




//NEXT PROBLEM




//Create an object called states that has 5 US states as properties with the values being their population (doesn't have to be accurate).

var states = {
  MD: 5000000,
  CA: 20000000,
  TX: 18000000,
  FL: 14000000,
  PA: 7000000,
}

//Now, loop through your states object and if the states population is greater than 30K, alert that state.

for(var prop in states){
  if(states[prop] > 7500000) alert(prop);
}




//NEXT PROBLEM




var user = {
    name: 'Tyler McGinnis',
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}
for(var prop in user){
  if(!user[prop]){
    delete user[prop];
  } 
}
console.log(user);
/*Above you're given a user object. Loop through the user object checking to make sure
that each value is truthy. If it's not truthy, remove it from the object. */


//Once you get your truthy Object, Change the remaining values in the object to be specific to you (name: 'your name', username: 'your username'), rather than my information.

user.name = "Tom Adair";
user.username = "thada001";
console.log(user);


//NEXT PROBLEM




var user = {
        name: 'Tyler McGinnis',
        age: 24,
        pwHash: 'U+Ldlngx2BYQk',
        email: 'tylermcginnis33@gmail.com',
        birthday: '05/02/1990',
        username: 'tylermcginnis33',
        sayName: function(){
            alert('Email is : ' + this.email);
        }
};
user.name = "Tyler S. McGinnis";
user.email = "tyler.mcginnis@devmounta.in";
user.sayName();
//Let's say I, the user, decided to change my name and email address to the following
// name -> 'Tyler S. McGinnis', email -> 'tyler.mcginnis@devmounta.in'. Make that change.

user.name = "Tyler S. McGinnis";
user.email = "tyler.mcginnis@devmounta.in";

//Now call the sayName method that's on the user object which will alert the users email

sayName();




//NEXT PROBLEM




//Create an empty object called methodCollection.

var methodCollection = {};

/*Now add two methods (functions that are properties on objects) to your methodCollection
object. One called 'alertHello' which alerts 'hello' and another method called logHello
 which logs 'hello' to the console. */

methodCollection.alertHello = function() {
  alert("hello");
}
methodCollection.logHello = function() {
  console.log("hello");
}

//Now call your alertHello and logHello methods.

methodCollection.alertHello();
methodCollection.logHello();


//NEXT PROBLEM



// Create a function called MakePerson which takes in name, birthday, ssn as its parameters and returns a new object with all of the information that you passed in.

function MakePerson(name, bday, ssn) {
  var newObject = {};
  newObject.name = name;
  newObject.bday = bday;
  newObject.ssn = ssn;
  return newObject;
}
function MakeCard(name, number, exp, sec) {
  var newCard = {};
  newCard.nameOnCard = name;
  newCard.number = number;
  newCard.exp = exp;
  newCard.sec = sec;
  return newCard;
}
var bindCard = function(person, creditcard) {
  for (var prop in person) {
    creditcard[prop] = person[prop];
  }
  return creditcard;
}
var a = MakePerson("Tom", "10/11", "12345");
var b = MakeCard("TomA", "123456", "9/19", "123");
console.log(bindCard(a, b));
//NEXT PROBLEM



// Create a function called MakeCard which takes in all the data it needs to make a Credit Card object and returns that object so that whenever you invoke MakeCard, you get a brand new credit card.


  
  
  
//NEXT PROBLEM



/* As of this point you should have a MakePerson and a MakeCard function which returns you either a person or a credit card object.
   Now, create a bindCard function that takes in a person object as its first parameter and a creditcard object as its second parameter.
   Have bindCard merge the two parameters together into a new object which contains all the properties from the person as well as the creditcard.
*/




