import React , { Component } from "react";
import Child from "./child"
// import { x as num1, y , Test} from "./module";
// import Test2  from "./module";

class App extends Component {
  // setstate use to change data in state
  state = {
    name : "leen",
    age : 27
  }
  // arrow function

  handleClick = () => {
    this.setState({
      name : "ahmad",
      age:30
    }

    )
  }
  render() {
    return (
      <div className="app">
        {/* like this i call the component */}
        {/*  nested component *component inside component*/}
        < Child test={this.state.name} />
        {/* dynamic data */}
        {/* { this.Test()} */}
        <button onClick={this.handleClick}> click</button>
        <p>{this.state.name}</p>
        <p>{this.state.age}</p>
      </div>
    )
  }
}

export default App;
