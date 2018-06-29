// @flow

import React from 'react'
import renderer from 'react-test-renderer'
import {Layout} from '.'

describe('Layout', () => {
  test('Layout', () => {
    const component = renderer.create(<Layout />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
