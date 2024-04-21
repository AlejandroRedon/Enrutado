import React from 'react'
import { useParams } from 'react-router-dom'

const JuegosCaracteristicas = () => {
    const parametros = useParams();
  return (
    <div>
      <h1>Características del juego  {parametros.id}</h1>
        <p>Título: XXXXXXXXXXXX</p>
        <p>Consola: YYYYYYYYYYY</p>
        <p>Compañia: ZZZZZZZZZZZZ</p>
        <p>Precio: $$$$$$$$$$$</p>

    </div>
  )
}

export default JuegosCaracteristicas
