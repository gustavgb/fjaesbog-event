import React from 'react'

const Multiline = ({ children }) => children.split('\n').map(child => (
  <div>{child}</div>
))

export default Multiline
