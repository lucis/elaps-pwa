import React from 'react'
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
    <div className="flex flex-col">
      <VehicleInfo {...vehicle} />
      <OrdersSearchBar onTerm={onTerm} disabled={disabled} />
      <SearchInfo {...metadata} />
    </div>
  )
}

const VehicleInfo: FC<Props['vehicle']> = ({ model, lastOwner }) => {
  return (
    <div className="flex mt-2 text-center text-base justify-around bg-lightBlue p-6 flex-col sm:flex-row">
      <div>
        <b>Carro: </b>
        <span>{model}</span>
      </div>
      <div>
        <b>Último proprietário: </b>
        <span>{lastOwner}</span>
      </div>
    </div>
  )
}

const SearchInfo: FC<Props['metadata']> = ({ total, filtered }) => {
  return (
    <div className="flex justify-center mb-4">
      <div className="flex-col flex">
        <div className="text-lg text-center">{`${filtered} registros exibidos`}</div>
        <div className="text-base text-center">{`${total} registros encontrados`}</div>
      </div>
    </div>
  )
}

export default OrdersFacets
