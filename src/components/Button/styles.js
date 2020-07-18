import styled from 'styled-components'

export const Button = styled.button`
  background: none;
  color: ${props => props.theme.colors[props.color]} !important;
  border: 1px solid #fff;
  width: ${props => props.width};
  height: ${props => props.height};

  transition: 0.5s;
  border-radius: 10px;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.2);
    transition-duration: 0.3s;
  }
`
