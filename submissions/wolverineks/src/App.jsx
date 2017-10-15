// App.jsx
// @flow

import React, {
  Component
} from 'react'

import {components} from './SithDashboard'
const {
  Button,
  CurrentPlanetIndicator,
  Siths,
  SithList,
  Sith,
  ScrollButtons
} = components

import type {
  Planet,
} from './Types'

type Props = {
  planet: Planet,
  siths: Siths
}
type State = {}

const classNames = {
  main: 'app-container',
  mainInner: 'css-root',
  currentPlanetIndicator: 'css-planet-monitor',
  siths: 'css-scrollable-list',
  sithList: 'css-slots',
  sith: 'css-slot',
  scrollButtons: 'css-scroll-buttons',
  buttonUp: 'css-button-up',
  buttonDown: 'css-button-down'
}

export default class App extends Component<Props, State> {
  render () {
    const {planet, siths} = this.props
    return <div className={classNames.main}>
      <div className={classNames.mainInner}>

        <CurrentPlanetIndicator className={classNames.currentPlanetIndicator} planet={planet} siths={siths} />

        <Siths className={classNames.siths} siths={siths} planet={planet}>
          <SithList className={classNames.sithList}>
            <Sith className={classNames.sith} homeworld={planet} />
            <Sith className={classNames.sith} homeworld={planet} />
            <Sith className={classNames.sith} homeworld={planet} />
            <Sith className={classNames.sith} homeworld={planet} />
            <Sith className={classNames.sith} homeworld={planet} />
          </SithList>

          <ScrollButtons className={classNames.scrollButtons}>
            <Button className={classNames.buttonUp} />
            <Button className={classNames.buttonDown} />
          </ScrollButtons>
        </Siths>

      </div>
    </div>
  }
}
