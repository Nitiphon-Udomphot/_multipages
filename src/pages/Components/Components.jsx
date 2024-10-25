import "./Components.css";

import Add from "./Add/Add";
import Counter from "./Counter/Counter";
import Timer from "./Timer/Timer";
import Temperature from "./Temperature/Temperature";

function Components() {
    return (
        <div className="maincontainer align-items-center">
    
          <div className="name">
          <h1>React Components</h1>
          </div>
    
          <div className="container">
            <div className="container1"> 
              <Counter name={"Counter"} value={10} />
              <Timer name={"john"} value={0} />
            </div>
            <div className="container2">
              <Add aValue={10} bValue={20} />
            </div>
          </div>
          <div className="container3">
            <Temperature />
          </div>
        <div className="name">
          <h2>นายนิติพน อุดมโภชน์ รหัส 66075854</h2>
          </div>
        </div>
      );
}

export default Components;