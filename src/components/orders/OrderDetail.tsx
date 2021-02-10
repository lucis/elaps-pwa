import React, { useMemo, Fragment } from 'react'
import type { FC } from 'react'
import { Descriptions } from 'antd'

import type { Order } from '../../generated/graphql'

const OrderDetail: FC<{ order: Order }> = ({ order }) => {
  const timeLabel = useMemo(() => {
    const date = new Date(order.date)

    return Intl.DateTimeFormat('pt-BR', {
      dateStyle: 'short',
    }).format(date)
  }, [order])

  return (
    <div className="flex pa-2 ma-3">
      <Descriptions
        bordered
        title={`Venda nº ${order.id}`}
        size="small"
        column={{ xs: 1, sm: 1 }}
      >
        <Descriptions.Item label="Data">{timeLabel}</Descriptions.Item>
        <Descriptions.Item label="Nome do Cliente">
          {order.customer.name}
        </Descriptions.Item>
        <Descriptions.Item label="Kilometragem">{order.km}</Descriptions.Item>
        <Descriptions.Item label="Placa do Carro">
          {order.vehicle.plate}
        </Descriptions.Item>
        <Descriptions.Item label="Itens">
          {order.items.map(({ name, qty }, i) => (
            <Fragment key={i}>
              <span>{`${parseInt(`${qty || 0}`, 10)} x ${name}`}</span>
              <br />
            </Fragment>
          ))}
        </Descriptions.Item>
      </Descriptions>
    </div>
  )
}

export default OrderDetail
