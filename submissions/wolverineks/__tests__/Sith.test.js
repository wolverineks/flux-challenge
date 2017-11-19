import React from 'react'
import renderer from 'react-test-renderer'
import Sith from '../src/SithDashboard/components/Sith'
import {classNames} from '../src/SithDashboard/styles'

describe('Sith', () => {
  describe('When has name', () => {
    describe('When has planet', () => {
      test('Sith', () => {
        const className = classNames.sith
        const name = 'Skere Kaan'
        const planet = {id: 1, name: 'Coruscant'}
        const component = renderer.create(<Sith name={name} homeworld={planet} className={className}/>)
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
      })
    })

    describe('When lacks planet', () => {
      test('Sith', () => {
        const className = classNames.sith
        const name = 'Skere Kaan'
        const planet = undefined
        const component = renderer.create(<Sith name={name} homeworld={planet} className={className}/>)
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
        const component = renderer.create(<Sith name={name} homeworld={planet} className={className}/>)
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
      })
    })

    describe('When lacks planet', () => {
      test('Sith', () => {
        const className = classNames.sith
        const name = undefined
        const planet = undefined
        const component = renderer.create(<Sith name={name} homeworld={planet} className={className}/>)
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
      })
    })
  })
})
