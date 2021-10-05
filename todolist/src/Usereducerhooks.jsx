import React, {useReducer} from 'react';
import "./App.css";


const reducer=( state, action)=>{
    if(action.type==="INCR")
    {
        state=state+1;
    }
    if(state>0 && action.type==="DECR")
    {
        state=state-1;
    }
    return state;
}

const Usereducerhooks =()=>{
    let initialState=0;
    // const [state, setstate] = useState(initialState)
    const [state, dispatch] = useReducer(reducer, initialState)
    return(
        <>
        <hr ></hr>
        
        <center style={{marginTop:"5rem"}}>
        <h1>Usereducer hooks</h1>
          <p className="counter">{state}</p>
        <button className="incBtn"  onClick={()=>dispatch({type:"INCR"})}>Increment</button>
        <button className="decBtn" onClick={()=>dispatch({type:"DECR"})}>Decrement</button>
        </center>
        </>
    );
}

export default Usereducerhooks;