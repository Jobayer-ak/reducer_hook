import React, { useReducer } from "react";

const initialState = 5;

const reducer = (state, action) => {
  switch (action) {
    case "Increment":
      return state + 1;

    case "Decrement":
      return state - 1;

    default:
      return state;
  }
};

const Counter = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div> Count - {count} </div>
      <button type="button" onClick={()=> dispatch("Increment")}>Increment</button>
      <button type="button" onClick={()=> dispatch("Decrement")}>Decrement</button>
    </div>
  );
};

export default Counter;
