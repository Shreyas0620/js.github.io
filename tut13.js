// var str="This is a string"
    // var newstr=str.charCodeAt(0);  
    // console.log(newstr)



    // var string1="this is a string one "
//  let age =18;

// if ,else and else if case here 👇

//  if(age>=18){
//     console.log("you can drink water")
//  }
// else if(age===2){
//     console.log("age is 2")

// }
// else if(age===18){
//     console.log("age is 18")

// }
//  else{
//     console.log("you can drink what you want")
//  }

// switch cases here 👇

// const cups = 4;
// switch (cups) {
//     case 4:
//         console.log("the value of cup is 4")
//         break;

//     case 10:
//         console.log("the value of cup is 10")
//         break;

//     case 20:
//         console.log("the value of cup is 20")
//         break;

//     case 45:
//         console.log("the value of cup is 45")
//         break;

//     default: 
//     console.log("this number is not listed in data")
//         break;
// }

// arrays and other functions 👇

// let names=[["shreyas "],[ "shreyas",0,50]];
// names= new Array("hsreywh0kl",0.55);
// names=new Array(23,45);
// names=names.sort()
// names=names.push("tius is pushed")
// console.log(names);

// greet function 👇

// let  name=" shreyas"
// let  name1=" pushkar"
// let  name2=" morining"
// let  name3=" toast"
// let greetText="good afternoon"
// function greet (name ,greetText){
//     console.log(greetText  + name + " welcome to our site")
//     // console.log(name + " is a good boy")
// }
// greet(name , greetText);
// greet(name1 , greetText);
// greet(name2 , greetText);
// greet(name3 , greetText);

// alert prompt and confirm 👇

// let name = prompt("what is your name?" ,"Guest");
// console.log(name);

// let deletePost = confirm("do you really want to delete this post?");

// if(deletePost){
//     console.log("Your Post Has been delete")
// }
// else{
//     console.log("not Deleted")
// }
// console.log(deletePost)

// while for and other js loop 👇

// let age=prompt(" confirm your age here")



//  if(age>=18){
//     console.log("you are allowed to enter this club")

//  }
//  else{
//     console.log("you are not allowed")
//  }


// let friends=["shreyas" ,"skillf" , 23];
// for (let index = 0; index < friends.length; index++) {
//     console.log("hello Friend " + friends[index]);
    
// }

// friends.forEach(function f(element){
//     console.log("Hello friend " + element + " to modern JS")

// });
// for ( element of friends){
//     console.log("Hello friend " + element + " to modern JS")
// }


// let employee ={
//     name : "Shreyas",
//     Ep_Id: 8486548,
//     job: "FSD"
// }
// for( key in employee){
//     console.log(`the ${key} of employee is ${employee[key]}`)
// }


// let i =0;
// while(i<4){
//     console.log(`${i} i is less than 4`);
//     i++;
// }


// console.log("This is a console")
// setTimeout = ()=>{
    

// }
// function greet(){
//     console.log("Hello Kid")

// }
// setTimeout(greet, 5000);

// arrow function 👇

// let obj={
//     names : ["BMW" , "AUDI" , "MERCEDES" , "DODGE"],
//     cars(){
//         this.names.forEach((names)=>{
//             console.log("These are the best Cars from " + names);
//         });
//     }
// }
// obj.cars();

// lexical this 👇

// let obj={
//     greeting: "Hello Buyers, " ,
//     names : ["BMW" , "AUDI" , "MERCEDES" , "DODGE"],
//     cars(){
//         this.names.forEach((names)=>{
//             console.log( this.greeting + "These are the best Cars from " + names);
//         });
//     }
// }
// obj.cars();

// math object 👇

// let m = Math;

// console.log("The Value of Math.E is " , Math.E)
// console.log("The Value of Math.PI is " , Math.PI)
// console.log("The Value of Math.LOG2E is " , Math.LOG2E)
// console.log("The Value of Math. is QRT1_2" , Math.SQRT1_2)
// console.log("The Value of Math.LN2 is " , Math.LN2)

// printing the functions from Math Object 
// let a=55.2654656
// let b=654.9554845;

// console.log("The Value of a and b rounded id" , Math.round(a),Math.round(b))
// console.log("6 to the power 6 is" , Math.pow(6,6))
// console.log("The square root of 78 is",Math.sqrt(78))

// trigo functions

// console.log("The Value of sin(Pi) ", Math.sin(Math.PI/2))
// console.log("The Value of cos(Pi) ", Math.cos(Math.PI/6))
// console.log("The Value of tan(Pi) ", Math.tan(Math.PI/4))


// Generating Random Number 

// console.log("The random Number is ", Math.random());
// let r = 0 + (100 - 0)*Math.random();
// console.log("Here are the random Numbers between zero to hundred", parseInt(r))
