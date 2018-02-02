import React from 'react';
class TodoTextComponent extends React.Component{
    render(){
        return(
            <li
            onClick={()=>{this.props.clickHandler(this.props.index)}} 
            id="todoItem"
            className={this.props.todo.completed===true ? 'completed' : ''}>
            {this.props.todo.todoText}
            
            <button id="deleteTodoButton"
                onClick={(event)=>{
                    event.stopPropagation();
                    this.props.deleteTodo(this.props.index)}}>
                X
            </button>

            <button id="editTodoButton">
                Edit
            </button>
        </li>
        );
    }
}

export default TodoTextComponent;