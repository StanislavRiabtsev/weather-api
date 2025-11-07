import React from "react";

const Thunderstorm = ({ size = 75 }) => {
    return (
        <svg
            className="thunderstorm"
            width={size}
            height={size}
            viewBox="0 0 75 75"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
        >
            <path
                stroke="#DFDEED"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M33 42h-5.5c-1.8774.0014-3.6871-.7013-5.0716-1.9694-1.3844-1.2681-2.2429-3.0093-2.4058-4.8797-.163-1.8703.3815-3.7338 1.5258-5.2222s2.8052-2.4935 4.6546-2.8167c-.1357-.6958-.2037-1.4031-.203-2.112 0-6.075 4.925-11 11-11 5.52 0 10.09 4.066 10.88 9.366 1.3063-.3735 2.6774-.4624 4.021-.2609 1.3436.2016 2.6282.689 3.7674 1.4294 1.1392.7403 2.1063 1.7164 2.8361 2.8623.7298 1.146 1.2053 2.4351 1.3945 3.7805.1891 1.3454.0875 2.7156-.298 4.0184-.3855 1.3028-1.0459 2.5077-1.9368 3.5334-.8908 1.0258-1.9913 1.8486-3.2272 2.4128-1.2359.5643-2.5784.8569-3.937.8581H49"
            />
            <path
                className="thunder"
                stroke="#DFDEED"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m37 40-3 12h4.5L36 63l10-15h-4l4-8h-9Z"
                clipRule="evenodd"
            />
        </svg>
    );
};

export default Thunderstorm;
