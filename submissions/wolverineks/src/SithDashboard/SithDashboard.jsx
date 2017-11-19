// SithDashboard/SithDashboard.jsx
// @flow

import React, {Component} from 'react'

import {Button, CurrentPlanetIndicator, ScrollableList, List, Item, ScrollButtons, Sith} from './components'
import {classNames} from './styles'

import {type Planet, type Siths} from './Types'
type Props = {planet: Planet, siths: Siths}
type State = {}

export default class SithDashboard extends Component<Props, State> {
  render () {
    const {planet, siths} = this.props

    return <div className={classNames.main}>
      <div className={classNames.mainInner}>

        <CurrentPlanetIndicator planet={planet} />

        <ScrollableList>
          <List>
            <Item><Sith name={siths[0] ? siths[0].name : undefined} homeworld={siths[0] ? siths[0].homeworld : undefined} /></Item>
            <Item><Sith name={siths[1] ? siths[1].name : undefined} homeworld={siths[1] ? siths[1].homeworld : undefined} /></Item>
            <Item><Sith name={siths[2] ? siths[2].name : undefined} homeworld={siths[2] ? siths[2].homeworld : undefined} /></Item>
            <Item><Sith name={siths[3] ? siths[3].name : undefined} homeworld={siths[3] ? siths[3].homeworld : undefined} /></Item>
            <Item><Sith name={siths[4] ? siths[4].name : undefined} homeworld={siths[4] ? siths[4].homeworld : undefined} /></Item>
          </List>

          <ScrollButtons>
            <Button direction={'up'} />
            <Button direction={'down'} />
          </ScrollButtons>
        </ScrollableList>

      </div>
    </div>
  }
}
