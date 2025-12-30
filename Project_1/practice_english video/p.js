// function sleep(a){
//     return a;
// }
// let x=sleep(10);
// console.log(x);
// const shape={
//     radius:10,
//     diameter(){
//         return this.radius*2;
//     }
// };
// alert(shape[radius]);
//<button onclick="this.innerHTML=Date()">This time is</button>
// let arr=[54,2,5,2,4,52,45];
// function fun(val,idx,arr)
// {
//   console.log(val);
//   console.log(idx);
//   console.log("end");

//const { StrictMode } = require("react");

//   //console.log(arr);
// }
// arr.forEach(fun);
//  let d=new Date();
//  let tarik=d.getDate();
//  let month=d.getMonth();
//  let year=d.getFullYear();
// console.log(`${tarik}.${month+1}.${year}`);

// const fruits=new Map([
//    ["Apples",500],
//    ["Banana",300],
//    ["Oranga",400],
//    ['Pinapol',700],
// ]);
// let sum=0;
// fruits.set("Tuhin",323);
// for(let [key,value] of fruits){
//    sum+=value;
// }

// console.log(fruits.has("Apple"));

//  let x=15;
// try{
//     if(x=="")throw "Empty String";
//     if(isNaN(x))throw "Not a Number";
//     x=Number(x);
//     if(x>20)throw "Too big number";
//     if(x<=5)throw "Stock out";
// }catch(err){ 
//     console.log(err);
// }
// console.log("Test passed");
// StrictMode;


// const person = {
//     firstname: "John",
//     lastname: "Doe",
//     Id: 34532,
//     fullname: function() {
//         return this.firstname + " " + this.lastname;
//     },
//     getFullname:function(){
//         return this.fullname;
//     }
// }

// document.writeln(person.getFullname);


// class Car{
//     constructor(name,year){
//         this.nm=name;
//         this.yr=year;
//     }
// }
// const car1=new Car("Toyota",2010);
// const car2=new Car("Nisan",2030);
// const car3=new Car("marcedis",2012);
// const car4=new Car("dfnsaf",2014);
// const car5=new Car("adfd",20112);
// const car6=new Car("eaedr",20112);
// console.log(car4.nm);

// const Car=function(name,year){
//     this.name=name;
//     this.year=year;
// }
// const car1=new Car("Toyota",2010);
// const car2=new Car("Nisan",2030);
// const car3=new Car("marcedis",2012);
// const car4=new Car("dfnsaf",2014);
// const car5=new Car("adfd",20112);
// const car6=new Car("eaedr",20112);
// console.log(car4.name);
// console.log(typeof(Car));
// const sentence = `Learn with Sumit is all about teaching web development skills and
//  techniques in an efficient and practical manner. If you are just getting started in web
// development, Learn with Sumit has all the tools you need to learn the newest and most
// popular technologies to convert you from a no stack to full stack developer. Learn with 
// Sumit also deep dives into advanced topics using the latest best practices for you 
// seasoned web developers.`;
// function len(name){
//       let mx=0,str='';
//       for(let i=0;i<name.length;i++)
//       {
//           if(name[i].length>mx){
//              mx=name[i].length;
//              str=name[i];
//           }
//       }
//       return {
//         mx,
//         str,
//       }

// }
// const name=['Sumit shaha','Learn with sumit','akash','saad','daiya'];
// let ans=len(name);
// console.log(ans.mx,ans.str);



//console.log(person.firstname.toUpperCase());
// person.reza='Bangladesh';
// for(let x in person){
//     console.log(person[x]);
// }

// const name=['Sumit shaha','Learn with sumit','akash','saad','daiya'];
// for(let x of name){
//     console.log(x);
// }


// Class 67
// function person(fname,lname,age){
//     this.firstName=fname;
//     this.lastName=lname;
//     this.age=age;
//     this.FullName=this.firstName+' '+this.lastName;

// }

// const Tuhin=new person("Tuhin","Reza",23);
// const Rahim=new person("Rakhim","Khan",24);
// const Karim=new person("Karim","Hossen",26);
// const Jabbar=new person("Jabbar","Mollah",27);
// for(let x in Tuhin){
//     console.log(Tuhin[x]);
// }



//Class 68
//console.log("hidf");
//
// const number=[1,2,3,4,5,6];
// for(let x of number)console.log(x);
//iterable in js

// myNumbers[Symbol.iterator]=function(){
//     let n=0;
//     let done=false;
//     return {
//         next(){
//             n+=10;
//             if(n==100){done=true}
//             return {
//                 value:n,
//                 done:done
//             }
//         }
//     }
// }
// for(let x of myNumbers){
//     console.log(x);
// }


// function sleep(a,b){
//     return a*b;
// }
// let y=sleep(19,10);
// console.log(y);


// function person(fname,lname,age){
//     this.firstName=fname;
//     this.lastName=lname;
//     this.age=age;
//     this.FullName=this.firstName+' '+this.lastName;

// }

// const Tuhin=new person("Tuhin","Reza",23);
// const Rahim=new person("Rakhim","Khan",24);
// const Karim=new person("Karim","Hossen",26);
// const Jabbar=new person("Jabbar","Mollah",27);

// console.log(Tuhin.FullName);
// for(let x in Tuhin){
//     console.log(x);
// }
// function val(mx,mn)
// {
//     return Math.ceil(Math.random()*(mx-mn+1)+mn);
// }
// console.log(val(100,10));

//Self invoking function
// (function (){
//     console.log("Tuhin Reza");
// })();
// const x=(x,y)=> x*y;
// console.log(x(10,25,6,25));


// closore in function
// function temp(){
//     let counter =0;
//     return function plus(){
//         counter++;
        
//     }
    
// }
// const add=temp();
// console.dir(add);


//Javascript Class

// class car{
//     constructor(name,year){
//         this.name=name;
//         this.year=year;
//     }
// }


// let x=10;
// for(let i=0;i<10;i++){
//     let x=321;
//     console.log(x);
// }
// console.log("Outside of the lop x val is");
// console.log(x)<<endl;

// Call back funtion

// function display(some){
//     console.log(some);
// }
// function calculator(num1,num2,callback){
//     let sum=num1+num2;
//     if(callback) callback(sum);
   
// }
// let result=calculator(574,5,display);

// call back expam
// const payment=true;
// const mark=80;
// function enroll(callback)
// {
//     console.log("courrse Enrollment is in pregress..");
//     setTimeout(function(){
//         if(payment){
//             //next step;
//             callback();
//         }else{
//             console.log("Payment Failed");
//         }
//     },2000);
// }
// function progress(callback)
// {
//     console.log("Course on progress");
//     setTimeout(function(){
//        if(mark>=80){
//           callback();
//        }else{
//           console.log('You could not get enough mark to get the certificate');
//        }
//     },3000);
// }
// function certificate(){
//     console.log("Preaparing your certificate");
//     setTimeout(function(){
//         console.log('Congratulation you got the certificate');
//     },1000);
// }
// enroll(function(){
//     progress(certificate);
// });








// function process(){
//     console.log( `Processing Order for customer 1`);
//     setTimeout(()=>{
//         console.log("Cooking Complete");
//     },3000);
//     console.log(`Order processed`);
// }
// console.log("Take order for customer 1");
// process();
// console.log("order Complete for customer 1");


