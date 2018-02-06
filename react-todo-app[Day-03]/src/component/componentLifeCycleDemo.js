import React from 'react';
import $ from 'jquery';
class ComponentLifeCycleDemoComponent extends React.Component{

    constructor(props){
        super(props);
        this.state={
            users:[]
        }
        console.log('-------constructor Called---------');
    }

    componentDidMount(){
      
          $.ajax({
            url:'https://jsonplaceholder.typicode.com/users',
            success:(data)=>{
            this.setState({
            users:data
            })
            }
            })

    }

    render(){
        console.log('-------render Called---------');
        return(

            <div>
            <h1>Get data from Server Demo</h1>
            <ul>
                {
                    this.state.users.map((user)=>{
                        return <li>{user.username}</li>
                    })
                }
            </ul>
            </div>
        )
    }

    componentWillMount(){
        console.log('-------componentWillMount Called---------');
    }
}

export default ComponentLifeCycleDemoComponent;