import React from "react";
import './Cartas.css'
import TextArea from "antd/es/input/TextArea";
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';
import { Rate } from 'antd';
import { useState } from 'react';
import { Switch } from 'antd';


const desc = ['Terrible', 'Malo', 'Normal', 'Bien', 'Hermoso'];

const customIcons = {
    1: <FrownOutlined />,
    2: <FrownOutlined />,
    3: <MehOutlined />,
    4: <SmileOutlined />,
    5: <SmileOutlined />,
  };
  

export default function Carta(){

    const [value, setValue] = useState(3);

    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
      };

    return(
        
        <div className="contenedor">
            <Switch defaultChecked onChange={onChange} className="switch"/>
            <h1 className="dia">Dia .......</h1>
            <spline-viewer url="https://prod.spline.design/U9O6K7fXziMEU7Wu/scene.splinecode"></spline-viewer>
            <spline-viewer url="https://prod.spline.design/FVZWbQH2B6ndj9UU/scene.splinecode" events-target="global"></spline-viewer>
          {/*   <div>
               
                <div className="card contenedor">
                 <h2 className="metas card-header">Mis metas hoy</h2>
                 <div className="card-body"></div>
                </div>
            </div> */}

            <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
                <div class="card h-100 cartita">
                <div class="card-body">
                    <h5 class="card-title ">Mis metas hoy</h5>
                    <p class="card-text">
                        <TextArea/>
                    </p>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100 cartita">
                <div class="card-body">
                    <h5 class="card-title ">Energía</h5>
                    <p class="card-text">
                    <Rate defaultValue={3} character={({ index }) => customIcons[index + 1]} />
                    </p>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100 cartita">
                <div class="card-body">
                    <h5 class="card-title ">Como fue tu dia?</h5>
                    <p class="card-text">
                    <span>
                    <Rate tooltips={desc} onChange={setValue} value={value} />
                    {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
                    </span>
                    </p>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100 cartita">
                <div class="card-body">
                    <h5 class="card-title ">Mis metas hoy</h5>
                    <p class="card-text">
                        <TextArea/>
                    </p>
                </div>
                </div>
            </div>  
            </div>
        </div>

    )
}