import React from 'react';

interface FootballFieldProps {
	formation: string; // Formation string, e.g., "3-3-4"
}

function PlayerDot() {
	return (
		<span className=' size-4 bg-red-500 rounded-full  absolute' />
	);	
}

const FootballField: React.FC<FootballFieldProps> = ({ formation }) => {

	return (
		<div className="w-80 h-40  relative">
			<Field />
			<div className='flex flex-col w-full h-full absolute'>
				<div id="attackers" className='w-full bg-slate-700/30 h-20 a'>

				</div>
				<div className='w-full bg-green-700/30 h-20' id="midfielders"></div>
				<div className='w-full bg-red-700/30 h-20' id="defenders"></div>
				<div className='w-full bg-blue-700/30 h-20' id="goalkeeper"></div>

			</div>
			<PlayerDot />


    	</div>
	);
};

export default FootballField;




function Field() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 74 111">
		<rect id="" width="74" height="111" fill="#00a000" />
		<g fill="none" stroke="#fff" stroke-width="0.5" transform="translate(3 3)">
			<path id="Border" d="M 0 0 h 68 v 105 h -68 Z" />
			<path id="Centre line" d="M 0 52.5 h 68" />
			<circle id="Centre circle" r="9.15" cx="34" cy="52.5" />
			<circle id="Centre mark" r="0.75" cx="34" cy="52.5" fill="#fff" stroke="none" />
			<g id="Penalty area">
				<path id="Penalty area line" d="M 13.84 0 v 16.5 h 40.32 v -16.5" />
				<path id="Goal area line" d="M 24.84 0 v 5.5 h 18.32 v -5.5" />
				<circle id="Penalty mark" r="0.75" cx="34" cy="10.94" fill="#fff" stroke="none" />
				<path id="Penalty arc" d="M 26.733027 16.5 a 9.15 9.15 0 0 0 14.533946 0" />
			</g>
			<use xlinkHref="#Penalty area" transform="rotate(180,34,52.5)" />
			<path id="Corner arcs" d="M 0 2 a 2 2 0 0 0 2 -2M 66 0 a 2 2 0 0 0 2 2M 68 103 a 2 2 0 0 0 -2 2M 2 105 a 2 2 0 0 0 -2 -2" />
		</g>
	</svg>	)
  }