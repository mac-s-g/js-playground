import React from 'react'

import Planet from './Planet'

export default (props) => (
  <Planet
    {...props}
    name="venus"
    orbitRadiusX={130}
    orbitRadiusY={28}
    size={14}
    color='#a57c1b'
    springPreset={{
      stiffness: 7,
      damping: 0
    }}
    scaleAmplitude={0.25} />
)