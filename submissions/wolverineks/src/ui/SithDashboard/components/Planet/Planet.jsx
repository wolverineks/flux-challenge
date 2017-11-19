// @flow

import React from 'react'

import {OBI_WAN_KNOWN_LOCATION_TEXT, OBI_WAN_UNKNOWN_LOCATION_TEXT} from './strings'
import style from './style.js'
import type {Planet} from '../../../../state/types'

type Props = {planet: ?Planet}
export default ({planet}: Props) =>
  <h1 style={style}>
    {planet ? `${OBI_WAN_KNOWN_LOCATION_TEXT} ${planet.name}` : OBI_WAN_UNKNOWN_LOCATION_TEXT}
  </h1>
