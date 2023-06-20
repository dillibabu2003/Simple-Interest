 
 //********************************************************DAY 1**********************************************************//

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
// let ans=replace(str1,'a','o');
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
         


//********************************************************DAY 2******************************************************************************//

    // Synchronous and Asynchronous Example
// setTimeout(()=>{
//     console.log("1")
// },0)
// console.log('2')


      //for of loop
// let arr=[11,2,30]
// for(var ele of arr){
//     (ele%2===0)?console.log(`${ele} is even`):console.log(`${ele} is odd`);
// }


// let arr=[1,2,3,4];
// arr.splice(2,1);
// console.log(arr);


// let arr=new Array(1,"raju",[1,2,3]);
// console.log(arr);


// let arr=new Array(5);
// arr[2]=1;
// console.log(arr)



// const multiply=(arr,num)=>{
//     let ans=[];
//     arr.forEach((element)=>ans.push(element*num));
//     return ans;
// }
// let ans=multiply([1,2,3,4],2);
// console.log(ans);


               //MAP
               
// const multiply=(arr,num)=>{
//     let ans=arr.map((element)=>element*2);
//     return ans;
// }
// let ans=multiply([1,2,3,4],2);
// console.log(ans);


// one line -> implicit return
// const oddEven=(arr)=>{
//     let ans=arr.map((ele)=>(ele%2 === 0)?"Even":"Odd");
//     return ans;
// }
// const res=oddEven([1,2,3,4])
// console.log(res)

            //FILTER
// const filterEven=(arr)=>{
//     let ans=arr.filter((element)=>element%2===0);
//     return ans;
// }

// const res=filterEven([1,2,3,4,5,6])
// console.log(res)

// const arr1=[1,2,3]
// const arr2=arr1
// console.log(arr1===arr2);
// arr1[0]=10
// console.log(arr1===arr2);
// console.log('arr1=>',arr1);
// console.log('arr2=>',arr2);

            //SPREAD OPERATOR
// const arr1=[1,2,3]
// const arr2=[...arr1];
// console.log(arr1===arr2);
// arr1[0]=10
// console.log(arr1===arr2);
// console.log('arr1=>',arr1);
// console.log('arr2=>',arr2);

        //SPREAD OPERATOR JOINING MULTIPLE ARRAYS
// const arr1=[1,2,3]
// const arr2=[4,5,6]
// const arr3=[...arr1,...arr2];
// console.log(arr3);



            //DESTRUCTING
// const arr1=[1,2,3];
// const [a,b,c]=arr1;
// console.log(a,b,c);

// const [a,b]=arr1;
// console.log(a,b);

// const [_,a,b]=arr1;
// console.log(a,b);

// arr2=[1,2,3,4,5,6]
// const[a,b,...rest]=arr2;
// console.log(a,b,rest)



         //OBJECTS
// var emptyObj={}
// var personObject={
//     firstName:"john",
//     lastName:"smith"
// }
// personObject.age=23;
// personObject["salary"]=50000;
// console.log(personObject)


// const student={
//     name:"Ram",
//     cls:"cls",
//     marks:{
//         english:90,
//         maths:100,
//         science:75
//     }
// }
// const sub="maths";
// console.log(student.marks.maths)
// console.log(student.marks[sub])

// const printMarks =(obj,sub)=>{
//     return `${obj.name}'s ${sub} mark is ${obj.marks[sub]}`;
// }
// console.log(printMarks(student, "science"));




// console.log(1+'2')
// console.log(1+true)
// console.log('1'+true)
// console.log(2*false)


                  //OBJECT DESTRUCTION
// const obj={
//     name:'sneha',
//     age:22,
//     height:5
// }
// :  ->alias name
// =  ->default value
// const {age,name:n,height:h=5.9}=obj

// console.log(age,n,h)
// console.log(obj.mark)  //undefined
// console.log(obj.mark.maths) //throws error
            //  |
            //  |
            //  |->to overcome this we can use or operator
// const address=obj.address||{}
// console.log(address.state)
// const {address={state:'TN'}}=obj


            //ES11 feature => ?. to overcome the above problem
// console.log(obj?.address?.state || 'TN')



                //FOR IN LOOP -> can access only keys
// for(var key in obj){
//     console.log(key+":"+obj[key]);
// }




// console.log(1+'2')
// console.log(1+true)
// console.log('1'+true)
// console.log(2*false)


                  //OBJECT DESTRUCTION
// const obj={
//     name:'sneha',
//     age:22,
//     height:5
// }
// :  ->alias name
// =  ->default value
// const {age,name:n,height:h=5.9}=obj

// console.log(age,n,h)
// console.log(obj.mark)  //undefined
// console.log(obj.mark.maths) //throws error
            //  |
            //  |
            //  |->to overcome this we can use or operator
// const address=obj.address||{}
// console.log(address.state)
// const {address={state:'TN'}}=obj


            //ES11 feature => ?. to overcome the above problem
// console.log(obj?.address?.state || 'TN')



                //FOR IN LOOP -> can access only keys
// for(var key in obj){
//     console.log(key+":"+obj[key]);
// }


             


// const obj=[{
//     name:"Ram",
//     age:22,
//     height:5
// },{
//     name:"Nandha",
//     age:25,
//     height:6.1
// }]

// //my solution
// obj.map((user)=>user.age+=2)
// console.log(obj)


//solution
// const res=obj.map(
//     (user)=>{
//     return {...user,age:user.age+2}
//      }
// )

// console.log(res)

// const obj={
//     a:1,
//     b:2,
//     c:3,
//     a:4
// }
// console.log(obj)




// const user=[{
//    id:1,
//    name:"Ram",
//    age:20
// },{
//     id:2,
//     name:"Nandha",
//     age:22
// }]

// const addUser=(obj){

// }
// const getUser=(id){

// }
// const editUser =(id,key,value){

// }
// const deleteUser=(id){

// }


const user=[{
    id:1,
    name:"Ram",
    age:20
},{
    id:2,
    name:"Nandha",
    age:22
}]

const addUser=(obj)=>{
   user.push(obj)  
}
const getUser=(id)=>{
    for(var ele of user){
        if(ele.id==id){
            return ele;
        }
    }
}
 const editUser =(id,key,value)=>{
      for(var ele of user){
        if(ele.id==id){
            ele[key]=value;
            return;
        }
    }
 }
const deleteUser=(id)=>{
         var i=0;
         for(var ele of user){
             if(ele.id==id){
                user.splice(i,1);
                return;
             }
             i++;
             
         }
}
addUser({id:3,name:"Gokul",age:19});
console.log(user);
console.log(getUser(3));
editUser(3,"name","Girija")
console.log(user);
deleteUser(3);
console.log(user);













 
 

