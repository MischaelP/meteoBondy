import React from 'react'
import { useForm, ValidationError } from '@formspree/react'

function Contact() {
    const [state, handleSubmit] = useForm("xyyqlqnp")
    if (state.succeeded) {
        return <p className='justify-center font-bold text-3xl text-green-600 sm:items-center ml-6 mt-0'>Merci pour votre contribution !</p>;
    }
  return (
    <div className='h-screen flex flex-col justify-center items-center bg-[#FDFFFC]'>
        <h1 className='text-xl'>Contacter l'administrateur du site</h1>

        <ul>
            <li>Liens vers la ville de Bondy</li>
            <li>Source : lien vers L'insee</li>
            <li>Source : lien vers data-ville</li>
        </ul>

        <div className='w-full sm:w-[400px] sm:items-center'>
            <form onSubmit={handleSubmit} className='flex flex-col items-center sm:items-start'>
              <label htmlFor="email">
                Email :
              </label>
              <input id="email" type="email" name="email" className='border border-black w-64 rounded-sm'/>

              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
              />
              <label htmlFor='message'> Message : </label>
              <textarea id="message" name="message" className='border border-black w-64 rounded-sm'/>
            
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
              />
              <button type="submit" disabled={state.submitting} className='border border-black px-4 py-2'>
                Envoyer
              </button>
            </form>
        </div>
    </div>
  )
}

export default Contact