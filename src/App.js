import React , { Component } from "react";
import Child from "./child"
// import { x as num1, y , Test} from "./module";
// import Test2  from "./module";

class App extends Component {
  // arrow function
  Test = () => console.log (" test")
  
  render() {
    return (
      <div className="app">
        {/* like this i call the component */}
        {/*  nested component *component inside component*/}
        < Child />
        {/* dynamic data */}
        { this.Test()}
      </div>
    )
  }
}

export default App;
