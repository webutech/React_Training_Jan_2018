import React from 'react';
import TodoTextComponent from './todoTextComponent';
class TodoListComponent extends React.Component{
    constructor(props){
        super(props);
        this.changeTodo=this.changeTodo.bind(this);
        this.state={
            todoList:[
                {todoText:'Create React-TODO App',completed:false},
                {todoText:'Work on Redux API',completed:false},
                {todoText: 'Create POC for React and Redux',completed:false}
               
               ]
        };
    }

    changeTodo(index){
        let todoList=this.state.todoList;
        let todo=todoList[index];
        todo.completed=!todo.completed;
        this.setState({
            todoList
        });

        console.log(this.state.todoList[index]);   
    }
    render(){
       
        return(
            <ul>
                {
                    this.state.todoList.map((todo,index)=>{
                        return <TodoTextComponent  
                            key={todo.todoText} 
                            todo={todo}
                            index={index}
                            clickHandler={this.changeTodo}/>
                    })
                }
                
            </ul>
        );
    }
}

export default TodoListComponent;