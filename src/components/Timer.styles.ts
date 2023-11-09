import styled from 'styled-components'

const Box = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 15.5rem;

  header,
  article {
    display: flex;
    justify-content: center;
  }

  header {
    font-weight: bold;
    input {
      background: none;
      border-left: none;
      border-right: none;
      color: ${(props) => props.theme['gray-500']};
      font-weight: bold;
      margin: 0 8px;
    }
  }

  article {
    width: 100%;
    display: flex;
    flex-direction: column;
    div {
      margin: 3.5rem auto;
    }
    button {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      height: 4rem;
      border: none;
      border-radius: 8px;
      background: ${(props) => props.theme['green-300']};
      color: ${(props) => props.theme.white};
      font-weight: bold;
    }
  }
`
export { Box }
