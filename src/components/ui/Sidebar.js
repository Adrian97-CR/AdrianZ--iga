import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom';
import { changeSideBState } from '../../actions/navbar';
import logo from '../../assets/A.png'

export const Sidebar = () => {
   const dispatch = useDispatch();
   const { show } = useSelector(state => state.sideB)
    const handleCloseModal = () => {
        dispatch(changeSideBState())
    }
   return (
         <div className={'sidebar '+(show?'expandSidebar':'')}>
            <div  className = {'sbCont animate__animated '+(show?'expandSidebar animate__fadeIn':'')} >
               <Link
                    onClick={handleCloseModal}
                    className="navbar-brand homeSideB"    
                    to="/"
                    >
                    <div className='sbHomeCont'>
                        <img
                        alt=''
                            className='navIcon img-responsive'
                            src={logo}
                        />
                        <span className='sbNamelogo'>Adrián Zúñiga</span>
                        <span className='descSb'>Full-Stack Developer</span>
                    </div>
               </Link>
               <div className="navbar-collapse">
                   <div className="navbar-nav">
                       <NavLink
                            onClick={handleCloseModal}
                           className={({isActive}) => "nav-item nav-link "+(isActive&&'active')}
                           to="/about"
                           >
                           About
                       </NavLink>
                       <NavLink
                            onClick={handleCloseModal}
                           className={({isActive}) => "nav-item nav-link "+(isActive&&'active')}
                           to="/myskills"
                           >
                           My Skills
                       </NavLink>
                       <NavLink
                            onClick={handleCloseModal}
                           className={({isActive}) => "nav-item nav-link "+(isActive&&'active')}
                           to="/work"
                           >
                           Work
                       </NavLink>
                       <NavLink
                            onClick={handleCloseModal}
                           className={({isActive}) => "nav-item nav-link "+(isActive&&'active')}
                           to="/contact"
                           >
                           Contact
                       </NavLink>
                   </div>
               </div>
               <div className="w-100 footer justify-content-center ">
                   <ul className="padding-">
                       <li className='footIcons'>
                            <a className="fab fa-youtube" href='https://www.youtube.com/' target={'_blank'} rel="noreferrer" > </a>
                            {/* <a className="fab fa-youtube" href='https://www.youtube.com/channel/UCiTxBLbRhfKh8-Hwbj7cMAQ'></a> */}
                       </li>
                       <li className='footIcons'>
                           <a className="fab fa-linkedin" href='https://www.linkedin.com/in/adrian97-cr/' target={'_blank'} rel="noreferrer" > </a>
                       </li>
                       <li className='footIcons'>
                            <a className="fab fa-github" href='https://github.com/Adrian97-CR' target={'_blank'} rel="noreferrer" > </a>
                       </li>
                       
                   </ul>
               </div>
            </div>
         </div>
   )
}
