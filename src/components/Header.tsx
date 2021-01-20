import type { FC } from 'react'
import React from 'react'
import { styled } from 'linaria/react'

const Header: FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

const Wrapper = styled.header`
  width: 100%;
  background-color: #f4f4f4;
  height: 40px;
  display: flex;
  justify-content: center;
  padding: 10px 0 0 0;
`

export default Header
