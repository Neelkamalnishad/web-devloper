// //for loop the js example 
// for (let  i = 1; i<=5; i++){
//     console.log("i = ", i);
//     console.log("anpa college");
// }

// console.log("block code is ended here");  


// /* code for the hile loop in java script*/
//  let i = 1;
//  while(i<=5){ //stoping the code for the while loop//
//     console.log("apna college");
//     i++;
//  }
//  console.log("end the code for the while loops"); 

// /*  code for the do while loops in java script*/
// let i =1;
// do{
//     console.log("hello i am neelkamal and do it");
//     i++;
// }while(i<=5); 
// /* for of loops in javascript example*/

// let str= "neelkamal";
// let size= 0;
// for(let i  of str){
//     console.log("i = ", i);
//     size++;
    
// }
// console.log("size = ", size);


// // for in loop javascript
// // object to create for the loop for in 
// let student = {
//     name : "neelkamal",
//     age : 20,
//     cqpa: 47.5,
//     stpass: true,
// };

// for(let key  in student){
//     console.log("key = ", key,  "value = ", student[key]) ;
//  }


// //practice the questios 1
// // print the number 0 to 100 and print even nmber only for he 100;
// for(let num = 0; num<=100; num++){
//     if(num%2===0){// chec for the even nuber only
//         console.log("num = ", num);
//     }
// }

// //practice the question2
// //print the number 0 to 100 and print odd number only for the 100;

// for(let num = 0; num<=100; num++){
//     if(num%2!==0){
//         console.log("num = ", num);
//     }
// }



// // print for the piramide with the help of the for loop
// for(let i =1 ; i<=5; i++){
//     let str = " ";
//     for (let j = 1; j<=5-i; j++){
//         str += "*";
//         console.log(str);
//     }
// }





// string method for the 
///lowercase and upper case conversionj
let str = "NEELKAMAL";
let str1 = str.toLowerCase();
console.log(str1);


let strnew = "neelkamal";
let str2 = strnew.toUpperCase();
console.log(str2);


///trim method for remove the extra dpace form the string ;
let str3 = "          neelkmal is a good boy             ";
str3 = str3.trim();
console.log(str3);

///concat method for the concatenation of two string 
let str4 = "neelkamal";
let str5 = "is a good boy";
let str6 = str4.concat(str5);
console.log(str6);

///length method for the length of the string 
let str7= "neelkamal";
console.log("lengthof the string =", str7.length);

///substring method for the substring of the string
let str8 = "neelkamal is a good boy";
let str9 =str8.substring(0,10);
console.log(str9);

//replace method for the replace of the string 
let str10 = "neelkamal is a good boy ";
str10 = str10.replace("good boy ", "great boy i am neely ");
console.log(str10);



///enter a prompt for the user ot enter the string and print the length of the string 
let fullname = prompt("Enter your full name without space ");
let username = "@" +  fullname +fullname.length;
console.log(username);











