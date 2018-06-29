// @flow

import type {Action} from '../types'

export const scrolledUp = (): Action => ({
  type: 'SCROLLED_UP'
})

export const scrolledDown = (): Action => ({
  type: 'SCROLLED_DOWN'
})
