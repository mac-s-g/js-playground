import
  React,
  {
    Component,
    Children,
    cloneElement
  } from 'react'
import Styled from 'styled-components'
import {
  StaggeredMotion,
  spring
} from 'react-motion'

import { round } from './../helpers'


const PlanetContainer = Styled.div`
  position: absolute;
  background-color: ${props => props.color};
`

export default class Planet extends Component {
  constructor(props) {
    super(props)
    this.state = {
      x: props.centerOfGravity.x - round(props.size / 2),
      y: props.centerOfGravity.y - round(props.size / 2),
      reference: {...props.centerOfGravity}
    }
  }

  staggerOffset = 50

  //uses sin function scale planet size based on position in orbit
  getScale = (position, direction) => {
    const { orbitRadiusX, scaleAmplitude } = this.props
    const amplitude = scaleAmplitude ? scaleAmplitude : 0.4
    const observed_wobble = 0.05

    let x = position + orbitRadiusX + observed_wobble
    if (direction == -1) {
      x = (4 * orbitRadiusX + observed_wobble) - x
    }

    return 1 + (amplitude * (
      Math.sin(
        (x * (2 * Math.PI) / (4 * orbitRadiusX))

      )
    ))
  }

  render () {
    const { x, y, reference } = this.state
    const {
      size,
      orbitRadiusX,
      orbitRadiusY,
      color,
      springPreset,
      name, //helpful for debugging specific planets
      children,
      centerOfGravity,
      zIndex
    } = this.props

    return (
      <StaggeredMotion
        defaultStyles={new Array(this.staggerOffset).fill({
          x: x + orbitRadiusX,
          y: y + orbitRadiusY
        })}
        styles={prev => prev.map((_, i) => {

          if (i == 0) {
            return {
              x: spring(x, {...springPreset, precision: 1}),
              y: spring(y, {...springPreset, precision: 1}),
            }
          } else {
            return {
              x: prev[i - 1].x,
              y: prev[0].y
            }
          }
        })}
        >
          {interpolating =>
            <div>
            {interpolating.map((styleProps, i) => {
              if (i === (this.staggerOffset - 1))  {
                const direction = styleProps.x > interpolating[i - 3].x
                  ? -1 : 1
                const scale = this.getScale(
                  styleProps.x - x, direction
                )
                const z_index = (direction == 1 ? orbitRadiusX : -1 * orbitRadiusX) + (zIndex ? zIndex : 0)

                return (
                  <div key={i}>
                  <PlanetContainer
                    style={{
                      left: styleProps.x - (reference.x - centerOfGravity.x) + 'px',
                      top: styleProps.y - (reference.y - centerOfGravity.y) + 'px',
                      zIndex: z_index,
                      transform: 'scale(' + scale + ')',
                      height: size + 'px',
                      width: size + 'px',
                      borderRadius: (size) + 'px'
                    }}
                    size={size}
                    color={color} />
                  {Children.map(children, (child, key) => cloneElement(
                    child,
                    {
                      zIndex: z_index,
                      centerOfGravity: {
                        x: (styleProps.x) + (size / 2),
                        y: (styleProps.y) + (size / 2)
                      },
                      size: scale * child.props.size
                    }
                  ))}
                  </div>
                )
              } else {
                return null
              }
            })}
            </div>
          }
      </StaggeredMotion>
    )
  }
}
