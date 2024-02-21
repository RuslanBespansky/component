import React, { useState } from 'react';

import './App.css';
import Accardion from './components/accardion/Accardion';
import { Raiting, RaitingValueType } from './Raiting';
import OnOf from './components/onof/OnOf';
import { UncontroledAccardion } from './components/accardion/UncontroledAccardion';
import { UncontroledRaiting } from './components/UncontroledRaiting';
import UncontroledOnOf from './components/onof/UncontroledOnOf ';

function App() {

let [raitingValue, setRaitingValue] = useState<RaitingValueType>(0)
let [accardionCollapsed, setAccardionCollapsed] = useState<boolean>(true)
let[switchOn,setSwitchON ] = useState<boolean>(false)


  return (
    <div  className={"App"}>
      <OnOf on = {switchOn} onChange ={(on)=> {setSwitchON(on)}}/>

      <AppTitle  title="This is APP component"/>
      <Raiting value={raitingValue }  onClick = {setRaitingValue}/>
      {/* <Accardion titleValue = {"menu"} collapsed = {accardionCollapsed} /> */}
      <Accardion titleValue = {"user"} collapsed = {accardionCollapsed} onClick = {()=>{setAccardionCollapsed(!accardionCollapsed)}}/>
      <Raiting value={raitingValue }  onClick = {setRaitingValue}/>
      <Raiting value={raitingValue }  onClick = {setRaitingValue} />
      <Raiting value={raitingValue }  onClick = {setRaitingValue} />
      <Raiting value={raitingValue }  onClick = {setRaitingValue} />
     <UncontroledAccardion titleValue={"menu"}  />
     <UncontroledAccardion titleValue={"menu"}  />
     <UncontroledRaiting/>
     <UncontroledOnOf onChange = {setSwitchON} /> {switchOn.toString()}
    </div>
  );
}

function AppTitle(props:any) {
  return (
    <div>{props.title}</div>

  )
}

export default App;
