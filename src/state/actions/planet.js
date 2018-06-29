// @flow

import type {Action, Planet} from '../types'

export const planetReceived = (planet: Planet): Action => ({
  type: 'PLANET_RECEIVED',
  planet
})
