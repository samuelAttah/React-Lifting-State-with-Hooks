import React from 'react';

export const WeightInput =(props)=>{
    const unitNames = {
        kg : "Kilograms",
        lbs : "pounds"
    }

    const handleChange =(e)=>{
        props.onWeightChange(e.target.value)
    }

    return (
            <fieldset>
              <legend>Enter weight in {unitNames[props.unit]}:</legend>
              <input value={props.weight}
                     onChange={handleChange} />
            </fieldset>
          );
    
}