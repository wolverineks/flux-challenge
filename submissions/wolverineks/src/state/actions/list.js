// @flow

import type {Action} from '../types'

export const scrolled = (direction: 'UP' | 'DOWN'): Action => ({
  type: 'SCROLLED',
  direction
})
