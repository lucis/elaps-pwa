import type { FC } from 'react'
import React, { useCallback, useMemo, useRef, useEffect } from 'react'
import { styled } from 'linaria/react'

import useVideoRecorder from '../hooks/useVideoRecorder'

type Props = {
  onFinish: () => void
}

const VistoriaRecorder: FC<Props> = ({ onFinish }) => {
  const {
    stream,
    startRecording,
    stopRecording,
    blob,
    isRecording,
    timerString,
  } = useVideoRecorder()

  const blobUrl = useMemo(() => {
    return blob && URL.createObjectURL(blob)
  }, [blob])

  return (
    <div>
      {blobUrl ? (
        <video autoPlay muted src={blobUrl} loop />
      ) : (
        <VideoPlayer stream={stream} />
      )}
      <span>{timerString}</span>
      <button disabled={isRecording} onClick={startRecording}>
        Gravar
      </button>
      <button onClick={stopRecording} disabled={!isRecording}>
        Parar
      </button>
    </div>
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

export default VistoriaRecorder
