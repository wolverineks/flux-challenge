// @flow

import {connect} from 'react-redux'

import Render from './Render'
import {selectors as SELECTORS} from '../reducers'
import type {State as AllState, Planet} from '../types'
import planetActions from '../actions/planet'

export type StateProps = {planet: Planet | null}
export const mapStateToProps = (state: AllState): StateProps => ({planet: SELECTORS.getPlanet(state)})

export type DispatchProps = {planetReceived: (planet: Planet) => void}
export const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  planetReceived: (planet) => { dispatch(planetActions.planetReceived(planet)) },
  dispatch
})

export type Connector = StateProps & DispatchProps
export default connect(mapStateToProps, mapDispatchToProps)(Render)
