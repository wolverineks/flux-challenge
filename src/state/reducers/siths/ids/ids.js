// @flow

import {uniq} from 'ramda'

import {masters, apprentices} from '../../utils'
import type {Action, Ids, State as Next} from '../../../types'

export type State = Ids
export const initialState = []
export const ids = (state: State = initialState, action: Action, {siths: {byId} }: Next) =>
  action.type === 'SITH_RECEIVED'
    ? uniq([...masters(byId)(action.id), ...apprentices(byId)(action.id)])
    : state
