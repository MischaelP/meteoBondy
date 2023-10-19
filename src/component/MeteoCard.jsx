import React from 'react'
import { useState,useEffect } from 'react'



const url= import.meta.env.VITE_WEATHER_API

function MeteoCard() {
    const [infoWeather, setInfoWeather] = useState({
        temp: 0,
        temp_mini: 0,
        temp_maxi: 0,
        icon: ""
    });


async function getWeather() {
    try{
        const response = await fetch(url);
        const data = await response.json();
        const temp = Math.floor(data.main.temp - 273.13);
        const tempMin = Math.floor(data.main.temp_min - 273.13);
        const tempMax = Math.floor(data.main.temp_max - 273.13);
        const weatherIcon = data.weather[0].icon;
        
        //Ajout des infos dans l'object
        setInfoWeather({
            temp: temp,
            temp_mini: tempMin,
            temp_maxi: tempMax,
            icon : weatherIcon
        })
    }
    catch(error){
        console.error("Veuillez contacter l'administrateur du site : BAD API request")
    }
    
    
}



    useEffect(() => {
        getWeather();
    }, []);
    
return (
        <>
        <div className='flex flex-col'>
        <h1 className='text-3xl font-bold text-center pb-4 pt-4 bg-pink-500'>Bondy en deux minutes</h1>
        </div>
        <div className='text-xl h-screen flex flex-col justify-center items-center bg-slate-500'>
        <img src={`../../src/assets/icons/${infoWeather.icon}.svg`} alt="Weather Icon" width={320} className=' flex items-center justify-center pb-4'/>
        <p className='m-4'>Température en cours : {infoWeather.temp}</p>
        </div>
    </>
  )
}

export default MeteoCard