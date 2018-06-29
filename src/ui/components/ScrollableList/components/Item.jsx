// @flow

import React, {type ChildrenArray, type Element} from 'react'

import {classNames} from '../../..'

type Props = {children: ChildrenArray<Element<any>>}
const Item = ({children}: Props) =>
  <li className={classNames.sith}>
    {React.Children.only(children)}
  </li>

export default Item
