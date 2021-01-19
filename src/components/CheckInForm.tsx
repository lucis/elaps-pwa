import type { FC } from 'react'
import React, { useEffect } from 'react'
import type { RouteComponentProps } from '@reach/router'
import { styled } from 'linaria/react'

import Header from './Header'

const CheckInForm: FC<RouteComponentProps> = () => {
  return (
    <>
      <Header>
        <h1>Nova Entrada</h1>
      </Header>
      <Wrapper>digite placa</Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export default CheckInForm
