import React, { Component } from 'react'
import Styled from 'styled-components'
import {Motion, spring} from 'react-motion'


const Container = Styled.div`
  width: 100%;
  height: 700px;
  position: relative;
  overflow: hidden;
`

const Square = Styled.div`
  width: 1000px;
  height: 1000px;
  position: absolute;
  background: radial-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0)
  );
`

class AnimatedSquare extends Component {

  constructor(props) {
    super(props)
    this.state = {
      x: 0,
      y: 0
    }
  }

  handleMouseMove = ({pageX: x, pageY: y}) => {
    this.setState({x, y});
  }

  handleTouchMove = ({touches}) => {
    this.handleMouseMove(touches[0])
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.handleMouseMove)
    window.addEventListener('touchmove', this.handleTouchMove)
  }

  render() {
    const { x, y } = this.state
    return (
    <Motion
      defaultStyle={{
        x: 0,
        y: 0
      }}
      style={{
        x: spring(
          x,
          {
            stiffness: 100,
            damping: 60
          }
        ),
        y: spring(
          y + 30,
          {
            stiffness: 100,
            damping: 60
          }
        )
      }}>
        {styleProps => (
          <Container
            style={{
              backgroundColor: 'hsla(240,50%,'
                + 100*((800-styleProps.y)/1000)
                + '%, 0.7)'
            }} >
              <Square
                style={{
                  left: styleProps.x - 500,
                  top: styleProps.y - 500
                }}
                onClick={(e) => {

                }} />
          </Container>
        )}
      </Motion>
    )
  }
}

export default AnimatedSquare