import type { FC } from 'react'
import React, { useMemo, useRef, useEffect } from 'react'
import { styled } from 'linaria/react'

import useVideoRecorder from '../../hooks/useVideoRecorder'
import RecorderControls from './Controls'
import RecorderPlayer from './Player'

type Props = {
  onFinish: (blob: Blob) => void
}

const VistoriaRecorder: FC<Props> = ({ onFinish }) => {
  const {
    stream,
    startRecording,
    stopRecording,
    blob,
    blobDuration,
    isRecording,
    timerString,
  } = useVideoRecorder()

  const { blobUrl, blobSize } = useMemo(() => {
    if (!blob) return {}

    return {
      blobUrl: URL.createObjectURL(blob),
      blobSize: `${Math.floor(blob.size / 1000)} kb`,
    }
  }, [blob])

  useEffect(() => {
    if (blob) {
      onFinish(blob)
    }
  }, [blob, onFinish])

  return (
    <RecorderWrapper>
      <RecorderPlayer
        isRecording={isRecording}
        blobUrl={blobUrl}
        stream={stream}
      />
      <RecorderControls
        isRecording={isRecording}
        currentDuration={timerString}
        recordedDuration={blobDuration}
        blobSize={blobSize}
        onRecord={startRecording}
        onStop={stopRecording}
        onRetake={startRecording}
      />
    </RecorderWrapper>
  )
}

const VideoPlayer: FC<{ stream: MediaStream }> = ({ stream }) => {
  const videoRef = useRef<HTMLVideoElement>()

  useEffect(() => {
    const videoObj = videoRef.current

    videoObj.srcObject = stream
  }, [stream])

  return <video autoPlay muted ref={videoRef} />
}

const RecorderWrapper = styled.div`
  display: flex;
  margin: 5px 0;
`

export default VistoriaRecorder
