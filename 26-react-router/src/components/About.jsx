import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function About() {
    return (
        <>
            <h1>About</h1>
            <nav>
                <NavLink to="strategy">Strategy</NavLink>
                <NavLink to="mission">Mission</NavLink>
            </nav>
            <Outlet />
        </>
    )
}
