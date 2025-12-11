// java script Promise 

// const flag=false;
// console.log('Task 1');
// // promise defination
// const promise=new Promise(function(resolve,reject){
//    setTimeout(function(){
//     if(flag){
//         resolve('Task 2');// if condition true
//     }else{
//        reject('Failed')
//     }
//      },1000);
// });
// // promise call
// promise
//        .then(function(value){
//             console.log(value);
//        })
//        .catch(function(err){
//         console.log(err);
//        })
// console.log('Task 3');

const payment=true;
const mark=80;
function enroll()
{
   console.log('course enrollment is progress...');
   const promise=new Promise(function(resolve,reject){
      setTimeout(function(){
           if(payment){
             resolve('');
           }else{
            reject('Failed');
           }
      },1000);
   });
   return promise;
}
function progress(){
   console.log('Course on Progress...');
   const promise=new Promise(function(resolve,reject){
        setTimeout(function(){
             if(mark>=80){
               resolve('');
             }else{
               reject('Certificate not Allowed');
             }
        },1000);
   });
   return promise;
}
function certificate(){
   console.log("Preparing Your Cerfificate");
   const promise=new Promise(function(resolve,reject){
    resolve("Congratulation Got your Certificate");
   },1000);
   return promise;
}
// sob koita then ageh tar por catch
enroll()
       .then(progress)
       .then(certificate)
       .then(function(val){
         console.log(val);
       })
       .catch(function(err){
         console.log(err);
       })
  

       
// Multiple promise er result ak sathe daower junno 
// tader moddhe promise kora lagbe
// promise race: onek guli promise er moddhe jar kaj ageh ses takei retutn korbe