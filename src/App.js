import React , { Component } from "react";
import Child from "./child"
// import { x as num1, y , Test} from "./module";
// import Test2  from "./module";

class App extends Component {
  state = {
    name : "leen"
  }
  // arrow function

  handleClick = () => console.log (this.state.name)
  
  render() {
    return (
      <div className="app">
        {/* like this i call the component */}
        {/*  nested component *component inside component*/}
        < Child />
        {/* dynamic data */}
        {/* { this.Test()} */}
        <button onClick={this.handleClick}> click</button>
      </div>
    )
  }
}

export default App;
