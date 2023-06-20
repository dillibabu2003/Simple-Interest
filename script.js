 //               JAVASCRIPT TUTORIAL

 //duck type language
// console.log("Welcome to Programiz!");

// a=10;
// console.log(a)

// function add(a,b){
//     return a+b
// }

// var sub=function(a,b){
//     return a-b
// }

// var sub=(a,b)=>{
//     return a-b
// }

// console.log(sub(5,4))

// console.log(v)
// // name only hoisted
// var v=10

// foo();
// //whole fuction is hoisted
// function foo(){
//     console.log("Hello");
// }

// bar();
// var bar=function(){
//     console.log("Hello World");
// }




         //higher order function
// function a(b){
//     console.log("Executing higher-order function...");
//     b();
// }
// function b(){
//     console.log("Callback function executed");
// }
// a(b);



// function multiplyBy(factor){
//     return function(number){
//         return number*factor;
//     };
// }

// var multiplyByTwo = multiplyBy(2);
// let res = multiplyBy(3)(5);
// console.log(multiplyByTwo(5));
// console.log(res);


// const greet=(s1)=>{
//     return function fun1(s2){
//         return `${s1} ${s2}`;
//     };
// }


// let name='Ram'
// let ans=greet('hello')(name);
// console.log(ans);

// const str="Tony Starkrqopqr"
// const letter='n'
// const index=str.indexOf(letter);
// console.log(index);

// const reverse=(str)=>{
//     rev="";
//     for(let i=str.length-1;i>=0;i--)
//     {
//         rev+=str[i];
//     }
//     return rev;
    
// }

// var s1="hello world";
// var s2=s1.split("").reverse().join("");
// console.log(s2);

// const result=reverse('browser');
// console.log(result);

// var arr=[1,2,3,6,7];
// var arr2=new Array(arr)

// arr.push(4);
// console.log(arr)

// arr.pop();
// console.log(arr)

// arr.unshift(0);
// console.log(arr);

// arr.shift();
// console.log(arr);


// var myArray=[0,1,2,3,4,5,6,7,8,9];
// var sp=myArray.splice(3,5);
// console.log(sp);
// console.log(myArray);

// var arr1=[1,2,3,4,5];
// arr1.push(6,7,8,9,10);
// console.log(arr1);
 
//  var arr2=arr1.splice(0,4)
//  console.log(arr2);


          //titlecase problem
// const titleCase=(mySentence)=>{
//         const words = mySentence.split(" ");
//         for (let i = 0; i < words.length; i++) {
//             words[i] = words[i][0].toUpperCase() + words[i].substr(1);
//         }
//         return words.join(" ");
// }

// const mySentence = "hi this is me";
// const ans=titleCase(mySentence);
// console.log(ans);

   
           //Anagram

// const isAnagram=(str1,str2)=>{
//     let s1=str1.split("").sort().join("");
//     let s2=str2.split("").sort().join("");
//     return s1===s2;
// }

// let s1="dog";
// let s2="god";
// if(isAnagram(s1,s2)){
//     console.log(`${s1} and ${s2} are Anagram`);
// }else{
//     console.log(`${s1} and ${s2} are Not Anagram`);
// }


               //Replace a character
// const replace=(str,tar,char)=>{
//     return str.replaceAll(tar,char);
// }
// let str1="Hello World";
// let ans=replace(str1,'o','a');
// console.log(ans);



              //Replace a character
// const replace=(str,tar,char)=>{
//     return str.split(tar).join(char);
// }
// let str1="Hello World";
// let ans=replace(str1,'o','a');
// console.log(ans);



           //Call Back function -> a fuction which is passed as argument
     
// setInterval(function(){
//     console.log("Done!");
// },5000);


// var callback=function(){
//     console.log("Done!");
// }
// setTimeout(callback,5000);
// console.log("main");


// let i=1;
// var control=setInterval(function(){
//      console.log(i++);
//      if(i==6){
//         //return;
//         clearInterval(control);
//     }
   
// },3000);


       





 
 

