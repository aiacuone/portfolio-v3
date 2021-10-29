import React, { useContext } from 'react'

export default function EmailIcon({ size, color }) {
  return (
    <svg
      fill={color}
      height={size}
      width={size}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 32 21"
      style={{ enableBackground: 'new 0 0 32 21' }}
      xmlSpace="preserve">
      <path
        id="mail"
        d="M28,0H4C1.8,0,0,1.8,0,4v13c0,2.2,1.8,4,4,4h24c2.2,0,4-1.8,4-4V4C32,1.8,30.2,0,28,0z M2,5.3l7,5.3
	l-7,5.3V5.3z M30,17c0,1.1-0.9,2-2,2H4c-1.1,0-2-0.9-2-2l7.8-5.9l4.4,3.3c0.5,0.4,1.2,0.6,1.8,0.6c0.6,0,1.3-0.2,1.8-0.6l4.4-3.3
	L30,17L30,17z M30,15.8l-7-5.3l7-5.3V15.8z M17.2,13.6C16.8,13.9,16.4,14,16,14s-0.9-0.1-1.2-0.4l-4.1-3.1L9.8,9.9L2,4v0
	c0-1.1,0.9-2,2-2h24c1.1,0,2,0.9,2,2L17.2,13.6z"
      />
    </svg>
  )
}
