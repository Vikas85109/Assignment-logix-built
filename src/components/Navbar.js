import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar_style '>
            <div>
                <NavLink to={'/'}>
                    Form
                </NavLink>
            </div>
            <div>
                <NavLink to={'/data'}>
                    All Data
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar