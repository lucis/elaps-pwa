import React, { useMemo, useState } from 'react'
import type { FC } from 'react'
import { Modal } from 'antd'

import type { Order } from '../../generated/graphql'
import OrdersList from './OrdersList'
import OrdersFacets from './Facets'
import useOrdersFilter from '../../hooks/useOrdersFilter'
import OrderDetail from '../orders/OrderDetail'

const OrdersSearch: FC<{ orders: Order[] }> = ({ orders }) => {
  const { filtered, filter } = useOrdersFilter(orders)
  const [selectedOrder, setOrder] = useState<Order | null>(null)

  const vehicle = useMemo(() => {
    const [order] = orders

    return {
      model: order.vehicle?.model,
      lastOwner: order.customer?.name,
    }
  }, [orders])

  return (
    <div className="w-11/12 sm:w-9/12">
      <OrdersFacets
        metadata={{ total: orders?.length, filtered: filtered?.length }}
        vehicle={vehicle}
        onTerm={filter}
      />
      <OrdersList orders={filtered} onSelect={setOrder} />
      <Modal
        visible={!!selectedOrder}
        destroyOnClose
        footer={null}
        onCancel={() => setOrder(null)}
      >
        <OrderDetail order={selectedOrder} />
      </Modal>
    </div>
  )
}

export default OrdersSearch
