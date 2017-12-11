// @flow

import type {Action, Reducer, Planet} from '.'

type State = Planet | null
const initialState = null
const planet: Reducer<State> = (state: State = initialState, action: Action): State =>
  action.type === 'PLANET_RECEIVED'
    ? {id: action.id, name: action.name}
    : state

export type {State}
export {planet, initialState}
export default planet
