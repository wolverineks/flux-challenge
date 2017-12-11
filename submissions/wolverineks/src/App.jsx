// @flow

import React from 'react'
import Websocket from 'react-websocket'
import {compose} from 'ramda'

import {Siths_, Planet_, List_} from './state/connectors'
import Layout, {Sith, Header, Body, PlanetIndicator, ScrollableList, List, Item, ScrollButtons, ScrollButton} from './ui/'

import {name, homeworld} from './ui/utils'

const PLANET_URL = 'ws://localhost:4000'

const SITH_URL = 'http://localhost:3000/dark-jedis/'
import sithActions from './state/actions/siths'

const App = () => <Layout>

  <Planet_>{({planet, planetReceived, dispatch}) => <div>
    <Websocket url={PLANET_URL} onMessage={(serverPlanet: string) => compose(planetReceived, JSON.parse)(serverPlanet)}/>

    <Header>
      <PlanetIndicator planet={planet} />
    </Header>

    <Body>
      <Siths_>{({siths}) =>
        <List_>{({list, scrolled}) =>
          <ScrollableList>

            <List>
              <Item><Sith name={name(siths[list[0]]) || ''} homeworld={homeworld(siths[list[0]]) || {}} /></Item>
              <Item><Sith name={name(siths[list[1]]) || ''} homeworld={homeworld(siths[list[1]]) || {}} /></Item>
              <Item><Sith name={name(siths[list[2]]) || ''} homeworld={homeworld(siths[list[2]]) || {}} /></Item>
              <Item><Sith name={name(siths[list[3]]) || ''} homeworld={homeworld(siths[list[3]]) || {}} /></Item>
              <Item><Sith name={name(siths[list[4]]) || ''} homeworld={homeworld(siths[list[4]]) || {}} /></Item>
            </List>

            <ScrollButtons>
              <ScrollButton direction={'UP'} onClick={scrolled} />
              <ScrollButton direction={'DOWN'} onClick={scrolled} />
            </ScrollButtons>

          </ScrollableList>}
        </List_>
      }</Siths_>
    </Body>

    <button onClick={() =>
      fetch(`${SITH_URL}${3616}`)
        .then((response) => response.json())
        .then((sith) => dispatch(sithActions.sithReceived(sith)))}>Start</button>
  </div>}</Planet_>

</Layout>

export default App
