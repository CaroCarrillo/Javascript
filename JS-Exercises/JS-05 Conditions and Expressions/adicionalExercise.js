/*

Additional Exercises
What is shown on the console when f is console.log'd?*/

var a;
var b = null;
var c = undefined;
var d = 4;
var e = 'five';
var f = a || b || c || d || e;

console.log(f);//the letter ¨d" printed 4