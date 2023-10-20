import React from 'react'
import Data from '../data/data.json'
import schoolLog from '../assets/school.svg';


function Education() {
     const Commune = Data[0]
    

  return (
    <>
        <div className='text-xl h-screen flex flex-col justify-center items-center text-center bg-[#FF220C]'>
        <img src={schoolLog} alt="School logo" className='pt-2 pb-auto sm:max-w-[800px] w-full'/>
                <h1 className='text-2xl m-2 text-white font-bold'>Ecoles, Collèges et Lycées de Bondy</h1>
                    <p className='text-white'>Nombre d'école maternelle : {Commune.EcoleMaternelle}</p>
                    <p className='text-white'>Nombre d'écoles élementaire : {Commune.EcoleElementaire}, dont écoles privés : {Commune.EcoleElementairePrivee}</p>
                    <p className='text-white'>Nombre de collèges : {Commune.NombreCollege}, dont collèges privés : {Commune.CollegePrive}</p>
                    <p className='text-white'>Nombre de lycée : {Commune.NombreLycee}, dont lycée privés : {Commune.LyceePrivee}</p>

        </div>
    </>
  )
}

export default Education