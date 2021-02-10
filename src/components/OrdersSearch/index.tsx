import React, { useMemo, useState, Suspense } from 'react'
import type { FC } from 'react'

import type { Order } from '../../generated/graphql'
import OrdersList from './OrdersList'
import OrdersFacets from './Facets'
import useOrdersFilter from '../../hooks/useOrdersFilter'
import OrderDetail from '../orders/OrderDetail'

function lazyImport<
  T extends React.ComponentType<any>,
  I extends { [K2 in K]: T },
  K extends keyof I
>(factory: () => Promise<I>, name: K): I {
  return Object.create({
    [name]: React.lazy(() =>
      factory().then((module) => ({ default: module[name] }))
    ),
  })
}

const { Modal } = lazyImport(() => import('antd'), 'Modal')

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
      <Suspense fallback={null}>
        <Modal
          visible={!!selectedOrder}
          destroyOnClose
          footer={null}
          onCancel={() => setOrder(null)}
        >
          <OrderDetail order={selectedOrder} />
        </Modal>
      </Suspense>
    </div>
  )
}

export default OrdersSearch
