import React from 'react';
const TodoFormComponent=function(props){
    return(
        <form onSubmit={props.addTodo}>
            <input 
                type="text" 
                value={props.currentTodo} 
                onChange={props.updateCurrentTodo}/>
            <button type="submit">Add</button>
        </form>
    );
}
export default TodoFormComponent;