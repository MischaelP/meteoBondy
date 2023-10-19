import React from 'react'
import Data from '../data/data.json'


function Pop() {
  const Commune = Data[0];
  return (
    <>
    <div className='text-xl h-screen flex flex-col justify-center items-center bg-[#1B998B]'>
      <p>Population municipale : {Commune.PopulationMunicipale}</p>
      <p>Population Femmes: {Commune.Femmes}</p>
      <p>Population Hommes: {Commune.Hommes}</p>
    </div>
    </>
  )
}

export default Pop