// @flow

import React from 'react'
import renderer from 'react-test-renderer'
import {Sith, classNames} from '../../src/ui/'

import type {Sith as SithType} from '../../src/state/types'

describe('Sith', () => {
  describe('When not on homeworld', () => {
    test('Sith', () => {
      const className = classNames.sith
      const sith: SithType = {
        id: 123,
        name: 'Skere Kaan',
        apprenticeId: 123,
        masterId: 456,
        homeworld: {id: 1, name: 'Coruscant'},
        lastUpdated: new Date(1510591530092)
      }
      const onHomeworld = false
      const component = renderer.create(<Sith name={sith.name} homeworld={sith.homeworld} onHomeworld={onHomeworld} lastUpdated={sith.lastUpdated} className={className} />)
      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    })
  })

  describe('When on homeworld', () => {
    test('Sith', () => {
      const className = classNames.sith
      const sith: SithType = {
        id: 123,
        name: 'Skere Kaan',
        apprenticeId: 123,
        masterId: 456,
        homeworld: {id: 1, name: 'Coruscant'},
        lastUpdated: new Date(1510591530092)
      }
      const onHomeworld = true
      const component = renderer.create(<Sith name={sith.name} homeworld={sith.homeworld} onHomeworld={onHomeworld} lastUpdated={sith.lastUpdated} className={className} />)
      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
