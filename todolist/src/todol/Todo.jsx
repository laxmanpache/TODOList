// import './todo.css';
// import React,{useState} from 'react';

// const Todo =()=>{

//    const [state, setstate] = useState();
//    const [Item, setItem] = useState([])

//    const myfun =(event)=>{
//     setstate(event.target.value);
//    }

//    const additem =()=>{
//        if(state!=="" && state!==undefined)
//         {
//             setItem((oldarr)=>{
              
//                  return [...oldarr, state];

//             })
      
//         setstate('');

//        }
         
//    }

//    const removeItem =(index)=>{
//     //    console.log(index);
//        setItem((oldarr)=>{
//           return oldarr.filter((arrELe ,id)=>{
//                 return index !==id;
//            })
//        })
//    }
   
//     return(
//         <>

//            <hr style={{marginTop:"2rem"}}></hr>
//            <center>
//            <h1>TO do List</h1>

//            <input type="text" id="todo" value={state} onChange={myfun}/>
//            <button onClick={additem} >add Item</button>
            
//             <ol>
                
//                 {
//                       Item.map((curele , index)=>{
//                               return <li key={index} id={index} onClick={()=>{removeItem(index)}}> {curele} </li>
//                       })
//                 }
//             </ol>
          
//            </center>
//         </>
//     )
// }


// export default Todo;

import Items from './Items';
import React ,{useState,useEffect} from 'react';

const Todo = () => {

    //getting localstorage data
    const getlocalstragedata=()=>{
     const list=localStorage.getItem('mytodolist');

     if(list)
     {
         return JSON.parse(list);
     }
     else{
         return [];
     }

    }

    const [state, setstate] = useState("");
    // const [ItemsArr, setItems] = useState([]);
    const [ItemsArr, setItems] = useState(getlocalstragedata());
    const [Edit_item, setedititem] = useState('');
    const [togglebtn, settogglebtn] = useState(false);
    const addInarray =()=>{

        if(!state)
        {
            alert("please fill data");
        }
        else if(state && togglebtn){
                
            setItems(
                ItemsArr.map((CurEle)=>{
                     if(CurEle.id===Edit_item)
                     {
                         return {...CurEle , name:state}
                     }
                     return CurEle;
                })
                
            )
            setstate('');
            settogglebtn(false);
        }
        else
        {
            const setnewdata={
                id:new Date().getTime().toString(),
                name:state
            };
                setItems((oldarr)=>{
                
                    return [...oldarr , setnewdata];
           
              })
            setstate('');
            
           
        }
        
    }

    //delete item form array 
    const Deleteitem =(index)=>{
        // console.log("item delted");
        
        setItems((oldarr)=>{
            return oldarr.filter((curele)=>{ return curele.id!==index })
        })
      
    
          

    }

    //Delete All element from list

    const DeleteAll =()=>{
        setItems([]);
    }
    // const myfun=(event)=>{
    //          setstate(event.target.value);
    // }

    // for storing data in local storage

    //to edit item
      const editItem =(index)=>{
        //   console.log("edited"+index);
        var edititem=ItemsArr.find((curele)=>{
                   return index===curele.id;
        })

        setedititem(index);
        // console.log(editItem.name);
        setstate(edititem.name);
        // console.log(togglebtn);
        settogglebtn(true);
        // console.log(togglebtn);

      }

    useEffect(() => {
      
        localStorage.setItem("mytodolist" , JSON.stringify(ItemsArr))
    }, [ItemsArr])

    return (
        <div>
           <hr style={{marginBottom:"3rem"}}></hr>
           <center>
                <input type="text"  value={state} placeholder="🖊️ Enter item" onChange={(event)=>{setstate(event.target.value)}}/>

           
               {
                  
                togglebtn ? (<i className="fa  fa-edit add-btn" onClick={addInarray}></i>):(<i className="far  fa-plus add-btn" onClick={addInarray}></i>)
               } 
              
            </center>

            <ol>
              <center>
              
            {
                ItemsArr.map((curele,index)=>{
                   return <Items  text={curele} id={index} key={index} onselect={Deleteitem} oncliks={editItem}/>
                })

            }

            <button onClick={DeleteAll} style={{marginTop:"2rem"}}>Remove All</button>
            </center>
               
            </ol>
        </div>
    )
}

export default Todo
