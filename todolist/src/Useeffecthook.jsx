import React, {useState , useEffect} from 'react';
import "./App.css";

const Useeffecthook =()=>{
    let initialState=0;
    const [state, setstate] = useState(initialState);
    useEffect(() => {
       document.title=`chat (${state})`;
    })
    return(
        <>
        <hr ></hr>
        
        <center style={{marginTop:"5rem"}}>
        <h1>Use of UseEffect hooks</h1>
          <p className="counter">{state}</p>
        <button className="incBtn"  onClick={()=>{setstate(state +1)}}>Increment</button>
        <button className="decBtn" onClick={()=>{state>0 ? setstate(state -1):setstate(state)}}>Decrement</button>
        </center>
        </>
    );
}

export default Useeffecthook;