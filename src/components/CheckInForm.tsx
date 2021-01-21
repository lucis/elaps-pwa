import type { FC } from 'react'
import React, { useCallback, useState, useMemo, useEffect } from 'react'
import type { RouteComponentProps } from '@reach/router'
import { navigate } from 'gatsby'
import { styled } from 'linaria/react'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'

import { v4 as uuidv4 } from 'uuid'

import VistoriaRecorder from './Recorder'
import Button from './ui/Button'

type Props = {
  plate: string
}

const CheckInForm: FC<RouteComponentProps<Props>> = ({ plate }) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [info, setInfo] = useState('')
  const [video, setVideo] = useState<Blob | null>()
  const currentTime = useMemo(() => {
    return new Date().toLocaleString()
  }, [])

  const onSend = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      setLoading(true)
      const storage = firebase.storage()
      const storageRef = storage.ref()
      const fileName = `${uuidv4()}.mkv`
      const ref = storageRef.child(fileName)
      const snapshot = ref.put(video)

      snapshot
        .then(() => storage.ref().child(fileName).getDownloadURL())
        .then((url) => {
          setLoading(false)
          const db = firebase.firestore()

          return db
            .collection('checkins')
            .add({
              time: Date.now(),
              info: info?.length ? info : '',
              videoURL: url,
              plate,
            })
            .then(() => {
              setLoading(false)
              navigate('/app/checkins/success')
            })
        })
        .catch(() => {
          setLoading(false)
          setError(true)
        })
    },
    [info, plate, video]
  )

  return (
    <Wrapper>
      <Label>Data e Hora</Label>
      <Value>{currentTime}</Value>
      <Label>Vistoria</Label>
      <VistoriaRecorder onFinish={setVideo} />
      <Label>Outras Informações</Label>
      <Form onSubmit={onSend}>
        <Textarea
          disabled={loading}
          onChange={(e) => setInfo(e.target.value)}
          value={info}
        />
        <ButtonWrapper>
          <Button type="submit" color="blue" disabled={loading}>
            Enviar
          </Button>
        </ButtonWrapper>
      </Form>
    </Wrapper>
  )
}

const ButtonWrapper = styled.div`
  margin: 25px 0;
  display: flex;
  width: 100%;
  justify-content: center;
`

const Wrapper = styled.div`
  display: flex;
  width: 90%
  flex-direction: column;
`

const Label = styled.span`
  font-weight: bold;
  margin-top: 15px;
`

const Value = styled.span`
  font-size: 16px;
  min-width: 45px;
`

const Textarea = styled.textarea`
  height: 82px;
  background-color: #f4f4f4;
  border: 0;
  padding: 10px;
  font-size: 18px;
  margin-top: 5px;
`

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export default CheckInForm
