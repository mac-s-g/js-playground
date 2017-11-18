import React, { Component } from 'react'
import Styled from 'styled-components'

import Planet from './Planet'
import { round } from './../helpers'

const Sun = Styled.div`
  position: absolute;
  background-color: #bbbb00;
  opacity: 1;
  box-shadow: 0px 0px 10px #ffff00;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: ${props => round(props.size / 2)}px;px;
  left: ${props => props.left - round(props.size / 2)}px;
  top: ${props => props.top - round(props.size / 2)}px;
`

const sun_size = 100

export default (props) => (
  <Sun
    left={props.x}
    top={props.y}
    size={sun_size} >
      <Planet
        x={round(sun_size / 2)}
        y={round(sun_size / 2)}
        orbitRadiusX={200}
        orbitRadiusY={30}
        size={20} />
  </Sun>
)
