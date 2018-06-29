// @flow

import React from 'react'

import {classNames, type Children} from '.'

type Props = {children?: Children}
const Layout = ({children}: Props) =>
  <div className={classNames.main}>
    <div className={classNames.mainInner}>
      {children}
    </div>
  </div>

export default Layout
