import React , { Component } from "react";
import Col from "./components/col"
// import Home from "./components/Home"
// import About from "./components/About"
// import Blog from "./components/blog"
// import Rout from "./components/Rout"

// import {
//   BrowserRouter,
//   Routes,
//   Route,
 
// } from "react-router-dom";
// import {Switch} from "react-router-dom"
// import { BrowserRouter , Route } from "react-router-dom"

// import Items from "./components/items" 
// import { x as num1, y , Test} from "./module";
// import Test2  from "./module";

class App extends Component {
 
  render(){
    return(
      // <BrowserRouter>
      <div>
      {/* <Nav />

      <Routes>
        <Switch>
          <Route exact path="/" component =  {Home} />
          <Route path="/about" component = {About} />
          <Route path="/blog" component = {Blog} />
          <Route path="/:test_params" component = {Rout} />
        </Switch>
        
      </Routes> */}
      <table>
        <tbody>
          <tr>
            <Col />
          </tr>
        </tbody>
      </table>

      </div>
      // </BrowserRouter>
    );
  }
}

export default App;
