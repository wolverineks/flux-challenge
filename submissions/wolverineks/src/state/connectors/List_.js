// @flow

import {connect} from 'react-redux'

import Renderer from './Renderer'
import {selectors as SELECTORS} from '../reducers'
import type {State as AllState, List} from '../types'

export type State = {list: List}
export const mapStateToProps = (state: AllState): State => ({list: SELECTORS.getList(state)})

export type Dispatch = {}
export const mapDispatchToProps = (): Dispatch => ({})

export type Connector = State & Dispatch
export default connect(mapStateToProps, mapDispatchToProps)(Renderer)
