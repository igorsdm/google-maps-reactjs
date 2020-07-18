import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 80px calc(100% - 80px);
  grid-template-areas:
    'header'
    'content';
  background-color: ${props => props.theme.colors.eclipse};
  padding: 0 10px 10px 10px;
  height: 100vh;
`
