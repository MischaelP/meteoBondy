import React from 'react'
import Data from '../data/data.json'

function Education() {
     const Commune = Data[0]
    

  return (
    <>
        <div className='text-xl h-screen flex flex-col justify-center items-center bg-purple-500'>
                <h1 className='text-2xl m-2'>Ecoles, Collèges et Lycées de Bondy</h1>
                    <p>Nombre d'école maternelle : {Commune.EcoleMaternelle}</p>
                    <p>Nombre d'écoles élementaire : {Commune.EcoleElementaire}, dont écoles privés : {Commune.EcoleElementairePrivee}</p>
                    <p>Nombre de collèges : {Commune.NombreCollege}, dont collèges privés : {Commune.CollegePrive}</p>
                    <p>Nombre de lycée : {Commune.NombreLycee}, dont lycée privés : {Commune.LyceePrivee}</p>

        </div>
    </>
  )
}

export default Education