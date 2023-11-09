import styled from 'styled-components'

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const HeaderButtons = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  a {
    width: 3rem;
    height: 3rem;

    display: flex;
    justify-content: center;
    align-items: center;

    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;

    border-radius: 2px;
    color: ${(props) => props.theme.white};
    line-height: 0;
    &:focus {
      color: ${(props) => props.theme['green-500']};
    }
    &:hover {
      border-bottom: 3px solid ${(props) => props.theme['green-500']};
    }
  }
`

export { HeaderContainer, HeaderButtons }
