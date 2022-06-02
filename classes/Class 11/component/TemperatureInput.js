import React from 'react';
// import BoilVerdict from './BoilVerdict';
const scalNames = { 
    c : 'Celsius',
    f : 'Fahrenheit'
}
export default function TemperatureInput({scale,temparature,onTemperatureChange}) {

    return(
            <div>
                <fieldset>
                    <legend>Enter The Temperature in {scalNames[scale]}</legend>
                    <input type="text" value={temparature}  onChange={(e) => onTemperatureChange(e,scale)}/>
                </fieldset>
            </div>
    )
}