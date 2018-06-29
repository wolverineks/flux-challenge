// @flow

import {connect} from 'react-redux'

import {Render} from './Render'
import {selectors as SELECTORS} from '../reducers'
import type {State as AllState, Id} from '../types'

export type StateProps = {ids: Array<Id>}
export const mapStateToProps = (state: AllState): StateProps => ({ids: SELECTORS.getIds(state)})

export type DispatchProps = {}
export const mapDispatchToProps = (): DispatchProps => ({})

export type Connector = StateProps & DispatchProps
export const Ids_ = connect(mapStateToProps, mapDispatchToProps)(Render)
