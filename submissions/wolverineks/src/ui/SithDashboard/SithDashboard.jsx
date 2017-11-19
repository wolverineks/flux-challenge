// @flow

import React from 'react'

import {Header, Body, Button, Planet, ScrollableList, List, Item, ScrollButtons, Sith} from './components'
import {name, homeworld} from './utils'
import {classNames} from '.'
import {type Siths, type Planet as PlanetType} from '../../state/types'
import {List_} from '../../state/connectors'
type Props = {siths: Siths, planet: PlanetType}

const SithDashboard = ({siths, planet}: Props) =>
  <div className={classNames.main}>
    <div className={classNames.mainInner}>

      <Header>
        <Planet planet={planet} />
      </Header>

      <Body>
        <List_ render={(list) => {
          <ScrollableList data={siths} render={() => <div>
            <List list={list}>
              <Item><Sith name={name(list[0])} homeworld={homeworld(list[0])} /></Item>
              <Item><Sith name={name(list[1])} homeworld={homeworld(list[1])} /></Item>
              <Item><Sith name={name(list[2])} homeworld={homeworld(list[2])} /></Item>
              <Item><Sith name={name(list[3])} homeworld={homeworld(list[3])} /></Item>
              <Item><Sith name={name(list[4])} homeworld={homeworld(list[4])} /></Item>
            </List>

            <ScrollButtons render={() => <div>
              <Button direction={'UP'} />
              <Button direction={'DOWN'} />
            </div>} />
          </div>} />
        }} />
      </Body>

    </div>
  </div>

export default SithDashboard
