import { useDebouncedCallback } from 'use-debounce'
import { Input } from 'antd'
import type { FC } from 'react'
import React, { useCallback, useState } from 'react'
import { SearchOutlined } from '@ant-design/icons'

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
    <div className="flex flex-col items-start justify-between">
      <div className="font-bold uppercase">Busque por peça ou serviço</div>
      <Input
        allowClear
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus
        prefix={<SearchOutlined />}
        size="large"
        value={term}
        onChange={(e) => onChangeTerm(e.target.value)}
        disabled={disabled}
        placeholder="ex: bomba"
      />
      <Suggestions onTerm={(value) => onChangeTerm(value)} />
    </div>
  )
}

export default OrdersSearchBar
