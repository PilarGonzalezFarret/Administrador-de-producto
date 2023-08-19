import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './views/Main';
import Details from './views/Details';
import Edit from './views/Edit';


function App() {
  //const [ state, setState ] = useState ("");
  return (
    <div className="App">
        <h1>Product Manager</h1>
        <Routes> 
          <Route path="/" element={<Main/>}/> 
          <Route path="/products/:id/" element={<Details/>} />
          <Route path="/Details" element={<Details/>} />
          <Route path="/Edit" element={<Edit/>} />
        </Routes> 
    </div>
  );
}

export default App;
