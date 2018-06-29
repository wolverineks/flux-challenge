// @flow

import React from 'react'
import renderer from 'react-test-renderer'
import {ScrollButton, classNames} from '../../src/ui'

describe('ScrollButton', () => {
  describe('When UP button', () => {
    test('ScrollButton', () => {
      const className = classNames.buttonUp
      const component = renderer.create(<ScrollButton className={className} direction={'UP'} onClick={() => {}} />)
      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    })
  })

  describe('When DOWN button', () => {
    test('ScrollButton', () => {
      const className = classNames.buttonUp
      const component = renderer.create(<ScrollButton className={className} direction={'DOWN'} onClick={() => {}} />)
      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
