import React from 'react'

function Pacientes({paciente, setPaciente, eliminarPaciente}) {

 const  handleEliminar = () => {
    const respuesta = confirm('¿Deseas Eliminar a este Paciente?')
    if(respuesta){
      eliminarPaciente(paciente.id)
    }
  }

  return (
    <div className='mx-5 mt-5 shadow-md rounded-xl px-5 py-10 bg-white'>
      <p className='font-bold mb-3 uppercase text-gray-700 '> Nombre {''}
        <span className='font-normal normal-case'>{paciente.nombre }</span>
      </p>
      <p className='font-bold mb-3 uppercase text-gray-700 '> Propietario {''}
        <span className='font-normal normal-case'>{paciente.propietario}</span>
      </p>
      <p className='font-bold mb-3 uppercase text-gray-700 '> Email {''}
        <span className='font-normal normal-case'>{paciente.email}</span>
      </p>
      <p className='font-bold mb-3 uppercase text-gray-700 '> Salida {''}
        <span className='font-normal normal-case'>{paciente.salida}</span>
      </p>
      <p className='font-bold mb-3 uppercase text-gray-700 '> Síntomas {''}
        <span className='font-normal normal-case'>{paciente.sintoma}</span>
      </p>
      <div className='text-center'>
        <button className='bg-orange-500 p-3 rounded-md w-1/4 m-5 font-bold text-white hover:bg-orange-400 md:pd-2 '
        type='button'
        onClick={() => setPaciente(paciente)}>
          Editar
        </button>
        <button className='bg-red-900 p-3  rounded-md w-1/4 m-5 font-bold  text-white hover:bg-red-700 md:pd-2'
        type='button'
        onClick={handleEliminar}>Eliminar
        </button>
      </div>
 
      </div>
  )
}

export default Pacientes
