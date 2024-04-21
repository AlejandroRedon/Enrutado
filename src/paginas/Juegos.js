import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Juegos = () => {
  return (
    <nav>
    <h1>Mi sitio web</h1>
    <ul>
        <li>
            <NavLink end to="/juegos/1">Juego 1</NavLink>
        </li>

        <li>
            <NavLink to="/juegos/2">Juego 2</NavLink>
        </li>

        <li>
            <NavLink to="/juegos/3">Juego 3</NavLink>
        </li>

        <li>
            <NavLink to="/juegos/4">Juego 4</NavLink>
        </li>


    </ul>
    <Outlet />
  </nav>
  )
}

export default Juegos
