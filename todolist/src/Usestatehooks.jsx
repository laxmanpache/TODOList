import React, {useState} from 'react';
import "./App.css";

const Usestatehooks =()=>{
    let initialState=0;
    const [state, setstate] = useState(initialState)
    return(
        <>
        <hr ></hr>
        
        <center style={{marginTop:"5rem"}}>
        <h1>counter Application</h1>
          <p className="counter">{state}</p>
        <button className="incBtn"  onClick={()=>{setstate(state +1)}}>Increment</button>
        <button className="decBtn" onClick={()=>{state>0 ? setstate(state -1):setstate(state)}}>Decrement</button>
        </center>
        </>
    );
}

export default Usestatehooks;