// @flow

import {buildReducer} from 'redux-keto'

import type {Ids, CacheSiths, Reducer} from '.'
import {ids, initialState as initialIdsState} from './ids/'
import {byId, initialState as initialByIdState} from './byId/'

export type State = {byId: CacheSiths, ids: Ids}
export const initialState = {byId: initialByIdState, ids: initialIdsState}
export const siths: Reducer<State> = buildReducer({byId, ids})
