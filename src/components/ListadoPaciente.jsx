import React from 'react';
import Pacientes from './Pacientes';




const ListadoPaciente = ({pacientes, setPaciente, eliminarPaciente}) => {


  return (
    <div className='md:1/2 lg:w-3/5  md:mx-5 md:mb-30 md:h-screen   md:overflow-scroll ' >

{
  pacientes.length !== 0 ?(
    <>
     <h2 className='font-black text-3xl text-center ' >Seguimiento Pacientes</h2>
      <p className='text-lg mt-5 text-center mb-10'>
        Administra tus {''}
        <span className='text-indigo-600 font-bold ' >Pacientes y Citas</span>
      </p>
      {
        pacientes.map(( paciente) =>(
          <Pacientes
          setPaciente = {setPaciente}
            key={paciente.id}
            paciente={paciente }
            eliminarPaciente = {eliminarPaciente}
          />
        ))}
    

    </>
  ):
  <>
      <h2 className='font-black text-3xl text-center' >No Hay Pacientes</h2>
      <p className='text-lg mt-5 text-center mb-10'>
      Comienza Agregando Pacientes{' '}
        <span className='text-indigo-600 font-bold ' >y Apareceran en este Lugar</span>
      </p>
      {
        pacientes.map(( paciente) =>(
          <Pacientes
          
            key={paciente.id}
            paciente={paciente }
         
          />
        ))}
    

  </>
}


     

    </div>

  );
}


export default ListadoPaciente;

