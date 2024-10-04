import {React , useState } from 'react'

function ComentarioItem({comentario , calificacion}) {
  
  // manejo del estado de un comentario 
  // comentario y calificacion como atributos 
  //medianre el uso de estados

  const [ comment , setComment ] = useState (comentario)
  const [ rating , setRating ] = useState (calificacion)

    const cambiarRating = () => {
        setRating((prev) => prev + 1 )
    }

    return (
    <div className='card'>
        <div className='num-display'>{rating}</div>
        <div className='text-dispay'>{comment}</div>
        <button onClick ={cambiarRating} > 
            Cambiar calificacion
        </button>
        
    </div>
  )
}

export default ComentarioItem