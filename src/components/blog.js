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
        const {users} = this.state
        const userList = users.map(user =>{
            return(
                <div key={user.id}>
                  <div>
                      <div className="content">
                        <div>Name : {user.name}</div>
                        <div>userName : {user.username}</div>

                      </div>
                  </div>
                </div>
            )
        })
        return(
            <div>
                    <h2>blog page</h2>
                    <p>lorim</p>
                    <div>
                        
                    </div>
                    
            </div>
            )
    }
} 
export default Blog;
