import React from 'react'
import Data from '../data/data.json'
import { PieChart } from 'react-minimal-pie-chart'


function Demographic() {
    const Commune = Data[0]
    const data = [
      {title: '-15 ans', value: Commune.Pourcentage0a15, color:'#E38627'},
      {title: '15 à 29 ans', value: Commune.Pourcentage15a29, color:'#C13C37'},
      {title: '30 à 44 ans',  value: Commune.Pourcentage30a44, color:'#6A2135'},
      {title: '45 à 59 ans', value: Commune.Pourcentage45a59, color: '#C490D1'},
      {title: '60 à 74 ans', value: Commune.Pourcentage60a74, color: '#E0FF4F'},
      {title: '75 ans et plus', value: Commune.Pourcentage75plus, color: '#2B59C3'}
    ]
  return (
    <>
    <div className='text-xl h-screen flex flex-col justify-center items-center bg-[#FFAE03]'>
      <div className='sm:max-w-[800px] w-screen'>
          <PieChart 
            data = {data}
            label={({ dataEntry}) => `${dataEntry.title} (${dataEntry.value}%)`}
            radius={40}
            labelStyle={{ fontSize: '3px'}}
            />
      </div>
    <h1 className='text-2xl font-bold'>Pourcentage de la population</h1>
      <h3 className='text-center font-semibold'>Répartition de la population de Bondy en fonction de leur tranche d'age</h3>
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