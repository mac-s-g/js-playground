import React from 'react'
import Styled from 'styled-components'

import LightSource from './followAnimation/LightSource'


const Container = Styled.div`
  font-family: 'arial';
  position: relative;
`

const Main = () => (
  <Container>
    <LightSource />
  </Container>
)

export default Main
