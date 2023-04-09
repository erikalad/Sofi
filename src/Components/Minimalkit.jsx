import React from 'react';
import { Line } from '@nivo/line';
import { Pie } from '@nivo/pie';
import { Bar } from '@nivo/bar';
import { ResponsiveRadialBar } from '@nivo/radial-bar';



const MyNivoCharts = () => {

const datos =[
    {
      "id": "Supermarket",
      "data": [
        {
          "x": "Vegetables",
          "y": 242
        },
        {
          "x": "Fruits",
          "y": 252
        },
        {
          "x": "Meat",
          "y": 140
        }
      ]
    },
    {
      "id": "Combini",
      "data": [
        {
          "x": "Vegetables",
          "y": 39
        },
        {
          "x": "Fruits",
          "y": 145
        },
        {
          "x": "Meat",
          "y": 193
        }
      ]
    },
    {
      "id": "Online",
      "data": [
        {
          "x": "Vegetables",
          "y": 298
        },
        {
          "x": "Fruits",
          "y": 41
        },
        {
          "x": "Meat",
          "y": 270
        }
      ]
    },
    {
      "id": "Marché",
      "data": [
        {
          "x": "Vegetables",
          "y": 228
        },
        {
          "x": "Fruits",
          "y": 70
        },
        {
          "x": "Meat",
          "y": 77
        }
      ]
    }
  ]

  const data = [
    // datos de ejemplo para los gráficos
    { x: 'Enero', y: 10 },
    { x: 'Febrero', y: 20 },
    { x: 'Marzo', y: 15 },
    { x: 'Abril', y: 25 },
    { x: 'Mayo', y: 30 },
  ];

  return (
    <div>
      <h2>Mi gráfico de línea Nivo</h2>
      <Line
        data={[
          {
            id: 'mi-línea',
            data,
          },
        ]}
        height={300}
        width={500}
        margin={{ top: 10, right: 30, bottom: 30, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto' }}
        axisBottom={{
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Meses',
          legendOffset: 36,
          legendPosition: 'middle',
        }}
        axisLeft={{
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Ventas',
          legendOffset: -40,
          legendPosition: 'middle',
        }}
      />

      <h2>Mi gráfico de torta Nivo</h2>
      <Pie
        data={[
          {
            id: 'manzanas',
            value: 10,
          },
          {
            id: 'naranjas',
            value: 20,
          },
          {
            id: 'bananas',
            value: 15,
          },
        ]}
        width={500}
        height={300}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        colors={{ scheme: 'category10' }}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
        radialLabelsSkipAngle={10}
        radialLabelsTextXOffset={6}
        radialLabelsTextColor="#333333"
        radialLabelsLinkOffset={0}
        radialLabelsLinkDiagonalLength={16}
        radialLabelsLinkHorizontalLength={24}
        radialLabelsLinkStrokeWidth={1}
        radialLabelsLinkColor="#666666"
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor="#333333"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        />
         <h2>Mi gráfico de barras Nivo</h2>
         <Bar
  data={[
    {
      x: 'Manzanas',
      y: 10,
    },
    {
      x: 'Naranjas',
      y: 20,
    },
    {
      x: 'Bananas',
      y: 15,
    },
  ]}
  keys={['y']}
  indexBy="x"
  width={500}
  height={300}
  margin={{ top: 10, right: 30, bottom: 30, left: 60 }}
  xScale={{ type: 'band', padding: 0.2 }}
  yScale={{ type: 'linear', min: 0, max: 'auto', stacked: false, reverse: false }}
  axisBottom={{
    orient: 'bottom',
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
  }}
  axisLeft={{
    orient: 'left',
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
  }}
/>

<div>
  <h2>Gráficos de progreso</h2>
  <div style={{ display: 'flex', justifyContent: 'space-between', width: '800px' }}>
  <ResponsiveRadialBar
        data={datos}
        valueFormat=">-.2f"
        padding={0.4}
        cornerRadius={2}
        margin={{ top: 40, right: 120, bottom: 40, left: 40 }}
        radialAxisStart={{ tickSize: 5, tickPadding: 5, tickRotation: 0 }}
        circularAxisOuter={{ tickSize: 5, tickPadding: 12, tickRotation: 0 }}
        legends={[
            {
                anchor: 'right',
                direction: 'column',
                justify: false,
                translateX: 80,
                translateY: 0,
                itemsSpacing: 6,
                itemDirection: 'left-to-right',
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                symbolSize: 18,
                symbolShape: 'square',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
    {/* <RadialBar
      data={{        x: 'Valor',        y: 75      } }
      id={"2"}
      width={200}
      height={200}
      innerRadius={0.5}
      colors={['#f47560']}
      animate={true}
      margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
    />
    <RadialBar
      data={{        x: 'Valor',        y: 75      } }
      id={"3"}
      width={200}
      height={200}
      innerRadius={0.5}
      colors={['#f6d743']}
      animate={true}
      margin={{ top: 10, right: 10, bottom: 10, left: 10 }} 
    />*/}
  </div>
</div> 
    </div>

);
};

export default MyNivoCharts;