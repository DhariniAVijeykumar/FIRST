
import React,{useState} from 'react';
function Card(){
    const [count, setCount] = useState(0);
    return(
        
<div> 
    <h1>Test</h1>
    <p>Abc</p>
    
   <p>You clicked {count} times</p>
   <button onClick={() => setCount(count + 1)}>
     Click me
   </button>
   <input>type="</input>
 </div>
    );


}
export default Card;