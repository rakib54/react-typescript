import React from 'react';
import './App.css';
import Contacts from './components/Contacts/Contacts';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Contacts />
    </div>
  );
}

export default App;
