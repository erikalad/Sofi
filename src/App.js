import './App.css';
import Carta from './Components/Cartas';
import Nav from './Components/Nav';
import { useState } from 'react';
import { Switch } from 'antd'
import { Route , Routes } from "react-router-dom";
import MisMetas from './Components/MisMetas';
import MisAnimos from './Components/MisAnimos';


function App() {
  const [modo, setModo] = useState(true)

  const onChange = (checked) => {
    setModo(!modo)
  };

  return (
    <div className="App">
       
      <Nav />
    
     {/*  <Switch defaultChecked onChange={onChange} className="switch" /> */}
      <Routes>
        <Route path="/" element={<Carta modo={modo} />} />
        <Route path="/misMetas" element={<MisMetas/>} />
        <Route path="/misAnimos" element={<MisAnimos/>} />
      </Routes>
    </div>
  );
}

export default App;


