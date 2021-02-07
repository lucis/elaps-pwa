import type { FC } from 'react'
import React, { useEffect } from 'react'
import { navigate } from 'gatsby'
import { styled } from 'linaria/react'
import type { RouteComponentProps } from '@reach/router'

import { loginWithGoogle, useAuth } from '../contexts/auth/AuthContext'
import useUserSettings from '../hooks/useUserSettings'

const LoginPage: FC<RouteComponentProps> = () => {
  const { user, loading } = useAuth()
  const [config] = useUserSettings()

  useEffect(() => {
    if (loading) {
      return
    }

    if (user) {
      navigate(`/app/${config.initialPage ?? 'home'}`)
    } else {
      loginWithGoogle()
    }
  }, [user, loading, config])

  return <Wrapper>Você será redirecionado, aguarde!</Wrapper>
}

const Wrapper = styled.div`
  width: 100%;

  text-align: center;
  padding: 25px;
  font-size: 18px;
`

export default LoginPage
