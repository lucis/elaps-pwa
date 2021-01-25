import type { FC } from 'react'
import React from 'react'
import { styled } from 'linaria/react'

import useOrderSearch from '../../hooks/useOrderSearch'
import OrdersList from './OrdersList'

const OrdersSearch: FC = () => {
  const { data, loading } = useOrderSearch()

  return (
    <Wrapper>
      {!loading && <OrdersList orders={data.orders.entities} />}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 70%;
`

export default OrdersSearch
