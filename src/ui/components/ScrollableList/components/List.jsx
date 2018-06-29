// @flow

import React, {type ChildrenArray, type Element} from 'react'

import {classNames} from '../../..'
import Item from './Item'

type Props = {children: ChildrenArray<Element<typeof Item>>}
const List = ({children}: Props) =>
  <ul className={classNames.sithList}>
    {children}
  </ul>


export default List
