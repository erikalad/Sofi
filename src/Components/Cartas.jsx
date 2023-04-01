import React from "react";
import './Cartas.css'
import TextArea from "antd/es/input/TextArea";
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';
import { Rate } from 'antd';
import { useState } from 'react';
import { Switch , Button} from 'antd';
import useLocalStorage from "./useLocalStorage";
import { BsCheckLg } from 'react-icons/bs';



const desc = ['Terrible', 'Malo', 'Normal', 'Bien', 'Hermoso'];

const customIcons = {
    1: <FrownOutlined />,
    2: <FrownOutlined />,
    3: <MehOutlined />,
    4: <SmileOutlined />,
    5: <SmileOutlined />,
  };



export default function Carta(modo){



      function mostrarDiaActual() {
        const fecha = new Date(); // obtiene la fecha actual
        const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        const diaActual = diasSemana[fecha.getDay()]; 
      // obtiene el día actual como un número del 0 al 6 y lo convierte en el nombre del día correspondiente
        return(`Hoy es ${diaActual}`); // muestra el día actual en la consola
      }

      
      const [misMetas, setMisMetas] = useLocalStorage("metas","")
      const [miEnergia, setMiEnergia] = useLocalStorage("energia",1)
      const [miHumor, setMiHumor] = useLocalStorage("humor",1)
      const [metas, setMetas] = useState("")

      

      function valueMetas(e){
      setMetas(e.target.value)
      setMisMetas(e.target.value)
      }

      function handleMetas(){
      setMetas("")
      }

    return(
        
        <div className={`${(modo ? "contenedor" : 'contenedor oscuro')}`}>
            
            <br></br>

            <h1 className="dia">{mostrarDiaActual()}</h1>
            
            <spline-viewer url="https://prod.spline.design/FVZWbQH2B6ndj9UU/scene.splinecode" events-target="global"></spline-viewer>
    

            <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
                <div className={`${(modo ? "card h-100 cartita numero1" : 'card h-100 cartita oscuro')}`}>
                <div class="card-body">
                    <h5 class="card-title ">Mis metas hoy</h5>
                    <p class="card-text">
                        <TextArea value={metas}  placeholder="Escribí tus metas" onChange={(e)=>valueMetas(e)}/>
                    </p>
                    <Button type="primary" shape="circle" className="boton" onClick={handleMetas}>
                        <BsCheckLg/>
                    </Button>
                </div>
                </div>
            </div>
            <div class="col">
                <div className={`${(modo ? "card h-100 cartita numero2" : 'card h-100 cartita oscuro')}`}>
                <div class="card-body">
                    <h5 class="card-title ">Energía</h5>
                    <p class="card-text">
                    <Rate defaultValue={miEnergia} character={({ index }) => customIcons[index + 1]} onChange={setMiEnergia} />
                    </p>
                </div>
                </div>
            </div>
            <div class="col">
                <div className={`${(modo ? "card h-100 cartita numero3" : 'card h-100 cartita oscuro')}`}>
                <div class="card-body">
                    <h5 class="card-title ">Como fue tu dia?</h5>
                    <p class="card-text">
                    <span>
                    <Rate tooltips={desc} onChange={setMiHumor} value={miHumor} />
                    {miHumor ? <span className="ant-rate-text">{desc[miHumor - 1]}</span> : ''}
                    </span>
                    </p>
                </div>
                </div>
            </div>  
            </div>
        </div>

    )
}