import type { FC } from 'react'
import React from 'react'
import { navigate } from 'gatsby'
import type { RouteComponentProps } from '@reach/router'
import { styled } from 'linaria/react'

const HomePage: FC<RouteComponentProps> = () => {
  return (
    <Wrapper>
      <Menu>
        <LinkButton
          onClick={() => {
            navigate('/app/history')
          }}
        >
          Histórico de Veículos
        </LinkButton>
        <LinkButton
          onClick={() => {
            navigate('/app/checkins')
          }}
        >
          Entradas
        </LinkButton>
      </Menu>
    </Wrapper>
  )
}

const LinkButton = styled.button`
  width: 250px;
  font-size: 22px;
  background-color: #00417e;
  color: #fff;
  padding: 20px;
  margin-bottom: 25px;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`

const Menu = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`

<<<<<<< Updated upstream
=======
const FAB = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
`

>>>>>>> Stashed changes
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 80px;
`

<<<<<<< Updated upstream
=======
const Title = styled.h2`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  padding: 10px 0;
`

const Pad = styled.div`
  padding: 8px 0;
`

const LogoWrapper = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
  padding: 30px 0 15px 0;
`

>>>>>>> Stashed changes
export default HomePage
