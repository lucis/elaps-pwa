import React, { useEffect } from 'react'
import type { FC } from 'react'
import { navigate } from 'gatsby'
import { styled } from 'linaria/react'

import Logo from '../components/ui/Logo'
import LoginWithGoogle from '../components/ui/LoginWithGoogle'
import { useAuth } from '../contexts/auth/AuthContext'
import useUserSettings from '../hooks/useUserSettings'

const Home: FC = () => {
  const { user, loading } = useAuth()
  const [config] = useUserSettings()

  useEffect(() => {
    if (!loading && user) {
      navigate(`/app/${config.initialPage ?? 'home'}`)
    }
  }, [user, loading, config])

  return (
    <Wrapper>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <Pad />
      <LoginWithGoogle
        onClick={() => {
          navigate('/app/login')
        }}
      />
    </Wrapper>
  )
}

const Pad = styled.div`
  padding: 30px;
`

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f4f4f4;
  height: 100vh;
`

const LogoWrapper = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
  margin-top: 120px;
  padding: 30px 0 15px 0;
`

export default Home
