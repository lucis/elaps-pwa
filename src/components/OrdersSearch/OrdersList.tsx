import React, { useMemo } from 'react'
import type { FC } from 'react'
import { styled } from 'linaria/react'

import Button from '../../components/ui/Button'

type Order = {
  id: string
  customerName: string
  km: number
  date: string
  itemsDescriptor: string
  items: Array<{
    name: string
  }>
}

type Props = { orders: Order[] }

const OrdersList: FC<Props> = ({ orders }) => {
  return (
    <List>
      {orders.map((order) => (
        <OrderListItem order={order} key={order.id} />
      ))}
    </List>
  )
}

const OrderListItem: FC<{ order: Order }> = ({ order }) => {
  const timeLabel = useMemo(() => {
    const date = new Date(parseInt(order.date, 10))

    return Intl.DateTimeFormat('pt-BR', {
      dateStyle: 'short',
    }).format(date)
  }, [order])

  return (
    <OrderItem>
      <Metadata>
        <Line>
          <OrderDate>{timeLabel}</OrderDate>
          <OrderField>{`${order.km}km`}</OrderField>
          <OrderField>{order.customerName}</OrderField>
          <OrderField>{`${order.items.length} itens`}</OrderField>
        </Line>
        <Line>
          <ItemsDescriptor>{order.itemsDescriptor}</ItemsDescriptor>
        </Line>
      </Metadata>
      <Column>
        <Button color="blue">Ver Completo</Button>
      </Column>
    </OrderItem>
  )
}

const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const ItemsDescriptor = styled.span`
  font-size: 18px;
`

const Line = styled.div`
  display: flex;
  align-items: center;
`

const OrderField = styled.span`
  font-size: 18px;
  color: #717171;
  padding: 0 10px;
`

const OrderDate = styled.span`
  color: #717171;
  font-weight: bold;
  font-size: 24px;
`

const OrderItem = styled.div`
  background-color: #f4f4f4;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  width: 100%;
  padding: 15px;
`

const Column = styled.div`
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Metadata = styled.div`
  display: flex;
  flex-direction: column;
`

export default OrdersList
