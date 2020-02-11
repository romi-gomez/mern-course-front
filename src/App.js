import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'


import './App.css';
import CreateNote from './components/CreateNote'
import CreateUser from './components/CreateUser'
import Navigation from './components/Navigation'
import NotesList from'./components/NotesList'

function App() {
  return (
    <Router>
      <Navigation></Navigation>
      <div className="container">
        <Route path="/" exact component={NotesList}></Route>
        <Route path="/edit/:id" component={CreateNote}></Route>
        <Route path="/create" component={CreateNote}></Route>
        <Route path="/user" component={CreateUser}></Route>
      </div>
    </Router>
  );
}

export default App;
