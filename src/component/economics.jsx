import React from 'react'
import Data from '../data/data.json'
function Economics() {
  const Commune = Data[0];
  return (
    <div className='text-xl flex flex-col justify-center items-center h-screen bg-orange-400'>
      <h1 className='text-2xl m-2'>Economie de la Ville</h1>
      <p>Population active : {Commune.PopActive}</p>
      <p>Population en activité : {Commune.TauxActivité} %</p>
      <p>Population au chômage : {Commune.TauxChomage} %</p>
      <p>Revenu fiscal moyen : {Commune.RFMedian} €</p>
    </div>
  )
}

export default Economics