// @flow

import React from 'react'
// import moment from 'moment'

import {strings, type Planet, type Name, type LastUpdated} from '.'

type Props = {id: number, name: Name, homeworld: Planet, onHomeworld: boolean, lastUpdated: LastUpdated}
const Sith = ({
  name, homeworld, onHomeworld,
  id,
  // lastUpdated
}: Props) => <div style={onHomeworld ? {color: 'red'} : null}>
  <h3>{name}</h3>
  <h3>{id}</h3>
  <h6>{strings.HOMEWORLD_TEXT + homeworld.name}</h6>
  {/* <h6>{moment(lastUpdated).fromNow()}</h6> */}
</div>

export default Sith
