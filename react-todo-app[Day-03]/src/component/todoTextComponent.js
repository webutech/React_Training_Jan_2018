import React from 'react';
class TodoTextComponent extends React.Component{

    constructor(props){
        super(props);
        this.state={
            isEditable:false
        }
        this.renderUpdateForm=this.renderUpdateForm.bind(this);
        this. renderTodoList=this.renderTodoList.bind(this);
        this.toggleEditableState=this.toggleEditableState.bind(this);
        this.updateTodo=this.updateTodo.bind(this);
    }

    toggleEditableState(){
        let isEditable=this.state.isEditable;
        this.setState({
            isEditable:!isEditable
        })

    }

    updateTodo(event){
        // get the input box value of update form = val
        // call editTodo method of parent componet and pass the index and val
        // editTodo(position,val)
        event.preventDefault();
        this.props.editTodo(this.props.index,this.input.value);
        
        this.toggleEditableState();
    }
    renderUpdateForm(){
        return(
            <form onSubmit={this.updateTodo}>
                <input 
                    type="text" 
                    defaultValue={this.props.todo.todoText}
                    ref={(value) => { this.input = value; }}/>
                <button type="submit">Update</button>
            </form>
        )
    }

    renderTodoList(){
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

            <button id="editTodoButton"
                onClick={(event)=>{
                    event.stopPropagation();
                    this.toggleEditableState();
                }}>
                Edit
            </button>
        </li> 
        )
    }
    render(){
        //const isEditable=this.state.isEditable
        const {isEditable}=this.state
        return(

            <section>
            {
                isEditable ? this.renderUpdateForm() : this.renderTodoList()
            }
            
            
        </section>
        );
    }
}

export default TodoTextComponent;