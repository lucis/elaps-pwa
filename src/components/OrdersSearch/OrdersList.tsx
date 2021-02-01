import React, { useMemo } from 'react'
import type { FC } from 'react'

import type { Order } from '../../generated/graphql'

type Props = { orders: Order[] }

const OrdersList: FC<Props> = ({ orders }) => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      {orders.map((order) => (
        <OrderListItem order={order} key={order.id} />
      ))}
    </div>
  )
}

const OrderListItem: FC<{ order: Order }> = ({ order }) => {
  const timeLabel = useMemo(() => {
    const date = new Date(order.date)

    return Intl.DateTimeFormat('pt-BR', {
      dateStyle: 'short',
    }).format(date)
  }, [order])

  return (
    <div className="bg-cinza flex justify-between mb-4 w-full p-5">
      <div className="flex flex-col">
        <div className="flex items-center">
          <div className="text-gray-500 font-bold text-lg">{timeLabel}</div>
          <div className="text-base text-gray-500 px-3">{`${order.km}km`}</div>
          <div className="text-base text-gray-500 px-3">
            {order.customer.name}
          </div>
          <div className="text-base text-gray-500 px-3">{`${order.items.length} itens`}</div>
        </div>
        <div className="flex items-center">
          <span className="text-base">{order.itemsDescriptor}</span>
        </div>
      </div>
    </div>
  )
}

export default OrdersList
