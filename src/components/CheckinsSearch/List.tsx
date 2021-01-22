import type { FC } from 'react'
import React, { useMemo } from 'react'
import { styled } from 'linaria/react'

import VideoIcon from '../ui/VideoIcon'
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
        checkins.map((checkin) => (
          <CheckinItem checkin={checkin} key={checkin.time} />
        ))
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
  const timeLabel = useMemo(() => {
    const date = new Date(checkin.time)

    return Intl.DateTimeFormat('pt-BR', {
      dateStyle: 'short',
      timeStyle: 'short',
    }).format(date)
  }, [checkin])

  return (
    <Item>
      <FirstColumn>
        <CarLabel>{checkin?.carLabel ?? '(veículo não identificado)'}</CarLabel>
        <Line>
          <CarPlate>{checkin.plate}</CarPlate>
          <Timestamp>{timeLabel}</Timestamp>
        </Line>
      </FirstColumn>
      <ThirdColumn>
        <VideoButton
          onClick={() => {
            window.open(checkin.videoURL, '_blank')
          }}
        >
          <VideoIcon size="19" />
        </VideoButton>
      </ThirdColumn>
    </Item>
  )
}

const Item = styled.div`
  border-bottom: 1px solid #e1e1e1;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
`

const FirstColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const CarLabel = styled.span`
  font-size: 16px;
  font-weight: bold;
`

const CarPlate = styled.span`
  font-size: 16px;
`

const Line = styled.div`
  display: flex;
  justify-content: space-between;
`

const Timestamp = styled.span`
  font-size: 14px;
  color: #747171;
`

const ThirdColumn = styled.div`
  display: flex;
  justify-content: center;
`

const VideoButton = styled.button`
  background: transparent;
  border: 0;
  padding: 8px;
  margin-left: 15px;
  &: hover {
    background: #eee;
  }
`

export default CheckinsList
