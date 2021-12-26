import { useState, useEffect } from 'react'
import Header from './components/Header'
import Juego from './juego'
import Formualrio from './components/Formualrio'
import ListadoPaciente from './components/ListadoPaciente'




function App() {
  // const [pacientes, setPacientes] = useState([]) es el inicial  es el que tiene toda la informacion 
  const [pacientes, setPacientes] = useState([])

 // const [paciente, setPaciente] = useState({}) sirve para actulizar 

  const [paciente, setPaciente] = useState({})


  // se mmatiene en localstorage y se convirte en un arreglo
  useEffect(() => {

    const obtnerLS = () => {
      const pacienteLs =  JSON.parse(localStorage.getItem('pacientes'))?? [] ;
      setPacientes(pacienteLs)
    }
    obtnerLS();
  }, [])
    
    // se agrega a localStotage, se convierte en un string
  useEffect(() => {
    localStorage.setItem('pacientes' , JSON.stringify(pacientes));
   }, [pacientes])


  const eliminarPaciente = (id) => {
    const eliminar = pacientes.filter(pacient => pacient.id !== id);
    setPacientes(eliminar)

  }

  return (
    <div className='container mx-auto mt-20' >
      <Header />
      <div className='mt-12 md:flex '>
        <Formualrio
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPaciente
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>

    </div>
  )
}

export default App
