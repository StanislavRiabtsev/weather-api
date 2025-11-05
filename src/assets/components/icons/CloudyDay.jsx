import React from "react";

const CloudyDay = ({ size }) => {
	return (
		<svg class="cloudy-day"
			width={size}
			height={size}
			viewBox="0 0 75 75"
			xmlns="http://www.w3.org/2000/svg">
			<defs>
				<clipPath id="clipping--cloudy-day">
					<path d="M80 0v80H0V0h80zM45 34c-5.523 0-10 4.477-10 10 0 .652.062 1.294.185 1.92a1 1 0 0 1-.81 1.177A6.502 6.502 0 0 0 35.5 60h23a8.5 8.5 0 1 0-2.345-16.672 1 1 0 0 1-1.265-.814C54.166 37.648 49.97 34 45 34z" fill="#D8D8D8" />
				</clipPath>
			</defs>
			<g fill="none" fill-rule="evenodd" clip-path="url(#clipping--cloudy-day)">
				<g stroke="#DFDEED" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
					<path d="M45 33c5.52 0 10.09 4.066 10.88 9.366A9.5 9.5 0 1 1 58.5 61h-23a7.5 7.5 0 0 1-1.297-14.888A10.972 10.972 0 0 1 34 44c0-6.075 4.925-11 11-11z" />
					<g transform="translate(12 20)">
						<g class="cloudy-day--sun">
							<circle cx="19" cy="19" r="10" />
							<path d="M19 5V0" />
							<path d="M28.9 9.1l3.535-3.535" />
							<path d="M33 19h5" />
							<path d="M28.9 28.9l3.535 3.535" />
							<path d="M19 33v5" />
							<path d="M9.1 28.9l-3.535 3.535" />
							<path d="M5 19H0" />
							<path d="M9.1 9.1L5.566 5.566" />
						</g>
					</g>
				</g>
			</g>
		</svg>
	)
}

export default CloudyDay;