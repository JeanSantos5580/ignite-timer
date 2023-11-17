import styled from 'styled-components'

export const FormContainer = styled.div`
  display: flex;
  font-weight: bold;
  gap: 0.5rem;
  font-size: 1rem;
  flex-wrap: wrap;
`

export const BaseInput = styled.input`
  padding: 0 0.125rem;
  background: transparent;
  color: ${(props) => props.theme['gray-500']};
  font-weight: bold;
  font-size: 1rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['green-500']};
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;
  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`
