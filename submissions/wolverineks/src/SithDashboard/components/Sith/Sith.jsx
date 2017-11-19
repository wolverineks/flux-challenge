// SithDashboard/components/Sith.jsx
// @flow

import React, {Component} from 'react'

import {HOMEWORLD_TEXT} from './strings'

import type {Planet, Name} from './Types'
type Props = {name: ?Name, homeworld: ?Planet}
type State = {}

export default class Sith extends Component<Props, State> {
  render () {
    const {name, homeworld} = this.props

    const homeworldText = homeworld
      ? HOMEWORLD_TEXT + homeworld.name
      : undefined

    return <div>
      <h3>{name}</h3>
      <h6>{homeworldText}</h6>
    </div>
  }
}
