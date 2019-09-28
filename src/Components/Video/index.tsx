import React from 'react';
import './Video.css';

interface IProps {
	src: any;
}

const Video = ({ src }: IProps) => {
	return (
		<div className="video-container">
			<video className="video" autoPlay loop muted>
				<source src={src} type="video/mp4" />
				Your browser does not support HTML5 video.
			</video>
		</div>
	);
}

export default Video;
