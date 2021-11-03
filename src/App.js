import React , { Component } from "react";
// import Items from "./components/items" 
// import { x as num1, y , Test} from "./module";
// import Test2  from "./module";

class App extends Component {
  // setstate use to change data in state
  // state = {
  //   name : "leen",
  //   age : 27
  // }
  // arrow function

  // handleClick = () => {
  //   this.setState({
  //     name : "ahmad",
  //     age:30
  //   }

  //   )
  // }
  // state ={
  //   items :  [
  //     {id:1 , name: "layan" , age:22},
  //     {id: 2, name: "ahmad" , age:22},
  //     {id: 3, name: "lolo" , age:22}


  //   ]
  // }
  state ={
    name : ''
  }
  handlechange = (e)=>{
    this.setState({
      name : e.target.value
    })

  }
  handlesubmit =(e)=>{
    e.preventDefault()
    console.log(this.state.name)
  }
  render() {
    return (
      <div className="app">
        {/* like this i call the component
        {/*  nested component *component inside component*/}
        {/* < Child test={this.state.name} /> */}
        {/* dynamic data */}
        {/* { this.Test()} */}
        {/* <button onClick={this.handleClick}> click</button> */}
        {/* <p>{this.state.name}</p> */}
        {/* <p>{this.state.age}</p> */} 
        list item
        <form  onSubmit={this.handlesubmit}>
          {/* <textarea type ="text" onChange={this.handlechange} /> */}
          <select onChange={this.handlechange}>
<option value="value1">value 1</option>
<option value="value2">value 2</option>
<option value="value3">value 3</option>

          </select>
          <input type="submit" value="send" />
        </form>

        {this.state.name}
        {/* <Items items={this.state.items} /> */}
        

      </div>
    )
  }
}

export default App;
