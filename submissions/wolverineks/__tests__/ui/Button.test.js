// @flow

import React from 'react'
import renderer from 'react-test-renderer'
import {Button, classNames} from '../../src/ui/SithDashboard'

describe('Button', () => {
  describe('When up button', () => {
    test('Button', () => {
      const className = classNames.buttonUp
      const component = renderer.create(<Button className={className} />)
      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
