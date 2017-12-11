// @flow

import {connect} from 'react-redux'

import Render from './Render'
import {selectors as SELECTORS} from '../reducers'
import type {State as AllState, Dispatch, List} from '../types'
import ListActions from '../actions/list'

export type StateProps = {list: List}
export const mapStateToProps = (state: AllState): StateProps => ({list: SELECTORS.getList(state)})

export type DispatchProps = {scrolled: (direction: 'UP' | 'DOWN') => void}
export const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  scrolled: (direction: 'UP' | 'DOWN') => { dispatch(ListActions.scrolled(direction)) }
})

export type Connector = StateProps & DispatchProps
export default connect(mapStateToProps, mapDispatchToProps)(Render)
