import React from 'react'
import Data from '../data/data.json'

function Demographic() {
    const Commune = Data[0]
  return (
    <>
    <div className='text-xl h-screen flex flex-col justify-center items-center bg-blue-500'>
    <h1 className='text-2xl p-2'>Pourcentage de la population</h1>
      <p>Pourcentage - 15 ans : {Commune.Pourcentage0a15} %</p>
      <p>Pourcentage 15 a 29 ans : {Commune.Pourcentage15a29} %</p>
      <p>Pourcentage 30 à 44 ans : {Commune.Pourcentage30a44} %</p>
      <p>Pourcentage 45 à 59 ans : {Commune.Pourcentage45a59} %</p>
      <p>Pourcentage 60 à 74 ans : {Commune.Pourcentage60a74} %</p>
      <p>Pourcentage 75 ans et plus  : {Commune.Pourcentage75plus} %</p>
    </div>
    </>
  )
}

export default Demographic