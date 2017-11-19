// @flow

import type {Planet} from '../../Types'

export type State = Planet | {}
export type Action = {type: 'PLANET_RECEIVED', planet: Planet}

export type {Planet} from '../../Types'
