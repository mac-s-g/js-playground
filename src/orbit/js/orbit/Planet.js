import React, { Component } from 'react'
import Styled from 'styled-components'
import {
  Motion,
  spring
} from 'react-motion'

import { round } from './../helpers'


const PlanetContainer = Styled.div`
  position: absolute;
  background-color: #0077ff;
  cursor: pointer;
  opacity: 0.8;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: ${props => round(props.size / 2)}px;
`

export default class Planet extends Component {
  constructor(props) {
    super(props)
    this.state = {
      x: props.x - round(props.size / 2),
      y: props.y - round(props.size / 2)
    }
  }

  orbitFront = false

  render () {
    const { x, y } = this.state
    const { size, orbitRadiusX, orbitRadiusY } = this.props
    return (
      <Motion
        defaultStyle={{
          x: this.props.x + orbitRadiusX,
          y: this.props.y + orbitRadiusY
        }}
        style={{
          x: spring(
            x,
            {
              stiffness: 2,
              damping: 0
            }
          ),
          y: spring(
            y,
            {
              stiffness: 2,
              damping: 0
            }
          )
        }}>
        {styleProps => {
          if (round(styleProps.y, 2) == round(this.props.y + orbitRadiusY, 2)) {
            this.orbitFront = false
          } else if (round(styleProps.y, 2) == 0) {
            this.orbitFront = true
          }

          return (
            <PlanetContainer
              style={{
                left: styleProps.x + 'px',
                top: styleProps.y + 'px',
                zIndex: this.orbitFront ? 5 : -5
              }}
              size={size} />
          )
        }}
      </Motion>
    )
  }
}
