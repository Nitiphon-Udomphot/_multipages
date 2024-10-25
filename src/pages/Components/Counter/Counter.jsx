import { useState } from "react";
import "./Counter.css";

function Counter(props) {

    // let name = "counter";
    // let value = props.value;
    //      get , set
    const [value, setValue] = useState(props.value || 0);

    const increment = () => {setValue(value + 1)}

    const decrement = () => {setValue(value - 1)}

  // render
  return (
    <div className="counter-name">
      <h3>{props.name || "counter"}</h3>
      <button className='btn btn-danger' onClick={decrement} >-</button>
      <span className="counter-value">{value}</span>
      <button className="btn btn-success" onClick={increment} >+</button>
    </div>
  );
}

export default Counter;
