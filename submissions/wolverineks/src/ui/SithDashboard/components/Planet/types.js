// @flow

import type {Planet} from '../../../../state/types'

export type State = Planet | {}
export type Action = {type: 'PLANET_RECEIVED', planet: Planet}
