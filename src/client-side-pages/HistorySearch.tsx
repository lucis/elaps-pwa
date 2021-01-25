import type { FC } from 'react'
import React from 'react'
import type { RouteComponentProps } from '@reach/router'
import { Layout } from 'antd'
import { styled } from 'linaria/react'

import LicensePlateInput from '../components/LicensePlateInput'
import OrdersSearch from '../components/OrdersSearch'
import OrdersFacets from '../components/OrdersSearch/Facets'

const { Header } = Layout

const HistorySearchPage: FC<RouteComponentProps> = () => {
  return (
    <Layout>
      <GreyHeader>Histório de Veículos</GreyHeader>
      <ContentWithPadding>
        <OrdersFacets
          metadata={{ total: 10, filtered: 10 }}
          vehicle={{ model: 'L200 1994', lastOwner: 'Luciano de Oliveira' }}
        />
        <LicensePlateInput onValidPlate={(plate) => console.log(plate)} />
        <OrdersSearch />
      </ContentWithPadding>
    </Layout>
  )
}

const GreyHeader = styled(Header)`
  background-color: #f4f4f4;
  text-align: center;
  font-weight: bold;
  font-size: 22px;
`

const ContentWithPadding = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15px;
  width: 100%;
`

export default HistorySearchPage
