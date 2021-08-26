import React, {useState} from 'react';
import './App.css';
import { WeightVerdict } from './components/WeightVerdict';
import { WeightInput } from './components/WeightInput';

const App = ()=> {

// functions to convert pound to kilo and vice versa

const toKilogram=(pound)=>{
    return (pound  * 0.454 );
  }
  
const toPound = (kilogram)=>{
    return (kilogram / 0.454);
  }

// function to output as a string and ignore illegal Numbers
const tryConvert=(weight, convert)=> {
  const input = parseFloat(weight);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output );
  return rounded.toString();
}

// setting hooks to set value to passed props
const [state, setState] = useState({
  unit: 'kg',
  weight: ''
});


// handling changes in state
const handleKilogramChange = (weight)=>{
  setState({unit:'kg', weight})
  
}
const handlePoundChange = (weight)=>{
  setState({unit:'lbs', weight})
}

// doing the actual conversion
const kilogram = state.unit === 'lbs' ? tryConvert(state.weight, toKilogram) : state.weight;
const pound = state.unit === 'kg' ? tryConvert(state.weight, toPound) : state.weight;

//returning values to the UI
  return (
    <div className="App">
      <WeightInput unit ="kg" weight={kilogram} onWeightChange={handleKilogramChange}/>
      <WeightInput unit ="lbs" weight={pound} onWeightChange={handlePoundChange}/>
      <WeightVerdict kilogram={parseFloat(kilogram)}/>
    
    </div>
  );
}

export default App;
