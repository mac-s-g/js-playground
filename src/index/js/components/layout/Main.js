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
    <h3>Javascript Playground</h3>
    <a href="https://github.com/mac-s-g/js-playground" target="_blank">
      Source Code
    </a>
    <h4>Demos:</h4>
    <ul>
      <li><a href="./sun-animation/">Sun Animation</a></li>
      <li><a href="./orbit/">Earth Orbit</a></li>
    </ul>
  </Container>
)

export default Main
