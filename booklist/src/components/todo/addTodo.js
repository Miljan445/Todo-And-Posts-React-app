import React from 'react'
import {connect} from "react-redux"
import DodajTodo from '../../actions/todoAction/todoAction'
 function AddTodo(props) {
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(document.getElementById("add").value === ""){
            alert("Please fill out all fields!")
        }
        else{
            const todo = {
                naslov:document.getElementById("add").value,
                id:Math.random()*10  
            }
            props.addTodo(todo);
            document.getElementById("add").value = "";
        }
    }
    return (
        <div className="addTodo">
            <h2>Add ToDo</h2>
            <form onSubmit = {handleSubmit}>
                <input type = "text" placeholder ="Add ToDo..." id="add"/>
                <button type = "submit" >Submit</button>
            </form>
        </div>
    )
}


const mapDispatch = (dispatch) =>{
    return{
        addTodo : (todo)=>{
            dispatch(DodajTodo(todo))
        }
    }
}
export default connect(null,mapDispatch)(AddTodo);