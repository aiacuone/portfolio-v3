import React, { useContext } from 'react'
import UserContext from '../utils/UserContext'

export default function SVG({ props, size }) {
  const { state } = useContext(UserContext)
  const { darkMode } = state

  return (
    <svg
      fill={darkMode ? 'white' : 'black'}
      height={size}
      width={size}
      {...props}></svg>
  )
}
