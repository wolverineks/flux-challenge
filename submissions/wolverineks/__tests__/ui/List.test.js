// @flow

import React from 'react'
import renderer from 'react-test-renderer'
import {List, Item, classNames} from '../../src/ui/'

describe('List', () => {
  describe('When has contents', () => {
    test('List', () => {
      const className = classNames.sith
      const content = <Item><div>test</div></Item>
      const component = renderer.create(<List className={className}>{content}</List>)
      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
