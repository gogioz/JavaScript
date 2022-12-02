//  var array= ["Egypt","China","Brazil","USA","Spain","Korea","Sudan","America","Paris","Italy"]
//  var arr = array[Math.floor(Math.random() * array.length)]
//  console.log(arr);
/////////////////////////////////////////////////////
// var date = new Date();
// 	var date1 = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();
// 	var time = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
// 	var date_time = date1+" "+time;	
// 	console.log(date_time);
/////////////////////////////////////////////////////
// var email =  prompt("Please Enter Your Email");

// while (email.indexOf("@") == -1) {
//     email =  prompt("Please Enter Your Email");
//     console.log(email)
// }
/////////////////////////////////////////////////////////////
// var birthDate = prompt("enter the date in the following format (DD – MM – YYYY)");
// var isFormat = birthDate[2] == "-" && birthDate[5] == "-";
// console.log(birthDate)
// while (!isFormat) {
//      alert("wrong date format");
//      abirthDate = prompt("enter the date in the following format (DD – MM – YYYY)"); 
//      isFormat = abirthDate[2] == "-" && abirthDate[5] == "-";
//      console.log(birthDate) 
// }
// var splitDate = birthDate.split("-", 3)
// var day = splitDate[0];
// var month = splitDate[1];
// var year = splitDate[2];
// var date = new Date(year,month,day);
//  alert(date.toISOString())
//////////////////////////////////////////////////////
// var students =
// [{name:"hager", degree: 76},
// {name:"sara", degree: 95},
// {name:"ahmed", degree: 70},
// {name:"omar", degree: 91},
// {name:"mariam", degree: 60}]
// for (var i = 0; i < students.length; i++) {
//     if (students[i].degree < 100  && students[i].degree > 90) {
//         console.log(students[i].name)
//     }
// }
// var newarr = {name: "sayed", degree: 65}
// students.push(newarr);
// students.pop();
// console.log(students);