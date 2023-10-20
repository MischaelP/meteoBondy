import React from 'react'
import Data from '../data/data.json'
import CityHall from '../assets/city-hall.svg'


function Pop() {
  const Commune = Data[0];
  const pourcentageFemme = Math.floor((Commune.Femmes / Commune.PopulationMunicipale) * 100);
  const pourcentageHomme = Math.floor((Commune.Hommes / Commune.PopulationMunicipale) * 100);
  return (
    <>
    <div className='text-xl h-screen flex flex-col justify-center items-center bg-[#1B998B]'>
      <img src={CityHall} alt='Mairie' className='w-100 sm:w-1/3 pb-4'/>
      <p>Nombre d'habitants à Bondy : {Commune.PopulationMunicipale}</p>
      <p>Nombre de Femmes: {Commune.Femmes} soit {pourcentageFemme}%</p>
      <p>Nombre d'Hommes: {Commune.Hommes} soit {pourcentageHomme}%</p>
    </div>
    </>
  )
}

export default Pop