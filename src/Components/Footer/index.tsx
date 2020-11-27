import React from 'react';
import './Footer.css';

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container flex-space-between">
				<div className="footer-logo">
					<a href="/" target="_blank" className="footer-menu-item">Osvaldo Villagomez</a>
				</div>
				<div className="footer-menu">
					<a href="https://www.linkedin.com/in/osvaldo-villagomez-8385b769/" target="_blank" rel="noopener noreferrer" className="footer-menu-item">LinkedIn</a>
					<a href="https://github.com/ozzygomez" target="_blank" rel="noopener noreferrer" className="footer-menu-item">Github</a>
					<a href="https://twitter.com/ozzyvillagomez" target="_blank" rel="noopener noreferrer" className="footer-menu-item">Twitter</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
