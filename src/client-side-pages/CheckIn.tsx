import type { FC } from 'react'
import React, { useState, useEffect } from 'react'
import type { RouteComponentProps } from '@reach/router'
import { styled } from 'linaria/react'

import CheckInForm from '../components/CheckInForm'
import LicensePlateInput from '../components/LicensePlateInput'
import Header from '../components/Header'

const CheckInPage: FC<RouteComponentProps> = () => {
  const [validPlate, setPlate] = useState('')

  return (
    <>
      <Header>
        <h1>Nova Entrada</h1>
      </Header>
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

const Line = styled.div`
  margin: 15px 0;
  width: 90%;
  border-top: 1px solid #e1e1e1;
`

export default CheckInPage
