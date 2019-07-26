import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import SearchBar from './components/Messenger/SearchBar';


function App() {
  return (
    <div className="App">
      <SearchBar />
      <Login />
     
    </div>
  );
}

export default App;
