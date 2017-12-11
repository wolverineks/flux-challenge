// @flow

import {type Id, type Action, type Reducer, type Siths, type Sith, type Planet} from '.'

type State = Siths
const initialState: State = {}
const siths: Reducer<State> = (state: State = initialState, action: Action): State =>
  action.type === 'SITH_RECEIVED'
    ? {...state, [action.id]: sith(action.id, action.name, action.homeworld, action.masterId, action.apprenticeId, action.lastUpdated)}
    : state

const sith = (id: Id, name: string, homeworld: Planet, masterId: number | null, apprenticeId: number | null, lastUpdated: Date): Sith => ({
  id, name, homeworld, masterId: masterId, apprenticeId: apprenticeId, lastUpdated: lastUpdated
})

export type {State}
export {initialState, siths}
export default siths
