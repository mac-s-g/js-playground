import React from 'react'
import Layout from './../components/layout/Main'
import { Provider } from 'react-redux'

import '../../style/scss/global.scss'

export default ({ store }) => (
  <Provider store={store}>
    <Layout />
  </Provider>
)

