import type { FC } from 'react'
import React from 'react'
import { styled } from 'linaria/react'

import LicensePlateInput from '../LicensePlateInput'
import { useCheckins } from '../../datalayer/checkins'
import CheckinsList from './List'

const CheckinsSearch: FC = () => {
  const { checkins, loading } = useCheckins()

  return (
    <Wrapper>
      <LicensePlateInput onValidPlate={console.log} mode="search" />
      <ListWrapper>
        <CheckinsList checkins={checkins} loading={loading} />
      </ListWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ListWrapper = styled.div`
  width: 90%;
  margin-top: 15px;
`

export default CheckinsSearch
