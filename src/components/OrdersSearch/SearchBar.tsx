import { SearchOutlined } from '@ant-design/icons'
import { useDebouncedCallback } from 'use-debounce'
import { Input } from 'antd'
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

  return (
    <Wrapper>
      <SearchColumn>
        <Label>Busque por peça ou serviço</Label>
        <SearchInput
          disabled={disabled}
          allowClear
          value={term}
          onChange={(e) => onChangeTerm(e.target.value)}
          placeholder="ex: filtro"
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus
          size="large"
          prefix={<SearchOutlined />}
        />
      </SearchColumn>
      <Suggestions onTerm={(value) => onChangeTerm(value)} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px 0 20px 0;
`

const SearchColumn = styled.div`
  display: flex;
  flex-direction: column;
`

const BarLine = styled.div`
  display: flex;
`

const Tags = styled.div`
  margin-left: 15px;
`

const Label = styled.label`
  text-transform: uppercase;
  font-weight: bold;
`

const SearchInput = styled(Input)`
  min-width: 200px;
`

export default OrdersSearchBar
