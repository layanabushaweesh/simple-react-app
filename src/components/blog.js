import React , { Component } from "react";
import axios from "axios"
class Blog extends  Component{
    state ={
        users : []
    }
    componentDidMount (){
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res =>{
        this.setState({
            users : res.data 
        })
        })
    }
    render(){
        return(
            <div>
                    <h2>blog page</h2>
                    <p>lorim</p>
                    <div>
                        {this.state.users.map(user => <div>{user.name}</div>)}
                    </div>
                    
            </div>
            )
    }
} 
export default Blog;
