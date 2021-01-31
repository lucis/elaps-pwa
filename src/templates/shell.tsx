import React, { FC, useState } from 'react'
import type { RouteComponentProps } from '@reach/router'
import { Layout, Menu } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { styled } from 'linaria/react'

import logoSrc from '../images/laps-white.png'

const { Header, Content, Footer, Sider } = Layout

const AppShell: FC<RouteComponentProps> = ({ children }) => {
  const [collapsed, setCollapse] = useState(true)

  return (
    <Layout>
      <Sider
        style={{
          height: '100vh',
        }}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapse(value)}
      >
        <LogoWrapper>
          <img
            src={logoSrc}
            alt="Luciano Auto Peças e Serviços"
            style={{ width: '100%' }}
          />
          <Elaps>eLaps</Elaps>
        </LogoWrapper>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ overflow: 'initial' }}>{children}</Content>
        <Footer style={{ textAlign: 'center' }}>
          Sistema eLAPS ©2021 Por Lucis
        </Footer>
      </Layout>
    </Layout>
  )
}

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 15px;
`

const Elaps = styled.div`
  color: white;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  padding-top: 5px;
`

export default AppShell
