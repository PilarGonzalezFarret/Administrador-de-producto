import React from 'react';
import { Route, Routes } from 'react-router-dom';
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
          <Route path="/" element={<Main/>}/>          {/* En amarillo está la ruta, parecido a como se ve en la parte de arriba del browser. Entre {} está el nombre del archivo view. */}
          <Route path="/products/:id/" element={<Details/>} />    {/* Aquí la ruta termina en :id, pero en el componente va fuera de 'la ruta', con un +id. */}
          <Route path="/update/:id/" element={<Edit/>} />
          <Route path="/delete/:id/" element={<Edit/>} />
        </Routes> 
    </div>
  );
}

export default App;
