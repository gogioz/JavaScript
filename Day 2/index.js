//  var temp = prompt("enter today's temperature");

//  if (temp >= 30) {
//     console.log("It's HOT");
//  }
//  else if (temp <= 30) {
//     console.log("It's COLD");
//  } else {
//     console.log("Today's Great");
//  }

 /////////////////////////////////////////////////////////////////////////

// var temp = prompt("enter today's temperature");
// var temp1 = prompt("enter today's actul feel");

// if (temp >= 30 && temp1 >= 30) {  
//    console.log("Hot");
// }
// else if (temp <= 25 && temp1 <= 25) {
//    console.log("Cold");
// } else if (25 <= temp <= 30 && 25 <= temp1 <= 30){
//    console.log("Normal");
// }

/////////////////////////////////////////////////////////
// var faculty = prompt("What's Your Faculty");

// switch (faculty) {
//     case "FCI":
//          console.log("You’re eligible to Programing tracks");
//          break;
//     case "Engineering":
//         console.log("You’re eligible to Network and Embedded tracks");
//         break;
//     case "Commerce":
//         console.log("You’re eligible to ERP and Social media tracks");
//         default: 
//         console.log("You’re eligible to SW fundamentals track")
// }

//////////////////////////////////////////////////////////////

// for (var i=0;i<=9;i++) {
//    if (i % 2 != 0){
//        console.log(i);
//    } 
// }
////////////////////////////////////////////////////////////////////////////

// var Name = prompt("Type your Name");
// var birthYear = prompt("Type your birth year");
// while (eval(birthYear) > 2010){
//     birthYear = prompt("You have to be born before 2010 to sign up"); 
// }

// var age = 2022 - birthYear;
//  console.log(Name);
//  console.log(birthYear);
//  console.log(age);
//////////////////////////////////////////////////////////////////////////////

// var X = prompt("Type the value of x");
// var Y = prompt("Type the value of y");
// var Z = prompt("Type the value of z");

// if (X = Y && Y == Z && X == Z) {
//     console.log("It's a equilateral triangle");
// } else if ((X > 0 && Y > 0 && Z >0 ) && (X == Y || Y == Z || Z == X)) {
//     console.log("It's a isosceles triangle");
// } else {
//     console.log("It's a Scalene Triangle triangle");
// }
/////////////////////////////////////////////////////////////////////////////

// Create an array that hold the following students grades: 60, 100,10,15,85, and handle the following:
// a.	 find the highest student degree 
// b.	Print the grades of all students with grades below 60.

// var array = [60, 100, 10, 15, 85];
//  console.log(Math.max(...array));
//  array.sort(function(x,y){return x-y})
//  for (var i=0;array[i]< 60;i++) {
//      console.log(array[i]);
// }
///////////////////////////////////////////////////////////////////////////////
// AliBaba was given 44 numbers. His task was to check whether he could get the fourth
// number by using the arithmetic operators (+,−,×) between the other three numbers.
// Knowing that an operator can be used only once.
// a□b□c=d
// Sadly, AliBaba was really bad at math and he asked you to help him solve this puzzle.
// Input a: 3
// Input b: 4
// Input c: 5
// Input d: 23
// Output: yes
//  var a = prompt("put the value of a");
//  var b = prompt("put the value of b");
//  var c = prompt("put the value of c");
//  var d = prompt("put the value of d");

//  if (a + (b - c) == d || a + (b * c) == d ||
//      a - (b + c) == d || a - (b * c) == d ||
//      a * (b + c) == d || a * (b - c) == d) {
     
//     console.log("Yes");
//  } else {
//      console.log("No");
//  }