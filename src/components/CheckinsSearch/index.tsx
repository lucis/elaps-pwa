import type { FC } from 'react'
import React from 'react'
import { styled } from 'linaria/react'

import LicensePlateInput from '../LicensePlateInput'
import { useCheckins } from '../../datalayer/checkins'
import CheckinsList from './List'

const CheckinsSearch: FC = () => {
  const { checkins, loading, searchForPlate, reset } = useCheckins()

  return (
    <Wrapper>
      <SearchLabel>Buscar por Placa</SearchLabel>
      <LicensePlateInput
        resetable
        onValidPlate={(plate) => (plate ? searchForPlate(plate) : reset())}
        mode="search"
      />
      <ListWrapper>
        <CheckinsList checkins={checkins} loading={loading} />
      </ListWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  align-items: center;
`

const ListWrapper = styled.div`
  width: 90%;
  margin-top: 15px;
`

const SearchLabel = styled.div`
  margin-top: 15px;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 10px;
`

export default CheckinsSearch
