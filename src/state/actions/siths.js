// @flow

import {isNil} from 'ramda'

import type {Action, Id, ServerSith} from '../types'

const sithRequested = (id: Id): Action => ({
  type: 'SITH_REQUESTED',
  id
})

const sithReceived = (sith: ServerSith): Action => ({
  type: 'SITH_RECEIVED',
  id: sith.id,
  name: sith.name,
  homeworld: sith.homeworld,
  masterId: !isNil(sith.master) ? sith.master.id : null,
  apprenticeId: !isNil(sith.apprentice) ? sith.apprentice.id : null,
  lastUpdated: sith.lastUpdated || new Date()
})

const sithRequestErrored = (id: Id, error: Error): Action => ({
  type: 'SITH_REQUEST_ERRORED',
  id,
  error
})

export default {
  sithRequested,
  sithReceived,
  sithRequestErrored
}
