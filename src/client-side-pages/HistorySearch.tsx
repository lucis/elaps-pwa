import type { FC } from 'react'
import React, { useCallback, useState } from 'react'
import type { RouteComponentProps } from '@reach/router'
import { styled } from 'linaria/react'

import LicensePlateInput from '../components/LicensePlateInput'
import OrdersSearch from '../components/OrdersSearch'
import useOrderSearch from '../hooks/useOrderSearch'

const HistorySearchPage: FC<RouteComponentProps> = () => {
  const { searchPlate, data, loading, error } = useOrderSearch()
  const [isSet, set] = useState(false)

  const onPlate = useCallback(
    (plate: string) => {
      searchPlate(plate)
      set(true)
    },
    [searchPlate]
  )

  return (
    <div className="flex flex-col">
      <div className="py-4 bg-cinza text-center font-bold text-xl">
        Histórico de Veículos
      </div>
      <div className="flex flex-col items-center pt-5 w-full">
        <LicensePlateInput
          resetable
          loading={loading}
          onValidPlate={(plate) => (plate ? onPlate(plate) : set(false))}
        />
        <Line />
        {isSet &&
          (!loading && data?.orders?.entities?.length ? (
            <OrdersSearch orders={data.orders.entities} />
          ) : loading ? (
            'Carregando..'
          ) : (
            'Nenhum registro encontrado'
          ))}
      </div>
    </div>
  )
}

const Line = styled.hr`
  border: 0;
  border-top: 1px solid #e1e1e1;
  margin: 20px 0;
  width: 100%;
`

export default HistorySearchPage
