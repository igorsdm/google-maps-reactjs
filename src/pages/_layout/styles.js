import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 80px calc(100vh - 80px);
  grid-template-areas:
    'header header'
    'sidenav content'
    'sidenav contet';
  background-color: ${props => props.theme.colors.eclipse};
`
