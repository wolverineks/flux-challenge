// @flow

import {connect} from 'react-redux'

import Renderer from './Renderer'
import {selectors as SELECTORS} from '../reducers'
import type {State as AllState, Planet} from '../types'

export type State = {planet: Planet | null}
export const mapStateToProps = (state: AllState): State => ({planet: SELECTORS.getPlanet(state)})

export type Dispatch = {}
export const mapDispatchToProps = (): Dispatch => ({})

export type Connector = State & Dispatch
export default connect(mapStateToProps, mapDispatchToProps)(Renderer)
