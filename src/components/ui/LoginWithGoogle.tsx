import React from 'react'
import type { FC } from 'react'
import { styled } from 'linaria/react'

import GoogleIcon from './GoogleIcon'

type Props = {
  onClick: () => void
  disabled?: boolean
}

const LoginWithGoogle: FC<Props> = ({ onClick, disabled }) => {
  return (
    <Wrapper onClick={() => onClick()} disabled={disabled}>
      <FirstColumn>
        <GoogleIcon size="30" />
      </FirstColumn>
      <SecondColumn>
        <Label>Login com Google</Label>
        <Subtitle>@lucianoautopecas.com</Subtitle>
      </SecondColumn>
    </Wrapper>
  )
}

const Wrapper = styled.button`
  background: #ffffff;
  border: 1px solid #d8d8d8;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  padding: 10px 15px;
  min-width: 290px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    cursor: pointer;
    background: #efecec;
  }
`

const FirstColumn = styled.div`
  padding: 5px;
  margin-right: 10px;
`

const SecondColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const Label = styled.span`
  font-size: 18px;
  font-weight: bold;
`

const Subtitle = styled.span`
  font-size: 14px;
  font-style: italic;
  color: #353535;
`

export default LoginWithGoogle
