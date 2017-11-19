// SithDashboard/components/CurrentPlanetIndicator/Main.jsx
// @flow

import React, {Component} from 'react'

import type {Planet} from './Types'

type Props = {planet: ?Planet}
type State = {}

import {OBI_WAN_TEXT} from './strings'
import style from './style.js'

export default class Main extends Component<Props, State> {
  render () {
    const {planet} = this.props
    const currentPlanetText = planet
      ? `${OBI_WAN_TEXT} ${planet.name}`
      : undefined

    return <h1 style={style}>
      {currentPlanetText}
    </h1>
  }
}
