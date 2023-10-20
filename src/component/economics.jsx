import React from 'react'
import Data from '../data/data.json'
import Woman from '../assets/womanWorking.svg'

function Economics() {
  const Commune = Data[0];
  return (
    <div className='text-xl flex flex-col justify-center items-center h-screen bg-orange-400'>
      <div className='w-full sm:max-w-[800px]'>
            <img src={Woman} alt='Working Woman' className='mx-auto '/>
      </div>
      <h1 className='text-2xl m-2'>Economie de la Ville</h1>
      <p>Population active : {Commune.PopActive}</p>
      <p>Population en activité : {Commune.TauxActivité} %</p>
      <p>Population inactive : {Commune.TauxChomage} %</p>
      <p>Revenu fiscal moyen : {Commune.RFMedian} €</p>
    </div>
  )
}

export default Economics