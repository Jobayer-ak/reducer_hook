import React, { useReducer } from "react";

const initialState = 0;
const initialState2 = 5;

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

const Counter3 = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [count2, dispatch2] = useReducer(reducer, initialState2);

  return (
    <div>
      <div>
        <div> Count: {count} </div>
        <button type="button" onClick={() => dispatch("Increment")}>
          Increment
        </button>
        <button type="button" onClick={() => dispatch("Decrement")}>
          Decrement
        </button>
      </div>

      <div>
        <div> Count2: {count2} </div>
        <button type="button" onClick={() => dispatch2("Increment")}>
          Increment
        </button>
        <button type="button" onClick={() => dispatch2("Decrement")}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter3;
