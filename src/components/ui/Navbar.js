import React from 'react'
import { Link, NavLink, useNavigate, Navigate } from 'react-router-dom'

export const Navbar = () => {
    const navigate = useNavigate()
    if (false) {
        return <Navigate to="/login"/>
        navigate('/login',{replace:true});
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                 className="navbar-brand" 
                 to="/"
                 >
                Asociacioness
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={({isActive}) => "navi-tem nav-link "+(isActive&&'active')} 
                        to="/about"
                        >
                        About
                    </NavLink>

                    <NavLink 
                        className={({isActive}) => "nav-item nav-link "+(isActive&&'active')} 
                        to="/myskills"
                        >
                        My Skills
                    </NavLink>
                    <NavLink 
                        className={({isActive}) => "nav-item nav-link "+(isActive&&'active')} 
                        to="/work"
                        >
                        Work
                    </NavLink>
                    <NavLink 
                        className={({isActive}) => "nav-item nav-link "+(isActive&&'active')} 
                        to="/contact"
                        >
                        Contact
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end ">
                <ul className="navbar-nav ml-auto">
                    <span className='nva-item nav-link text-info'>
                        Adrian Zúñiga
                    </span>
                    <button 
                        className="nav-item nav-link btn"
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}