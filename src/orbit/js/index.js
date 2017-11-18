import React from 'react'
import Styled from 'styled-components'

import Orbit from './orbit/index'


const Container = Styled.div`
  font-family: 'arial';
  position: relative;
`

const Main = () => (
  <Container>
    <Orbit />
  </Container>
)

export default Main
