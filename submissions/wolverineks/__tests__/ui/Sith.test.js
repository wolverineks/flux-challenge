// @flow

import React from 'react'
import renderer from 'react-test-renderer'
import {Sith, classNames} from '../../src/ui/'

describe('Sith', () => {
  describe('When has name', () => {
    describe('When has planet', () => {
      test('Sith', () => {
        const className = classNames.sith
        const name = 'Skere Kaan'
        const planet = {id: 1, name: 'Coruscant'}
        const lastUpdated = new Date(1510591530092)
        const component = renderer.create(<Sith name={name} homeworld={planet} className={className} lastUpdated={lastUpdated} />)
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
      })
    })

    describe('When lacks planet', () => {
      test('Sith', () => {
        const className = classNames.sith
        const name = 'Skere Kaan'
        const planet = undefined
        const lastUpdated = new Date(1510591530092)
        const component = renderer.create(<Sith name={name} homeworld={planet} className={className} lastUpdated={lastUpdated} />)
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
      })
    })
  })

  describe('When lacks name', () => {
    describe('When has planet', () => {
      test('Sith', () => {
        const className = classNames.sith
        const name = undefined
        const planet = {id: 1, name: 'Coruscant'}
        const lastUpdated = new Date(1510591530092)
        const component = renderer.create(<Sith name={name} homeworld={planet} className={className} lastUpdated={lastUpdated} />)
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
      })
    })

    describe('When lacks planet', () => {
      test('Sith', () => {
        const className = classNames.sith
        const name = undefined
        const planet = undefined
        const lastUpdated = undefined
        const component = renderer.create(<Sith name={name} homeworld={planet} className={className} lastUpdate={lastUpdated} />)
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
      })
    })
  })
})
