// @flow

import React from 'react'
import renderer from 'react-test-renderer'
import {ScrollButtons, ScrollButton, classNames} from '../../src/ui/'

describe('ScrollButtons', () => {
  describe('When has buttons', () => {
    test('ScrollButtons', () => {
      const className = classNames.scrollButtons
      const component = renderer.create(<ScrollButtons className={className}>
        <ScrollButton direction={'UP'} onClick={() => {}} />
        <ScrollButton direction={'DOWN'} onClick={() => {}} />
      </ScrollButtons>)
      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
