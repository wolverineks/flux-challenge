// @flow

import type {Action} from '../types'

const scrolled = (direction: 'UP' | 'DOWN'): Action => ({
  type: 'SCROLLED',
  direction
})

export default {
  scrolled
}
