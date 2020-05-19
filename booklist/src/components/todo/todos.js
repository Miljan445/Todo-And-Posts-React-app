import React, { Component } from 'react'
import {connect} from "react-redux"
import RemoveTodo from '../../actions/todoAction/removeTodo';

export class Todos extends Component {
    doneTodo = (e)=>{
        if(e.target.textContent === "Mark as done"){
            e.target.parentElement.className += " done";
            e.target.textContent = "Unmark";
            e.target.previousElementSibling.style.textDecoration = "line-through"
        }
        else if(e.target.textContent = "Unmark"){
            e.target.parentElement.classList.remove("done");
            e.target.textContent = "Mark as done";
            e.target.previousElementSibling.style.textDecoration = "none"
        }
    }
    render() {
        const todos = this.props.todo.map((todo)=>{
            return(
                <div className="todoCard" key={todo.id}>
                <h3>Todo</h3>
                <hr/>
                <p>{todo.naslov}</p>
                <button onClick={this.doneTodo}>Mark as done</button>
                <button onClick = {()=>{this.props.removeTodo(todo.id)}}
                style={{marginLeft:"20px"}}>Remove ToDo</button>
            </div>
            )
        })
        return (
            <React.Fragment>
                {todos}
            </React.Fragment>
        )
    }
}


const mapProps = (state) =>{
    return{
        todo:state.todo.todo
    }
}
const  mapDispatch = (dispatch) =>{
    return{
        removeTodo:(id)=>{
            dispatch(RemoveTodo(id));
        }
    }
}
export default connect(mapProps,mapDispatch)(Todos)
