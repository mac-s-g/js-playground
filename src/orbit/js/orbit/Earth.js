import React from 'react'

import Planet from './Planet'

export default (props) => (
  <Planet
    {...props}
    name="earth"
    orbitRadiusX={280}
    orbitRadiusY={40}
    size={20}
    color='#0066bb'
    springPreset={{
      stiffness: 5,
      damping: 0
    }} >
    <Planet
    name="moon"
    orbitRadiusX={20}
    orbitRadiusY={2}
    size={5}
    color='#aaaaaa'
    springPreset={{
      stiffness: 30,
      damping: 0
    }} />
  </Planet>
)