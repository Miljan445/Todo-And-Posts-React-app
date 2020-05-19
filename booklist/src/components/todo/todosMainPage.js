import React from 'react'
import Todos from './todos'
import AddTodo from './addTodo'

export default function TodosMain() {
    return (
        <div className="todos">
            <h1>ToDo page</h1>
            <AddTodo />
            <Todos/>
        </div>
    )
}
