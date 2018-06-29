// @flow

import {connect} from 'react-redux'

import {Render} from './Render'
import {selectors as SELECTORS} from '../reducers'
import type {State as AllState, Planet} from '../types'
import {planetReceived} from '../actions/planet'

export type StateProps = {planet: Planet | null}
export const mapStateToProps = (state: AllState): StateProps => ({planet: SELECTORS.getPlanet(state)})

export type DispatchProps = {planetReceived: (planet: Planet) => void}
export const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  planetReceived: (planet: Planet) => { dispatch(planetReceived(planet)) },
  dispatch
})

export type Connector = StateProps & DispatchProps
export const Planet_ = connect(mapStateToProps, mapDispatchToProps)(Render)
