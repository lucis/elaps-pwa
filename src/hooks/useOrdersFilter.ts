import { useCallback, useEffect, useState } from 'react'
import * as JsSearch from 'js-search'
import type { Order } from 'generated/graphql'

const useOrdersFilter = (orders: Order[]) => {
  const [filtered, setFiltered] = useState(orders)
  const [search, setSearch] = useState<JsSearch.Search | null>(null)

  useEffect(() => {
    const searchTool = new JsSearch.Search('id')

    searchTool.addIndex('itemsDescriptor')
    setSearch(searchTool)
  }, [orders, setSearch])

  const filter = useCallback(
    (term: string) => {
      const result = search.search(term) as Order[]

      setFiltered(result)
    },
    [setFiltered, search]
  )

  const reset = useCallback(() => {
    setFiltered(orders)
  }, [orders, setFiltered])

  return {
    filtered,
    filter,
    reset,
  }
}

export default useOrdersFilter
