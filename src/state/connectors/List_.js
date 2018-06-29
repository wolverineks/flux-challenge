// @flow

import {connect} from 'react-redux'

import {Render} from './Render'
import {selectors as SELECTORS} from '../reducers'
import type {State as AllState, Dispatch, Id} from '../types'
import {scrolled} from '../actions/list'

export type StateProps = {list: Array<Id>}
export const mapStateToProps = (state: AllState): StateProps => ({list: SELECTORS.getList(state)})

export type DispatchProps = {scrolled: (direction: 'UP' | 'DOWN') => void}
export const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  scrolled: (direction: 'UP' | 'DOWN') => { dispatch(scrolled(direction)) }
})

export type Connector = StateProps & DispatchProps
export const List_ = connect(mapStateToProps, mapDispatchToProps)(Render)
