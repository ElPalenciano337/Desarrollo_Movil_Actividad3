import React from 'react';
import { useState } from 'react';
import { IonInput, IonItem, IonList } from '@ionic/react';

import { IonButton } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  let [monto, setMonto] = useState<number | "">("")
  let [montoFinal, setMontoFinal] = useState<number | ''>('');

  function convertir(){
    setMontoFinal(monto * 8);
  };

  return (
    <>
      <div className='container'>
        <p>Ingrese el monto a convertir en $$$</p>
        <input type='number' value={monto} onChange={(e) => setMonto(Number(e.target.value))}></input>
        <IonButton onClick={convertir}>Convertir</IonButton>
        <input type='number' value={montoFinal}></input>
      </div>
    </>
  );
};

export default Home;
