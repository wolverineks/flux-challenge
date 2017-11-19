// @flow

import React from 'react'
import renderer from 'react-test-renderer'
import {Planet, classNames} from '../../src/ui/SithDashboard/'

describe('Planet', () => {
  describe('When has planet', () => {
    test('Planet', () => {
      const className = classNames.planet
      const planet = {id: 18, name: 'Tatooine'}
      const component = renderer.create(<Planet planet={planet} className={className} />)
      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    })
  })

  describe('When lacks planet', () => {
    test('Planet', () => {
      const className = classNames.planet
      const planet = undefined
      const component = renderer.create(<Planet planet={planet} className={className} />)
      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
