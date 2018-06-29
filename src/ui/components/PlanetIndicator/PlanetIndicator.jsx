// @flow

import React from 'react'

import {style, strings, type Planet} from '.'

type Props = {planet: ?Planet}
const PlanetIndicator = ({planet}: Props) =>
  <h1 style={style}>
    {planet ? `${strings.OBI_WAN_KNOWN_LOCATION_TEXT} ${planet.name}` : strings.OBI_WAN_UNKNOWN_LOCATION_TEXT}
  </h1>

export default PlanetIndicator
