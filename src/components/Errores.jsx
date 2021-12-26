import React from 'react'

const Errores = ({mensaje}) => {
    return (
        < div className='bg-red-900  '>
            <p className='mx-5 my-5 text-center font-bold text-white p-3 mb-3 uppercase rounded-md'>{mensaje}</p>
        </div>
    )
}

export default Errores
