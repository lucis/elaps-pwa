import type { FC } from 'react'
import React from 'react'
import { styled } from 'linaria/react'

import RecordIcon from './RecordIcon'
import CheckIcon from './CheckIcon'

type Props = {
  isRecording: boolean
  currentDuration: string
  recordedDuration?: string
  blobSize: number
  onRecord: () => void
  onRetake: () => void
  onStop: () => void
}

const RecorderControls: FC<Props> = ({
  isRecording,
  currentDuration = '00:00',
  recordedDuration,
  onRecord,
  onRetake,
  onStop,
  blobSize,
}) => {
  const size = `${blobSize}`

  return (
    <Wrapper>
      <MinSize>
        <Label>Tempo</Label>
        <TimeValue>
          <Value>{recordedDuration || currentDuration}</Value>
          {isRecording && <RecordIcon />}
          {recordedDuration && <CheckIcon />}
        </TimeValue>
        {recordedDuration && (
          <>
            <Label>Tamanho</Label>
            <Value>{size}</Value>
          </>
        )}
      </MinSize>
      {!isRecording && recordedDuration && (
        <button onClick={onRetake}>Regravar</button>
      )}
      {!isRecording && !recordedDuration && (
        <button onClick={onRecord}>Gravar</button>
      )}
      {isRecording && <button onClick={onStop}>Parar</button>}
    </Wrapper>
  )
}

const Label = styled.span`
  font-weight: bold;
`

const Value = styled.span`
  font-size: 16px;
  min-width: 45px;
`

const MinSize = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100px;
  padding-bottom: 10px;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 15px;
  flex: 1;
`

const TimeValue = styled.div`
  display: flex;
  align-items: center;
`

export default RecorderControls
