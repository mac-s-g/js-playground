import React, { Component } from 'react'
import Styled from 'styled-components'
import {Motion, spring} from 'react-motion'


const Container = Styled.div`
  background-color: #333;
  width: 100%;
  height: 700px;
  position: relative;
`

const Square = Styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  background-color: green;
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
      <Container>
        <Motion
          defaultStyle={{
            x: 0,
            y: 0
          }}
          style={{
            x: spring(x),
            y: spring(y)
          }}>
          {styleProps => (
            <Square
              style={{
                left: styleProps.x,
                top: styleProps.y
              }}
              onClick={(e) => {

              }} />
          )}
        </Motion>
      </Container>
    )
  }
}

export default AnimatedSquare