import type { FC } from 'react'
import React from 'react'
import { navigate } from 'gatsby'
import type { RouteComponentProps } from '@reach/router'
import { styled } from 'linaria/react'

import ButtonWithIcon from '../components/ui/ButtonWithIcon'
import Plus from '../components/ui/PlusIcon'
import Logo from '../components/ui/Logo'
import CheckinsSearch from '../components/CheckinsSearch'

const AllCheckinsPage: FC<RouteComponentProps> = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <Title>Entradas de Veículos</Title>
      <CheckinsSearch />
      <Pad />
      <ButtonWithIcon
        onClick={() => {
          navigate('/app/checkins/add')
        }}
        icon={<Plus size="14" />}
      >
        Adicionar
      </ButtonWithIcon>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

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

export default AllCheckinsPage
