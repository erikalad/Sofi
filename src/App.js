import './App.css';
import Carta from './Components/Cartas';
import Nav from './Components/Nav';
import { useState } from 'react';
import { Switch } from 'antd'



function App() {

  const [modo, setModo] = useState(true)
  const onChange = (checked) => {
    setModo(!modo)
  };


  return (
    <div className="App">
      <Nav/>
      <Switch defaultChecked onChange={onChange} className="switch"/>
      <Carta modo={modo}/>
    </div>
  );
}

export default App;
