// @flow
import React, {
  Component
} from 'react'

import CurrentPlanetIndicator from './CurrentPlanetIndicator.jsx'
import Siths from './Siths.jsx'
import SithList from './SithList.jsx'
import Sith from './Sith.jsx'
import ScrollButtons from './ScrollButtons.jsx'
import Button from './Button.jsx'

import type * as Types from '../Types'
type Props = {
  planet: Types.Planet,
  siths: Types.Siths
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

        <CurrentPlanetIndicator className={classNames.currentPlanetIndicator} planet={planet} />

        <Siths className={classNames.siths} siths={siths} planet={planet}>
          <SithList className={classNames.sithList}>
            <Sith className={classNames.sith} />
            <Sith className={classNames.sith} />
            <Sith className={classNames.sith} />
            <Sith className={classNames.sith} />
            <Sith className={classNames.sith} />
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
