import type { FC } from 'react'
import React from 'react'
import { styled } from 'linaria/react'

interface Props extends React.HTMLProps<HTMLButtonElement> {
  color?: 'red' | 'blue'
  icon: React.ReactNode
}

const ButtonWithIcon: FC<Props> = ({ color = 'blue', icon, children }) => {
  return (
    <Button color={color}>
      {icon}
      {children}
    </Button>
  )
}

const Button = styled.button<{ color: string }>`
  padding: 10px 15px;
  font-size: 18px;
  background: ${(props) =>
    props.disabled
      ? '#BFBFBF'
      : props.color === 'blue'
      ? '#cfeeff'
      : '#FFE8E8'};
  border-radius: 8px;
  border: 0;
  margin: 0;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  color: #00417e;
`

export default ButtonWithIcon
