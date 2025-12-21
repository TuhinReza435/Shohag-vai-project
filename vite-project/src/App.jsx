

const App = () => {

  const status=true;
   return(
       <div>
          {(()=>{
              if(status){
               return <button>Logout Btn</button>
              }else{
               return <button>Login Btn</button>
              }
          })()}
       </div>
   );
  
}
export default App;