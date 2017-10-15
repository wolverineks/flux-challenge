// Sith.jsx
// @flow

import React, {
  Component
} from 'react'

import type {
  ClassName,
  Planet,
  Name
} from '../../Types'

type Props = {
  className: ClassName,
  name: Name | void,
  homeworld: Planet | void
}
type State = {}

export default class Sith extends Component<Props, State> {
  render () {
    const {
      className,
      name,
      homeworld
    } = this.props
    const homeworldText = homeworld
      ? 'Homeworld: ' + homeworld.name
      : undefined

    return <li className={className}>
      <h3>{name}</h3>
      <h6>{homeworldText}</h6>
    </li>
  }
}
