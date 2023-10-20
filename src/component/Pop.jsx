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
      <p>A bondy il y'a  <span className='font-semibold'>{Commune.PopulationMunicipale}</span> habitants</p>
      <p>Dont  <span className='font-semibold'>{Commune.Femmes}</span> de femmes soit un peu plus de {pourcentageFemme}% de la ville</p>
      <p>Et il y'a <span className='font-semibold'>{Commune.Hommes}</span> hommes soit {pourcentageHomme}% des habitants de Bondy</p>
    </div>
    </>
  )
}

export default Pop