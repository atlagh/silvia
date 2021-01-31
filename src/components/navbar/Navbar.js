import React from 'react';
import './Navbar.css';


const Navbar = () => {
	return(
				<nav className='NavWrap'>
					<li className='NavLink' >Home</li>
					<li className='NavLink' >Blog</li>
					<li className='NavLink' >Consulting</li>
					<li className='NavLink' >About</li>
					<li className='NavLink' >Contact</li>
					<input className='NavSearch' placeholder='SEARCH'/>
				</nav>
		)
}

export default Navbar;