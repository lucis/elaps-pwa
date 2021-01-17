import React, { useRef, useEffect } from 'react'
import type { FC } from 'react'
import { styled } from 'linaria/react'

type Props = {
  isRecording: boolean
  stream: MediaStream
  blobUrl: string
}

const RecorderPlayer: FC<Props> = ({ isRecording, stream, blobUrl }) => {
  return (
    <Wrapper>
      <>
        {blobUrl ? (
          <ResponsiveVideo autoPlay muted src={blobUrl} loop />
        ) : (
          <StreamVideoPlayer stream={stream} />
        )}
      </>
    </Wrapper>
  )
}

const StreamVideoPlayer: FC<{ stream: MediaStream }> = ({ stream }) => {
  const videoRef = useRef<HTMLVideoElement>()

  useEffect(() => {
    const videoObj = videoRef.current

    videoObj.srcObject = stream
  }, [stream])

  return <ResponsiveVideo autoPlay muted ref={videoRef} />
}

const Wrapper = styled.div`
  width: 70%;
  position: relative;
  padding-bottom: 120%;
  float: left;
`

const ResponsiveVideo = styled.video`
  width: 100%;
  max-height: 100%;
  position: absolute;
  left: 0;
`

export default RecorderPlayer
