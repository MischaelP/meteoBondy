import React from 'react'
import Data from '../data/data.json'
import Woman from '../assets/womanWorking.svg'

function Economics() {
  const Commune = Data[0];
  return (
    <div className='text-xl flex flex-col justify-center items-center h-screen bg-orange-400'>
      <div className='w-1/2 sm:max-w-[800px]'>
            <img src={Woman} alt='Working Woman' className='mx-auto center '/>
      </div>
      <h1 className='sm:text-3xl m-2 font-bold'>Population active de la ville</h1>
      <p className='text-center font-semibold'>Voici la définition de la population active selon <a href='https://fr.wikipedia.org/wiki/Population_active' alt='Lien vers Wikipedia'>Wikipédia</a> :</p>
      <p className='text-center text-l'>La population en âge de travailler est généralement définie comme l'ensemble des personnes ayant entre 15 et 64 ans. Selon certaines définitions, il s'agit parfois de l'ensemble des personnes de plus de 15 ans.<br/>


Est considérée comme population inactive, l'ensemble des personnes en âge de travailler n'exerçant pas et ne recherchant pas d'emploi : personnes au foyer, étudiants, personnes en incapacité de travailler, bénévoles et rentiers.</p><br/>
      <p>Population active : {Commune.PopActive}</p>
      <p>Population en activité : {Commune.TauxActivité} %</p>
      <p>Population inactive : {Commune.TauxChomage} %</p>
      <p>Revenu fiscal moyen : {Commune.RFMedian} €</p>
    </div>
  )
}

export default Economics