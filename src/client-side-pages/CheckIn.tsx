import type { FC } from 'react'
import React, { useEffect } from 'react'
import type { RouteComponentProps } from '@reach/router'
import { styled } from 'linaria/react'

import LicensePlateInput from '../components/LicensePlateInput'
import Header from '../components/Header'

const CheckInPage: FC<RouteComponentProps> = () => {
  return (
    <>
      <Header>
        <h1>Nova Entrada</h1>
      </Header>
      <Wrapper>
        <LicensePlateInput onValidPlate={(plate) => console.log(plate)} />
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export default CheckInPage
