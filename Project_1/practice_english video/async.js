// async always return a promise
// await always use into the async function

const payment=true;
const mark=90;
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
async function  course() {
    try{
          await enroll();
          await progress();
          const msg=await certificate();
          console.log(msg);
    }catch(err){
           console.log(err);
    }
    
}
course();
// Function nyei kaj kore async and await


// function process(){
// let x=new Date().getTime();
//     const promise =new Promise(function(resolve,reject){
//       setTimeout(function(){
//          resolve('Order processed');
//       },3000);
//     });
//     return promise;
// }
// function Complete()
// {
//    const promise = new Promise(function(resolve,reject){
//          setTimeout(function(){
//                  resolve('Complete Order form customer 1');
//          },1000);
//    });
//    return promise;
// }
// console.log(  `Take order from customer  1`);
// process()
//          .then(function(val){
//             console.log(val);
//             return Complete();
//          })
//          .then(function(val){
//             console.log(val);
//          });



