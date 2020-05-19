import React from 'react'
import {NavLink} from "react-router-dom";

export default function Header() {
    return (
        <div className="header">
        <h1>Projekat i Todo Aplikacija</h1>
        <ul>
            <NavLink to="/projekat"><li>Projekat</li></NavLink>
            <NavLink to="/napraviProjekat"><li>Napravi Projekat</li></NavLink>
            <NavLink to="/todo"><li>Todo</li></NavLink>
        </ul>
        </div>
    )
}
