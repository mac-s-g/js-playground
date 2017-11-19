import React, { Component } from 'react'
import Styled from 'styled-components'

import { round } from './../helpers'

import Mercury from './Mercury'
import Venus from './Venus'
import Earth from './Earth'
import Mars from './Mars'

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
const sun_center_gravity = {
  x: (sun_size / 2),
  y: (sun_size / 2)
}

export default (props) => (
  <Sun
    left={props.x}
    top={props.y}
    size={sun_size} >
      <Mercury centerOfGravity={sun_center_gravity} />
      <Venus centerOfGravity={sun_center_gravity} />
      <Earth centerOfGravity={sun_center_gravity} />
      <Mars centerOfGravity={sun_center_gravity} />
  </Sun>
)
