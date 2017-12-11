// @flow

import type {Store as ReduxStore, Dispatch as ReduxDispatch} from 'redux'
import type {ChildrenArray, Element} from 'react'
import type {
  PixieInstance as Pixie,
  PixieInput as Input,
  OnError,
  OnOutput,
  UpdateFunction as Update,
  DestroyFunction as Destroy,
} from 'redux-pixies'

import type {Reducer as RootReducer} from './reducers'

// Server types
type ServerSith   = {id: Id, name: string, homeworld: Planet, master: Master | null, apprentice: Apprentice | null, lastUpdated?: Date}
type Master       = {id: Id, url: string}
type Apprentice   = {id: Id, url: string}

// Domain types
type Siths       = {[sithId: number]: Sith}
type Sith        = {id: Id, name: string, homeworld: Planet, masterId: number | null, apprenticeId: number | null, lastUpdated: Date}
type Planet      = {id: Id, name: string}
type Id          = number
type Name        = string
type List        = {values: Array<number | null>, added: Array<number>, removed: Array<number>}
type LastUpdated = Date

type $ExtractFunctionReturn = <V>(v: (...args: any) => V) => V;
type State = $ObjMap<RootReducer, $ExtractFunctionReturn>;

// type State              = {planet: Planet, siths: Siths, list: List}
type PlanetReceived     = {type: 'PLANET_RECEIVED',      id: Id, name: string}
type SithRequested      = {type: 'SITH_REQUESTED',       id: Id}
type SithReceived       = {type: 'SITH_RECEIVED',        id: Id, name: string, homeworld: Planet, masterId: number | null, apprenticeId: number | null, lastUpdated: Date}
type SithRequestErrored = {type: 'SITH_REQUEST_ERRORED', id: Id, error: Error}
type Scrolled           = {type: 'SCROLLED', direction: 'UP' | 'DOWN'}
type Action
  = PlanetReceived
  | SithRequested
  | SithReceived
  | SithRequestErrored
  | Scrolled

// Redux types
type Store      = ReduxStore<State, Action>
type GetState   = () => State
type Dispatch   = ReduxDispatch<Action>
type Reducer<S> = (state: S, action: Action) => S

// React types
type Children  = ChildrenArray<Element<*>>
type ClassName = string

export type {
  ServerSith,
  Master,
  Apprentice,
  Siths,
  Sith,
  Planet,
  Id,
  List,
  Name,
  LastUpdated,
  State,
  PlanetReceived,
  SithRequested,
  SithReceived,
  Scrolled,
  Action,
  Store,
  GetState,
  Dispatch,
  Reducer,
  Children,
  ClassName,
  Pixie,
  Input,
  OnError,
  OnOutput,
  Update,
  Destroy,
}
