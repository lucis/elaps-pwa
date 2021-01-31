import { styled } from 'linaria/react'
import React  from 'react'
import type { FC } from 'react'

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

const OrdersFacets: FC<Props> = ({ onTerm, disabled, vehicle, metadata }) => {
  return (
    <Wrapper>
      <VehicleInfo {...vehicle} />
      <OrdersSearchBar onTerm={onTerm} disabled={disabled} />
      <SearchInfo {...metadata} />
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

const SearchInfo: FC<Props['metadata']> = ({ total, filtered }) => {
  return (
    <Centered>
      <Column>
        <Filtered>{`${filtered} registros exibidos`}</Filtered>
        <Total>{`${total} registros encontrados`}</Total>
      </Column>
    </Centered>
  )
}

const Centered = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
`

const Filtered = styled.span`
  font-size: 18px;
  text-align: center;
`

const Total = styled.span`
  font-size: 16px;
  text-align: center;
`

const Line = styled.p`
  text-align: center;
  font-size: 16px;
  margin: 10px 0;
`

export default OrdersFacets
