import React from 'react'

export default function StoryIcon({ color, size }) {
  return (
    <svg
      fill={color}
      // fill="red"
      height={size}
      viewBox="0 0 256 256"
      width={size}
      xmlns="http://www.w3.org/2000/svg">
      <path
        clipRule="evenodd"
        d="M216 41H40V65H216V41ZM40 91H216V115H40V91ZM216 141H40V165H216V141ZM168 191H40V215H168V191Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  )
}
