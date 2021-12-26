

import React from 'react'

function Juego() {

    const num1 = 5
    const num2 = 2

   

    function  enviarRespuesta(e){

        const resultadoEnvido = e.target[0].value
    
        if(Number(resultadoEnvido) == 7) {
            alert(' EL resusltado es corresto Felicitaciones'+ resultadoEnvido )
    
        }else{
            alert(' haz fallado ' + resultadoEnvido)
        }
            }

    return (
        <>
            <h1> desde Juego</h1>

            <h3>
                la suma de {num1} + {num2} = ?
            </h3>

            <form onSubmit={enviarRespuesta}>
                <label>
                    Resultado:
                    <input type="number"
                     name="name" />
                </label>

                <button type="submit" > Enviar Resultado </button>
            </form>
   
       </>
    )
}

export default Juego
