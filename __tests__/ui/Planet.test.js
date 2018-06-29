// @flow

import React from 'react'
import renderer from 'react-test-renderer'
import {PlanetIndicator, classNames} from '../../src/ui/'

describe('PlanetIndicator', () => {
  describe('When has planet', () => {
    test('PlanetIndicator', () => {
      const className = classNames.planet
      const planet = {id: 18, name: 'Tatooine'}
      const component = renderer.create(<PlanetIndicator planet={planet} className={className} />)
      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    })
  })

  describe('When lacks planet', () => {
    test('PlanetIndicator', () => {
      const className = classNames.planet
      const planet = undefined
      const component = renderer.create(<PlanetIndicator planet={planet} className={className} />)
      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
