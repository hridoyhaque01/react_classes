import React from 'react';
import { convert, toCelsius, toFahrenheit } from '../lib/converter';
import BoilVerdict from './BoilVerdict';
import TemperatureInput from './TemperatureInput';

export default class Calculator extends React.Component {
    state = {
        temparature : '',
        scale : 'c'
    }

    onTemperatureChange = (e,scale) =>{
        this.setState({
            temparature : e.target.value,
            scale ,
        })
    }

    render(){
        const {temparature,scale} = this.state
        const celsius = scale === 'f' ? convert(temparature,toCelsius) : temparature ;
        const fahrenheit = scale === 'c' ? convert(temparature,toFahrenheit) : temparature ;
        return(
            <div>
               <TemperatureInput temparature={celsius} scale="c" onTemperatureChange={this.onTemperatureChange}></TemperatureInput>
               <br />
               <TemperatureInput temparature={fahrenheit} scale="f" onTemperatureChange={this.onTemperatureChange}></TemperatureInput>
               
               <BoilVerdict celsius={parseFloat(temparature)}></BoilVerdict>
            </div>
        )
    }
}