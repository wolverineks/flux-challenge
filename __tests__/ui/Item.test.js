// @flow

import React from 'react'
import renderer from 'react-test-renderer'
import {Item, classNames} from '../../src/ui'

describe('Item', () => {
  describe('When has contents', () => {
    test('Item', () => {
      const className = classNames.sith
      const content = <div>test</div>
      const component = renderer.create(<Item className={className}>{content}</Item>)
      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
