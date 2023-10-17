import React from 'react'
import { useState,useEffect } from 'react'



const url="https://api.openweathermap.org/data/2.5/weather?lat=48.90186134485799&lon=2.4811009820829777&appid=1801152a066e343f792c20065cb69bdd";

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
        <div className='text-xl '>
        <img src={`../../src/assets/icons/${infoWeather.icon}.svg`} alt="Weather Icon" width={320}/>
        <p>Température en cours : {infoWeather.temp}</p>
        </div>
    </>
  )
}

export default MeteoCard