import React from 'react'
import { NavLink, Outlet } from "react-router-dom"

const ContenedorRouting = () => {
  return (
    <div>
      <nav>
        <h1>Mi sitio web</h1>
        <ul>
            <li>
                <NavLink end to="/">Home</NavLink>
            </li>

            <li>
                <NavLink to="/about">About</NavLink>
            </li>

            <li>
                <NavLink to="/info">Info</NavLink>
            </li>

            <li>
                <NavLink end to="/juegos">Juegos</NavLink>
            </li>


        </ul>
        
        <br/>
        <Outlet />

      </nav>

    </div>
  )
}

export default ContenedorRouting
