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

const BaseButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
  border: 0;
  border-radius: 8px;
  color: ${(props) => props.theme['gray-100']};
  font-weight: bold;
  cursor: pointer;
`

const StartCountdownButton = styled(BaseButton)`
  background: ${(props) => props.theme['green-500']};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme['green-700']};
  }
`
const StopCountdownButton = styled(BaseButton)`
  background: ${(props) => props.theme['red-500']};

  &:hover {
    background: ${(props) => props.theme['red-700']};
  }
`

export { HomeContainer, StartCountdownButton, StopCountdownButton }
