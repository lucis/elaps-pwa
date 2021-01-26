import { FC, useCallback } from 'react'
import React from 'react'
import type { RouteComponentProps } from '@reach/router'
import { Layout } from 'antd'
import { styled } from 'linaria/react'

import LicensePlateInput from '../components/LicensePlateInput'
import OrdersSearch from '../components/OrdersSearch'
import useOrderSearch from '../hooks/useOrderSearch'

const { Header } = Layout

const HistorySearchPage: FC<RouteComponentProps> = () => {
  const { searchPlate, data, loading, error } = useOrderSearch()

  return (
    <Layout>
      <GreyHeader>Histório de Veículos</GreyHeader>
      <ContentWithPadding>
        <LicensePlateInput
          loading={loading}
          onValidPlate={(plate) => searchPlate(plate)}
        />
        <Line />
        {data?.orders?.entities?.length && (
          <OrdersSearch orders={data.orders.entities} />
        )}
      </ContentWithPadding>
    </Layout>
  )
}

const Line = styled.hr`
  border: 0;
  border-top: 1px solid #e1e1e1;
  margin: 20px 0;
  width: 100%;
`

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
