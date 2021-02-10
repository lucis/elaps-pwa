import React, { useMemo } from 'react'
import type { FC } from 'react'

import { relativeFromNow } from '../../utils'
import type { Order } from '../../generated/graphql'

type Props = {
  orders: Order[]
  onSelect: (order: Order) => void
}

const OrdersList: FC<Props> = ({ orders, onSelect }) => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      {orders.map((order) => (
        <OrderListItem
          order={order}
          key={order.id}
          onClick={() => onSelect(order)}
        />
      ))}
    </div>
  )
}

const OrderListItem: FC<{ order: Order; onClick: () => void }> = ({
  order,
  onClick,
}) => {
  const timeLabel = useMemo(() => {
    const date = new Date(order.date)

    return `há ${relativeFromNow(date)} atrás`
  }, [order])

  return (
    <div
      onClick={() => onClick()}
      onKeyDown={() => onClick()}
      tabIndex={0}
      role="button"
      className="bg-cinza flex flex-col sm:flex-row justify-between mb-4 w-full p-4 sm:p-5 shadow-md cursor-pointer hover:shadow-lg"
    >
      <div className="flex flex-col w-8/12">
        <div className="flex items-center w-100 justify-between sm:justify-start">
          <div className="text-primary font-bold text-lg">{timeLabel}</div>
          <div className="text-base text-primary px-0 sm:px-3">{`${order.km}km`}</div>
        </div>
        <div className="flex items-center">
          <span
            className="text-base"
            dangerouslySetInnerHTML={{ __html: order.itemsDescriptor }}
          />
        </div>
      </div>
      <div className="flex flex-row sm:flex-col justify-between items-end mt-2 sm:mt-0">
        <div className="text-base text-gray-500 px-0 sm:px-3">
          {order.customer.name}
        </div>
        <div className="text-base text-gray-500 px-0 sm:px-3">{`${order.items.length} itens`}</div>
      </div>
    </div>
  )
}

export default OrdersList
