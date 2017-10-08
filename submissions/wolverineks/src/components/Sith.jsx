// @flow
import React, {
  Component
} from 'react'

import type * as Types from '../Types'
type Props = {
  className: Types.ClassName,
  homeworld: Types.Planet,
  name: Types.Name
}
type State = {}

export default class Sith extends Component<Props, State> {
  render () {
    const {className, name, homeworld} = this.props
    const homeworldText = `Homeworld: ${homeworld.name}`
    return <li className={className}>
      <h3>{name}</h3>
      <h6>{homeworldText}</h6>
    </li>
  }
}
