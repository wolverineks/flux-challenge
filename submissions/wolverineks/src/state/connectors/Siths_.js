// @flow

import {connect} from 'react-redux'

import Renderer from './Renderer'
import {selectors as SELECTORS} from '../reducers'
import type {State as AllState, Siths} from '../types'

export type StateProps = {siths: Siths}
export const mapStateToProps = (state: AllState): StateProps => ({siths: SELECTORS.getSiths(state)})

export type DispatchProps = {}
export const mapDispatchToProps = (): DispatchProps => ({})

export type Connector = StateProps & DispatchProps
export default connect(mapStateToProps, mapDispatchToProps)(Renderer)
