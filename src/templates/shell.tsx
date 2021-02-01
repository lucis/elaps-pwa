import type { FC } from 'react'
import React from 'react'
import type { RouteComponentProps } from '@reach/router'

import logoSrc from '../images/laps-white.png'

/**
 *
 * Antd broke everything on SSR. Don't know why and need to fix it til tomorrow
 */
const AppShell: FC<RouteComponentProps> = ({ children }) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center bg-primary py-4">
        <img
          src={logoSrc}
          alt="Luciano Auto Peças e Serviços"
          style={{ width: '100px' }}
        />
      </div>
      <div className="site-layout">
        <div style={{ overflow: 'initial' }}>{children}</div>
        <div className="bottom-2.5 fixed w-full pt-2 text-center">
          Sistema eLAPS ©2021 Por Lucis
        </div>
      </div>
    </div>
  )
}

export default AppShell
