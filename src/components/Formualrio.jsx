// rfce

import React, { useState, useEffect } from 'react'
import Errores from './Errores';

function Formualrio({ pacientes, setPacientes, paciente, setPaciente }) {



    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [salida, setSalida] = useState('');
    const [sintoma, setSintoma] = useState('');

    const [error, setError] = useState(false);

    useEffect(() => {
        if (Object.keys(paciente).length > 0) {
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setSalida(paciente.salida)
            setSintoma(paciente.sintoma)

        }
    }, [paciente])

    const generarId = () => {
        const random = Math.random().toString().substring(2);
        const fecha = Date.now().toString(36)
        return random + fecha
    }





    const handleSubmit = (e) => {
        // simpre dene ir preventDefault para prevenir enviar antes sin validar
        e.preventDefault();

        // Validar Formulario 

        if ([nombre, propietario, email, salida, sintoma].includes('')) {
            console.log('hay al menos un campo vacio');

            setError(true)

        } else {
            console.log('Todos llenos');
            setError(false)

            const objPacientes = {
                nombre,
                propietario,
                email,
                salida,
                sintoma,
           }

            if (paciente.id) {
                // Actualiza datos de un paciente
                objPacientes.id = paciente.id
                const actulizaPaciente = pacientes
                .map(
                    pacienteState => pacienteState.id === objPacientes.id ? objPacientes : pacienteState
                    )
                    setPacientes(actulizaPaciente)
                    setPaciente({})
              
            } else {
                objPacientes.id = generarId()
                setPacientes([...pacientes, objPacientes]);
            }
                       

            // reiniciar formualario 
            setNombre('')
            setPropietario('')
            setEmail('')
            setSalida('')
            setSintoma('')
        }


        console.log('Enviando formulario...')

    }

    // state : el estado que esta de la aplicacion

    return (
        <div className='md:w-1/2 lg:w-2/5 mx-5 mb-30' >
            <h2 className='font-black text-3xl text-center '>
                Pacientes
            </h2>
            <p className='text-lg mt-5 text-center mb-10'>
                Añade Pacientes {''}
                <span className='text-indigo-600 font-bold ' >Administralos</span>
            </p>
            <form
                onSubmit={handleSubmit}
                className='bg-white shadow-md rounded-lg py-10 px-5 md: mb-10 ' >
                {error && <Errores
                    mensaje='Campos requeridos' />}

                <div className='mb-5'>
                    <label
                        htmlFor='mascota'
                        className='block text-gray-700 uppercase font-bold'>
                        Nombre Mascota
                    </label>
                    <input
                        id='mascota'
                        type="text"
                        placeholder='Nombre de la Mascota'
                        className='border-2 rounded-md p-2 w-full mt-2 placeholder-gray-400'
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />

                </div>
                <div className='mb-5'>
                    <label
                        htmlFor='propietario'
                        className='block text-gray-700 uppercase font-bold'>
                        Nombre Propietario
                    </label>
                    <input
                        id='propietario'
                        type="text"
                        placeholder='Nombre del Propietario'
                        className='border-2 rounded-md p-2 w-full mt-2 placeholder-gray-400'
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)}
                    />
                </div>
                <div className='mb-5'>
                    <label
                        htmlFor='email'
                        className='block text-gray-700 uppercase font-bold'>
                        Email
                    </label>
                    <input
                        id='email'
                        type="email"
                        placeholder='Email del Propietario'
                        className='border-2 rounded-md p-2 w-full mt-2 placeholder-gray-400 '
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='mb-5'>
                    <label
                        htmlFor='fecha'
                        className='block text-gray-700 uppercase font-bold'>
                        Fecha
                    </label>
                    <input
                        id='fecha'
                        type="date"
                        className='border-2 rounded-md p-2 w-full mt-2 placeholder-gray-400'
                        value={salida}
                        onChange={(e) => setSalida(e.target.value)}
                    />
                </div>
                <div className='mb-5'>
                    <label
                        htmlFor='sintomas'
                        className='block text-gray-700 uppercase font-bold'>
                        Síntomas
                    </label>
                    <textarea
                        id='sintomas'
                        type="text"
                        className='border-2 rounded-md p-2 w-full mt-2 placeholder-gray-400'
                        placeholder='Describe los Síntomas'
                        value={sintoma}
                        onChange={(e) => setSintoma(e.target.value)}
                    />
                </div>

                <input
                    className='border-2 rounded-md bg-indigo-700 w-full p-2 text-gray-50 uppercase font-bold hover:bg-violet-500 cursor-pointer '
                    type="submit"
                    value={paciente.id? 'Actualizar Paciente': 'Agregar Paciente'}

                />
            </form>

        </div>
    )
}

export default Formualrio
