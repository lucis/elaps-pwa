import { useCallback, useEffect, useState } from 'react'
import * as JsSearch from 'js-search'

import type { Order } from '../generated/graphql'
import { removeAccents } from '../utils'

const useOrdersFilter = (orders: Order[]) => {
  const [filtered, setFiltered] = useState(orders)
  const [search, setSearch] = useState<JsSearch.Search | null>(null)

  useEffect(() => {
    const searchTool = new JsSearch.Search('id')

    searchTool.addIndex('itemsDescriptor')
    searchTool.addDocuments(orders)
    searchTool.sanitizer = new OrderSanitizer()
    setSearch(searchTool)
  }, [orders, setSearch])

  const filter = useCallback(
    (term: string) => {
      if (!term) {
        setFiltered(orders)

        return
      }

      const result = search.search(term) as Order[]

      setFiltered(result)
    },
    [setFiltered, search, orders]
  )

  return {
    filtered,
    filter,
  }
}

class OrderSanitizer implements JsSearch.ISanitizer {
  public sanitize(text: string): string {
    const noAccents = text ? removeAccents(text) : ''
    const lowercase = noAccents ? noAccents.toLocaleLowerCase().trim() : ''

    return lowercase
  }
}

export default useOrdersFilter
