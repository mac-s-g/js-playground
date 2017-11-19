import React from 'react'

import Planet from './Planet'

export default (props) => (
  <Planet
    {...props}
    name="mercury"
    orbitRadiusX={80}
    orbitRadiusY={10}
    size={5}
    color='#888'
    springPreset={{
      stiffness: 13.8,
      damping: 0
    }} />
)