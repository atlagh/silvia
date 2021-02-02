import React from 'react';
import './Navbar.css';


const Navbar = () => {
	return(
		<div className='Wrap'>
				<nav className='NavWrap'>
					<div className='NavIcon'></div>
					<li className='NavLink' >Home</li>
					<li className='NavLink' >Blog</li>
					<li className='NavLink' >Consulting</li>
					<li className='NavLink' >About</li>
					<li className='NavLink' >Contact</li>
				</nav>
				<input className='NavSearch' placeholder='SEARCH'/>
		</div>
		)
}

export default Navbar;