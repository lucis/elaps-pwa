import { useCallback, useEffect, useState } from 'react'
import * as JsSearch from 'js-search'

import type { Order } from '../generated/graphql'
import { removeAccents } from '../utils'

const useOrdersFilter = (orders: Order[]) => {
  const [filtered, setFiltered] = useState(orders)
  const [search, setSearch] = useState<JsSearch.Search | null>(null)
  const [
    highlighter,
    setHighlighter,
  ] = useState<JsSearch.TokenHighlighter | null>(null)

  useEffect(() => {
    const searchTool = new JsSearch.Search('id')

    searchTool.sanitizer = new OrderSanitizer()
    searchTool.addIndex('itemsDescriptor')
    searchTool.addDocuments(orders)
    setSearch(searchTool)

    const tokenHighlighter = new JsSearch.TokenHighlighter(
      new JsSearch.PrefixIndexStrategy(),
      new OrderSanitizer(),
      'b'
    )

    setHighlighter(tokenHighlighter)
  }, [orders, setSearch])

  const filter = useCallback(
    (term: string) => {
      if (!term) {
        setFiltered(orders)

        return
      }

      const result = search.search(term) as Order[]

      setFiltered(
        result
          .map(({ itemsDescriptor, ...rest }) => ({
            itemsDescriptor: highlighter.highlight(itemsDescriptor, [term]),
            ...rest,
          }))
          .sort(({ id: idA }, { id: idB }) => idB - idA)
      )
    },
    [setFiltered, search, orders, highlighter]
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
