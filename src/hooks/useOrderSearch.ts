import { useLazyQuery, gql } from '@apollo/client'
import { useCallback } from 'react'

const query = gql`
  query ordersSearch($data: QueryInput!) {
    orders(data: $data) {
      entities {
        id
        customerName
        km
        date
        items {
          name
        }
        itemsDescriptor
      }
    }
  }
`

const useOrderSearch = () => {
  const [getOrders, { loading, data, error }] = useLazyQuery(query)

  const searchPlate = useCallback(
    (plate: string) => {
      getOrders({
        variables: {
          data: {
            query: `plate=${plate}`,
          },
        },
      })
    },
    [getOrders]
  )

  return { data, loading, error, searchPlate }
}

export default useOrderSearch
