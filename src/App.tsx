import React from 'react';
import './App.css';
import Contacts from './components/Contacts/Contacts';
import Navbar from './components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router >
      <Navbar />
      <Switch>
        <Route>          
          <Contacts />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
