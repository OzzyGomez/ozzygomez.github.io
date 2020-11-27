import React from 'react';
import Typed from 'react-typed';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Video from './Components/Video';
import Footer from './Components/Footer';
import Kelp from './Assets/kelp.mp4';
import Illini from './Assets/illini.mp4';
import Light from './Assets/light.mp4';
import LowBattery from './Assets/lowbattery.mp4';
import Background from './Assets/background.png';
import Resume from './Assets/Resume2021.pdf';
import './Styles.css';

const skills = {
	technical: [
		'HTML5',
		'CSS3',
		'JavaScript',
		'TypeScript',
		'React',
		'Angular',
		'Node',
		'C#',
		'flutter'
	],
	miscellaneous: [
		'Spark AR',
		'Video Editing',
		'Acting'
	]
}

const App: React.FC = () => {
  return (
    <div>
			<Navbar position="fixed" />
			<Banner image={Background} height="50vw">
				<div className="navbar-offset flex-vertical-center">
					<div className="container p-1 text-center">
						<div className="section-title">
							<Typed
								strings={[
									'Software Developer',
									'Front-End Engineer',
									'UI/UX Designer',
									'Content Creator'
								]}
								typeSpeed={40}
								backSpeed={50}
								loop
							/>
						</div>
						<a href={Resume} target="_blank" rel="noopener noreferrer" className="button mt-1">
							My Resume
						</a>
					</div>
				</div>
			</Banner>
			<div className="container">
				<div className="section-title mb-1 text-uppercase p-1">About Me</div>
				<div className="flex-space-between">
					<div className="w-100">
						<div className="box box-shadow flex-center text-center bg-white">
							<div>
								<div className="box-title text-bold">My Goal</div>
								<div className="box-subtitle-2">Create tech to help people communicate better.</div>
							</div>
						</div>
					</div>
					<div className="w-100">
						<div className="box box-shadow flex-center text-center bg-white">
							<div>
								<div className="box-title text-bold">Where I'm From</div>
								<div className="box-subtitle-2">Chicago, IL</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container py-3">
				<div className="section-title mb-2 text-uppercase p-1">Projects</div>
				<div className="flex-space-between">
					<div className="w-100">
						<div className="box box-shadow flex-center text-center bg-white">
							<div>
								<div className="box-title text-bold">FimR</div>
								<div className="box-subtitle">LAMP Stack Web App (2015 - 2018)</div>
								<a href="https://www.osvaldovillagomez.com/fimr-site/" target="_blank" rel="noopener noreferrer" className="button m-1">More Info</a>
							</div>
						</div>
					</div>
					<div className="w-100">
						<div className="box box-shadow flex-center text-center bg-white">
							<div>
								<div className="box-title text-bold">Eventure</div>
								<div className="box-subtitle">Progressive Web App</div>
								<div className="button m-1">Coming Soon</div>
							</div>
						</div>
					</div>
					<div className="w-100">
						<div className="box box-shadow flex-center text-center bg-white">
							<div>
								<div className="box-title text-bold">Run-ematic</div>
								<div className="box-subtitle">iOS & Android Mobile App</div>
								<div className="button m-1">Coming Soon</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container py-3">
				<div className="section-title mb-2 text-uppercase p-1">Technical Experience</div>
				<div className="flex-space-between p-1">
					<div className="w-100 order-2">
						<div className="box flex-center">
							<div className="text-center">
								<div className="box-title-2 text-bold">Jimmy John's Franchise, LLC</div>
								<div className="box-subtitle">Software Developer (2017 - 2020)</div>
							</div>
						</div>
					</div>
					<div className="w-100 order-1">
						<div className="flex-center">
							<img src="https://resources.jimmyjohns.com/logos/jj_logo_black_r_144x144.png" alt="Jimmy John's logo"/>
						</div>
					</div>
				</div>
				<div className="flex-space-between p-1">
					<div className="w-100 order-1">
						<div className="flex-center">
							<img src="https://atlas.illinois.edu/themes/custom/las_unit_theme/styles/css/images/iblock.svg" alt="University Of Illinois Logo"/>
						</div>
					</div>
					<div className="w-100 order-2">
					<div className="box flex-center">
						<div className="text-center">
							<div className="box-title-2 text-bold">ATLAS (University of Illinois)</div>
							<div className="box-subtitle">Web Developer (2015 - 2017)</div>
						</div>
					</div>
					</div>
				</div>
			</div>
			<div className="container py-3">
				<div className="section-title mb-2 text-uppercase p-1">Skills</div>
				<div className="section-subtitle p-1">Technical</div>
				<div className="chip-list p-1">
					{skills.technical.map((skill: string) =>
						<div className="chip">{skill}</div>
					)}
				</div>
				<div className="section-subtitle p-1">Miscellaneous</div>
				<div className="chip-list p-1">
					{skills.miscellaneous.map((skill: string) =>
						<div className="chip">{skill}</div>
					)}
				</div>
			</div>
			<div className="container py-3">
				<div className="section-title mb-2 text-uppercase p-1">Portfolio</div>
				<div className="flex-space-between">
					<div className="w-100">
						<div className="box box-shadow flex-center text-center bg-white">
							<div>
								<div className="box-title text-bold">Own A Jimmy John's</div>
								<div className="box-subtitle">Lead Developer (Former)</div>
								<a href="https://www.ownajimmyjohns.com/" target="_blank" rel="noopener noreferrer" className="button m-1">View Site</a>
							</div>
						</div>
					</div>
					<div className="w-100">
						<div className="box box-shadow flex-center text-center bg-white">
							<div>
								<div className="box-title text-bold">Jimmy John's</div>
								<div className="box-subtitle">Front-End Developer (Former)</div>
								<a href="https://www.jimmyjohns.com/" target="_blank" rel="noopener noreferrer" className="button m-1">View Site</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container py-3">
				<div className="section-title mb-2 text-uppercase p-1">AR Effects</div>
				<div className="flex-space-between">
					<div className="app-video-1">
						<Video src={Kelp} />
					</div>
					<div className="app-video-1">
						<Video src={Illini} />
					</div>
					<div className="app-video-1">
						<Video src={Light} />
					</div>
					<div className="app-video-1">
						<Video src={LowBattery} />
					</div>
				</div>
			</div>
			<div className="py-3 bg-light-gray">
				<div className="container">
					<div className="section-title mb-2 text-uppercase p-1">Contact Me</div>
					<div className="box text-center box-shadow flex-center bg-white">
						<div>
							<div className="box-title text-bold">Send Me An Email</div>
							<div className="box-subtitle-2">OzzyVillagomez@Gmail.com</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
    </div>
  );
}

export default App;
