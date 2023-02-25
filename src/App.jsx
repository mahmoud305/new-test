import { useState } from 'react';
import './App.css';
import MyCard from './Componenets/Card/MyCard';
import xx from './imges/me.png'

function App() {
  const [btnColor, setBtnColor] = useState("yellow")

  function setColor(e){
    setBtnColor(btnColor==="yellow"?"green":"yellow");
    e.target.style.backgroundColor=btnColor;
  }
  return (
    <div className="App container">
       <h1 className='text-center'>Hello wssssorasasald</h1>
       <button className='btn mbtn ' onClick={setColor}> change </button>
       <MyCard xx={xx} name="hamada"> </MyCard>
    </div>
  );
}

export default App;
