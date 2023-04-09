import { Form, InputNumber, Popconfirm, Table, Typography, Input } from 'antd';
import { useState } from 'react';



const allProducts= [
    {
      "id": 398,
      "name": "A Way Out",
      "description": "Este título de acción y aventura se enfoca en la cooperación, con una trama centrada en las hazañas de dos prisioneros en fuga, Leo y Vincent, obligados a trabajar juntos para evitar a la policía y otros criminales. Para lograrlo deberán superar persecuciones en coche, pasajes sigilosos y combates cuerpo a cuerpo.",
      "img": [
        "https://res.cloudinary.com/dapq4icmj/image/upload/v1679454264/Ps4/A%20Way%20Out/a-way-out-330x404_g6xu5s.jpg",
        "https://res.cloudinary.com/dapq4icmj/image/upload/v1679454263/Ps4/A%20Way%20Out/a-way-out_7_fe0myr.jpg",
        "https://res.cloudinary.com/dapq4icmj/image/upload/v1679454270/Ps4/A%20Way%20Out/a-way-out_2-330x186_l7qq4f.jpg",
        "https://res.cloudinary.com/dapq4icmj/image/upload/v1679454270/Ps4/A%20Way%20Out/a-way-out_4-330x186_lfx1cd.jpg"
      ],
      "price": "10680",
      "genre": "Acción",
      "platform": "PS4"
    },
    {
      "id": 399,
      "name": "A Way Out Retro",
      "description": "Este título de acción y aventura se enfoca en la cooperación, con una trama centrada en las hazañas de dos prisioneros en fuga, Leo y Vincent, obligados a trabajar juntos para evitar a la policía y otros criminales. Para lograrlo deberán superar persecuciones en coche, pasajes sigilosos y combates cuerpo a cuerpo.",
      "img": [
        "https://res.cloudinary.com/dapq4icmj/image/upload/v1679454318/Ps5/A%20Way%20Out%20PS5%20Retro/a-way-out-ps5-retro-330x404_dhgoda.jpg",
        "https://res.cloudinary.com/dapq4icmj/image/upload/v1679454315/Ps5/A%20Way%20Out%20PS5%20Retro/a-way-out_7_gopu5m.jpg",
        "https://res.cloudinary.com/dapq4icmj/image/upload/v1679454315/Ps5/A%20Way%20Out%20PS5%20Retro/a-way-out_6-330x186_yc8yps.jpg",
        "https://res.cloudinary.com/dapq4icmj/image/upload/v1679454317/Ps5/A%20Way%20Out%20PS5%20Retro/a-way-out_5-330x186_suc2wc.jpg"
      ],
      "price": "10080",
      "genre": "Acción",
      "platform": "PS5"
    },
    {
      "id": 400,
      "name": "Alien Isolation",
      "description": "En una atmósfera que incluye temor, peligro y un alienígena impredecible, los jugadores encarnan el papel de Amanda, quien lucha por sobrevivir y cumplir su objetivo de saber cuál es la verdad detrás de la desaparición de su madre.",
      "img": [
        "https://res.cloudinary.com/dapq4icmj/image/upload/v1679454275/Ps4/Alien%20Isolation/alien-isolation-5_espz0u.png",
        "https://res.cloudinary.com/dapq4icmj/image/upload/v1679454270/Ps4/Alien%20Isolation/alien-isolation_4-330x185_yumqz9.jpg",
        "https://res.cloudinary.com/dapq4icmj/image/upload/v1679454270/Ps4/Alien%20Isolation/alien-isolation_2-330x185_vrlhlc.jpg",
        "https://res.cloudinary.com/dapq4icmj/image/upload/v1679454263/Ps4/Alien%20Isolation/alien-isolation_3-330x185_1_o3uro1.jpg"
      ],
      "price": "11160",
      "genre": "Acción",
      "platform": "PS4"
    },
    {
      "id": 401,
      "name": "Alien Isolation",
      "description": "En una atmósfera que incluye temor, peligro y un alienígena impredecible, los jugadores encarnan el papel de Amanda, quien lucha por sobrevivir y cumplir su objetivo de saber cuál es la verdad detrás de la desaparición de su madre.",
      "img": [
        "https://res.cloudinary.com/dapq4icmj/image/upload/v1679454235/Ps3/Alien%20Isolation/alien-isolation-330x380_lo26fm.jpg",
        "https://res.cloudinary.com/dapq4icmj/image/upload/v1679454236/Ps3/Alien%20Isolation/alien-isolation_4-330x185_wdluyt.jpg",
        "https://res.cloudinary.com/dapq4icmj/image/upload/v1679454236/Ps3/Alien%20Isolation/alien-isolation_5-330x185_ngtnld.jpg",
        "https://res.cloudinary.com/dapq4icmj/image/upload/v1679454235/Ps3/Alien%20Isolation/alien-isolation-330x185_y61ab6.jpg"
      ],
      "price": "7348",
      "genre": "Acción",
      "platform": "PS3"
    },
    {
      "id": 402,
      "name": "Alien Isolation PS5 Retro",
      "description": "En una atmósfera que incluye temor, peligro y un alienígena impredecible, los jugadores encarnan el papel de Amanda, quien lucha por sobrevivir y cumplir su objetivo de saber cuál es la verdad detrás de la desaparición de su madre.",
      "img": [
        "https://res.cloudinary.com/dapq4icmj/image/upload/v1679454308/Ps5/Alien%20Isolation%20PS5%20Retro/alien-isolation_wgrtt3.jpg",
        "https://res.cloudinary.com/dapq4icmj/image/upload/v1679454320/Ps5/Alien%20Isolation%20PS5%20Retro/alien-isolation_4-330x185_ncfjpj.jpg",
        "https://res.cloudinary.com/dapq4icmj/image/upload/v1679454317/Ps5/Alien%20Isolation%20PS5%20Retro/alien-isolation_2-330x185_g8pnms.jpg",
        "https://res.cloudinary.com/dapq4icmj/image/upload/v1679454316/Ps5/Alien%20Isolation%20PS5%20Retro/alien-isolation_5-330x185_f6himr.jpg"
      ],
      "price": "10080",
      "genre": "Acción",
      "platform": "PS5"
    },
    {
      "id": 403,
      "name": "Among Us",
      "description": "Mientras preparan su nave espacial para partir, los jugadores deberán estar atentos a detectar a los impostores de la tripulación. El juego admite partidas individuales o en caso de contar con suscripción a PS Plus, con otros jugadores en línea de cualquier plataforma, ya sea PlayStation, PC, móvil u otras.",
      "img": [
        "https://res.cloudinary.com/dapq4icmj/image/upload/v1679454271/Ps4/Among%20Us/among-us-330x404_ooewft.jpg",
        "https://res.cloudinary.com/dapq4icmj/image/upload/v1679454271/Ps4/Among%20Us/among-us_4-330x186_vydz52.jpg",
        "https://res.cloudinary.com/dapq4icmj/image/upload/v1679454270/Ps4/Among%20Us/among-us_3-330x185_omjrai.jpg",
        "https://res.cloudinary.com/dapq4icmj/image/upload/v1679454262/Ps4/Among%20Us/among-us_7-330x217_x8ejtf.jpg"
      ],
      "price": "1800",
      "genre": "Estrategia",
      "platform": "PS4"
    },
    {
      "id": 404,
      "name": "Among Us PS5",
      "description": "Mientras preparan su nave espacial para partir, los jugadores deberán estar atentos a detectar a los impostores de la tripulación. El juego admite partidas individuales o en caso de contar con suscripción a PS Plus, con otros jugadores en línea de cualquier plataforma, ya sea PlayStation, PC, móvil u otras.",
      "img": [
        "https://res.cloudinary.com/dapq4icmj/image/upload/v1679584951/Ps5/Among%20Us%20PS5/among-us-ps5-330x404_nsxyxu.jpg",
        "https://res.cloudinary.com/dapq4icmj/image/upload/v1679454319/Ps5/Among%20Us%20PS5/among-us_2-330x173_mqlykd.jpg",
        "https://res.cloudinary.com/dapq4icmj/image/upload/v1679454317/Ps5/Among%20Us%20PS5/among-us_3-330x185_wwki0i.jpg",
        "https://res.cloudinary.com/dapq4icmj/image/upload/v1679454316/Ps5/Among%20Us%20PS5/among-us_4-330x186_tmgtkv.jpg"
      ],
      "price": "2400",
      "genre": "Estrategia",
      "platform": "PS5"
    },
    {
      "id": 405,
      "name": "Anthem",
      "description": "Juego de aventura cooperativa con mundos abiertos y enemigos impredecibles. Todas las opciones de personalización de los trajes, las armas y el equipamiento permiten mostrar cada victoria obtenida, cada enemigo vencido y cada logro completado.",
      "img": [
        "https://res.cloudinary.com/dapq4icmj/image/upload/v1679454272/Ps4/Anthem/anthem-1-330x404_bepmdh.jpg",
        "https://res.cloudinary.com/dapq4icmj/image/upload/v1679454269/Ps4/Anthem/anthem_6-330x185_ej83z6.jpg",
        "https://res.cloudinary.com/dapq4icmj/image/upload/v1679454269/Ps4/Anthem/anthem_5-330x185_mtsgwd.jpg",
        "https://res.cloudinary.com/dapq4icmj/image/upload/v1679454262/Ps4/Anthem/anthem_4-330x185_gnfo33.jpg"
      ],
      "price": "13440",
      "genre": "Acción",
      "platform": "PS4"
    },
    {
      "id": 406,
      "name": "Anthem PS5 Retro",
      "description": "Juego de aventura cooperativa con mundos abiertos y enemigos impredecibles. Todas las opciones de personalización de los trajes, las armas y el equipamiento permiten mostrar cada victoria obtenida, cada enemigo vencido y cada logro completado.",
      "img": [
        "https://res.cloudinary.com/dapq4icmj/image/upload/v1679454308/Ps5/Anthem%20PS5%20Retro/anthem-ps5-retro-330x404_w7wlr4.jpg",
        "https://res.cloudinary.com/dapq4icmj/image/upload/v1679454316/Ps5/Anthem%20PS5%20Retro/anthem-330x185_eivawb.jpg",
        "https://res.cloudinary.com/dapq4icmj/image/upload/v1679454319/Ps5/Anthem%20PS5%20Retro/anthem_5-330x185_sfmnro.jpg",
        "https://res.cloudinary.com/dapq4icmj/image/upload/v1679454315/Ps5/Anthem%20PS5%20Retro/anthem_4-330x185_inhhpw.jpg"
      ],
      "price": "19600",
      "genre": "Acción",
      "platform": "PS5"
    },
    {
      "id": 407,
      "name": "ARK Survival Evolved",
      "description": "Juego de aventuras en una misteriosa isla habitada por dinosaurios y otros animales primitivos. Los jugadores deben sobrevivir a este ambiente desafiante a través de la caza y la domesticación de estas criaturas.",
      "img": [
        "https://res.cloudinary.com/dapq4icmj/image/upload/v1679454277/Ps4/ARK%20Survival%20Evolved/ARK-Survival-Evolved-1-330x413_daebld.png",
        "https://res.cloudinary.com/dapq4icmj/image/upload/v1679454276/Ps4/ARK%20Survival%20Evolved/ark-survival-evolved_5-330x185_lbismw.jpg",
        "https://res.cloudinary.com/dapq4icmj/image/upload/v1679454269/Ps4/ARK%20Survival%20Evolved/ark-survival-evolved_4-330x185_zs15ro.jpg",
        "https://res.cloudinary.com/dapq4icmj/image/upload/v1679454265/Ps4/ARK%20Survival%20Evolved/ark-survival-evolved-2-330x185_s43htx.jpg"
      ],
      "price": "7280",
      "genre": "Acción",
      "platform": "PS4"
    },
    {
      "id": 408,
      "name": "ARK Survival Evolved PS5 Retro",
      "description": "Juego de aventuras en una misteriosa isla habitada por dinosaurios y otros animales primitivos. Los jugadores deben sobrevivir a este ambiente desafiante a través de la caza y la domesticación de estas criaturas.",
      "img": [
        "https://res.cloudinary.com/dapq4icmj/image/upload/v1679454308/Ps5/ARK%20Survival%20Evolved%20PS5%20Retro/ark-survival-evolved-ps5-330x404_rpvrc6.jpg",
        "https://res.cloudinary.com/dapq4icmj/image/upload/v1679454309/Ps5/ARK%20Survival%20Evolved%20PS5%20Retro/ark-survival-evolved_2-330x185_e35nm6.jpg",
        "https://res.cloudinary.com/dapq4icmj/image/upload/v1679454316/Ps5/ARK%20Survival%20Evolved%20PS5%20Retro/ark-survival-evolved-2-330x185_wjic5v.jpg",
        "https://res.cloudinary.com/dapq4icmj/image/upload/v1679454318/Ps5/ARK%20Survival%20Evolved%20PS5%20Retro/ark-survival-evolved_3-330x185_tfnauk.jpg"
      ],
      "price": "6800",
      "genre": "Acción",
      "platform": "PS5"
    },
    {
      "id": 409,
      "name": "Army of Two The Devils Cartel",
      "description": "En la ciudad de México se desató el caos y la destrucción de la mano de uno de los carteles de drogas más temidos del mundo. Los jugadores acompañarán a Alpha y Bravo en peligrosas misiones mientras mejoran sus equipos y armas para enfrentar una guerra contra la mafia.",
      "img": [
        "https://res.cloudinary.com/dapq4icmj/image/upload/v1679454245/Ps3/Army%20Of%20Two%20The%20Devils%20Cartel/Army-Of-Two-The-Devils-Cartel-330x397_zmxagg.png",
        "https://res.cloudinary.com/dapq4icmj/image/upload/v1679454244/Ps3/Army%20Of%20Two%20The%20Devils%20Cartel/army-of-two-the-devils-cartel-3-330x248_hzg1ou.jpg",
        "https://res.cloudinary.com/dapq4icmj/image/upload/v1679454241/Ps3/Army%20Of%20Two%20The%20Devils%20Cartel/army-of-two-the-devils-cartel-4-330x248_xmxk38.jpg",
        "https://res.cloudinary.com/dapq4icmj/image/upload/v1679454237/Ps3/Army%20Of%20Two%20The%20Devils%20Cartel/army-of-two-the-devils-cartel-6-330x248_mkug5d.jpg"
      ],
      "price": "4520",
      "genre": "Acción",
      "platform": "PS3"
    },
    {
      "id": 410,
      "name": "Assassins Creed",
      "description": "En 1911 la Tierra Santa estaba siendo arrasada y sometida por intereses políticos y religiosos. En el rol de Altair, los jugadores tendrán la misión de frenar a ambos bandos del conflicto para frenar la destrucción pero también para evitar que algunos secretos de los Asesinos sean revelados.",
      "img": [
        "https://res.cloudinary.com/dapq4icmj/image/upload/v1679454237/Ps3/Assassins%20Creed/Assassins-Creed-330x397_xmayyb.png"
      ],
      "price": "3440",
      "genre": "Acción",
      "platform": "PS3"
    },
    {
      "id": 411,
      "name": "Asassins Creed 3",
      "description": "Ambientado en las colonias americanas de 1775, la agitación civil y política están a la orden del día. Los jugadores deberán proteger su tierra y su pueblo como uno de los Asesinos con una variedad de armas y habilidades de combate para disfrutar una experiencia realista e inmersiva.",
      "img": [
        "https://res.cloudinary.com/dapq4icmj/image/upload/v1679454236/Ps3/Assassins%20Creed%203/assassins-creed-3-330x379_ropea9.jpg",
        "https://res.cloudinary.com/dapq4icmj/image/upload/v1679454237/Ps3/Assassins%20Creed%203/assassins-creed-3-2-330x248_zaheqb.jpg",
        "https://res.cloudinary.com/dapq4icmj/image/upload/v1679454237/Ps3/Assassins%20Creed%203/assassins-creed-3-4-330x248_bbbdys.jpg",
        "https://res.cloudinary.com/dapq4icmj/image/upload/v1679454238/Ps3/Assassins%20Creed%203/assassins-creed-3-5-330x248_igjawp.jpg"
      ],
      "price": "4972",
      "genre": "Acción",
      "platform": "PS3"
    },
    {
      "id": 412,
      "name": "Assassins Creed 4 Black Flag",
      "description": "string",
      "img": [
        "https://res.cloudinary.com/dapq4icmj/image/upload/v1679454262/Ps4/Assassins%20Creed%204%20Black%20Flag/assassins-creed-4-black-flag-330x420_efvb7w.jpg",
        "https://res.cloudinary.com/dapq4icmj/image/upload/v1679454262/Ps4/Assassins%20Creed%204%20Black%20Flag/assassins-creed-4-black-flag-330x185_yqldo6.jpg",
        "https://res.cloudinary.com/dapq4icmj/image/upload/v1679454278/Ps4/Assassins%20Creed%204%20Black%20Flag/assassins-creed-4-black-flag_4-330x185_kgdtnp.jpg",
        "https://res.cloudinary.com/dapq4icmj/image/upload/v1679454272/Ps4/Assassins%20Creed%204%20Black%20Flag/assassins-creed-4-black-flag_2-330x185_ar9slr.jpg"
      ],
      "price": "11160",
      "genre": "Acción",
      "platform": "PS4"
    },
    {
      "id": 413,
      "name": "Assassins Creed 4 Black Flag PS5 Retro",
      "description": "Cuarta entrega de la saga, ambientada en el Caribe del siglo XVIII gobernado por piratas. En el rol del capitán Kenway, los jugadores deben explorar 50 increíbles lugares para hundir buques de guerra o buscar tesoros en el fondo del mar.",
      "img": [
        "https://res.cloudinary.com/dapq4icmj/image/upload/v1679454309/Ps5/Assassins%20Creed%204%20Black%20Flag%20PS5%20Retro/assassins-creed-black-flag-ps5-retro-330x404_d00ogo.jpg",
        "https://res.cloudinary.com/dapq4icmj/image/upload/v1679454309/Ps5/Assassins%20Creed%204%20Black%20Flag%20PS5%20Retro/assassins-creed-4-black-flag-330x185_tg4je1.jpg",
        "https://res.cloudinary.com/dapq4icmj/image/upload/v1679454315/Ps5/Assassins%20Creed%204%20Black%20Flag%20PS5%20Retro/assassins-creed-4-black-flag_2-330x185_qsdyqs.jpg",
        "https://res.cloudinary.com/dapq4icmj/image/upload/v1679454315/Ps5/Assassins%20Creed%204%20Black%20Flag%20PS5%20Retro/assassins-creed-4-black-flag_3-330x185_exgwma.jpg"
      ],
      "price": "10080",
      "genre": "Acción",
      "platform": "PS5"
    },
    {
      "id": 414,
      "name": "Back 4 Blood",
      "description": "En este emocionante shooter en primera persona, los jugadores estarán en el centro de una guerra contra los Ridden, criaturas que alguna vez fueron humanos pero se han convertido en monstruos aterradores y hambrientos. Con la humanidad en peligro, será un verdadero desafío erradicar a los Ridden y recuperar el mundo.",
      "img": [
        "https://res.cloudinary.com/dapq4icmj/image/upload/v1679454272/Ps4/Back%204%20Blood/back-4-blood-330x404_d5a7kv.jpg",
        "https://res.cloudinary.com/dapq4icmj/image/upload/v1679454271/Ps4/Back%204%20Blood/wwe-back-4-blood_6-330x186_vwhkoz.jpg",
        "https://res.cloudinary.com/dapq4icmj/image/upload/v1679454270/Ps4/Back%204%20Blood/wwe-back-4-blood_3-330x186_xtxuls.jpg",
        "https://res.cloudinary.com/dapq4icmj/image/upload/v1679454270/Ps4/Back%204%20Blood/wwe-back-4-blood_4-330x186_nnrqq7.jpg"
      ],
      "price": "12200",
      "genre": "Acción",
      "platform": "PS4"
    },
    {
      "id": 415,
      "name": "Back 4 Blood PS5",
      "description": "En este emocionante shooter en primera persona, los jugadores estarán en el centro de una guerra contra los Ridden, criaturas que alguna vez fueron humanos pero se han convertido en monstruos aterradores y hambrientos. Con la humanidad en peligro, será un verdadero desafío erradicar a los Ridden y recuperar el mundo.",
      "img": [
        "https://res.cloudinary.com/dapq4icmj/image/upload/v1679454302/Ps5/Back%204%20Blood/back-4-blood-ps5-330x404_fmvwvq.jpg",
        "https://res.cloudinary.com/dapq4icmj/image/upload/v1679454302/Ps5/Back%204%20Blood/wwe-back-4-blood-330x186_elrvqw.jpg",
        "https://res.cloudinary.com/dapq4icmj/image/upload/v1679454305/Ps5/Back%204%20Blood/wwe-back-4-blood_2-330x186_ubslvl.jpg",
        "https://res.cloudinary.com/dapq4icmj/image/upload/v1679454317/Ps5/Back%204%20Blood/wwe-back-4-blood_4-330x186_anxidf.jpg"
      ],
      "price": "21360",
      "genre": "Acción",
      "platform": "PS5"
    }]

/* for (let i = 0; i < 100; i++) {
  allProducts.push({
    key: i.toString(),
    name: `Edward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
} */
const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};
const Lista = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(allProducts);
  const [editingKey, setEditingKey] = useState('');
  const isEditing = (record) => record.id === editingKey;
  const edit = (record) => {
    form.setFieldsValue({
      name: '',
      age: '',
      address: '',
      ...record,
    });
    setEditingKey(record.id);
  };
  const cancel = () => {
    setEditingKey('');
  };
  const save = async (id) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => id === item.id);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };
  const columns = [
    {
      title: 'name',
      dataIndex: 'name',
      width: '25%',
      editable: true,
    },
    {
      title: 'age',
      dataIndex: 'age',
      width: '15%',
      editable: true,
    },
    {
      title: 'address',
      dataIndex: 'address',
      width: '40%',
      editable: true,
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.id)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
            Edit
          </Typography.Link>
        );
      },
    },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};
export default Lista;