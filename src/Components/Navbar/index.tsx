import React from 'react';
import './Navbar.css';

interface IProps {
	position?: 'static' | 'relative' | 'fixed' | 'absolute' | 'sticky';
}

const Navbar = ({ position }: IProps) => {
	const style = {
		position: position || 'static'
	};

	return (
		<header className="navbar" style={style}>
			<div className="container flex-space-between h-100">
				<div className="navbar-logo">
					Osvaldo <span className="text-thin">Villagomez</span>
				</div>
				{/*<div className="navbar-menu">
					<a href="" className="navbar-menu-item">About</a>
					<a href="" className="navbar-menu-item">Projects</a>
					<a href="" className="navbar-menu-item">Experience</a>
					<a href="" className="navbar-menu-item">Skills</a>
					<a href="" className="navbar-menu-item">Portfolio</a>
				</div>*/}
			</div>
		</header>
	);
}

export default Navbar;
