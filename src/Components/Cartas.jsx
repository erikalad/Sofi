import React, { useEffect } from "react";
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
      
      const [misMetas, setMisMetas] = useLocalStorage("metas",[])
      const [miEnergia, setMiEnergia] = useLocalStorage("energia",1)
      const [miHumor, setMiHumor] = useLocalStorage("humor",1)
      const [misAgra, setMisAgra] = useLocalStorage("agradecimiento",[])
      


      const arrLocal = localStorage.getItem('metas');
      const miValor = JSON.parse(arrLocal);
      const [metasList, setMetasList] = useState(miValor)



      
      const arrLocalAgra = localStorage.getItem('agradecimiento');
      const miValorAgra = JSON.parse(arrLocalAgra); 
      const [agra, setAgra] = useState(miValorAgra)
      

      const [metas, setMetas] = useState("")
      const [agradecimiento, setAgradecimiento] = useState("")
     
      
      
      
    

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
        setAgradecimiento(e.target.value)
        
      }

      function onFinish(values){
    
        setAgra([...agra, values.agradecimiento]);
        setMisAgra([...misAgra, values.agradecimiento])
        setAgradecimiento("")
      }

      function borrar(item){
        console.log(item)
      // Obtener el valor actual del LocalStorage para la clave "agradecimiento"
        let metas = JSON.parse(localStorage.getItem("metas"));

        // Definir la palabra a borrar
        let palabraABorrar = item;

        // Encontrar la posición de la palabra a borrar en el array
        let posicion = metas.indexOf(palabraABorrar);

        // Si la palabra se encontró en el array, eliminarla
        if (posicion !== -1) {
            metas.splice(posicion, 1);

            setMetasList(metas)
        }

        // Guardar el nuevo valor en el LocalStorage
       localStorage.setItem("metas", JSON.stringify(metas));

      }

      function borrarAgra(item){
        // Obtener el valor actual del LocalStorage para la clave "agradecimiento"
        let agradecimientos = JSON.parse(localStorage.getItem("agradecimiento"));

        // Definir la palabra a borrar
        let palabraABorrar = item;

        // Encontrar la posición de la palabra a borrar en el array
        let posicion = agradecimientos.indexOf(palabraABorrar);

        // Si la palabra se encontró en el array, eliminarla
        if (posicion !== -1) {
        agradecimientos.splice(posicion, 1);

        // Actualizar el estado del componente con el nuevo valor del array
        setAgra(agradecimientos);
        }

        // Guardar el nuevo valor en el LocalStorage
        localStorage.setItem("agradecimiento", JSON.stringify(agradecimientos));
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
                    metasList && metasList.length !== 0 ? 
                    <div>
                            <List
                            size="small"
                            bordered
                            dataSource={metasList}
                            renderItem={(item) => 
                              <List.Item>
                              <div className="lista">
                                <p className="item-text">{item}</p>
                                <Button onClick={() => borrar(item)} className="delete-button">
                                  <AiFillDelete />
                                </Button>
                              </div>
                            </List.Item>}    
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
                <div className={`${(modo ? "card h-100 cartita numero4" : 'card h-100 cartita oscuro')}`}>
                <div class="card-body">
                    <h5 class="card-title ">Agradezco por <TbHeartHandshake/></h5>
                    <Form onFinish={onFinish}>
                    <FormItem name="agradecimiento">
                    <p class="card-text">
                    <TextArea name="agradecimiento" value={agradecimiento}  className="textarea" placeholder="Escribí tus agradecimientos" onChange={(e)=>valueAgradecimiento(e)}/>
                    </p>
                    </FormItem>
                    <Button type="primary" htmlType="submit" shape="circle" className="boton">
                        <BsCheckLg/>
                    </Button>
                    </Form>
                    {
                    agra.length > 0 ? 
                    <div>
                            <List
                            size="small"
                            bordered
                            dataSource={agra}
                            renderItem={(item) => <List.Item><div className="lista"><p className="item">{item}</p> <Button onClick={()=>borrarAgra(item)}><AiFillDelete/></Button></div></List.Item>}    
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