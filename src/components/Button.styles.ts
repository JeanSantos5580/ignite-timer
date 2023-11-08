import styled from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
  variant: ButtonVariant
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 6.25rem;
  height: 2.5rem;
  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme['gray-100']};
`
