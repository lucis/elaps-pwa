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
      <div className="flex flex-col sm:flex-row mb-3">
        <VehicleInfo {...vehicle} />
        <OrdersSearchBar onTerm={onTerm} disabled={disabled} />
      </div>
      <SearchInfo {...metadata} />
    </div>
  )
}

const VehicleInfo: FC<Props['vehicle']> = ({ model, lastOwner }) => {
  return (
    <div className="w-full mr-0 sm:mr-3 sm:w-2/5 flex-col text-base justify-around border border-gray-200 border-solid p-6 mb-4 sm:mb-0">
      <div className="pb-3">
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
      <div className="flex text-gray-500">
        <div className="text-center mr-1">
          <b>Total: </b>
          {`${total} |`}
        </div>
        <div className="text-center">
          <b>Filtrados: </b>
          {filtered}
        </div>
      </div>
    </div>
  )
}

export default OrdersFacets
