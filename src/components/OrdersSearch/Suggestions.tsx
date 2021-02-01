import React from 'react'
import type { FC } from 'react'

// TODO: compute them smart
const TERMS = ['correia', 'oleo', 'filtro de combustivel', 'bomba']

type Props = { onTerm: (term: string) => void }
const Suggestions: FC<Props> = ({ onTerm }) => {
  return (
    <div className="flex items-end">
      {TERMS.map((term) => (
        <button
          className="mx-2 bg-lightBlue font-bold text-primary text-sm p-2 border-0 cursor-pointer rounded-lg hover:opacity-70"
          onClick={() => onTerm(term)}
          key={term}
        >
          {term}
        </button>
      ))}
    </div>
  )
}

export default Suggestions
