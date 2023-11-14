import styled from 'styled-components'

const HomeContainer = styled.main`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
  }
`
const FormContainer = styled.div`
  display: flex;
  font-weight: bold;
  gap: 0.5rem;
  font-size: 1rem;
  flex-wrap: wrap;
`

const BaseInput = styled.input`
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

const TaskInput = styled(BaseInput)`
  flex: 1;
  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`

const CountdownContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1rem;
  font-family: 'Roboto Mono', monospace;
  font-size: 8rem;
  line-height: 4rem;
  color: ${(props) => props.theme['gray-100']};

  span {
    background: ${(props) => props.theme['gray-700']};
    padding: 2.5rem 1rem;
    border-radius: 8px;
  }
`

const Separator = styled.div`
  width: 4rem;
  display: flex;
  justify-content: center;
  overflow: hidden;
  padding: 2rem 0;
  color: ${(props) => props.theme['green-500']};
`

const StartCountdownButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
  border: 0;
  border-radius: 8px;
  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme['gray-100']};
  font-weight: bold;
  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme['green-700']};
  }
`

export {
  HomeContainer,
  FormContainer,
  TaskInput,
  MinutesAmountInput,
  CountdownContainer,
  Separator,
  StartCountdownButton,
}
