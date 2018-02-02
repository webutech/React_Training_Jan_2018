import React from 'react';
class TodoTextComponent extends React.Component{
    render(){
        return(
            <li
            onClick={()=>{this.props.clickHandler(this.props.index)}} 
            id="todoItem"
            className={this.props.todo.completed===true ? 'completed' : ''}>
            {this.props.todo.todoText}
           
        </li>
        );
    }
}

export default TodoTextComponent;