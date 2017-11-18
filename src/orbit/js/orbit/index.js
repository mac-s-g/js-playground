import React, { Component } from 'react'
import Styled from 'styled-components'

import Sun from './Sun'
import {
  getWindowWidth,
  getWindowHeight,
  round
} from './../helpers/'


const Container = Styled.div`
  background-color: #333;
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  vertical-align: center;
`

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      x: this.getPositionX(),
      y: this.getPositionY()
    }
  }

  setCenter = () => {
    this.setState({
      x: this.getPositionX(),
      y: this.getPositionY()
    })
  }

  getPositionX = () => {
    return round(getWindowWidth() / 2)
  }

  getPositionY = () => {
    return round(getWindowHeight() / 2)
  }

  componentDidMount() {
    window.addEventListener('resize', this.setCenter)
  }

  render () {
    return (
      <Container>
        <Sun {...this.state} >

        </Sun>
      </Container>
    )
  }
}

export default Index