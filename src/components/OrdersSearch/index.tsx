import React, { useMemo } from 'react'
import type { FC } from 'react'
import { styled } from 'linaria/react'

import type { Order } from '../../generated/graphql'
import OrdersList from './OrdersList'
import OrdersFacets from './Facets'
import useOrdersFilter from '../../hooks/useOrdersFilter'

const OrdersSearch: FC<{ orders: Order[] }> = ({ orders }) => {
  const { filtered, filter, reset } = useOrdersFilter(orders)

  const vehicle = useMemo(() => {
    const [order] = orders

    return {
      model: order.customerName,
      lastOwner: order.customerName,
    }
  }, [orders])

  return (
    <Wrapper>
      <OrdersFacets
        metadata={{ total: orders?.length, filtered: filtered?.length }}
        vehicle={vehicle}
        onTerm={filter}
        onReset={reset}
      />
      <OrdersList orders={orders} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 70%;
`

export default OrdersSearch
