import { useState } from 'react';
import './App.css';
import Sum from './components/Sum';

function App() {

const [ state , setState] = useState()

 const ClickHandler = (num)=>{
    setState(num)
 }
 return (
    <div className="App">
   <Sum onClickHandler={ClickHandler}/>
   <h1>{state}</h1>
   
    </div>
  );
}


export default App;
