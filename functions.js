///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
////    ______                _   _                ////
////    |  ___|              | | (_)               ////
////    | |_ _   _ _ __   ___| |_ _  ___  _ __     ////
////    |  _| | | | '_ \ / __| __| |/ _ \| '_ \    ////
////    | | | |_| | | | | (__| |_| | (_) | | | |   ////
////    \_|  \__,_|_| |_|\___|\__|_|\___/|_| |_|   ////
////                                               ////
////                                               ////
////    ______               _   _                 ////
////    | ___ \             | | (_)                ////
////    | |_/ / __ __ _  ___| |_ _  ___ ___        ////
////    |  __/ '__/ _` |/ __| __| |/ __/ _ \       ////
////    | |  | | | (_| | (__| |_| | (_|  __/       ////
////    \_|  |_|  \__,_|\___|\__|_|\___\___|       ////
////                                               ////
////                                               ////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////


// Q1
// Write a function called `sum` that takes two
// parameters and returns the sum of those 2 numbers.


var sum = function(a, b) {
  var z = a + b;
  console.log(z);
}

sum(2,5)

// Q2
// Write a function named `avg` that takes 3 parameters
// and returns the average of those 3 numbers.

var avg = function (a, b, c) {
  var z = (a + b + c)/ 3;
  console.log(z);
}

avg(2, 4, 6)

// Q3
// Write a function called `getLength` that takes one
// parameter (a string) and returns the length

var getLength = function(a){
    var z = a.length;
    console.log (z);
}

getLength("jase rader")

// Q4
// Write a function called `greaterThan` that takes
// two parameters and returns `true` if the second
// parameter is greater than the first. Otherwise
// the function should return `false`.

var greaterThan = function(a, b) {
  if (a < b) {
    console.log (true);
  } else {
    console.log(false);
  }
}

greaterThan(4, 5)

// Q5
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.

var great = function(name) {
  console.log("Hello " + name + "!");
}

great("Jase")

// Q6
// Write a function called `madlib` that takes
// 4 or more parameters (words). The function
// should insert the words into a pre-defined
// sentence. Finally the function should return
// that sentence.
// Note: When I say words and sentence I mean
// strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"

var madLib = function(a, b, c, d) {
  console.log("The " + a + " green sea " + b + " crawls " + c + " to the deep dark " + d +'.')
}

madLib("tiny", "turtle", "slowy", "ocean")
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
