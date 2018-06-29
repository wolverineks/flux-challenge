// @flow

import React, {type ChildrenArray, type Element} from 'react'

import ScrollButton from './ScrollButton.jsx'
import {classNames} from '../../..'

type Props = {children: ChildrenArray<Element<typeof ScrollButton>>}
const ScrollButtons = ({children}: Props) =>
  <div className={classNames.scrollButtons}>
    {children}
  </div>

export default ScrollButtons
