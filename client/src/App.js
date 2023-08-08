//import React, {useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from './components/Form';
import './App.css';

function App() {
  //const [ state, setState ] = useState ("");
  return (
    <div className="App">
      <BrowserRouter>
        <h1>Product Manager</h1>
        <Routes>
          <Route path= '/' element={<Form/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
