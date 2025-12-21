import { useRef } from 'react';
import Hero from './Component/hero';
const App = () => {
      let myhead =useRef(null);
      const change = () => {
        myhead.current.innerHTML = `
             <ul>
                   <li>A</li>
                   <li>B</li>
             </ul>
        `;
  };
  return (
      <div>
           <h3 ref={myhead}></h3>
           <button onClick={change}>CLick here</button>
      </div>
  )
};

export default App;
