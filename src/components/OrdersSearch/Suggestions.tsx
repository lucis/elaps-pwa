import { styled } from 'linaria/react'
import React from 'react'
import type { FC } from 'react'

// TODO: compute them smart
const TERMS = ['correia', 'oleo', 'filtro de combustivel', 'bomba']

type Props = { onTerm: (term: string) => void }
const Suggestions: FC<Props> = ({ onTerm }) => {
  return (
    <Line>
      {TERMS.map((term) => (
        <Item onClick={() => onTerm(term)} key={term}>
          {term}
        </Item>
      ))}
    </Line>
  )
}

const Line = styled.div`
  display: flex;
  align-items: flex-end;
`

const Item = styled.button`
  margin: 0px 10px;
  background: #cfeeff;
  border-radius: 10px;
  font-weight: bold;
  color: #00417e;
  font-size: 14px;
  padding: 5px 8px;
  border: 0;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`

export default Suggestions
