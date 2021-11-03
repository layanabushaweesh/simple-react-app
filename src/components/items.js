import React , { Component } from "react";

class Items extends Component {
    render(){
        // const id =this.props.id;
        // const name =this.props.name;
        // const age =this.props.age;
        // const {id , name , age} =this.props;
        const {items} = this.props;
        const theItems = items.map((item)=> {
            return(
                <div key={Math.random() * 10}>
                 <div>{item.id}</div>   
                 <div>{item.name}</div>   
                 <div>{item.age}</div>   
                 <div>*********</div>
                </div>
            )

        })
        return(
            <div>
                
                {theItems}
            </div>
        )
    }
}
export default Items;