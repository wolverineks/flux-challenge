// @flow

import React, {type ChildrenArray, type Element} from 'react'

import Button from './Button.jsx'
import {classNames} from '../../..'

type Props = {children: ChildrenArray<Element<typeof Button>>}
const ScrollButtons = ({children}: Props) =>
  <div className={classNames.scrollButtons}>
    {children}
  </div>

export default ScrollButtons
