// @flow

import {connect} from 'react-redux'

import {Render} from './Render'
import {selectors as SELECTORS} from '../reducers'
import type {State as AllState, CacheSiths, Id} from '../types'

export type State = {siths: CacheSiths, ids: Array<Id>}
export const mapStateToProps = (state: AllState): State => ({
  siths: SELECTORS.getSiths(state),
  ids: SELECTORS.getIds(state)
})

export type Dispatch = {}
export const mapDispatchToProps = (): Dispatch => ({})

export type Connector = State & Dispatch
export const Siths_ = connect(mapStateToProps, mapDispatchToProps)(Render)
