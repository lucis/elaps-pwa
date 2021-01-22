import type { FC } from 'react'
import React, { useEffect } from 'react'
import { navigate } from 'gatsby'
import { styled } from 'linaria/react'
import type { RouteComponentProps } from '@reach/router'

import { loginWithGoogle, useAuth } from '../contexts/auth/AuthContext'

const LoginPage: FC<RouteComponentProps> = () => {
  const { user, loading } = useAuth()

  useEffect(() => {
    if (loading) {
      return
    }

    if (user) {
      navigate('/app/checkins')
    } else {
      loginWithGoogle()
    }
  }, [user, loading])

  return <Wrapper>Você será redirecionado, aguarde!</Wrapper>
}

const Wrapper = styled.div`
  width: 100%;

  text-align: center;
  padding: 25px;
  font-size: 18px;
`

export default LoginPage
