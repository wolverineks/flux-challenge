// @flow

import React from 'react'
import {Siths_, Planet_} from './state/connectors'
import SithDashboard from './ui/SithDashboard/SithDashboard'

const App = () => <div>
  <Siths_  render={({siths}) =>
    <Planet_ render={({planet}) =>
      <SithDashboard siths={siths} planet={planet} />} />} />
</div>

export default App
