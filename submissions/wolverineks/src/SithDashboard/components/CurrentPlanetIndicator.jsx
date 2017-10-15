// @flow
import React, {
  Component
} from 'react'

import type {
  ClassName,
  Planet
} from '../../Types'

type Props = {
  className: ClassName,
  planet: ?Planet
}

type State = {}

const OBI_WAN_TEXT = 'Obi-Wan currently on'

export default class CurrentPlanetIndicator extends Component<Props, State> {
  render () {
    const {
      className,
      planet
    } = this.props
    const currentPlanetText = planet
      ? `${OBI_WAN_TEXT} ${planet.name}`
      : undefined

    return <h1 className={className}>
      {currentPlanetText}
    </h1>
  }
}
