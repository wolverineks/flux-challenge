// @flow

import type {Store as ReduxStore, Dispatch as ReduxDispatch} from 'redux'
import type {ChildrenArray, Element} from 'react'
import type {PixieInstance, TamePixieInput as Input, OnError, OnOutput, UpdateFunction as Update, DestroyFunction as Destroy,} from 'redux-pixies'

// import type {Reducer as RootReducer} from './reducers'

// Helper types
type ById<T> = {[Id: Id]: T}

// Server types
type ServerSiths  = ById<ServerSith>
type ServerSith   = {id: Id, name: string, homeworld: Planet, master: Master | null, apprentice: Apprentice | null, lastUpdated?: Date}
type Master       = {id: Id, url: string}
type Apprentice   = {id: Id, url: string}

// Domain types
// type $ExtractFunctionReturn = <V>(v: (...args: any) => V) => V;
// type State = $ObjMap<RootReducer, $ExtractFunctionReturn>;
type State = {
  planet: Planet | null,
  siths: {
    byId: CacheSiths,
    ids: Ids
  },
  list: List
}

type CacheSiths  = ById<Sith>
type Sith        = {id: Id, name: string, homeworld: Planet, masterId: number | null, apprenticeId: number | null, lastUpdated: Date}
type Planet      = {id: Id, name: string}
type Id          = number
type Ids         = Array<Id>
type Name        = string
type List        = {rootId: number, maxLength: number, visibleIds: Ids, canScrollUp: boolean, canScrollDown: boolean, addedIds: Ids, removedIds: Ids}
type LastUpdated = Date

// Action types
type PlanetReceived     = {type: 'PLANET_RECEIVED',      planet: Planet}
type SithRequested      = {type: 'SITH_REQUESTED',       id: Id}
type SithRequestErrored = {type: 'SITH_REQUEST_ERRORED', id: Id, error: Error}
type SithReceived       = {type: 'SITH_RECEIVED',        id: Id, sith: Sith}
type ScrolledUp         = {type: 'SCROLLED_UP'}
type ScrolledDown       = {type: 'SCROLLED_DOWN'}
type Action
  = PlanetReceived
  | SithRequested
  | SithReceived
  | SithRequestErrored
  | ScrolledUp
  | ScrolledDown

// Redux types
type Store      = ReduxStore<State, Action>
type GetState   = () => State
type Dispatch   = ReduxDispatch<Action>
type Reducer<S> = (state: S, action: Action) => S

// React types
type Children  = ChildrenArray<Element<*>>
type ClassName = string

// Async types
type SithPixie = PixieInstance<State>

export type {
  ServerSiths,
  ServerSith,
  Master,
  Apprentice,
  CacheSiths,
  ById,
  Sith,
  Planet,
  Id,
  Ids,
  List,
  Name,
  LastUpdated,
  State,
  PlanetReceived,
  SithRequested,
  SithReceived,
  ScrolledUp,
  ScrolledDown,
  Action,
  Store,
  GetState,
  Dispatch,
  Reducer,
  Children,
  ClassName,
  SithPixie,
  PixieInstance,
  Input,
  OnError,
  OnOutput,
  Update,
  Destroy,
}
