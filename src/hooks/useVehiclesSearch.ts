import { useLazyQuery } from '@apollo/client'
import type { Query, QueryVehiclesArgs } from 'generated/graphql'
import { useCallback } from 'react'

import GET_VEHICLES from '../graphql/getVehicles.gql'

const useVehiclesSearch = () => {
  const [fetch, { loading, data, error }] = useLazyQuery<
    { vehicles: Query['vehicles'] },
    QueryVehiclesArgs
  >(GET_VEHICLES)

  const searchPlate = useCallback(
    (plate: string) => {
      fetch({
        variables: {
          data: {
            query: `plate=${plate}`,
          },
        },
      })
    },
    [fetch]
  )

  return { data, loading, error, searchPlate }
}

export default useVehiclesSearch
