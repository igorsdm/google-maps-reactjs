import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  grid-area: map;

  h2 {
    color: ${props => props.theme.colors.eclipse};
  }
`
