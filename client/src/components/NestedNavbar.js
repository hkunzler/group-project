import React from 'react'
import NavLink from './NavLink.js'
import { data } from './navlinks.json'

const NestedNavbar = () => {
    return (
        <div className="nav">
            { data.map(link => <NavLink {...link} key={Math.random()}/>) }
        </div>
    )
}

export default NestedNavbar