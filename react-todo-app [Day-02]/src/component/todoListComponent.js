import React from 'react';
import TodoTextComponent from './todoTextComponent';
import TodoFormComponent from './todoFormComponent';
class TodoListComponent extends React.Component{
    constructor(props){
        super(props);
        this.changeTodo=this.changeTodo.bind(this);
        this.updateCurrentTodo=this.updateCurrentTodo.bind(this);
        this.addTodo=this.addTodo.bind(this);
        this.deleteTodo=this.deleteTodo.bind(this);
        this.state={
            todoList:[
                {todoText:'Create React-TODO App',completed:false},
                {todoText:'Work on Redux API',completed:false},
                {todoText: 'Create POC for React and Redux',completed:false}
               
               ],
            currentTodo:''
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

    updateCurrentTodo(event){
        this.setState({
            currentTodo:event.target.value
        });
    }

    addTodo(event){
        event.preventDefault();
        let todoList=this.state.todoList;
        let currentTodo=this.state.currentTodo;
        todoList.push({
           todoText:currentTodo,
           completed:false
        });
        this.setState({
            todoList,
            currentTodo:''
        });
        console.log('---------addTodo triggered------------');
    }

    deleteTodo(todoTobeDeleted){
        let todoList=this.state.todoList;
        todoList.splice(todoTobeDeleted,1);
        this.setState({
            todoList
        });
        
        console.log('------------',todoTobeDeleted);
    }
    render(){
       
        return(
            <section>
                <TodoFormComponent 
                    currentTodo={this.state.currentTodo}
                    updateCurrentTodo={this.updateCurrentTodo}
                    addTodo={this.addTodo}/>

            [3/1]
            <ul>
                {
                    this.state.todoList.map((todo,index)=>{
                        return <TodoTextComponent  
                            key={todo.todoText} 
                            todo={todo}
                            index={index}
                            clickHandler={this.changeTodo}
                            deleteTodo={this.deleteTodo}/>
                    })
                }
                
            </ul>
            </section>
        );
    }
}

export default TodoListComponent;