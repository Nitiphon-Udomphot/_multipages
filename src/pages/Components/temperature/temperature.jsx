import React, {useEffect, useState } from 'react';
import './temperature.css';
import Variable from '../variable/variable';

function temperature() {
    const [celsius,setCelsius] = useState(0)
    const [Fahrenheit,setFahrenheit] = useState(32)
    const [Kelvin,setKelvin] = useState(273.15)

    useEffect(() => {
        setFahrenheit(celsius * 1.8 + 32)
        setKelvin(celsius + 273.15)
    },[celsius])

    useEffect(() => {
        setCelsius((Fahrenheit - 32) / 1.8)
        setKelvin((Fahrenheit - 32) / 1.8 + 273.15)
    },[Fahrenheit])

    useEffect(() => {
        setCelsius(Kelvin - 273.15)
        setFahrenheit((Kelvin - 273.15) * 1.8 + 32)
    },[Kelvin])


    return (

        <div className='temperature-container'>
            <h3 className='temperature-title'>{'Temperature'}</h3>
            <h3 className='temperature-display'>
                <span className='badge bg-primary'>{celsius.toFixed(2) } &deg;C</span>
                <span className='badge bg-primary'>{Fahrenheit.toFixed(2)} &deg;F </span>
                <span className='badge bg-primary'>{Kelvin.toFixed(2)} &deg;K</span>
            </h3>
            <div className='temperature-veriable'>
                <Variable name ={'Celsius'} value = {celsius} setValue={setCelsius} />
                <Variable name ={'Fahrenheit'} value = {Fahrenheit} setValue={setFahrenheit} />
                <Variable name ={'Kelvin'} value = {Kelvin} setValue={setKelvin} />
            </div>
            </div>)

}

export default temperature