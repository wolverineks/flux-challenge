// SithDashboard/SithDashboardConnector
// @flow

import {connect} from 'react-redux'

import SithDashboard from './SithDashboard.jsx'
import * as SELECTORS from './selectors'

import type {Dispatch} from '../types'
import type {State, Planet, Siths} from './types'

export type StateProps = {planet: Planet, siths: Siths}
export type DispatchProps = {dispatch: Dispatch}
export type Props = StateProps & DispatchProps

const mapStateToProps = (state: State): StateProps => ({
  planet: SELECTORS.getPlanet(state),
  siths: SELECTORS.getSiths(state)
})
const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(SithDashboard)
