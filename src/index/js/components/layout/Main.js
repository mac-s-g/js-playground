import React from 'react'
import Styled from 'styled-components'

import { constants } from './../../constants'


const { project_info } = constants;

const Container = Styled.div`
  font-family: 'arial';
  position: relative;
`

const Main = () => (
  <Container>
    Playground Index
  </Container>
)

export default Main
