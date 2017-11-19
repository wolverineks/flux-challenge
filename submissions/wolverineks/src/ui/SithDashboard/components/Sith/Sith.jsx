// @flow

import React from 'react'

import {HOMEWORLD_TEXT} from './strings'
import type {Planet, Name} from './Types'

type Props = {name: ?Name, homeworld: ?Planet}
const Sith = ({name, homeworld}: Props) => {
  const homeworldText = homeworld
    ? HOMEWORLD_TEXT + homeworld.name
    : undefined

  return <div>
    <h3>{name}</h3>
    <h6>{homeworldText}</h6>
  </div>
}

export default Sith
