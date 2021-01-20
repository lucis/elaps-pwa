import type { FC } from 'react'
import React, { useEffect } from 'react'
import { navigate } from 'gatsby'
import type { RouteComponentProps } from '@reach/router'
import { styled } from 'linaria/react'

import Button from '../components/ui/Button'
import CheckIcon from '../components/Recorder/CheckIcon'

const SuccessPage: FC<RouteComponentProps> = () => {
  return (
    <Wrapper>
      <CheckIcon size="200" />
      <Message>Entrada incluída com sucesso!</Message>
      <Button
        color="blue"
        onClick={() => {
          navigate('/app/checkins')
        }}
      >
        Voltar para Início
      </Button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  padding: 60px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Message = styled.p`
  text-align: center;
  font-size: 20px;
  padding: 30px 0;
`

export default SuccessPage
