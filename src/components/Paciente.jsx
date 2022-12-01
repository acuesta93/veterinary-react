import React from 'react'

function Paciente() {
  return (
    <div className='mx-5 my-5 bg-white shadow-md px-5 py-10 rounded-xl'>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Nombre: {' '}
                <span className='font-normal normal-case'>Bruma</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Propietario: {' '}
                <span className='font-normal normal-case'>Ángel</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Email: {' '}
                <span className='font-normal normal-case'>correo@correo.com</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Fecha Alta: {' '}
                <span className='font-normal normal-case'>10 Diciembre de 2022</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Síntomas: {' '}
                <span className='font-normal normal-case'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores magni aliquid eaque culpa consequatur, ut ipsum sunt atque sapiente quidem error sit excepturi maxime similique minima, reprehenderit necessitatibus. Eligendi, consequatur!</span>
            </p>
        </div>
  )
}

export default Paciente