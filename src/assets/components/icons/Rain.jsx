import React from "react";

const Rain = () => {
    return (
        <svg class="rain" width="80" height="80" xmlns="http://www.w3.org/2000/svg">
            <g stroke="#DFDEED" stroke-width="2" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                <path d="M37 14c5.52 0 10.09 4.066 10.88 9.366A9.5 9.5 0 1 1 50.5 42h-23a7.5 7.5 0 0 1-1.297-14.888A10.972 10.972 0 0 1 26 25c0-6.075 4.925-11 11-11z" />
                <g class="rain--drops">
                    <path d="M29.84 49.938l-1 1.732" />
                    <path d="M26.84 55.134l-1 1.732" />
                    <path d="M23.84 60.33l-1 1.732" />
                    <path d="M47.33 49.644l-1 1.732" />
                    <path d="M44.33 54.84l-1 1.732" />
                    <path d="M41.33 60.036l-1 1.732" />
                    <path d="M38.768 50.474l-1 1.732" />
                    <path d="M35.768 55.67l-1 1.732" />
                    <path d="M32.768 60.866l-1 1.732" />
                </g>
            </g>
        </svg>
    )
}

export default Rain;