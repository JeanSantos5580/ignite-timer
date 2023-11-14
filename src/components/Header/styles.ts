import styled from 'styled-components'

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`

const HeaderButtons = styled.nav`
  display: flex;
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
    color: ${(props) => props.theme['gray-100']};

    &:focus {
      color: ${(props) => props.theme['green-500']};
    }

    &:hover {
      border-bottom: 3px solid ${(props) => props.theme['green-500']};
    }
  }
`

export { HeaderContainer, HeaderButtons }
