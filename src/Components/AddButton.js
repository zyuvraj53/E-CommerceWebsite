import './AddButton.css'

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
        if(prevState.count === 1){
        return { count: prevState.count - 1, buttonVisible: !prevState.buttonVisible };
        }else{
        return { count: prevState.count - 1 };
        }
      else return { count: prevState.count };
    });
  }

  return (
    <div>
      {buttonVisible && (
        <div className="bg-[#cbb546dd] rounded-[8px] shadow-[2px_2px_2px_2px_rgba(0,0,0,0.1)] clicked">
          <button onClick={incrementCount} className="AddButton "> Add </button>
        </div>
      )}

      {!buttonVisible && (
        <div>
          <button onClick={decrementCount}>-</button>
          <span>{count}</span>
          <button onClick={incrementCount}>+</button>
        </div>
      )}
    </div>
  );
}
