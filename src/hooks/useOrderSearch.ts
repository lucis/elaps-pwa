import { useQuery, gql } from '@apollo/client'

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
  const { data, loading, error } = useQuery(query, {
    variables: {
      data: {},
    },
  })

  return { data, loading, error }
}

export default useOrderSearch
