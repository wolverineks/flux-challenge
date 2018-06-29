// @flow

import type {Action, Planet} from '../types'

const planetReceived = ({id, name}: Planet): Action => ({
  type: 'PLANET_RECEIVED',
  id,
  name
})

export {planetReceived}
export default {planetReceived}
