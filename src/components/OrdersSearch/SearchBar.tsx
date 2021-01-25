import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import { styled } from 'linaria/react'
import React, { FC } from 'react'

type Props = { onTerm?: (a: string) => void }
const OrdersSearchBar: FC<Props> = ({ onTerm }) => {
  return (
    <Wrapper>
      <SearchColumn>
        <Label>Busque por peça ou serviço</Label>
        <SearchInput
          placeholder="digite placa"
          autoFocus
          size="large"
          prefix={<SearchOutlined />}
        />
      </SearchColumn>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
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
