import type { FC } from 'react'
import React from 'react'
import { Link, navigate } from 'gatsby'
import type { RouteComponentProps } from '@reach/router'
import { Button, Menu, Dropdown } from 'antd'
import { BarsOutlined, UserOutlined } from '@ant-design/icons'

import logoSrc from '../images/laps-white.png'

const UserMenu = (
  <Menu>
    <Menu.Item key="0">
      <Link to="/app/settings">Configurações</Link>
    </Menu.Item>
    <Menu.Item key="1">
      <Link to="/app/logout">Sair</Link>
    </Menu.Item>
  </Menu>
)

/**
 *
 * Antd broke everything on SSR. Don't know why and need to fix it til tomorrow
 */
const AppShell: FC<RouteComponentProps> = ({ children }) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center bg-primary py-4">
        <Button
          onClick={() => {
            navigate('/app/home')
          }}
          icon={<BarsOutlined size={29} />}
          className="pb-3 ml-1 sm:ml-3"
          size="large"
          type="primary"
        />
        <img
          src={logoSrc}
          alt="Luciano Auto Peças e Serviços"
          style={{ width: '100px' }}
        />
        <Dropdown overlay={UserMenu} trigger={['click']}>
          <Button
            onClick={(e) => e.preventDefault()}
            icon={<UserOutlined />}
            size="large"
            type="primary"
            className="mr-1 sm:mr-3"
          />
        </Dropdown>
      </div>
      <div className="">
        <div style={{ overflow: 'initial' }}>{children}</div>
        <div className="bg-white py-3 fixed w-full text-center bottom-0 shadow">
          Sistema eLAPS ©2021 Por Lucis
        </div>
      </div>
    </div>
  )
}

export default AppShell
