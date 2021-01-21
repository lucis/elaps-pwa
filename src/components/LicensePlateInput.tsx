import type { FC } from 'react'
import React, { useCallback } from 'react'
import { styled } from 'linaria/react'
import { useForm } from 'react-hook-form'
import MaskedInput from 'react-input-mask'

type Props = {
  onValidPlate: (plate: string) => void
  mode?: 'search'
  disabled?: boolean
}

type Form = {
  licensePlate: string
}

const PLATE_PATTERN = /[A-Z]{3} [0-9][0-9A-Z][0-9]{2}/

const PLATE_MASK = [
  /[A-Za-z]/i,
  /[A-Za-z]/i,
  /[A-Za-z]/i,
  ' ',
  /\d/i,
  /(\d|[A-Z])/i,
  /\d/i,
  /\d/i,
]

const LicensePlateInput: FC<Props> = ({ onValidPlate, disabled, mode }) => {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = (data: Form) => onValidPlate(data.licensePlate)

  const transformUppercase = useCallback(({ nextState }) => {
    const { value: raw } = nextState

    return {
      ...nextState,
      value: raw?.toUpperCase?.() || raw,
    }
  }, [])

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        {mode !== 'search' && (
          <Label htmlFor="license-plate">Digite a placa</Label>
        )}
        <Fieldset>
          <MaskedInput
            mask={PLATE_MASK}
            alwaysShowMask
            beforeMaskedStateChange={transformUppercase}
            disabled={disabled}
          >
            <Input
              placeholder={mode === 'search' ? 'busque pela placa' : ''}
              id="license-plate"
              name="licensePlate"
              ref={register({
                required: true,
                pattern: PLATE_PATTERN,
              })}
            />
          </MaskedInput>
          <SubmitButton type="submit" disabled={disabled}>
            OK
          </SubmitButton>
        </Fieldset>
        {errors.licensePlate && <Error>Preencha a placa corretamente</Error>}
      </form>
    </Wrapper>
  )
}

const Label = styled.label`
  text-transform: uppercase;
  display: block;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
`

const Fieldset = styled.div`
  display: flex;
  margin-top: 10px;
`

const SubmitButton = styled.button`
  background-color: #ccc;
  color: #333;
  font-weight: bold;
  width: 61px;
  border: 0;
  font-size: 25px;
`

const Input = styled.input`
  font-size: 35px;
  width: 200px;
  text-align: center;
  border: 0;
  padding: 10px 5px;
  background-color: #f4f4f4;
  &:disabled {
    color: #cecece;
  }
`

const Error = styled.span`
  text-align: center;
  display: block;
  margin-top: 10px;
  color: #c72626;
`

export default LicensePlateInput
