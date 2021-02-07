import type { FC } from 'react'
import React, { useEffect } from 'react'
import { styled } from 'linaria/react'
import firebase from 'firebase/app'
import 'firebase/auth'
import type { RouteComponentProps } from '@reach/router'
import { navigate } from 'gatsby'

const LogoutPage: FC<RouteComponentProps> = () => {
  useEffect(() => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigate('/')
        localStorage.removeItem('token')
      })
  }, [])

  return <Wrapper>Você será desconectado do sistema!</Wrapper>
}

const Wrapper = styled.div`
  width: 100%;

  text-align: center;
  padding: 25px;
  font-size: 18px;
`

export default LogoutPage
