import axios from "axios";
import React, { useEffect, useReducer } from "react";

const initialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        loading: false,
        post: action.result,
        error: "",
      };

    case "ERROR":
      return {
        loading: false,
        post: {},
        error: "There was a problem fetching",
      };

    default:
      return state;
  }
};

const GetPost2 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const url = `https://jsonplaceholder.typico.com/posts/1`;

    axios
      .get(url)
      .then((res) => {
        dispatch({ type: "SUCCESS", result: res.data });
      })
      .catch(() => {
        dispatch({type: "ERROR"})
      });
  }, []);

  return <div>
        {state.loading ? "Loading...": state.post.title}
        {state.error || null}
  </div>;
};

export default GetPost2;
