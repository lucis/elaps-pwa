import { useCallback } from 'react'

import { usePlateSearchLazyQuery } from '../generated/graphql'

const usePlateSearch = () => {
  const [getData, { loading, data, error }] = usePlateSearchLazyQuery()

  const searchPlate = useCallback(
    (plate: string) => {
      getData({
        variables: {
          data: {
            query: `plate=${plate}`,
          },
        },
      })
    },
    [getData]
  )

  return { data, loading, error, searchPlate }
}

export default usePlateSearch
