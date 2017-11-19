import React from 'react'

import Planet from './Planet'

export default (props) => (
  <Planet
    {...props}
    name="mars"
    orbitRadiusX={400}
    orbitRadiusY={50}
    size={13}
    color='#c1440e'
    springPreset={{
      stiffness: 2.8,
      damping: 0
    }}
    scaleAmplitude={0.5} />
)