// @flow
import React, {
  Component
} from 'react'

import type * as Types from '../Types'
type Props = {
  className: Types.ClassName,
  planet: Types.Planet
}
type State = {}

const OBI_WAN_TEXT = 'Obi-Wan currently on'

export default class CurrentPlanetIndicator extends Component<Props, State> {
  render () {
    const {className, planet} = this.props
    const currentPlanetText = `${OBI_WAN_TEXT} ${planet}`
    return <h1 className={className}>
      {currentPlanetText}
    </h1>
  }
}
