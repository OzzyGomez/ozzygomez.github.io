import React, { useState } from 'react';
import './FloatingImage.css';

interface IProps {
	src: any;
}

const randomLinks = [
	'https://www.youtube.com/watch?v=oHg5SJYRHA0',
	'https://www.youtube.com/watch?v=RRZR4aO0OdY',
	'https://www.youtube.com/watch?v=xFrGuyw1V8s'
];

const FloatingImage = ({ src }: IProps) => {
	const [display, setDisplay] = useState<boolean>(true);

	return (
		<div className="floating-img">
			{(display) &&
				<a href={randomLinks[Math.floor(Math.random() * randomLinks.length)]} target="_blank" rel="noopener noreferrer">
					<img src={src} width="100%" alt="Floating"/>
				</a>
			}
			<div className={`floating-img-button ${display ? 'text-white' : 'text-black'}`} onClick={(_event: any) => setDisplay(!display)}>
				{display ? 'hide' : 'show'}
			</div>
		</div>
	);
}

export default FloatingImage;
