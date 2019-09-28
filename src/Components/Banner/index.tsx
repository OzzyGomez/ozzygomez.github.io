import React from 'react';
import './Banner.css';

interface IProps {
	children: any;
	image?: string;
	height?: number | string;
}

const Banner = ({ children, image, height }: IProps) => {
	const style = {
		background: image ? `url(${image}) no-repeat center center scroll` : 'none',
		backgroundSize: 'cover',
		height: height || 300
	};
	return (
		<div className="banner" style={style}>
			{children}
		</div>
	);
}

export default Banner;
