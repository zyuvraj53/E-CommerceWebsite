import "./AddButton.css";

import React, { useState } from "react";

export default function AddButton() {
  const [state, setState] = useState({ count: 0, buttonVisible: true });
  const count = state.count;
  const buttonVisible = state.buttonVisible;

  function incrementCount() {
    setState(prevState => {
      return { count: prevState.count + 1 };
    });
  }

  function decrementCount() {
    setState(prevState => {
      if (prevState.count > 0)
        if (prevState.count === 1) {
          return {
            count: prevState.count - 1,
            buttonVisible: !prevState.buttonVisible,
          };
        } else {
          return { count: prevState.count - 1 };
        }
      else return { count: prevState.count };
    });
  }

  return (
    <div className="">
      {buttonVisible && (
        <div className="bg-[#cbb546dd] rounded-[8px] shadow-[2px_2px_2px_2px_rgba(0,0,0,0.1)] clicked flex justify-center">
          <button onClick={incrementCount} className="AddButton ">
            {" "}
            Add{" "}
          </button>
        </div>
      )}

      {!buttonVisible && (
        <div className="flex flex-row justify-center gap-2">
          <div className="px-2 border-2 border-[#444746] bg-yellow-500 rounded-xl">
            <button onClick={decrementCount}>-</button>
          </div>
          <div className="px-3 border-2 border-[#444746] rounded-xl">
            <span>{count}</span>
          </div>
          <div className="px-2 border-2 border-[#444746] bg-yellow-500 rounded-xl">
            <button onClick={incrementCount}>+</button>
          </div>
        </div>
      )}
    </div>
  );
}
