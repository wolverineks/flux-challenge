// @flow

import type {Store as ReduxStore, Dispatch as ReduxDispatch} from 'redux'
import type {ChildrenArray, Element} from 'react'

// Server types
export type ServerSith = {+id: Id, +name: Name, +homeworld: Planet, +master: Master | null, +apprentice: Apprentice | null}
export type Master     = {+id: number, url: string}
export type Apprentice = {+id: number, url: string}

// Domain types
export type Siths  = {[string]: Sith}
export type Sith   = {+id: Id, +name: Name, +homeworld: Planet, +master: Id | null, +apprentice: Id | null, +lastUpdated: Date}
export type Planet = {+id: Id, +name: Name}
export type List   = Array<Id>
export type Name   = string
export type Id     = number

export type State = {+planet: Planet | null, +siths: Siths, +list: List}
export type PlanetReceived = {+type: 'PLANET_RECEIVED', +planet: Planet}
export type SithReceived   = {+type: 'SITH_RECEIVED',   +sith: ServerSith}
export type Scrolled       = {+type: 'SCROLLED',        +direction: 'UP' | 'DOWN'}
export type Action
  = PlanetReceived
  | SithReceived
  | Scrolled

// Redux types
export type Store    = ReduxStore<State, Action>
export type GetState = () => State
export type Dispatch = ReduxDispatch<Action>
export type Reducer<S> = (state: S, action: Action) => S;

// React types
export type Children  = ChildrenArray<Element<*>>
export type ClassName = string
