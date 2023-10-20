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
        <div>
            <h1 className='text-4xl font-bold text-center p-4'>Bondy en 2 minutes</h1>
        </div>

        <div className='text-center font-semibold text-lg'>
            <p>La ville de Bondy se situe dans l'est parisien. Elle est traversée par le canal de l'Ourq et par de nombreux transports en communs, elle se trouve à 20 minutes de Gare du Nord grâce au RER E. <br/> 
            La ville est aussi connue pour ses célibrités (Jonathan Ikoné, Kylian Mbappé, L'Artiste...). Voici quelques informations sur la ville.<br/>
            <span>Source : INSEE</span>
            </p>
        </div>
        <div className='text-xl h-screen flex flex-col justify-center items-center bg-[#FDFFFC]'>
        <img src={`../../src/assets/icons/${infoWeather.icon}.svg`} alt="Weather Icon" className=' flex items-center w-auto justify-center pb-4'/>
        <p className='m-4'>Température en cours : {infoWeather.temp}</p>
        </div>
    </>
  )
}

export default MeteoCard