// @flow

import React from 'react'
import renderer from 'react-test-renderer'
import {expect} from 'chai'
import {shallow} from 'enzyme'
import sinon from 'sinon'

import ScrollButton from './ScrollButton'

describe('ScrollButton', () => {
  test('calls onClick when pressed', () => {
    const onClick = sinon.spy()
    const wrapper = shallow(
      <ScrollButton direction={'UP'} onClick={onClick} />
    )
    const button = wrapper.find('button')

    expect(button.length).to.equal(1)

    button.simulate('click')

    expect(onClick.calledOnce).to.equal(true)
  })
})



// // @flow
//
// import React from 'react'
//
// import {ScrollButton, classNames} from '../../src/ui/Dashboard'
//
// describe('ScrollButton', () => {
//   describe('When up button', () => {
//     test('ScrollButton', () => {
//
//
//       expect(result.type).toBe('div')
//       expect(result.props.children).toEqual([
//         <span className='heading'>Title</span>,
//         <Subcomponent foo='bar' />
//       ])
//
//       const className = classNames.buttonUp
//       const component = renderer.create(<ScrollButton className={className} />)
//       const tree = component.toJSON()
//       expect(tree).toMatchSnapshot()
//     })
//   })
// })
