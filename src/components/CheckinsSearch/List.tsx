import type { FC } from 'react'
import React from 'react'
import { styled } from 'linaria/react'

import type { Checkin } from '../../typings'
import Skeleton from './Skeleton'

type Props = {
  checkins: Checkin[]
  loading: boolean
}

const CheckinsList: FC<Props> = ({ checkins, loading }) => {
  return (
    <Wrapper>
      {loading ? (
        <Skeleton />
      ) : (
        checkins.map((checkin) => <CheckinItem checkin={checkin} />)
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  background-color: #fbfbfb;
  border: 1px solid #e1e1e1;
`

const CheckinItem: FC<{ checkin: Checkin }> = ({ checkin }) => {
  return <Item>{JSON.stringify(checkin)}</Item>
}

const Item = styled.div`
  border-bottm: 1px solid #e1e1e1;
`

export default CheckinsList
