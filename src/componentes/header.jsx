import React from 'react'


const Header = ({ autor , titulo, ficha, centro  }) => {
    const headerStyles = {
        backgroundColor : 'white',
        color: 'black'
    }


  return (
    <header style={headerStyles}>
    <div className='container'>
        {titulo}
        <p style={{color: 'blue'}}>Autor: {autor} </p>
        <p style= {{color: 'gold'}}>Ficha: {ficha}</p>
        <p style={{backgroundColor: 'green'}}>Centro de formacion: {centro}</p>
    </div>
    </header>
  )
}
export default Header