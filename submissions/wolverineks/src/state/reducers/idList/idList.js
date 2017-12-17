// @flow

import {uniq} from 'ramda'

import {masters, apprentices} from '../utils'
import type {State as AllState, Action, Id} from '../../types'

export type State = Array<Id>
export const initialState = []
export default (state: State = initialState, action: Action, {siths}: AllState) =>
  action.type === 'SITH_RECEIVED'
    ?  uniq([...masters(siths)(action.id), ...apprentices(siths)(action.id)])
    : state
