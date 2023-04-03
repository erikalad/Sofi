import React from "react";
import './Cartas.css'
import TextArea from "antd/es/input/TextArea";
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';
import { Form, Rate } from 'antd';
import { useState } from 'react';
import { Switch , Button} from 'antd';
import useLocalStorage from "./useLocalStorage";
import { BsCheckLg } from 'react-icons/bs';
import { TbHeartHandshake } from 'react-icons/tb'
import { AiFillDelete } from 'react-icons/ai'
import { Divider, List, Typography } from 'antd';
import FormItem from "antd/es/form/FormItem";


const desc = ['Terrible', 'Malo', 'Normal', 'Bien', 'Hermoso'];

const customIcons = {
    1: <FrownOutlined />,
    2: <FrownOutlined />,
    3: <MehOutlined />,
    4: <SmileOutlined />,
    5: <SmileOutlined />,
  };

  const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];



export default function Carta(modo){



      function mostrarDiaActual() {
        const fecha = new Date(); // obtiene la fecha actual
        const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        const diaActual = diasSemana[fecha.getDay()];// obtiene el día actual como un número del 0 al 6 y lo convierte en el nombre del día correspondiente
        return(`Hoy es ${diaActual}`); // muestra el día actual en la consola
      }


      localStorage.setItem("metas", JSON.stringify([""]));
      localStorage.setItem("energia", JSON.stringify(1));
      localStorage.setItem("humor", JSON.stringify(1));
      localStorage.setItem("agradecimiento", JSON.stringify([""]))


      const [misMetas, setMisMetas] = useLocalStorage("metas",["q"])
      const [miEnergia, setMiEnergia] = useLocalStorage("energia",1)
      const [miHumor, setMiHumor] = useLocalStorage("humor",1)
      const [misAgra, setMisAgra] = useLocalStorage("agradecimiento",[""])
      

      const arrLocal = localStorage.getItem('metas');
      const miValor = JSON.parse(arrLocal);
      
      const arrLocalAgra = localStorage.getItem('agradecimiento');
      const miValorAgra = JSON.parse(arrLocalAgra); 


      const [metas, setMetas] = useState("")
      const [agradecimiento, setAgradecimiento] = useState([])
      const [metasList, setMetasList] = useState([])
      const [agra, setAgra] = useState("")
      
      
      
    

      function valueMetas(e){
      setMetas(e.target.value)
      
      }

      function onFinishMetas(values){
        setMetas(values.metas)
        setMisMetas([...misMetas, values.metas]);
        setMetasList([...metasList, values.metas]);
        setMetas("")
      }

      function valueAgradecimiento(e){
        setAgra(e.target.value)
        
      }

      function onFinish(values){
    
        setAgradecimiento([...agradecimiento, values.agradecimiento]);
        setMisAgra([...misAgra, values.agradecimiento])
        setAgra("")
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
                    <Form onFinish={onFinishMetas}>
                    <FormItem name="metas">
                    <p class="card-text">
                        <TextArea value={metas}  placeholder="Escribí tus metas" onChange={(e)=>valueMetas(e)} className="textarea"/>
                    </p>
                    </FormItem>
                    <Button type="primary" htmlType="submit" shape="circle" className="boton">
                        <BsCheckLg/>
                    </Button>
                    </Form>
                    {
                    metasList.length !== 0 ? 
                    <div>
                            <List
                            size="small"
                            bordered
                            dataSource={metasList}
                            renderItem={(item) => <List.Item><div className="lista"><p className="item">{item}</p> <p><AiFillDelete/></p></div></List.Item>}    
                            />

                    </div> : null
                    }
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

            <div class="col">
                <div className={`${(modo ? "card h-100 cartita numero3" : 'card h-100 cartita oscuro')}`}>
                <div class="card-body">
                    <h5 class="card-title ">Agradezco por <TbHeartHandshake/></h5>
                    <Form onFinish={onFinish}>
                    <FormItem name="agradecimiento">
                    <p class="card-text">
                    <TextArea name="agradecimiento" value={agra}  className="textarea" placeholder="Escribí tus agradecimientos" onChange={(e)=>valueAgradecimiento(e)}/>
                    </p>
                    </FormItem>
                    <Button type="primary" htmlType="submit" shape="circle" className="boton">
                        <BsCheckLg/>
                    </Button>
                    </Form>
                    {
                    agradecimiento.length > 0 ? 
                    <div>
                            <List
                            size="small"
                            bordered
                            dataSource={agradecimiento}
                            renderItem={(item) => <List.Item><div className="lista"><p className="item">{item}</p> <p><AiFillDelete/></p></div></List.Item>}
                            />

                    </div> : null
                    }
                </div>
                </div>
            </div> 
            </div>
        </div>

    )
}