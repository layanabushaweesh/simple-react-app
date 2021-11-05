import React , { Component } from "react";
import Items from "./components/items" 
// import { x as num1, y , Test} from "./module";
// import Test2  from "./module";

class App extends Component {
  constructor(){
    super();
    console.log("constructor")
  }
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
  // };
  componentDidMount(){
    console.log("componentdid")
  }
  componentDidUpdate(prevProps,prevState){
    console.log("update",prevProps,prevState)

  }
  state ={
    items :  [
      {id:1 , name: "layan" , age:22 , count :0},
      {id: 2, name: "ahmad" , age:22 , count :5},
      {id: 3, name: "lolo" , age:22 , count :9}


    ]
  }
  // state ={
  //   name : ''
  // }
  // handlechange = (e)=>{
  //   this.setState({
  //     name : e.target.value
  //   })

  // }
  // handlesubmit =(e)=>{
  //   e.preventDefault()
  //   console.log(this.state.name)
  // }
  handleClick =(e)=>{
    let rand = Math.random()
let items = this.state.items
items.push({id: rand, name: "shahem" , age:20 , count :10})
this.setState({
  items : items
})
  }
  handleDelete =(e)=>{
    
    this.setState({
      items : [
        {id: 5, name: "layan" , age:20 , count :10}
      ]
    })
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
        <Items items={this.state.items} />
        {/* <form  onSubmit={this.handlesubmit}> */}
          {/* <textarea type ="text" onChange={this.handlechange} /> */}
          {/* <select onChange={this.handlechange}>
<option value="value1">value 1</option>
<option value="value2">value 2</option>
<option value="value3">value 3</option> */}
<button onClick={this.handleClick}>add</button>
<button onClick={this.handleDelete}>delete</button>

          {/* </select>
          <input type="submit" value="send" />
        </form>

        {this.state.name} */}
        {/* <Items items={this.state.items} /> */}
        

      </div>
    )
  }
}

export default App;
