import { styled } from 'linaria/react'
import React, { FC } from 'react'
import OrdersSearchBar from './SearchBar'

type Props = {
  onTerm?: (term: string) => void
  disabled?: boolean
  vehicle: {
    model: string
    lastOwner: string
  }
  metadata: {
    total: number
    filtered: number
  }
}

const OrdersFacets: FC<Props> = ({ onTerm, disabled, vehicle }) => {
  return (
    <Wrapper>
      <VehicleInfo {...vehicle} />
      <OrdersSearchBar />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const VehicleInfo: FC<Props['vehicle']> = ({ model, lastOwner }) => {
  return (
    <Line>
      <b>Carro: </b>
      <span>{model}</span>
      <span> - </span>
      <b>Último proprietário: </b>
      <span>{lastOwner}</span>
    </Line>
  )
}

const Line = styled.p`
  text-align: center;
  font-size: 16px;
  margin: 10px 0;
`

export default OrdersFacets
