import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom';

export const Sidebar = () => {
   const dispatch = useDispatch();
   const { show } = useSelector(state => state.sideB)

   return (
         <div className={'sidebar '+(show?'expandSidebar':'')}>
            <div  className = {'animate__animated '+(show?'expandSidebar animate__fadeInUp':'')} >
               <Link
                    className="navbar-brand"    
                    to="/"
                    >
                   Asociacioness
               </Link>
               <div className="navbar-collapse">
                   <div className="navbar-nav">
                       <NavLink
                           className={({isActive}) => "nav-item nav-link "+(isActive&&'active')}
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
            </div>
         </div>
   )
}
