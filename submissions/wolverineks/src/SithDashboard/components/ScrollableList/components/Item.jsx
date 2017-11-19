// SithDashboard/components/ScrollableList/components/Iem.jsx
// @flow

import React, {type ChildrenArray, type Element, Component} from 'react'

import {classNames} from '../../../styles'

type Props = {children: ChildrenArray<Element<any>>}
type State = {}

export default class Item extends Component<Props, State> {
  render () {
    const {children} = this.props
    return <li className={classNames.sith}>
      {React.Children.only(children)}
    </li>
  }
}
