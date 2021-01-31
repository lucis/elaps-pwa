import React, { useMemo } from 'react'
import type { FC } from 'react'
import { styled } from 'linaria/react'

import type { Order } from '../../generated/graphql'
import OrdersList from './OrdersList'
import OrdersFacets from './Facets'
import useOrdersFilter from '../../hooks/useOrdersFilter'

const OrdersSearch: FC<{ orders: Order[] }> = ({ orders }) => {
  const { filtered, filter } = useOrdersFilter(orders)

  const vehicle = useMemo(() => {
    const [order] = orders

    return {
      model: order.vehicle?.model,
      lastOwner: order.customer?.name,
    }
  }, [orders])

  return (
    <Wrapper>
      <OrdersFacets
        metadata={{ total: orders?.length, filtered: filtered?.length }}
        vehicle={vehicle}
        onTerm={filter}
      />
      <OrdersList orders={filtered} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 70%;
`

export default OrdersSearch
