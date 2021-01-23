import type { FC } from 'react'
import React, { useState } from 'react'
import { navigate } from 'gatsby'
import type { RouteComponentProps } from '@reach/router'
import { styled } from 'linaria/react'

import CheckInForm from '../components/CheckInForm'
import LicensePlateInput from '../components/LicensePlateInput'
import Header from '../components/Header'
import Button from '../components/ui/Button'

const CheckInPage: FC<RouteComponentProps> = () => {
  const [validPlate, setPlate] = useState('')

  return (
    <>
      <Header>
        <h2>Nova Entrada</h2>
      </Header>
      <Centered>
        <Button
          color="blue"
          onClick={() => {
            navigate('/app/checkins')
          }}
        >
          Voltar
        </Button>
      </Centered>
      <Wrapper>
        <LicensePlateInput disabled={!!validPlate} onValidPlate={setPlate} />
        {!!validPlate && (
          <>
            <Line />
            <CheckInForm plate={validPlate} />
          </>
        )}
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Centered = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
`

const Line = styled.div`
  margin: 15px 0;
  width: 90%;
  border-top: 1px solid #e1e1e1;
`

export default CheckInPage
