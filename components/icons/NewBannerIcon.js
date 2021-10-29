import React from 'react'

export default function NewBannerIcon({ width, height, color }) {
  return (
    <svg
      //   fill={color}
      width={width}
      height={height}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 269 88"
      style={{ enableBackground: 'new 0 0 269 88' }}
      xmlSpace="preserve">
      <style type="text/css">{`.newBanner{fill:${color}`}</style>
      <g>
        <polygon class="newBanner" points="0,88 0,0 207,0 	" />
      </g>
    </svg>
  )
}
