import { styled } from 'linaria/react'

type Props = {
  color: 'red' | 'blue'
}

const Button = styled.button<Props>`
  padding: 10px 20px;
  min-width: 100px;
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
`

export default Button
