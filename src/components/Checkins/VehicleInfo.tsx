import type { FC } from 'react'
import React from 'react'

import type { Vehicle } from '../../generated/graphql'

type Props = {
  vehicle: Vehicle
}

const VehicleInfo: FC<Props> = ({ vehicle }) => {
  const {
    model,
    owner: { name },
  } = vehicle

  return (
    <div className="w-11/12 sm:w-5/12 flex flex-col p-4 my-2 bg-gray-100">
      <span className="font-bold">Modelo:</span>
      <span className="pb-1">{model}</span>
      <span className="font-bold">Último Proprietário:</span>
      <span className="pb-1">{name}</span>
    </div>
  )
}

export default VehicleInfo
