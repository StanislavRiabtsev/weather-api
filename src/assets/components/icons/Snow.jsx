import React from "react";

const Snow = ({size}) => {
	return (
		<svg class="snow"
			width={size}
			height={size}
			viewBox="0 0 75 75"
			xmlns="http://www.w3.org/2000/svg">
			<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke="#DFDEED" stroke-width="2">
				<path d="M37 11c5.52 0 10.09 4.066 10.88 9.366A9.5 9.5 0 1 1 50.5 39h-23a7.5 7.5 0 0 1-1.297-14.888A10.972 10.972 0 0 1 26 22c0-6.075 4.925-11 11-11z" />
				<g class="snow--flakes">
					<g>
						<path d="M40.33 65.5l-2 3.464" />
						<path d="M41.062 68.232l-3.464-2" />
					</g>
					<g>
						<path d="M45.83 55.974l-2 3.464" />
						<path d="M46.562 58.706l-3.464-2" />
					</g>
					<g>
						<path d="M51.33 46.447l-2 3.465" />
						<path d="M52.062 49.18l-3.464-2" />
					</g>
					<g>
						<path d="M29.585 64.964l-2 3.464" />
						<path d="M30.317 67.696l-3.464-2" />
					</g>
					<g>
						<path d="M35.085 55.438l-2 3.464" />
						<path d="M35.817 58.17l-3.464-2" />
					</g>
					<g>
						<path d="M40.585 45.912l-2 3.464" />
						<path d="M41.317 48.644l-3.464-2" />
					</g>
					<g>
						<path d="M18.84 64.794l-2 3.464" />
						<path d="M19.572 67.526l-3.464-2" />
					</g>
					<g>
						<path d="M24.34 55.268l-2 3.464" />
						<path d="M25.072 58l-3.464-2" />
					</g>
					<g>
						<path d="M29.84 45.742l-2 3.464" />
						<path d="M30.572 48.474l-3.464-2" />
					</g>
				</g>
			</g>
		</svg>
	)
}

export default Snow;