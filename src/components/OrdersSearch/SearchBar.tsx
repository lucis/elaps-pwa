import { SearchOutlined } from '@ant-design/icons'
import { useDebouncedCallback } from 'use-debounce'
// import { Input } from 'antd'
import { styled } from 'linaria/react'
import type { FC } from 'react'
import React, { useCallback, useState } from 'react'

import Suggestions from './Suggestions'

type Props = {
  onTerm?: (a: string) => void
  disabled?: boolean
}

const OrdersSearchBar: FC<Props> = ({ onTerm, disabled }) => {
  const [term, setTerm] = useState('')
  const debounced = useDebouncedCallback(onTerm, 1000)

  const onChangeTerm = useCallback(
    (value: string) => {
      setTerm(value)
      debounced.callback(value)
    },
    [debounced, setTerm]
  )

  // TODO: Add autofocus and prefix on input, and allowClear

  return (
    <div className="flex justify-center my-3">
      <div className="flex flex-col">
        <div className="font-bold uppercase">Busque por peça ou serviço</div>
        <input
          className="h-10 bg-cinza p-3"
          disabled={disabled}
          value={term}
          onChange={(e) => onChangeTerm(e.target.value)}
          placeholder="ex: filtro"
        />
      </div>
      <Suggestions onTerm={(value) => onChangeTerm(value)} />
    </div>
  )
}

export default OrdersSearchBar
