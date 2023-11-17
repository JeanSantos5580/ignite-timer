import styled from 'styled-components'

export const CountdownContainer = styled.div`
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

export const Separator = styled.div`
  width: 4rem;
  display: flex;
  justify-content: center;
  overflow: hidden;
  padding: 2rem 0;
  color: ${(props) => props.theme['green-500']};
`
