import {React , useState } from 'react'
import Header from './componentes/header';
import ComentarioItem from './componentes/ComentarioItem'; 
import comentarios from './data/Comentarios'
  
function App() {

  const [comments , 
        setComentarios] = useState(comentarios)

  const titulo = "App de comentarios";
  const Autor = "SanzOner";
  const ficha = "2902093";
  const centro = "CGMLTI"


    const loaging = false ;
    if(loaging === true ) return (<h1>Cargando comentarios...</h1>) 
    const showComments = true;



  return (
    <div className='container'>
      <Header titulo= {titulo} autor={ Autor} ficha = {ficha} centro = {centro}/>

      {showComments && 
      (      <div className='comments'>
        <h3>Comentarios: {comentarios.length}</h3>
        <ul>
          {
              comments.map( comentario => 
               <ComentarioItem 
                      key={comentario.id} 
                      comentario={comentario.comentario}
                      calificacion={comentario.calificacion}
               /> 
            )
          }
        </ul>
      </div>)
       }
    </div>
  )
}

export default App