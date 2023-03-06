import React, { useReducer } from 'react'
const initalState = [
    {
        id:1,
        title:"Todo 1",
        complete:false,
    },{
        id:2,
        title: "Todo 2",
        complete:true
    }
]

const reducer = (state,action) => {
    switch (action.type) {
        case "COMPLETE":
            return state.map((cir) =>{
                if(cir.id === action.id){
                    return {...cir, complete: !cir.complete};
                }else{
                    return cir;
                }
            });

        default:
            return state;
    }
}

const useRedtotdo = () => {

    const[state, dispatch] = useReducer(reducer,initalState)

    const handleComplete = (cir) =>{
        dispatch({type:'COMPLETE',id:cir.id})
    }
  return (
    <div>
        {state.map((cir) =>(
            <div key={cir.id}>
                <label >
                    <input type="checkbox" 
                    checked={cir.complete}
                    onChange={() => handleComplete(cir)} />
                    {cir.title}
                </label>
            </div>
        ))}
    </div>
  )
}

export default useRedtotdo