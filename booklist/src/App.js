import React from 'react';
import './App.css';
import Header from './components/Header';
import ProjekatStranica from './components/Projekat/ProjekatMainPage';
import {BrowserRouter,Route} from "react-router-dom";
import ProjekatForm from "./components/Projekat/ProjekatForm"
import pojedinacniProjekat from './components/Projekat/pojedinacniProjekat';
import Notifications from "../src/components/Projekat/notifications"
import TodosMain from './components/todo/todosMainPage';


function App() {
  return (
    <BrowserRouter>
        <div className="App">
      <Header />
      <Route path="/projekat" component={ProjekatStranica} />
      <Route path="/napraviProjekat" component={ProjekatForm} />
      <Route path="/pojedinacniProjekat/:id" component={pojedinacniProjekat} />
      <Route path="/todo" component={TodosMain} />
    </div>
    </BrowserRouter>
  );
}

export default App;
