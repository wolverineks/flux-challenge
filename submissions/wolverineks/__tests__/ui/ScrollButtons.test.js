// @flow

import React from 'react'
import renderer from 'react-test-renderer'
import {ScrollButtons, Button, classNames} from '../../src/ui/SithDashboard'

describe('ScrollButtons', () => {
  describe('When has buttons', () => {
    test('ScrollButtons', () => {
      const className = classNames.scrollButtons
      const component = renderer.create(<ScrollButtons className={className}>
        <Button direction={'UP'} />
        <Button direction={'DOWN'} />
      </ScrollButtons>)
      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
