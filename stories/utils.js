import React from 'react'

export const Wrapper = ({ children }) => (
  <div style={{ padding: '3rem' }}>{children}</div>
)

export const initial = {
  animationDelay: 0,
  animationDuration: 800,
  iterations: 2,
  padding: 5,
  strokeWidth: 1,
}
