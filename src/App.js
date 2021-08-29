import { useState } from 'react';
import './App.css';
import { CheckBox } from './CheckBox';

function App() {

  const [value, setValue]= useState("")

  const gettingData = (value)=>{
    setValue([...value])
  }

  return (
    <div className="App">
      <CheckBox onSubmit={gettingData}/>
      {
        value!==""? value.map((v,i)=><h1 key={i}>{v}</h1>) : ""
      }
    </div>
  );
}

export default App;
