import React, { useReducer } from "react";

const initialState = {
    counter: 0,
    counter2: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return {...state, counter: state.counter + action.value};

    case "Decrement":
      return {...state, counter: state.counter - action.value};

    case "Increment2":
        return {...state, counter2: state.counter2 + action.value};
  
    case "Decrement2":
        return {...state, counter2: state.counter2 - action.value};

    default:
      return state;
  }
};

const ComplexCounter = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
   <div>
         <div>
            <div> Complex Counter : {count.counter} </div>
            <button type="button" onClick={()=> dispatch({
                type: "Increment",
                value: 1,
            })}>Increment by 1</button>

            <button type="button" onClick={()=> dispatch({
                type: "Decrement",
                value: 5,
            })}>Decrement by 5</button>
        </div>

        <div>
            <div> Complex Counter2 : {count.counter2} </div>
            <button type="button" onClick={()=> dispatch({
                type: "Increment2",
                value: 1,
            })}>Increment by 1</button>

            <button type="button" onClick={()=> dispatch({
                type: "Decrement2",
                value: 5,
            })}>Decrement by 5</button>
        </div>


   </div>
  );
};

export default ComplexCounter;
